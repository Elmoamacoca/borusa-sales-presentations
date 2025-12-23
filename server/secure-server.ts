import express from 'express';
import { createServer } from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import rateLimit from 'express-rate-limit';
import { body, validationResult } from 'express-validator';
import crypto from 'crypto';

// Carregar variáveis de ambiente
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.set('trust proxy', 1);
const server = createServer(app);

// Configuração do Supabase (backend)
const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

// ===== MIDDLEWARE DE SEGURANÇA =====

// Helmet com CSP habilitado
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'", process.env.VITE_SUPABASE_URL || ""],
    },
  },
}));

// CORS configurado corretamente - permitir todas as origens para demo
app.use(cors({
  origin: true,
  credentials: true
}));

// Limite de tamanho do payload (proteção contra DoS)
app.use(express.json({ limit: '10kb' }));
app.use(cookieParser());

// Rate Limiting - Proteção contra brute force
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 5, // 5 tentativas por IP
  message: { error: 'Muitas tentativas de login. Tente novamente em 15 minutos.' },
  standardHeaders: true,
  legacyHeaders: false,
});

const apiLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minuto
  max: 100, // 100 requisições por minuto
  message: { error: 'Muitas requisições. Tente novamente em breve.' },
});

// Aplicar rate limiting
app.use('/api/auth', loginLimiter);
app.use('/api', apiLimiter);

// ===== DADOS DAS APRESENTAÇÕES =====

const presentations = [
  {
    id: 'rp-celula-terminus-001',
    slug: 'a7k9m2',
    password: process.env.PRESENTATION_a7k9m2_PASSWORD!,
    name: 'Apresentação Célula Terminus',
    product: 'Célula Terminus - NEST',
    anchorTicket: '30.000,00',
    liveTicket: '18.000,00',
    downsellProducts: [
      { name: 'Célula Terminus - ECHO - R$ 7.000,00', status: 'unavailable' },
      { name: 'Célula Terminus - VEIL - R$ 11.000,00', status: 'active' }
    ],
    status: 'available',
    category: 'role-play',
    slidesConfigId: 'role-play-celula-terminus',
    createdAt: '2025-01-19',
  },
  {
    id: 'ct-premium',
    name: 'Apresentação Célula Terminus',
    slug: 'x3p8w1',
    password: process.env.PRESENTATION_x3p8w1_PASSWORD!,
    product: 'Célula Terminus - NEST',
    anchorTicket: '30.000,00',
    liveTicket: '18.000,00',
    downsellProducts: [
      { name: 'Célula Terminus - ECHO - R$ 7.000,00', status: 'unavailable' },
      { name: 'Célula Terminus - VEIL - R$ 11.000,00', status: 'active' }
    ],
    status: 'available',
    category: 'celula-terminus',
    slidesConfigId: 'celula-terminus',
    createdAt: '2025-01-19',
  },
  {
    id: 'ak-produto-001',
    slug: 'q5n2r8',
    password: process.env.PRESENTATION_q5n2r8_PASSWORD!,
    name: 'Apresentação Conexão Estratégica',
    product: 'Plano Kesher',
    anchorTicket: '18.000,00',
    liveTicket: '15.000,00',
    downsellProducts: [
      { name: 'Plano Lite - R$ 9.000', status: 'unavailable' },
      { name: 'Plano Starter - R$ 6.000', status: 'unavailable' }
    ],
    status: 'unavailable',
    category: 'agente-kesher',
    slidesConfigId: 'default',
    createdAt: '2025-01-19',
  },
  {
    id: 'oh-produto-001',
    slug: 'b8m4n6',
    password: process.env.PRESENTATION_b8m4n6_PASSWORD!,
    name: 'Apresentação Operação Havaya',
    product: 'Sistema Havaya',
    anchorTicket: '22.000,00',
    liveTicket: '18.000,00',
    downsellProducts: [
      { name: 'Plano Medium - R$ 12.000', status: 'unavailable' },
      { name: 'Plano Basic - R$ 7.000', status: 'unavailable' }
    ],
    status: 'unavailable',
    category: 'operador-havaya',
    slidesConfigId: 'default',
    createdAt: '2025-01-19',
  },
];

// ===== FUNÇÕES DE SEGURANÇA =====

// Comparação de senha constant-time (proteção contra timing attack)
function timingSafeCompare(a: string, b: string): boolean {
  if (a.length !== b.length) {
    // Fazer uma comparação fake para manter tempo constante
    crypto.timingSafeEqual(Buffer.from(a), Buffer.from(a));
    return false;
  }
  
  const bufferA = Buffer.from(a);
  const bufferB = Buffer.from(b);
  
  return crypto.timingSafeEqual(bufferA, bufferB);
}

// Middleware de autenticação
const authenticateToken = (req: any, res: any, next: any) => {
  const token = req.cookies.auth_token || req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Token inválido' });
  }
};

// Validadores de input
const loginValidators = [
  body('username')
    .isString()
    .withMessage('Usuário deve ser string')
    .isLength({ min: 1, max: 100 })
    .withMessage('Usuário deve ter entre 1 e 100 caracteres')
    .trim()
    .escape(),
  body('password')
    .isString()
    .withMessage('Senha deve ser string')
    .isLength({ min: 1, max: 100 })
    .withMessage('Senha deve ter entre 1 e 100 caracteres')
];

const presentationLoginValidators = [
  body('slug')
    .isString()
    .isLength({ min: 6, max: 6 })
    .matches(/^[a-z0-9]+$/)
    .withMessage('Slug inválido'),
  body('password')
    .isString()
    .isLength({ min: 1, max: 100 })
    .withMessage('Senha inválida')
];

// ===== ROTAS DE API =====

// Login do Dashboard
app.post('/api/auth/dashboard/login', loginValidators, async (req, res) => {
  // Validar input
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: 'Dados inválidos' });
  }

  const { username, password } = req.body;

  // Usar comparação constant-time
  const usernameMatch = timingSafeCompare(username, process.env.DASHBOARD_USERNAME || '');
  const passwordMatch = timingSafeCompare(password, process.env.DASHBOARD_PASSWORD || '');

  if (usernameMatch && passwordMatch) {
    const token = jwt.sign(
      { username, type: 'dashboard' },
      process.env.JWT_SECRET!,
      { expiresIn: process.env.SESSION_DURATION || '24h' }
    );

    res.cookie('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 * 1000 // 24 horas
    });

    return res.json({ success: true, token });
  }

  return res.status(401).json({ error: 'Credenciais inválidas' });
});

// Login de Apresentação
app.post('/api/auth/presentation/login', presentationLoginValidators, async (req, res) => {
  // Validar input
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: 'Dados inválidos' });
  }

  const { slug, password } = req.body;

  const presentation = presentations.find(p => p.slug === slug);
  
  if (!presentation) {
    return res.status(404).json({ error: 'Apresentação não encontrada' });
  }

  // Usar comparação constant-time
  if (timingSafeCompare(password, presentation.password)) {
    const token = jwt.sign(
      { slug, type: 'presentation' },
      process.env.JWT_SECRET!,
      { expiresIn: '8h' }
    );

    res.cookie(`presentation_${slug}`, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 8 * 60 * 60 * 1000 // 8 horas
    });

    return res.json({ success: true, token });
  }

  return res.status(401).json({ error: 'Senha incorreta' });
});

// Verificar autenticação do Dashboard
app.get('/api/auth/dashboard/verify', authenticateToken, (req: any, res) => {
  if (req.user.type === 'dashboard') {
    return res.json({ authenticated: true, user: req.user });
  }
  return res.status(403).json({ authenticated: false });
});

// Verificar autenticação de Apresentação
app.get('/api/auth/presentation/:slug/verify', (req, res) => {
  const { slug } = req.params;
  
  // Validar slug
  if (!/^[a-z0-9]{6}$/.test(slug)) {
    return res.status(400).json({ error: 'Slug inválido' });
  }
  
  const token = req.cookies[`presentation_${slug}`];

  if (!token) {
    return res.json({ authenticated: false });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
    if (decoded.slug === slug && decoded.type === 'presentation') {
      return res.json({ authenticated: true });
    }
  } catch (error) {
    return res.json({ authenticated: false });
  }

  return res.json({ authenticated: false });
});

// Logout
app.post('/api/auth/logout', (req, res) => {
  res.clearCookie('auth_token');
  // Limpar todos os cookies de apresentação
  presentations.forEach(p => {
    res.clearCookie(`presentation_${p.slug}`);
  });
  return res.json({ success: true });
});

// Obter lista de apresentações (protegido - apenas dashboard autenticado)
app.get('/api/presentations', authenticateToken, (req: any, res) => {
  if (req.user.type !== 'dashboard') {
    return res.status(403).json({ error: 'Acesso negado' });
  }

  // Retornar apresentações SEM as senhas
  const safePresentations = presentations.map(({ password, ...rest }) => rest);
  return res.json(safePresentations);
});

// Obter dados de uma apresentação específica (protegido)
app.get('/api/presentation/:slug', (req, res) => {
  const { slug } = req.params;
  
  // Validar slug
  if (!/^[a-z0-9]{6}$/.test(slug)) {
    return res.status(400).json({ error: 'Slug inválido' });
  }
  
  const token = req.cookies[`presentation_${slug}`];

  if (!token) {
    return res.status(401).json({ error: 'Não autenticado' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
    if (decoded.slug === slug) {
      const presentation = presentations.find(p => p.slug === slug);
      if (presentation) {
        const { password, ...safePresentation } = presentation;
        return res.json(safePresentation);
      }
    }
  } catch (error) {
    return res.status(403).json({ error: 'Token inválido' });
  }

  return res.status(404).json({ error: 'Apresentação não encontrada' });
});

// ===== SERVIR ARQUIVOS ESTÁTICOS =====
const staticPath = process.env.NODE_ENV === 'production'
  ? path.resolve(__dirname, '..', 'dist', 'public')
  : path.resolve(__dirname, '..', 'dist', 'public');

app.use(express.static(staticPath));

// Handle client-side routing
app.get('*', (_req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});

// ===== INICIAR SERVIDOR =====
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`✅ Servidor seguro rodando em http://localhost:${port}/`);
  console.log(`🔒 Autenticação habilitada com JWT`);
  console.log(`🛡️  Headers de segurança configurados`);
  console.log(`🚦 Rate limiting ativo`);
  console.log(`⏱️  Proteção contra timing attacks`);
  console.log(`✔️  Validação de input habilitada`);
});

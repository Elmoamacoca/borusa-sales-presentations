// Script de teste do sistema de login
const fs = require('fs');
const path = require('path');

console.log('🔍 ANÁLISE DO SISTEMA DE LOGIN - BORUSA SALES PRESENTATIONS\n');
console.log('═'.repeat(70));

// 1. Verificar arquivos de autenticação
console.log('\n📁 ARQUIVOS DE AUTENTICAÇÃO ENCONTRADOS:\n');

const authFiles = [
  'client/src/hooks/useDashboardAuth.ts',
  'client/src/hooks/useSecureDashboardAuth.ts',
  'client/src/hooks/usePresentationAuth.ts',
  'client/src/hooks/useSecurePresentationAuth.ts',
  'client/src/pages/DashboardLogin.tsx',
  'client/src/pages/PresentationLogin.tsx',
  'server/secure-server.ts',
  'client/src/config/presentations.config.ts'
];

authFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    console.log(`✅ ${file} (${stats.size} bytes)`);
  } else {
    console.log(`❌ ${file} - NÃO ENCONTRADO`);
  }
});

// 2. Verificar configuração do .env
console.log('\n\n🔐 CONFIGURAÇÃO DE CREDENCIAIS (.env):\n');

const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  const lines = envContent.split('\n').filter(l => l.trim() && !l.startsWith('#'));
  
  lines.forEach(line => {
    const [key, value] = line.split('=');
    if (key && value) {
      if (key.includes('PASSWORD') || key.includes('SECRET')) {
        console.log(`✅ ${key} = ${'*'.repeat(value.length)} (configurado)`);
      } else {
        console.log(`✅ ${key} = ${value}`);
      }
    }
  });
} else {
  console.log('❌ Arquivo .env NÃO ENCONTRADO');
}

// 3. Analisar DashboardLogin.tsx
console.log('\n\n📄 ANÁLISE DO DASHBOARDLOGIN.TSX:\n');

const dashboardLoginPath = path.join(__dirname, 'client/src/pages/DashboardLogin.tsx');
if (fs.existsSync(dashboardLoginPath)) {
  const content = fs.readFileSync(dashboardLoginPath, 'utf-8');
  
  // Verificar qual hook está sendo usado
  if (content.includes('useSecureDashboardAuth')) {
    console.log('✅ Usando: useSecureDashboardAuth (autenticação via API)');
  } else if (content.includes('useDashboardAuth')) {
    console.log('⚠️  Usando: useDashboardAuth (autenticação local - menos segura)');
  }
  
  // Verificar se há problema na linha 22
  const lines = content.split('\n');
  const line22 = lines[21]; // índice 21 = linha 22
  
  console.log('\n🔍 Linha 22 do DashboardLogin.tsx:');
  console.log(`   ${line22}`);
  
  if (line22.includes('const success = await login(username, password); if (success)')) {
    console.log('\n❌ PROBLEMA ENCONTRADO!');
    console.log('   A linha 22 tem um problema de formatação:');
    console.log('   "const success = await login(username, password); if (success)"');
    console.log('   Deveria ser em linhas separadas.');
  } else {
    console.log('\n✅ Linha 22 está correta');
  }
} else {
  console.log('❌ DashboardLogin.tsx não encontrado');
}

// 4. Verificar presentations.config.ts
console.log('\n\n⚙️  CONFIGURAÇÃO DE CREDENCIAIS (presentations.config.ts):\n');

const configPath = path.join(__dirname, 'client/src/config/presentations.config.ts');
if (fs.existsSync(configPath)) {
  const content = fs.readFileSync(configPath, 'utf-8');
  
  // Extrair credenciais do dashboard
  const dashboardCredsMatch = content.match(/DASHBOARD_CREDENTIALS\s*=\s*{([^}]+)}/s);
  if (dashboardCredsMatch) {
    console.log('✅ DASHBOARD_CREDENTIALS encontrado:');
    const creds = dashboardCredsMatch[1];
    
    const usernameMatch = creds.match(/username:\s*import\.meta\.env\.VITE_DASHBOARD_USERNAME\s*\|\|\s*'([^']+)'/);
    const passwordMatch = creds.match(/password:\s*import\.meta\.env\.VITE_DASHBOARD_PASSWORD\s*\|\|\s*'([^']+)'/);
    
    if (usernameMatch) {
      console.log(`   Username padrão: ${usernameMatch[1]}`);
    }
    if (passwordMatch) {
      console.log(`   Password padrão: ${'*'.repeat(passwordMatch[1].length)}`);
    }
  }
}

// 5. Verificar servidor seguro
console.log('\n\n🖥️  SERVIDOR SEGURO (secure-server.ts):\n');

const serverPath = path.join(__dirname, 'server/secure-server.ts');
if (fs.existsSync(serverPath)) {
  const content = fs.readFileSync(serverPath, 'utf-8');
  
  const features = [
    { name: 'Rate Limiting', check: 'rateLimit' },
    { name: 'JWT Authentication', check: 'jsonwebtoken' },
    { name: 'Helmet Security', check: 'helmet' },
    { name: 'CORS Configuration', check: 'cors' },
    { name: 'Cookie Parser', check: 'cookie-parser' },
    { name: 'Timing Safe Compare', check: 'timingSafeCompare' },
    { name: 'Input Validation', check: 'express-validator' }
  ];
  
  features.forEach(feature => {
    if (content.includes(feature.check)) {
      console.log(`✅ ${feature.name}`);
    } else {
      console.log(`❌ ${feature.name} - não encontrado`);
    }
  });
  
  // Verificar rotas de API
  console.log('\n📡 Rotas de API encontradas:');
  const routes = [
    '/api/auth/dashboard/login',
    '/api/auth/presentation/login',
    '/api/auth/dashboard/verify',
    '/api/auth/presentation/:slug/verify',
    '/api/auth/logout'
  ];
  
  routes.forEach(route => {
    if (content.includes(route)) {
      console.log(`   ✅ ${route}`);
    } else {
      console.log(`   ❌ ${route} - não encontrado`);
    }
  });
}

console.log('\n' + '═'.repeat(70));
console.log('\n✅ ANÁLISE CONCLUÍDA\n');

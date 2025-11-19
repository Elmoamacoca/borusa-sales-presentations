# Borusa Sales Presentations

Sistema de apresentações de vendas interativas com lógica condicional para downsells personalizados.

## 🎯 Funcionalidades

- **Dashboard administrativo** para gerenciar múltiplas apresentações
- **Autenticação em duas camadas** (dashboard + apresentação individual)
- **Laser pointer** para destacar pontos durante apresentação
- **Lógica condicional** para downsells (teclas 1, 2, 3)
- **Navegação por teclado** simplificada
- **Identidade visual Borusa** (tema dark, fontes Playfair Display e Sora)
- **Background animado** com mesh gradient

## ⌨️ Atalhos de Teclado

- **D** → Avançar slide
- **A** → Voltar slide
- **R** → Ativar/desativar laser pointer
- **F** → Modo tela cheia
- **1, 2, 3** → Downsells condicionais (no slide de oferta)

## 🔐 Credenciais Padrão

**Dashboard:**
- Usuário: `closer`
- Senha: `borusa2025`

**Apresentações (exemplos):**
- Startup MVP → `/p/a7k9m2` → Senha: `mvp2025`
- Empresa Médio Porte → `/p/x3p8w1` → Senha: `emp2025`
- Pequeno Negócio → `/p/q5n2r8` → Senha: `pn2025`

## 📁 Estrutura do Projeto

```
client/
  src/
    pages/
      Dashboard.tsx          # Dashboard de apresentações
      DashboardLogin.tsx     # Login do dashboard
      Presentation.tsx       # Página da apresentação
      PresentationLogin.tsx  # Login por apresentação
      PresentationWrapper.tsx # Wrapper com autenticação
    slides/
      WelcomeSlide.tsx      # Slides individuais
      OfferMainSlide.tsx    # Slide com lógica condicional
      ...
    config/
      presentations.config.ts # Configuração de apresentações
      slides.config.ts        # Configuração de slides
    components/
      presentation/
        LaserPointer.tsx    # Componente do laser
        FullscreenButton.tsx
        ProgressIndicator.tsx
```

## 🚀 Como Usar

### 1. Instalar Dependências

```bash
pnpm install
```

### 2. Rodar Localmente

```bash
pnpm dev
```

Acesse: `http://localhost:3000`

### 3. Adicionar Nova Apresentação

Edite `client/src/config/presentations.config.ts`:

```typescript
{
  id: 'nova-apresentacao',
  slug: 'xyz123', // Slug aleatória
  password: 'senha123',
  title: 'Título da Apresentação',
  product: 'Nome do Produto',
}
```

### 4. Criar Novos Slides

1. Crie arquivo em `client/src/slides/MeuSlide.tsx`
2. Registre em `client/src/config/slides.config.ts`

## 🌐 Deploy

### Subdomínio Sugerido

`sp.borusa.com.br` (Sales Presentations)

### Opções de Deploy

- **Vercel** (recomendado para frontend)
- **Netlify**
- **VPS própria** (com Nginx/Apache)

### Variáveis de Ambiente

Crie arquivo `.env`:

```
VITE_APP_TITLE=Borusa Sales Presentations
```

## 📝 Personalização

### Mudar Credenciais do Dashboard

Edite `client/src/hooks/useDashboardAuth.ts`:

```typescript
const DASHBOARD_USERNAME = 'seu-usuario';
const DASHBOARD_PASSWORD = 'sua-senha';
```

### Mudar Cores/Fontes

Edite `client/src/index.css` (variáveis CSS no `:root`)

### Adicionar Mais Slides

Atualmente tem 11 slides. Para expandir para 40:

1. Duplique arquivos em `client/src/slides/`
2. Renomeie e edite conteúdo
3. Registre em `slides.config.ts`

## 🔧 Tecnologias

- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Zustand
- Wouter (routing)
- shadcn/ui

## 📄 Licença

Propriedade de Borusa.

---

**Desenvolvido para apresentações de vendas de alto impacto** 🚀

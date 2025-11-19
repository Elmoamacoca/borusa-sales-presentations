# TODO - BORUSA Sales Presentation

## Fase 1: Configurar identidade visual BORUSA e estrutura base
- [x] Copiar index.css com paleta de cores BORUSA (azul escuro)
- [x] Adicionar fontes Playfair Display e Sora via Google Fonts
- [x] Configurar tema dark como padrão
- [x] Adicionar dependências: framer-motion, zustand
- [ ] Criar estrutura de diretórios (slides/, hooks/, store/, config/)

## Fase 2: Sistema de navegação de slides
- [x] Criar store Zustand para estado global
- [x] Criar arquivo de configuração slides.config.ts
- [x] Implementar componente Slide.tsx
- [x] Implementar lógica condicional (teclas 1, 2, 3 para downsells)
- [x] Adicionar histórico de navegação (voltar)
- [x] Criar componente ProgressIndicator.tsx
- [x] Criar página Presentation.tsx

## Fase 3: Modo tela cheia e atalhos
- [x] Criar componente FullscreenButton.tsx
- [x] Implementar hook useKeyboardShortcuts.ts
- [x] Configurar atalhos: setas, Enter, teclas 1-2-3, F para fullscreen
- [x] Adicionar feedback visual para atalhos

## Fase 4: Migrar componentes visuais
- [x] Copiar BackgroundShader.tsx
- [x] Integrar BackgroundShader na apresentação

## Fase 5: Criar slides de exemplo
- [x] Criar WelcomeSlide.tsx (slide 1)
- [x] Criar IntroSlide.tsx (slide 2)
- [x] Criar ProblemSlide.tsx (slide 3)
- [x] Criar SolutionSlide.tsx (slide 4)
- [x] Criar BenefitsSlide.tsx (slide 5)
- [x] Criar OfferMainSlide.tsx (slide 6) com lógica condicional
- [x] Criar DownsellXSlide.tsx (slide 7)
- [x] Criar DownsellYSlide.tsx (slide 8)
- [x] Criar DownsellZSlide.tsx (slide 9)
- [x] Criar NextStepsSlide.tsx (slide 10)
- [x] Criar ClosingSlide.tsx (slide 11)
- [ ] Adicionar conteúdo real aos slides (placeholders criados)

## Fase 7: Testes e documentação
- [ ] Testar fluxo de login
- [ ] Testar navegação linear
- [ ] Testar lógica condicional (downsells)
- [ ] Testar modo tela cheia
- [ ] Testar atalhos de teclado
- [ ] Criar USAGE.md com instruções para o closer
- [ ] Criar .env.example
- [ ] Atualizar README.md

## Fase 8: Entrega
- [ ] Criar checkpoint final
- [ ] Preparar documentação de entrega
- [ ] Fornecer instruções de deploy


## Fase 6: Dashboard Administrativo para Closers
- [ ] Criar arquivo de configuração presentations.config.ts
- [ ] Criar página de login do dashboard (DashboardLogin.tsx)
- [ ] Criar página do dashboard (Dashboard.tsx)
- [ ] Implementar listagem de apresentações
- [ ] Adicionar metadados (para quem, quando usar, produto)
- [ ] Criar sistema de autenticação do dashboard

## Fase 7: Sistema de rotas dinâmicas
- [ ] Implementar rota dinâmica /p/:slug
- [ ] Criar página de login por apresentação (PresentationLogin.tsx)
- [ ] Integrar proteção por senha individual
- [ ] Conectar slug com apresentação correta

## Fase 8: Preparar para deploy
- [ ] Criar .env.example com todas as variáveis
- [ ] Documentar processo de deploy
- [ ] Testar fluxo completo (login dashboard → acessar apresentação → login apresentação → navegar)
- [ ] Criar checkpoint final

## Ajustes Dashboard
- [x] Trocar fonte do título "Dashboard BORUSA" para sans-serif
- [x] Trocar "BORUSA" por "Borusa" em todo o projeto
- [x] Remover campos "Para quem" e "Quando usar" dos cards
- [x] Manter apenas "Produto", "Senha" e "URL"
- [x] Trocar slugs para códigos aleatórios (a7k9m2, x3p8w1, q5n2r8)
- [x] Melhorar responsividade (ultra-wide, desktop, tablet, mobile)

## Ferramentas de Apresentação
- [x] Ajustar responsividade ultra-wide do dashboard
- [x] Criar sistema de desenho (caneta/lápis)
- [x] Adicionar seletor de cores para desenho (6 cores)
- [x] Criar sistema de laser pointer (rastro temporário com fade)
- [x] Implementar atalhos de teclado (D, L, C, E)
- [x] Adicionar toolbar flutuante com ferramentas


## Bugs
- [x] Sistema de laser e desenho não está funcionando - corrigido (conflito de atalhos + z-index)


## Ajustes de UX
- [x] Ajustar laser: rastro mais fino (3px) e duração mais curta (0.8s) com fade suave
- [x] Mover botão fullscreen para lado esquerdo
- [x] Remover caixa de atalhos sempre visível
- [x] Criar painel de atalhos que abre/fecha com tecla P
- [x] Painel mostra todos os atalhos disponíveis com ícones

## Novos Ajustes
- [x] Mover painel de atalhos para lado direito (sidebar 320px)
- [x] Reduzir tamanho do painel para não ocupar apresentação
- [x] Adicionar Ctrl+Z para desfazer desenhos (undo)
- [ ] Verificar se desenho e laser estão funcionando após restart

## Bugs Críticos
- [ ] Painel de atalhos com scroll bugado
- [ ] Desenho e laser pararam de funcionar (5ª vez) - criar solução definitiva

## Simplificação Total
- [x] Remover sistema de desenho (caneta)
- [x] Remover painel de atalhos (tecla P)
- [x] Remover toolbar de ferramentas
- [x] Manter apenas laser (tecla R)
- [x] Mudar navegação: D (avançar), A (voltar)
- [x] Manter tela cheia: F + botão
- [x] Manter downsells: 1, 2, 3

- [ ] Laser não está funcionando após simplificação - debugar

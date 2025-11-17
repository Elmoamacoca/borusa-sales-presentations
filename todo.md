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

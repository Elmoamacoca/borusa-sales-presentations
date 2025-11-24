# 🎨 Design System - Borusa Sales Presentations

> Documentação completa de padrões visuais, tipografia, cores e componentes da apresentação de vendas.

---

## 📐 Resolução Alvo

**Otimizado para**: 1366x768 (notebooks padrão)

---

## 🔤 Tipografia

### **Fonte Principal**
- **Nome**: Sora
- **Tipo**: Sans-serif
- **Importação**: Google Fonts
- **Pesos disponíveis**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold)

### **Hierarquia Tipográfica**

#### **Títulos Principais (h1, h2)**
```css
font-family: Sora (font-sans)
font-weight: 600 (font-semibold)
color: #FFFFFF (text-white)
```

**Tamanhos responsivos**:
- Mobile: `text-2xl` a `text-4xl` (24px - 36px)
- Tablet: `text-3xl` a `text-4xl` (30px - 36px)  
- Desktop: `text-4xl` a `text-5xl` (36px - 48px)

#### **Textos Descritivos / Corpo**
```css
font-family: Sora (herdada)
font-weight: 300 (font-light)
color: #D1D5DB (text-gray-300) ou #FFFFFF (text-white)
```

**Tamanhos responsivos**:
- Mobile: `text-sm` a `text-base` (14px - 16px)
- Tablet+: `text-base` a `text-lg` (16px - 18px)

#### **Textos Secundários / Subtextos**
```css
font-family: Sora
font-weight: 400 (normal)
color: #9CA3AF (text-gray-400)
font-size: text-sm (14px)
```

---

## 🎨 Paleta de Cores

### **Cores Principais**

| Uso | Cor | Hex | Tailwind |
|-----|-----|-----|----------|
| **Títulos** | Branco | #FFFFFF | `text-white` |
| **Texto principal** | Branco | #FFFFFF | `text-white` |
| **Texto descritivo** | Cinza claro | #D1D5DB | `text-gray-300` |
| **Texto secundário** | Cinza médio | #9CA3AF | `text-gray-400` |
| **Destaque/Accent** | Amarelo | #EAB308 | `yellow-500` |
| **Ícones destaque** | Vermelho | #EF4444 | `red-500` |

### **Aplicações de Cores**

- **Sublinhados decorativos**: `decoration-yellow-500`
- **Fundos de ícones**: `bg-yellow-500`
- **Bordas de ícones**: `border-yellow-500` ou `border-white`
- **Linhas decorativas**: `bg-yellow-500/50` (50% opacidade)

---

## ✨ Efeitos Visuais

### **Sublinhados**
```css
Estilo: underline
Espessura: decoration-1 (1px)
Cor: decoration-yellow-500 (#EAB308)
Offset: underline-offset-4 (4px)
```

**Aplicação**: Palavras-chave em títulos (IA comercial, resultados, multiplica, inteligência)

---

## 🎯 Ícones

### **Ícones Animados (Lordicon)**

**Biblioteca**: Lordicon (Lottie/JSON)  
**Estilo**: Outline (Wired)  
**CDN**: `https://cdn.lordicon.com/`

#### **Configuração Padrão**
```jsx
<LordIcon 
  src="https://cdn.lordicon.com/[ID].json"
  trigger="loop"
  size={32}
  colors="#FFFFFF"
  speed={0.5}
/>
```

**Propriedades**:
- `trigger`: `"loop"` (animação contínua)
- `size`: `32` (32px)
- `colors`: `"#FFFFFF"` (branco) ou `"#EAB308"` (amarelo)
- `speed`: `0.5` (metade da velocidade original)

#### **Container de Ícones**
```css
Tamanho: w-12 h-12 (48px × 48px)
Formato: rounded-full
Fundo: bg-yellow-500 (#EAB308)
Padding: p-2 (8px)
```

**Classes Tailwind completas**:
```html
<div class="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center p-2">
```

#### **Ícones Utilizados no Slide 1**
1. **Dollar Coin**: `qhviklyi.json` → Receita/Dados
2. **Target**: `pkmkagva.json` → Leads/Atenção  
3. **Refresh**: `egiwmiit.json` → Evolução Contínua

### **Ícones Estáticos (Lucide React)**

**Biblioteca**: Lucide React  
**Tamanho padrão**: `w-6 h-6` (24px × 24px)

#### **Container de Ícones (Slide 2)**
```css
Tamanho: w-12 h-12 (48px × 48px)
Formato: rounded-full
Borda: border-2 border-white
Fundo: bg-transparent
```

**Classes Tailwind completas**:
```html
<div class="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-transparent">
```

---

## 📏 Espaçamento

### **Padrões de Espaçamento**

#### **Entre Elementos**
- **Espaçamento pequeno**: `gap-4` ou `space-y-4` (16px)
- **Espaçamento médio**: `gap-6` ou `space-y-6` (24px)
- **Espaçamento grande**: `gap-8` ou `space-y-8` (32px)
- **Espaçamento extra**: `space-y-20` a `space-y-32` (80px - 128px)

#### **Margens e Padding**
- **Margem superior de títulos**: `mt-24` (96px)
- **Margem inferior de títulos**: `mb-12` (48px)
- **Padding de containers**: `px-8 md:px-16` (32px - 64px)
- **Padding vertical**: `py-12` (48px)

### **Line Height (Entrelinhas)**
- **Títulos**: `leading-tight` (1.25)
- **Textos descritivos**: `leading-relaxed` (1.625)
- **Textos compactos**: `leading-snug` (1.375)

---

## 🏗️ Estrutura de Slides

### **Padrão 1: Layout Vertical Centralizado (WelcomeSlide)**

```jsx
<Slide className="flex items-start justify-center pt-56">
  <div className="max-w-6xl mx-auto px-8">
    <motion.div className="space-y-20">
      <h1 className="... mt-24">Título</h1>
      <div className="... pt-8">Conteúdo</div>
    </motion.div>
  </div>
</Slide>
```

**Onde ajustar**:
- Descer título: Aumentar `mt-24` no `<h1>`
- Descer conteúdo: Aumentar `pt-8` no container
- Espaçamento geral: Ajustar `space-y-20`

### **Padrão 2: Layout Dividido (IntroSlide, ProblemSlide, etc.)**

```jsx
<Slide className="flex items-center justify-center">
  <div className="w-full h-full flex flex-col md:flex-row">
    <motion.div className="w-full md:w-1/2 ...">
      <div className="space-y-8">
        <h1>Título</h1>
        <p>Texto</p>
      </div>
    </motion.div>
    <motion.div className="w-full md:w-1/2 ...">
      Imagem/Conteúdo
    </motion.div>
  </div>
</Slide>
```

**Onde ajustar**:
- Descer título: Adicionar `mt-X` no `<h1>`
- Espaçamento: Ajustar `space-y-8`

### **Padrão 3: Centralizado Simples (BenefitsSlide, ClosingSlide)**

```jsx
<Slide className="flex items-center justify-center">
  <div className="w-full px-8 md:px-16 py-12">
    <motion.div className="text-center space-y-8">
      <h1>Título</h1>
      <div>Conteúdo</div>
    </motion.div>
  </div>
</Slide>
```

---

## 🎬 Animações

### **Framer Motion - Configuração Padrão**

#### **Fade In + Slide Up**
```jsx
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 0.2, duration: 0.6 }}
```

#### **Fade In + Slide Horizontal**
```jsx
// Da esquerda
initial={{ opacity: 0, x: -50 }}
animate={{ opacity: 1, x: 0 }}

// Da direita
initial={{ opacity: 0, x: 50 }}
animate={{ opacity: 1, x: 0 }}
```

#### **Delays Sequenciais**
- Primeiro elemento: `delay: 0.2`
- Segundo elemento: `delay: 0.4`
- Terceiro elemento: `delay: 0.6`
- Incremento: +0.1 ou +0.2 segundos

---

## 🔧 Regras de Implementação

### **✅ SEMPRE FAZER**
1. Usar `font-sans` (Sora) para títulos - **NUNCA usar `font-serif`**
2. Manter consistência tipográfica em todos os slides
3. Adicionar margem diretamente no elemento que quer mover (`mt-`, `mb-`)
4. Usar `items-center` para alinhar ícones com textos
5. Aplicar `font-light` em textos descritivos

### **❌ NUNCA FAZER**
1. Usar `font-serif` em títulos
2. Mexer no `pt-` do `<Slide>` para mover apenas o título
3. Usar `items-start` em listas com ícones (desalinha)
4. Misturar pesos de fonte sem padrão
5. Usar cores excessivas (manter minimalista)

---

## 📦 Componentes Customizados

### **LordIcon Component**

**Localização**: `/client/src/components/LordIcon.tsx`

**Props**:
```typescript
interface LordIconProps {
  src: string;           // URL do ícone Lordicon
  trigger?: 'hover' | 'loop' | 'click';
  colors?: string;       // Cor em hex (#FFFFFF ou #EAB308)
  size?: number;         // Tamanho em pixels (padrão: 96)
  className?: string;
  speed?: number;        // Velocidade (padrão: 1, recomendado: 0.5)
}
```

**Exemplo de uso**:
```jsx
import { LordIcon } from '@/components/LordIcon';

<LordIcon 
  src="https://cdn.lordicon.com/qhviklyi.json"
  trigger="loop"
  size={32}
  colors="#FFFFFF"
  speed={0.5}
/>
```

---

## 🚀 Dependências Instaladas

### **Ícones Animados**
```bash
pnpm add @lordicon/element lottie-web
```

### **Fontes**
- Sora: Importada via Google Fonts no `index.html`
- Pesos: 300, 400, 500, 600, 700

---

## 📝 Checklist de Novo Slide

Ao criar ou modificar um slide, verificar:

- [ ] Título usa `font-sans font-semibold text-white`
- [ ] Textos descritivos usam `font-light`
- [ ] Cores seguem a paleta definida (branco, cinza, amarelo)
- [ ] Ícones estão alinhados com `items-center`
- [ ] Espaçamentos seguem os padrões (múltiplos de 4px)
- [ ] Animações têm delays sequenciais
- [ ] Layout é responsivo (mobile, tablet, desktop)
- [ ] Margem superior do título está definida (`mt-X`)
- [ ] Line-height apropriado (`leading-tight`, `leading-relaxed`, `leading-snug`)

---

## 🎯 Resumo Rápido

**Título**: Sora Semi-bold (600) + Branco  
**Texto**: Sora Light (300) + Cinza claro/Branco  
**Destaque**: Amarelo #EAB308  
**Ícones**: Lordicon (animados) ou Lucide (estáticos)  
**Espaçamento**: Múltiplos de 4px (Tailwind padrão)  
**Animações**: Fade + Slide com delays sequenciais  

---

**Última atualização**: 24/11/2025  
**Resolução alvo**: 1366x768  
**Framework**: React + Tailwind CSS + Framer Motion

import { SlideConfig } from '@/store/presentationStore';
import type { ComponentType } from 'react';

// Import slides
import WelcomeSlide from '@/slides/WelcomeSlide';
import IntroSlide from '@/slides/IntroSlide';
import ProblemSlide from '@/slides/ProblemSlide';
import SolutionSlide from '@/slides/SolutionSlide';
import BenefitsSlide from '@/slides/BenefitsSlide';
import OfferMainSlide from '@/slides/OfferMainSlide';
import DownsellXSlide from '@/slides/DownsellXSlide';
import DownsellYSlide from '@/slides/DownsellYSlide';
import DownsellZSlide from '@/slides/DownsellZSlide';
import NextStepsSlide from '@/slides/NextStepsSlide';
import ClosingSlide from '@/slides/ClosingSlide';
import ObstaclesSlide from '@/slides/ObstaclesSlide';
import Slide13 from '@/slides/Slide13';
import Slide14 from '@/slides/Slide14';
import Slide15 from '@/slides/Slide15';
import Slide16 from '@/slides/Slide16';
import Slide17 from '@/slides/Slide17';
import Slide18 from '@/slides/Slide18';
import Slide19 from '@/slides/Slide19';
import Slide20 from '@/slides/Slide20';
import Slide21 from '@/slides/Slide21';
import Slide22 from '@/slides/Slide22';
import Slide23 from '@/slides/Slide23';
import Slide24 from '@/slides/Slide24';
import Slide25 from '@/slides/Slide25';
import Slide26 from '@/slides/Slide26';
import Slide27 from '@/slides/Slide27';
import Slide29 from '@/slides/Slide29';
import Slide30 from '@/slides/Slide30';
import Slide31 from '@/slides/Slide31';
import Slide32 from '@/slides/Slide32';
import Slide33 from '@/slides/Slide33';
import Slide34 from '@/slides/Slide34';
import Slide35 from '@/slides/Slide35';
import Slide36 from '@/slides/Slide36';
import Slide37 from '@/slides/Slide37';
import Slide38 from '@/slides/Slide38';
import Slide39 from '@/slides/Slide39';
import Slide40 from '@/slides/Slide40';
import Slide41 from '@/slides/Slide41';
import Slide42 from '@/slides/Slide42';
import Slide43 from '@/slides/Slide43';
import Slide44 from '@/slides/Slide44';
import Slide45 from '@/slides/Slide45';
import Slide46 from '@/slides/Slide46';
import Slide47 from '@/slides/Slide47';
import Slide48 from '@/slides/Slide48';
import Slide49 from '@/slides/Slide49';
import Slide50 from '@/slides/Slide50';
import Slide51 from '@/slides/Slide51';
import Slide52 from '@/slides/Slide52';
import Slide53 from '@/slides/Slide53';
import Slide54 from '@/slides/Slide54';
import Slide55 from '@/slides/Slide55';
import Slide56 from '@/slides/Slide56';
import Slide57 from '@/slides/Slide57';
import Slide58 from '@/slides/Slide58';

export interface SlideDefinition extends SlideConfig {
  component: ComponentType;
  title?: string;
}

export const slidesConfig: SlideDefinition[] = [
  { id: 'welcome', order: 1, component: WelcomeSlide, title: 'Bem-vindo' },
  { id: 'intro', order: 2, component: IntroSlide, title: 'Matheus Fiel' },
  { id: 'problem', order: 3, component: ProblemSlide, title: '2022' },
  { id: 'solution', order: 4, component: SolutionSlide, title: '2025' },
  { id: 'benefits', order: 5, component: BenefitsSlide, title: '6 Dígitos' },
  { id: 'offer-main', order: 6, component: OfferMainSlide, title: 'O Léo conseguiu' },
  { id: 'downsell-x', order: 7, component: DownsellXSlide, title: 'Metodologia' },
  { id: 'downsell-y', order: 8, component: DownsellYSlide, title: 'Gabriel Rucci' },
  { id: 'downsell-z', order: 9, component: DownsellZSlide, title: 'High-Sales' },
  { id: 'next-steps', order: 10, component: NextStepsSlide, title: 'Como Chegamos' },
  { id: 'closing', order: 11, component: ClosingSlide, title: 'Resultados' },
  { id: 'obstacles', order: 12, component: ObstaclesSlide, title: 'Obstáculos' },
  { id: 'slide13', order: 13, component: Slide13, title: 'Otimização de Tempo' },
  { id: 'slide14', order: 14, component: Slide14, title: 'Investimento' },
  { id: 'slide15', order: 15, component: Slide15, title: 'Cada Minuto' },
  { id: 'slide16', order: 16, component: Slide16, title: 'Estrutura' },
  { id: 'slide17', order: 17, component: Slide17, title: 'Mudança' },
  { id: 'slide18', order: 18, component: Slide18, title: 'Sujeira' },
  { id: 'slide19', order: 19, component: Slide19, title: 'Base' },
  { id: 'slide20', order: 20, component: Slide20, title: 'Momento' },
  { id: 'slide21', order: 21, component: Slide21, title: 'Cenário' },
  { id: 'slide22', order: 22, component: Slide22, title: 'Solução' },
  { id: 'slide23', order: 23, component: Slide23, title: 'MQL Bitcoin' },
  { id: 'slide24', order: 24, component: Slide24, title: 'Riscos' },
  { id: 'slide25', order: 25, component: Slide25, title: 'Benefícios' },
  { id: 'slide26', order: 26, component: Slide26, title: 'Funil Atual' },
  { id: 'slide27', order: 27, component: Slide27, title: 'Nova Estrutura' },
  { id: 'slide29', order: 29, component: Slide29, title: 'A Nova Estrutura' },
  { id: 'slide30', order: 30, component: Slide30, title: 'Engrenagens' },
  { id: 'slide31', order: 31, component: Slide31, title: 'Conteúdos HBW' },
  { id: 'slide32', order: 32, component: Slide32, title: 'Levantadas de Mão' },
  { id: 'slide33', order: 33, component: Slide33, title: 'Criativos Sem Promessa' },
  { id: 'slide34', order: 34, component: Slide34, title: 'Social Selling' },
  { id: 'slide35', order: 35, component: Slide35, title: 'Funil de Captação' },
  { id: 'slide36', order: 36, component: Slide36, title: 'Funil de Isca' },
  { id: 'slide37', order: 37, component: Slide37, title: 'MQL Bitcoin' },
  { id: 'slide38', order: 38, component: Slide38, title: 'Escalar com Lucro' },
  { id: 'slide39', order: 39, component: Slide39, title: 'Dúvidas' },
  { id: 'slide40', order: 40, component: Slide40, title: 'MQL Machine' },
  { id: 'slide41', order: 41, component: Slide41, title: 'Implementação Híbrida' },
  { id: 'slide42', order: 42, component: Slide42, title: 'Plano de Ação' },
  { id: 'slide43', order: 43, component: Slide43, title: 'Valor' },
  { id: 'slide44', order: 44, component: Slide44, title: 'Quanto Vale' },
  { id: 'slide45', order: 45, component: Slide45, title: 'Quanto Vale 2' },
  { id: 'slide46', order: 46, component: Slide46, title: 'E Quanto Vale' },
  { id: 'slide47', order: 47, component: Slide47, title: 'Preço' },
  { id: 'slide48', order: 48, component: Slide48, title: 'Quanto Paga' },
  { id: 'slide49', order: 49, component: Slide49, title: 'Valor X Preço' },
  { id: 'slide50', order: 50, component: Slide50, title: 'Valor X Preço 2' },
  { id: 'slide51', order: 51, component: Slide51, title: 'Programa Completo' },
  { id: 'slide52', order: 52, component: Slide52, title: 'O Que Está Incluso' },
  { id: 'slide53', order: 53, component: Slide53, title: 'Bônus Exclusivos' },
  { id: 'slide54', order: 54, component: Slide54, title: 'Valor Total' },
  { id: 'slide55', order: 55, component: Slide55, title: 'Programa 1x1 Valor' },
  { id: 'slide56', order: 56, component: Slide56, title: 'Quanto Vai Pagar' },
  { id: 'slide57', order: 57, component: Slide57, title: 'Investimento' },
  { id: 'slide58', order: 58, component: Slide58, title: 'Preço do Programa' },
];

export const getSlideById = (id: string): SlideDefinition | undefined => {
  return slidesConfig.find((slide) => slide.id === id);
};

export const getTotalSlides = (): number => {
  return slidesConfig.length;
};

export const getProgress = (currentSlideId: string): number => {
  const currentSlide = getSlideById(currentSlideId);
  if (!currentSlide) return 0;
  return Math.round((currentSlide.order / getTotalSlides()) * 100);
};

import { SlideConfig } from '@/store/presentationStore';
import type { ComponentType } from 'react';

// Import slides (will be created later)
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

export interface SlideDefinition extends SlideConfig {
  component: ComponentType;
  title?: string;
}

/**
 * Configuração de todos os slides da apresentação
 * 
 * LÓGICA CONDICIONAL:
 * - No slide 'offer-main' (ordem 6), as teclas 1, 2, 3 levam para downsells específicos
 * - Após apresentar um downsell, o fluxo continua normalmente
 */
export const slidesConfig: SlideDefinition[] = [
  {
    id: 'welcome',
    order: 1,
    component: WelcomeSlide,
    title: 'Bem-vindo',
  },
  {
    id: 'intro',
    order: 2,
    component: IntroSlide,
    title: 'Introdução',
  },
  {
    id: 'problem',
    order: 3,
    component: ProblemSlide,
    title: 'O Problema',
  },
  {
    id: 'solution',
    order: 4,
    component: SolutionSlide,
    title: 'A Solução',
  },
  {
    id: 'benefits',
    order: 5,
    component: BenefitsSlide,
    title: 'Benefícios',
  },
  {
    id: 'offer-main',
    order: 6,
    component: OfferMainSlide,
    title: 'Nossa Oferta',
    // LÓGICA CONDICIONAL: Teclas para downsells
    conditionalRoutes: {
      '1': 'downsell-x',
      '2': 'downsell-y',
      '3': 'downsell-z',
    },
  },
  {
    id: 'downsell-x',
    order: 7,
    component: DownsellXSlide,
    title: 'Plano Velocidade',
  },
  {
    id: 'downsell-y',
    order: 8,
    component: DownsellYSlide,
    title: 'Plano Custo-Benefício',
  },
  {
    id: 'downsell-z',
    order: 9,
    component: DownsellZSlide,
    title: 'Plano Essencial',
  },
  {
    id: 'next-steps',
    order: 10,
    component: NextStepsSlide,
    title: 'Próximos Passos',
  },
  {
    id: 'closing',
    order: 11,
    component: ClosingSlide,
    title: 'Vamos Começar',
  },
];

/**
 * Helper para obter slide por ID
 */
export const getSlideById = (id: string): SlideDefinition | undefined => {
  return slidesConfig.find((slide) => slide.id === id);
};

/**
 * Helper para obter total de slides
 */
export const getTotalSlides = (): number => {
  return slidesConfig.length;
};

/**
 * Helper para calcular progresso (0-100)
 */
export const getProgress = (currentSlideId: string): number => {
  const currentSlide = getSlideById(currentSlideId);
  if (!currentSlide) return 0;
  
  return Math.round((currentSlide.order / getTotalSlides()) * 100);
};

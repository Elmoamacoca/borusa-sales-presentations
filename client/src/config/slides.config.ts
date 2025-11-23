import { SlideConfig } from '@/store/presentationStore';
import type { ComponentType } from 'react';

// Import slides
import WelcomeSlide from '@/slides/WelcomeSlide';
import MatheusFielSlide from '@/slides/MatheusFielSlide';
import Slide2022 from '@/slides/Slide2022';
import Slide2025 from '@/slides/Slide2025';
import MissionSlide from '@/slides/MissionSlide';
import MethodologySlide from '@/slides/MethodologySlide';
import HydraNetSlide from '@/slides/HydraNetSlide';
import AdaptedLogicSlide from '@/slides/AdaptedLogicSlide';
import JourneySlide from '@/slides/JourneySlide';
import ResultsSlide from '@/slides/ResultsSlide';
import ObstaclesSlide from '@/slides/ObstaclesSlide';

export interface SlideDefinition extends SlideConfig {
  component: ComponentType;
  title?: string;
}

export const slidesConfig: SlideDefinition[] = [
  { id: 'welcome', order: 1, component: WelcomeSlide, title: 'Bem-vindo' },
  { id: 'matheus-fiel', order: 2, component: MatheusFielSlide, title: 'Gabriel Torres' },
  { id: 'slide-2022', order: 3, component: Slide2022, title: '2023' },
  { id: 'slide-2025', order: 4, component: Slide2025, title: '2025' },
  { id: 'mission', order: 5, component: MissionSlide, title: 'Nossa Missão' },
  { id: 'methodology', order: 6, component: MethodologySlide, title: 'Metodologia' },
  { id: 'hydranet', order: 7, component: HydraNetSlide, title: 'HydraNet' },
  { id: 'adapted-logic', order: 8, component: AdaptedLogicSlide, title: 'Lógica Adaptada' },
  { id: 'journey', order: 9, component: JourneySlide, title: 'Como chegamos até aqui' },
  { id: 'results', order: 10, component: ResultsSlide, title: 'Resultados?' },
  { id: 'obstacles', order: 11, component: ObstaclesSlide, title: 'Obstáculos no Caminho' },
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

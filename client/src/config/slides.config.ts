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
import OtimizacaoTempoSlide from '@/slides/OtimizacaoTempoSlide';
import InvestimentoSlide from '@/slides/InvestimentoSlide';
import Investimento2Slide from '@/slides/Investimento2Slide';
import EstruturaSlide from '@/slides/EstruturaSlide';
import PerguntaIASlide from '@/slides/PerguntaIASlide';
import Investimento3Slide from '@/slides/Investimento3Slide';
import Investimento4Slide from '@/slides/Investimento4Slide';
import OtimizacaoTempo2Slide from '@/slides/OtimizacaoTempo2Slide';
import Slide20 from '@/slides/Slide20';
import Slide21 from '@/slides/Slide21';
import Slide22 from '@/slides/Slide22';

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
  { id: 'otimizacao-tempo', order: 12, component: OtimizacaoTempoSlide, title: 'Otimização de Tempo' },
  { id: 'investimento', order: 13, component: InvestimentoSlide, title: 'Investimento' },
  { id: 'investimento-2', order: 14, component: Investimento2Slide, title: 'Investimento 2' },
  { id: 'estrutura', order: 15, component: EstruturaSlide, title: 'Estrutura' },
  { id: 'pergunta-ia', order: 16, component: PerguntaIASlide, title: 'Pergunta IA' },
  { id: 'investimento-3', order: 17, component: Investimento3Slide, title: 'Investimento 3' },
  { id: 'investimento-4', order: 18, component: Investimento4Slide, title: 'Investimento 4' },
  { id: 'otimizacao-tempo-2', order: 19, component: OtimizacaoTempo2Slide, title: 'Otimização de Tempo 2' },
  { id: 'slide-20', order: 20, component: Slide20, title: 'Cenário do Mercado Hoje' },
  { id: 'slide-21', order: 21, component: Slide21, title: 'Solução para Escala com Lucro' },
  { id: 'slide-22', order: 22, component: Slide22, title: 'MQL é o Bitcoin do Digital' },
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

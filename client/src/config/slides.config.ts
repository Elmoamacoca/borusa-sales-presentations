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
import Slide23 from '@/slides/Slide23';
import Slide24 from '@/slides/Slide24';
import Slide25 from '@/slides/Slide25';
import Slide26 from '@/slides/Slide26';
import Slide27 from '@/slides/Slide27';
import Slide28 from '@/slides/Slide28';
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
  { id: 'slide-22', order: 22, component: Slide22, title: 'IA é o novo petróleo do comercial' },
  { id: 'slide-23', order: 23, component: Slide23, title: 'Solução para Escala com Lucro' },
  { id: 'slide-24', order: 24, component: Slide24, title: 'Solução para Escala com Lucro' },
  { id: 'slide-25', order: 25, component: Slide25, title: 'Solução para Escala com Lucro' },
  { id: 'slide-26', order: 26, component: Slide26, title: 'Riscos Fazer Sozinho Sem o Conhecimento' },
  { id: 'slide-27', order: 27, component: Slide27, title: 'Benefícios da Solução IA' },
  { id: 'slide-28', order: 28, component: Slide28, title: 'Funil Comercial Atual da Maioria' },
  { id: 'slide-29', order: 29, component: Slide29, title: 'Sua Nova Estrutura' },
  { id: 'slide-30', order: 30, component: Slide30, title: 'Arquitetura do Sistema IA' },
  { id: 'slide-31', order: 31, component: Slide31, title: 'Sistema de Retroalimentação' },
  { id: 'slide-32', order: 32, component: Slide32, title: 'Slide 32' },
  { id: 'slide-33', order: 33, component: Slide33, title: 'Slide 33' },
  { id: 'slide-34', order: 34, component: Slide34, title: 'Slide 34' },
  { id: 'slide-35', order: 35, component: Slide35, title: 'Slide 35' },
  { id: 'slide-36', order: 36, component: Slide36, title: 'Slide 36' },
  { id: 'slide-37', order: 37, component: Slide37, title: 'Slide 37' },
  { id: 'slide-38', order: 38, component: Slide38, title: 'Slide 38' },
  { id: 'slide-39', order: 39, component: Slide39, title: 'A IA É O NOVO PETRÓLEO' },
  { id: 'slide-40', order: 40, component: Slide40, title: 'Escalar Inside Sales B2B' },
  { id: 'slide-41', order: 41, component: Slide41, title: 'Dúvidas?' },

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

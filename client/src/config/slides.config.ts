import { SlideConfig } from '@/store/presentationStore';
import type { ComponentType } from 'react';
import { rolePlayVeilSlidesConfig } from './slides-role-play-veil.config';
import { rolePlayEchoSlidesConfig } from './slides-role-play-echo.config';
import { ctNestSlidesConfig } from './slides-ct-nest.config';
import { ctVeilSlidesConfig } from './slides-ct-veil.config';
import { ctEchoSlidesConfig } from './slides-ct-echo.config';

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
import Slide57Recorrencia from '@/slides/Slide57Recorrencia';
import Slide58 from '@/slides/Slide58';
import Slide58Recorrencia from '@/slides/Slide58Recorrencia';
import Slide59Recorrencia from '@/slides/Slide59Recorrencia';
import Slide59 from '@/slides/Slide59';
import Slide60Recorrencia from '@/slides/Slide60Recorrencia';
import Slide60 from '@/slides/Slide60';
import Slide61Recorrencia from '@/slides/Slide61Recorrencia';
import Slide61 from '@/slides/Slide61';
import Slide62Recorrencia from '@/slides/Slide62Recorrencia';
import Slide62 from '@/slides/Slide62';
import Slide63 from '@/slides/Slide63';
import Slide64 from '@/slides/Slide64';
import Slide65 from '@/slides/Slide65';
import Slide66 from '@/slides/Slide66';
import Slide67 from '@/slides/Slide67';
import Slide68 from '@/slides/Slide68';
import Slide69 from '@/slides/Slide69';
import Veil2 from '@/slides/Veil2';
import Veil3 from '@/slides/Veil3';
import Veil4 from '@/slides/Veil4';
import Veil5 from '@/slides/Veil5';
import Veil6 from '@/slides/Veil6';
import Veil7 from '@/slides/Veil7';
import Veil8 from '@/slides/Veil8';
import Veil9 from '@/slides/Veil9';
import Veil10 from '@/slides/Veil10';
import Veil11 from '@/slides/Veil11';
import Veil12 from '@/slides/Veil12';
import Veil13 from '@/slides/Veil13';
import Veil14 from '@/slides/Veil14';
import Veil15 from '@/slides/Veil15';
import Veil16 from '@/slides/Veil16';
import Veil17 from '@/slides/Veil17';
import Veil18 from '@/slides/Veil18';
import Veil19 from '@/slides/Veil19';
import Veil20 from '@/slides/Veil20';
import Veil21 from '@/slides/Veil21';
import Veil22 from '@/slides/Veil22';
import Veil24 from '@/slides/Veil24';
import Echo2 from '@/slides/Echo2';
import Echo3 from '@/slides/Echo3';
import Echo4 from '@/slides/Echo4';
import Echo5 from '@/slides/Echo5';
import Echo6 from '@/slides/Echo6';
import Echo7 from '@/slides/Echo7';
import Echo8 from '@/slides/Echo8';
import Echo9 from '@/slides/Echo9';
import Echo10 from '@/slides/Echo10';
import Echo11 from '@/slides/Echo11';
import Echo12 from '@/slides/Echo12';
import Echo13 from '@/slides/Echo13';
import Echo14 from '@/slides/Echo14';
import Echo15 from '@/slides/Echo15';
import Echo16 from '@/slides/Echo16';
import Echo17 from '@/slides/Echo17';
import Echo18 from '@/slides/Echo18';
import Echo20 from '@/slides/Echo20';
import Echo21 from '@/slides/Echo21';
import Echo22 from '@/slides/Echo22';
import Echo24 from '@/slides/Echo24';


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

  { id: 'slide-32', order: 31, component: Slide32, title: 'Slide 32' },
  { id: 'slide-33', order: 31, component: Slide33, title: 'Slide 33' },
  { id: 'slide-34', order: 32, component: Slide34, title: 'Slide 34' },
  { id: 'slide-35', order: 33, component: Slide35, title: 'Slide 35' },
  { id: 'slide-36', order: 34, component: Slide36, title: 'Slide 36' },
  { id: 'slide-37', order: 35, component: Slide37, title: 'Slide 37' },
  { id: 'slide-38', order: 36, component: Slide38, title: 'Slide 38' },
  { id: 'slide-39', order: 37, component: Slide39, title: 'A IA É O NOVO PETRÓLEO' },
  { id: 'slide-40', order: 38, component: Slide40, title: 'Escalar Inside Sales B2B' },
  { id: 'slide-41', order: 39, component: Slide41, title: 'Dúvidas?' },
  { id: 'slide-42', order: 40, component: Slide42, title: 'Célula Términus - NEST' },
  { id: 'slide-43', order: 41, component: Slide43, title: 'Implementação Híbrida MQL Machine' },
  { id: 'slide-44', order: 42, component: Slide44, title: 'Plano de Ação Personalizado' },
  { id: 'slide-45', order: 43, component: Slide45, title: 'Grupo do WhatsApp do Projeto' },
  { id: 'slide-46', order: 44, component: Slide46, title: 'Visão Geral das IAs' },
  { id: 'slide-47', order: 45, component: Slide47, title: 'IA SDR - Porta de Entrada Inteligente' },
  { id: 'slide-48', order: 46, component: Slide48, title: 'IA de Compromisso - Agenda Cheia' },
  { id: 'slide-49', order: 47, component: Slide49, title: 'IA de Follow-up - Persistência Inteligente' },
  { id: 'slide-50', order: 48, component: Slide50, title: 'IA Estrategista - Cérebro Tático' },
  { id: 'slide-51', order: 49, component: Slide51, title: '6 Tutorias 1:1' },
  { id: 'slide-52', order: 50, component: Slide52, title: 'Playbook Operacional' },
  { id: 'slide-53', order: 51, component: Slide53, title: 'Trilha de Vídeos: Portal e Painéis' },
  { id: 'slide-54', order: 52, component: Slide54, title: 'Trilha de Vídeos: Automações e IAs' },
  { id: 'slide-55', order: 53, component: Slide55, title: 'Inteligência Coletiva Borusa (BCF v2)' },
  { id: 'slide-56', order: 54, component: Slide56, title: 'Bônus: Arsenal Open Source' },
  { id: 'slide-57', order: 55, component: Slide57, title: 'Em Resumo Como Será a Nossa Jornada Juntos?' },
  { id: 'slide-58', order: 56, component: Slide58, title: 'Jornada de 90 Dias' },
  { id: 'slide-57-recorrencia', order: 57, component: Slide57Recorrencia, title: 'E DEPOIS DOS 90 DIAS?' },
  { id: 'slide-58-recorrencia', order: 58, component: Slide58Recorrencia, title: 'Acesso ao Portal + BCF + IA Estrategista' },
  { id: 'slide-59-recorrencia', order: 59, component: Slide59Recorrencia, title: 'Suporte Contínuo e Academy' },
  { id: 'slide-60-recorrencia', order: 60, component: Slide60Recorrencia, title: 'Data Moat e Proteção' },
  { id: 'slide-61-recorrencia', order: 61, component: Slide61Recorrencia, title: 'Release Notes e Evolução' },
  { id: 'slide-62-recorrencia', order: 62, component: Slide62Recorrencia, title: 'Você Nunca Fica Sozinho' },
  { id: 'slide-59', order: 63, component: Slide59, title: 'Garantia de R$20.000,00' },
  { id: 'slide-60', order: 64, component: Slide60, title: 'Dúvidas?' },
  { id: 'slide-61', order: 65, component: Slide61, title: 'Quanto Vale?' },
  { id: 'slide-62', order: 66, component: Slide62, title: 'Valor × Preço' },
  { id: 'slide-63', order: 67, component: Slide63, title: 'Custo do Time 1:1' },
  { id: 'slide-64', order: 68, component: Slide64, title: 'Valor × Preço × ROI' },
  { id: 'slide-65', order: 69, component: Slide65, title: 'Valor da Implementação Célula Términus - NEST' },
  { id: 'slide-66', order: 70, component: Slide66, title: 'Programa de Implementação Célula Términus - NEST' },
  { 
    id: 'slide-67', 
    order: 71, 
    component: Slide67, 
    title: 'Preço do Programa vs Valor Sangue no Olho',
    conditionalRoutes: {
      '1': 'slide-68',
      '2': 'slide-69'
    }
  },
  { id: 'slide-68', order: 1, component: Slide68, title: 'Célula Términus ECHO', path: 'echo' },
  { id: 'slide-69', order: 1, component: Slide69, title: 'Célula Términus VEIL', path: 'veil' },
  { id: 'veil-2', order: 2, component: Veil2, title: 'Jay Abraham - VEIL', path: 'veil' },
  { id: 'veil-3', order: 3, component: Veil3, title: 'Oportunidade de Acelerar - VEIL', path: 'veil' },
  { id: 'veil-4', order: 4, component: Veil4, title: 'Implementação Híbrida MQL Machine - VEIL', path: 'veil' },
  { id: 'veil-5', order: 5, component: Veil5, title: 'Plano de Ação Personalizado - VEIL', path: 'veil' },
  { id: 'veil-6', order: 6, component: Veil6, title: 'Grupo do WhatsApp do Projeto - VEIL', path: 'veil' },
  { id: 'veil-7', order: 7, component: Veil7, title: 'Visão Geral das IAs - VEIL', path: 'veil' },
  { id: 'veil-8', order: 8, component: Veil8, title: 'IA SDR - Porta de Entrada Inteligente - VEIL', path: 'veil' },
  { id: 'veil-9', order: 9, component: Veil9, title: 'IA de Compromisso - Agenda Cheia - VEIL', path: 'veil' },
  { id: 'veil-10', order: 10, component: Veil10, title: 'IA de Follow-up - Persistência Inteligente - VEIL', path: 'veil' },
  { id: 'veil-11', order: 11, component: Veil11, title: 'IA Estrategista - Cérebro Tático - VEIL', path: 'veil' },
  { id: 'veil-12', order: 12, component: Veil12, title: '4 Tutorias 1:1 - VEIL', path: 'veil' },
  { id: 'veil-13', order: 13, component: Veil13, title: 'Playbook Operacional - VEIL', path: 'veil' },
  { id: 'veil-14', order: 14, component: Veil14, title: 'Trilha de Vídeos: Portal e Painéis - VEIL', path: 'veil' },
  { id: 'veil-15', order: 15, component: Veil15, title: 'Trilha de Vídeos: Automações e IAs - VEIL', path: 'veil' },
  { id: 'veil-16', order: 16, component: Veil16, title: 'Inteligência Coletiva Borusa (BCF v2) - VEIL', path: 'veil' },
  { id: 'veil-17', order: 17, component: Veil17, title: 'Bônus: Arsenal Open Source - VEIL', path: 'veil' },
  { id: 'veil-20', order: 18, component: Veil20, title: 'O Que Você Continua Recebendo - VEIL', path: 'veil' },
  { id: 'veil-21', order: 19, component: Veil21, title: 'Suporte Contínuo - VEIL', path: 'veil' },
  { id: 'veil-22', order: 20, component: Veil22, title: 'Data Moat - VEIL', path: 'veil' },
  { id: 'veil-24', order: 21, component: Veil24, title: 'Você Nunca Fica Sozinho - VEIL', path: 'veil' },
  { id: 'veil-18', order: 22, component: Veil18, title: 'Programa de Implementação - VEIL', path: 'veil' },
  { id: 'echo-2', order: 2, component: Echo2, title: 'Jay Abraham - ECHO', path: 'echo' },
  { id: 'echo-3', order: 3, component: Echo3, title: 'Oportunidade de Acelerar - ECHO', path: 'echo' },
  { id: 'echo-4', order: 4, component: Echo4, title: 'Implementação Híbrida MQL Machine - ECHO', path: 'echo' },
  { id: 'echo-5', order: 5, component: Echo5, title: 'Plano de Ação Personalizado - ECHO', path: 'echo' },
  { id: 'echo-6', order: 6, component: Echo6, title: 'Grupo do WhatsApp do Projeto - ECHO', path: 'echo' },
  { id: 'echo-7', order: 7, component: Echo7, title: 'Visão Geral das IAs - ECHO', path: 'echo' },
  { id: 'echo-8', order: 8, component: Echo8, title: 'IA SDR - Porta de Entrada Inteligente - ECHO', path: 'echo' },
  { id: 'echo-9', order: 9, component: Echo9, title: 'IA de Compromisso - Agenda Cheia - ECHO', path: 'echo' },
  { id: 'echo-10', order: 10, component: Echo10, title: 'IA de Follow-up - Persistência Inteligente - ECHO', path: 'echo' },
  { id: 'echo-11', order: 11, component: Echo11, title: 'IA Estrategista - Cérebro Tático - ECHO', path: 'echo' },
  { id: 'echo-12', order: 12, component: Echo12, title: 'Tutorias 1:1 - ECHO', path: 'echo' },
  { id: 'echo-13', order: 13, component: Echo13, title: 'Playbook Operacional - ECHO', path: 'echo' },
  { id: 'echo-14', order: 14, component: Echo14, title: 'Trilha de Vídeos: Portal e Painéis - ECHO', path: 'echo' },
  { id: 'echo-15', order: 15, component: Echo15, title: 'Trilha de Vídeos: Automações e IAs - ECHO', path: 'echo' },
  { id: 'echo-16', order: 16, component: Echo16, title: 'Inteligência Coletiva Borusa (BCF v2) - ECHO', path: 'echo' },
  { id: 'echo-17', order: 17, component: Echo17, title: 'Bônus: Arsenal Open Source - ECHO', path: 'echo' },
  { id: 'echo-20', order: 18, component: Echo20, title: 'O Que Você Continua Recebendo - ECHO', path: 'echo' },
  { id: 'echo-21', order: 19, component: Echo21, title: 'Suporte Contínuo - ECHO', path: 'echo' },
  { id: 'echo-22', order: 20, component: Echo22, title: 'Data Moat - ECHO', path: 'echo' },
  { id: 'echo-24', order: 21, component: Echo24, title: 'Você Nunca Fica Sozinho - ECHO', path: 'echo' },
  { id: 'echo-18', order: 22, component: Echo18, title: 'Programa de Implementação - ECHO', path: 'echo' },

];

/**
 * Configurações de slides por apresentação
 * Cada apresentação pode ter seu próprio conjunto de slides
 */
export const slidesConfigs: Record<string, SlideDefinition[]> = {
  // Role-Play - Célula Terminus NEST (configuração original)
  'role-play-celula-terminus': slidesConfig,
  
  // Role-Play - Célula Terminus VEIL (slides independentes)
  'role-play-veil': rolePlayVeilSlidesConfig,
  
  // Role-Play - Célula Terminus ECHO (slides independentes)
  'role-play-echo': rolePlayEchoSlidesConfig,
  
  // Célula Terminus - NEST (produção - sem contador)
  'ct-nest': ctNestSlidesConfig,
  
  // Célula Terminus - VEIL (produção - sem contador)
  'ct-veil': ctVeilSlidesConfig,
  
  // Célula Terminus - ECHO (produção - sem contador)
  'ct-echo': ctEchoSlidesConfig,
  
  // Agente Kesher (novos slides no futuro)
  'agente-kesher': slidesConfig, // Temporariamente usando os mesmos slides
  
  // Operador Havaya (novos slides no futuro)
  'operador-havaya': slidesConfig, // Temporariamente usando os mesmos slides
  
  // Default fallback
  'default': slidesConfig,
};

/**
 * Obtém a configuração de slides para uma apresentação específica
 */
export const getSlidesByConfigId = (configId: string): SlideDefinition[] => {
  return slidesConfigs[configId] || slidesConfigs['default'];
};

/**
 * Helpers mantidos para compatibilidade (usam slidesConfig padrão)
 */
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

/**
 * Helpers específicos para uma configuração de slides
 */
export const getSlideByIdFromConfig = (configId: string, slideId: string): SlideDefinition | undefined => {
  const config = getSlidesByConfigId(configId);
  return config.find((slide) => slide.id === slideId);
};

export const getTotalSlidesFromConfig = (configId: string): number => {
  return getSlidesByConfigId(configId).length;
};

export const getProgressFromConfig = (configId: string, currentSlideId: string): number => {
  const currentSlide = getSlideByIdFromConfig(configId, currentSlideId);
  if (!currentSlide) return 0;
  const total = getTotalSlidesFromConfig(configId);
  return Math.round((currentSlide.order / total) * 100);
};

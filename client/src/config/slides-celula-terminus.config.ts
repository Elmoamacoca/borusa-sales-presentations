import { SlideConfig } from '@/store/presentationStore';
import type { ComponentType } from 'react';

// Import slides
import WelcomeSlide from '@/slides-celula-terminus/WelcomeSlide';
import MatheusFielSlide from '@/slides-celula-terminus/MatheusFielSlide';
import Slide2022 from '@/slides-celula-terminus/Slide2022';
import Slide2025 from '@/slides-celula-terminus/Slide2025';
import MissionSlide from '@/slides-celula-terminus/MissionSlide';
import MethodologySlide from '@/slides-celula-terminus/MethodologySlide';
import HydraNetSlide from '@/slides-celula-terminus/HydraNetSlide';
import AdaptedLogicSlide from '@/slides-celula-terminus/AdaptedLogicSlide';
import JourneySlide from '@/slides-celula-terminus/JourneySlide';
import ResultsSlide from '@/slides-celula-terminus/ResultsSlide';
import ObstaclesSlide from '@/slides-celula-terminus/ObstaclesSlide';
import OtimizacaoTempoSlide from '@/slides-celula-terminus/OtimizacaoTempoSlide';
import InvestimentoSlide from '@/slides-celula-terminus/InvestimentoSlide';
import Investimento2Slide from '@/slides-celula-terminus/Investimento2Slide';
import EstruturaSlide from '@/slides-celula-terminus/EstruturaSlide';
import PerguntaIASlide from '@/slides-celula-terminus/PerguntaIASlide';
import Investimento3Slide from '@/slides-celula-terminus/Investimento3Slide';
import Investimento4Slide from '@/slides-celula-terminus/Investimento4Slide';
import OtimizacaoTempo2Slide from '@/slides-celula-terminus/OtimizacaoTempo2Slide';
import Slide20 from '@/slides-celula-terminus/Slide20';
import Slide21 from '@/slides-celula-terminus/Slide21';
import Slide22 from '@/slides-celula-terminus/Slide22';
import Slide23 from '@/slides-celula-terminus/Slide23';
import Slide24 from '@/slides-celula-terminus/Slide24';
import Slide25 from '@/slides-celula-terminus/Slide25';
import Slide26 from '@/slides-celula-terminus/Slide26';
import Slide27 from '@/slides-celula-terminus/Slide27';
import Slide28 from '@/slides-celula-terminus/Slide28';
import Slide29 from '@/slides-celula-terminus/Slide29';
import Slide30 from '@/slides-celula-terminus/Slide30';
import Slide31 from '@/slides-celula-terminus/Slide31';
import Slide32 from '@/slides-celula-terminus/Slide32';
import Slide33 from '@/slides-celula-terminus/Slide33';
import Slide34 from '@/slides-celula-terminus/Slide34';
import Slide35 from '@/slides-celula-terminus/Slide35';
import Slide36 from '@/slides-celula-terminus/Slide36';
import Slide37 from '@/slides-celula-terminus/Slide37';
import Slide38 from '@/slides-celula-terminus/Slide38';
import Slide39 from '@/slides-celula-terminus/Slide39';
import Slide40 from '@/slides-celula-terminus/Slide40';
import Slide41 from '@/slides-celula-terminus/Slide41';
import Slide42 from '@/slides-celula-terminus/Slide42';
import Slide43 from '@/slides-celula-terminus/Slide43';
import Slide44 from '@/slides-celula-terminus/Slide44';
import Slide45 from '@/slides-celula-terminus/Slide45';
import Slide46 from '@/slides-celula-terminus/Slide46';
import Slide47 from '@/slides-celula-terminus/Slide47';
import Slide48 from '@/slides-celula-terminus/Slide48';
import Slide49 from '@/slides-celula-terminus/Slide49';
import Slide50 from '@/slides-celula-terminus/Slide50';
import Slide51 from '@/slides-celula-terminus/Slide51';
import Slide52 from '@/slides-celula-terminus/Slide52';
import Slide53 from '@/slides-celula-terminus/Slide53';
import Slide54 from '@/slides-celula-terminus/Slide54';
import Slide55 from '@/slides-celula-terminus/Slide55';
import Slide56 from '@/slides-celula-terminus/Slide56';
import Slide57 from '@/slides-celula-terminus/Slide57';
import Slide58 from '@/slides-celula-terminus/Slide58';
import Slide59 from '@/slides-celula-terminus/Slide59';
import Slide60 from '@/slides-celula-terminus/Slide60';
import Slide61 from '@/slides-celula-terminus/Slide61';
import Slide62 from '@/slides-celula-terminus/Slide62';
import Slide63 from '@/slides-celula-terminus/Slide63';
import Slide64 from '@/slides-celula-terminus/Slide64';
import Slide65 from '@/slides-celula-terminus/Slide65';
import Slide66 from '@/slides-celula-terminus/Slide66';
import Slide67 from '@/slides-celula-terminus/Slide67';
import Slide68 from '@/slides-celula-terminus/Slide68';
import Slide69 from '@/slides-celula-terminus/Slide69';
import Veil2 from '@/slides-celula-terminus/Veil2';
import Veil3 from '@/slides-celula-terminus/Veil3';
import Veil4 from '@/slides-celula-terminus/Veil4';
import Veil5 from '@/slides-celula-terminus/Veil5';
import Veil6 from '@/slides-celula-terminus/Veil6';
import Veil7 from '@/slides-celula-terminus/Veil7';
import Veil8 from '@/slides-celula-terminus/Veil8';
import Veil9 from '@/slides-celula-terminus/Veil9';
import Veil10 from '@/slides-celula-terminus/Veil10';
import Veil11 from '@/slides-celula-terminus/Veil11';
import Veil12 from '@/slides-celula-terminus/Veil12';
import Veil13 from '@/slides-celula-terminus/Veil13';
import Veil14 from '@/slides-celula-terminus/Veil14';
import Veil15 from '@/slides-celula-terminus/Veil15';
import Veil16 from '@/slides-celula-terminus/Veil16';
import Veil17 from '@/slides-celula-terminus/Veil17';
import Veil18 from '@/slides-celula-terminus/Veil18';
import Veil19 from '@/slides-celula-terminus/Veil19';
import Veil20 from '@/slides-celula-terminus/Veil20';
import Veil21 from '@/slides-celula-terminus/Veil21';
import Veil22 from '@/slides-celula-terminus/Veil22';
import Veil23 from '@/slides-celula-terminus/Veil23';
import Veil24 from '@/slides-celula-terminus/Veil24';


export interface SlideDefinition extends SlideConfig {
  component: ComponentType;
  title?: string;
}

export const celulaTerminusSlidesConfig: SlideDefinition[] = [
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
  { id: 'slide-42', order: 42, component: Slide42, title: 'Célula Términus - NEST' },
  { id: 'slide-43', order: 43, component: Slide43, title: 'Implementação Híbrida MQL Machine' },
  { id: 'slide-44', order: 44, component: Slide44, title: 'Plano de Ação Personalizado' },
  { id: 'slide-45', order: 45, component: Slide45, title: 'Grupo do WhatsApp do Projeto' },
  { id: 'slide-46', order: 46, component: Slide46, title: 'Visão Geral das IAs' },
  { id: 'slide-47', order: 47, component: Slide47, title: 'IA SDR - Porta de Entrada Inteligente' },
  { id: 'slide-48', order: 48, component: Slide48, title: 'IA de Compromisso - Agenda Cheia' },
  { id: 'slide-49', order: 49, component: Slide49, title: 'IA de Follow-up - Persistência Inteligente' },
  { id: 'slide-50', order: 50, component: Slide50, title: 'IA Estrategista - Cérebro Tático' },
  { id: 'slide-51', order: 51, component: Slide51, title: '6 Tutorias 1:1' },
  { id: 'slide-52', order: 52, component: Slide52, title: 'Playbook Operacional' },
  { id: 'slide-53', order: 53, component: Slide53, title: 'Trilha de Vídeos: Portal e Painéis' },
  { id: 'slide-54', order: 54, component: Slide54, title: 'Trilha de Vídeos: Automações e IAs' },
  { id: 'slide-55', order: 55, component: Slide55, title: 'Inteligência Coletiva Borusa (BCF v2)' },
  { id: 'slide-56', order: 56, component: Slide56, title: 'Bônus: Arsenal Open Source' },
  { id: 'slide-57', order: 57, component: Slide57, title: 'Em Resumo Como Será a Nossa Jornada Juntos?' },
  { id: 'slide-58', order: 58, component: Slide58, title: 'Jornada de 90 Dias' },
  { id: 'slide-59', order: 59, component: Slide59, title: 'Garantia de R$20.000,00' },
  { id: 'slide-60', order: 60, component: Slide60, title: 'Dúvidas?' },
  { id: 'slide-61', order: 61, component: Slide61, title: 'Quanto Vale?' },
  { id: 'slide-62', order: 62, component: Slide62, title: 'Valor × Preço' },
  { id: 'slide-63', order: 63, component: Slide63, title: 'Custo do Time 1:1' },
  { id: 'slide-64', order: 64, component: Slide64, title: 'Valor × Preço × ROI' },
  { id: 'slide-65', order: 65, component: Slide65, title: 'Valor da Implementação Célula Términus - NEST' },
  { id: 'slide-66', order: 66, component: Slide66, title: 'Programa de Implementação Célula Términus - NEST' },
  { 
    id: 'slide-67', 
    order: 67, 
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
  { id: 'veil-23', order: 21, component: Veil23, title: 'Release Notes - VEIL', path: 'veil' },
  { id: 'veil-24', order: 22, component: Veil24, title: 'Você Nunca Fica Sozinho - VEIL', path: 'veil' },
  { id: 'veil-18', order: 23, component: Veil18, title: 'Programa de Implementação - VEIL', path: 'veil' },

];

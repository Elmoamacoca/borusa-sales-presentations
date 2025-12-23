import { SlideConfig } from '@/store/presentationStore';
import type { ComponentType } from 'react';


// Import slides
import WelcomeSlide from '@/slides-role-play-veil/WelcomeSlide';
import MatheusFielSlide from '@/slides-role-play-veil/MatheusFielSlide';
import Slide2022 from '@/slides-role-play-veil/Slide2022';
import Slide2025 from '@/slides-role-play-veil/Slide2025';
import MissionSlide from '@/slides-role-play-veil/MissionSlide';
import MethodologySlide from '@/slides-role-play-veil/MethodologySlide';
import HydraNetSlide from '@/slides-role-play-veil/HydraNetSlide';
import AdaptedLogicSlide from '@/slides-role-play-veil/AdaptedLogicSlide';
import JourneySlide from '@/slides-role-play-veil/JourneySlide';
import ResultsSlide from '@/slides-role-play-veil/ResultsSlide';
import ObstaclesSlide from '@/slides-role-play-veil/ObstaclesSlide';
import OtimizacaoTempoSlide from '@/slides-role-play-veil/OtimizacaoTempoSlide';
import InvestimentoSlide from '@/slides-role-play-veil/InvestimentoSlide';
import Investimento2Slide from '@/slides-role-play-veil/Investimento2Slide';
import EstruturaSlide from '@/slides-role-play-veil/EstruturaSlide';
import PerguntaIASlide from '@/slides-role-play-veil/PerguntaIASlide';
import Investimento3Slide from '@/slides-role-play-veil/Investimento3Slide';
import Investimento4Slide from '@/slides-role-play-veil/Investimento4Slide';
import OtimizacaoTempo2Slide from '@/slides-role-play-veil/OtimizacaoTempo2Slide';
import Slide20 from '@/slides-role-play-veil/Slide20';
import Slide21 from '@/slides-role-play-veil/Slide21';
import Slide22 from '@/slides-role-play-veil/Slide22';
import Slide23 from '@/slides-role-play-veil/Slide23';
import Slide24 from '@/slides-role-play-veil/Slide24';
import Slide25 from '@/slides-role-play-veil/Slide25';
import Slide26 from '@/slides-role-play-veil/Slide26';
import Slide27 from '@/slides-role-play-veil/Slide27';
import Slide28 from '@/slides-role-play-veil/Slide28';
import Slide29 from '@/slides-role-play-veil/Slide29';
import Slide30 from '@/slides-role-play-veil/Slide30';

import Slide32 from '@/slides-role-play-veil/Slide32';
import Slide33 from '@/slides-role-play-veil/Slide33';
import Slide34 from '@/slides-role-play-veil/Slide34';
import Slide35 from '@/slides-role-play-veil/Slide35';
import Slide36 from '@/slides-role-play-veil/Slide36';
import Slide37 from '@/slides-role-play-veil/Slide37';
import Slide38 from '@/slides-role-play-veil/Slide38';
import Slide39 from '@/slides-role-play-veil/Slide39';
import Slide40 from '@/slides-role-play-veil/Slide40';
import Slide41 from '@/slides-role-play-veil/Slide41';
import Slide42 from '@/slides-role-play-veil/Slide42';
import Slide43 from '@/slides-role-play-veil/Slide43';
import Slide44 from '@/slides-role-play-veil/Slide44';
import Slide45 from '@/slides-role-play-veil/Slide45';
import Slide46 from '@/slides-role-play-veil/Slide46';
import Slide47 from '@/slides-role-play-veil/Slide47';
import Slide48 from '@/slides-role-play-veil/Slide48';
import Slide49 from '@/slides-role-play-veil/Slide49';
import Slide50 from '@/slides-role-play-veil/Slide50';
import Slide51 from '@/slides-role-play-veil/Slide51';
import Slide52 from '@/slides-role-play-veil/Slide52';
import Slide53 from '@/slides-role-play-veil/Slide53';
import Slide54 from '@/slides-role-play-veil/Slide54';
import Slide55 from '@/slides-role-play-veil/Slide55';
import Slide56 from '@/slides-role-play-veil/Slide56';
import Slide57 from '@/slides-role-play-veil/Slide57';
import Slide57Recorrencia from '@/slides-role-play-veil/Slide57Recorrencia';
import Slide58 from '@/slides-role-play-veil/Slide58';
import Slide58Recorrencia from '@/slides-role-play-veil/Slide58Recorrencia';
import Slide59Recorrencia from '@/slides-role-play-veil/Slide59Recorrencia';
import Slide59 from '@/slides-role-play-veil/Slide59';
import Slide60Recorrencia from '@/slides-role-play-veil/Slide60Recorrencia';
import Slide60 from '@/slides-role-play-veil/Slide60';
import Slide61Recorrencia from '@/slides-role-play-veil/Slide61Recorrencia';
import Slide61 from '@/slides-role-play-veil/Slide61';
import Slide62Recorrencia from '@/slides-role-play-veil/Slide62Recorrencia';
import Slide62 from '@/slides-role-play-veil/Slide62';
import Slide63 from '@/slides-role-play-veil/Slide63';
import Slide64 from '@/slides-role-play-veil/Slide64';
import Slide65 from '@/slides-role-play-veil/Slide65';
import Slide66 from '@/slides-role-play-veil/Slide66';
import Slide67 from '@/slides-role-play-veil/Slide67';
import Slide68 from '@/slides-role-play-veil/Slide68';
import Slide69 from '@/slides-role-play-veil/Slide69';
import Veil2 from '@/slides-role-play-veil/Veil2';
import Veil3 from '@/slides-role-play-veil/Veil3';
import Veil4 from '@/slides-role-play-veil/Veil4';
import Veil5 from '@/slides-role-play-veil/Veil5';
import Veil6 from '@/slides-role-play-veil/Veil6';
import Veil7 from '@/slides-role-play-veil/Veil7';
import Veil8 from '@/slides-role-play-veil/Veil8';
import Veil9 from '@/slides-role-play-veil/Veil9';
import Veil10 from '@/slides-role-play-veil/Veil10';
import Veil11 from '@/slides-role-play-veil/Veil11';
import Veil12 from '@/slides-role-play-veil/Veil12';
import Veil13 from '@/slides-role-play-veil/Veil13';
import Veil14 from '@/slides-role-play-veil/Veil14';
import Veil15 from '@/slides-role-play-veil/Veil15';
import Veil16 from '@/slides-role-play-veil/Veil16';
import Veil17 from '@/slides-role-play-veil/Veil17';
import Veil18 from '@/slides-role-play-veil/Veil18';
import Veil19 from '@/slides-role-play-veil/Veil19';
import Veil20 from '@/slides-role-play-veil/Veil20';
import Veil21 from '@/slides-role-play-veil/Veil21';
import Veil22 from '@/slides-role-play-veil/Veil22';
import Veil24 from '@/slides-role-play-veil/Veil24';
import Echo2 from '@/slides-role-play-veil/Echo2';
import Echo3 from '@/slides-role-play-veil/Echo3';
import Echo4 from '@/slides-role-play-veil/Echo4';
import Echo5 from '@/slides-role-play-veil/Echo5';
import Echo6 from '@/slides-role-play-veil/Echo6';
import Echo7 from '@/slides-role-play-veil/Echo7';
import Echo8 from '@/slides-role-play-veil/Echo8';
import Echo9 from '@/slides-role-play-veil/Echo9';
import Echo10 from '@/slides-role-play-veil/Echo10';
import Echo11 from '@/slides-role-play-veil/Echo11';
import Echo12 from '@/slides-role-play-veil/Echo12';
import Echo13 from '@/slides-role-play-veil/Echo13';
import Echo14 from '@/slides-role-play-veil/Echo14';
import Echo15 from '@/slides-role-play-veil/Echo15';
import Echo16 from '@/slides-role-play-veil/Echo16';
import Echo17 from '@/slides-role-play-veil/Echo17';
import Echo18 from '@/slides-role-play-veil/Echo18';
import Echo20 from '@/slides-role-play-veil/Echo20';
import Echo21 from '@/slides-role-play-veil/Echo21';
import Echo22 from '@/slides-role-play-veil/Echo22';
import Echo24 from '@/slides-role-play-veil/Echo24';


export interface SlideDefinition extends SlideConfig {
  component: ComponentType;
  title?: string;
}

export const rolePlayVeilSlidesConfig: SlideDefinition[] = [
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
  { id: 'slide-42', order: 40, component: Slide42, title: 'Célula Termínus - VEIL' },
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

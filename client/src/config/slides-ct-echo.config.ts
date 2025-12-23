import { SlideConfig } from '@/store/presentationStore';
import type { ComponentType } from 'react';


// Import slides
import WelcomeSlide from '@/slides-ct-echo/WelcomeSlide';
import MatheusFielSlide from '@/slides-ct-echo/MatheusFielSlide';
import Slide2022 from '@/slides-ct-echo/Slide2022';
import Slide2025 from '@/slides-ct-echo/Slide2025';
import MissionSlide from '@/slides-ct-echo/MissionSlide';
import MethodologySlide from '@/slides-ct-echo/MethodologySlide';
import HydraNetSlide from '@/slides-ct-echo/HydraNetSlide';
import AdaptedLogicSlide from '@/slides-ct-echo/AdaptedLogicSlide';
import JourneySlide from '@/slides-ct-echo/JourneySlide';
import ResultsSlide from '@/slides-ct-echo/ResultsSlide';
import ObstaclesSlide from '@/slides-ct-echo/ObstaclesSlide';
import OtimizacaoTempoSlide from '@/slides-ct-echo/OtimizacaoTempoSlide';
import InvestimentoSlide from '@/slides-ct-echo/InvestimentoSlide';
import Investimento2Slide from '@/slides-ct-echo/Investimento2Slide';
import EstruturaSlide from '@/slides-ct-echo/EstruturaSlide';
import PerguntaIASlide from '@/slides-ct-echo/PerguntaIASlide';
import Investimento3Slide from '@/slides-ct-echo/Investimento3Slide';
import Investimento4Slide from '@/slides-ct-echo/Investimento4Slide';
import OtimizacaoTempo2Slide from '@/slides-ct-echo/OtimizacaoTempo2Slide';
import Slide20 from '@/slides-ct-echo/Slide20';
import Slide21 from '@/slides-ct-echo/Slide21';
import Slide22 from '@/slides-ct-echo/Slide22';
import Slide23 from '@/slides-ct-echo/Slide23';
import Slide24 from '@/slides-ct-echo/Slide24';
import Slide25 from '@/slides-ct-echo/Slide25';
import Slide26 from '@/slides-ct-echo/Slide26';
import Slide27 from '@/slides-ct-echo/Slide27';
import Slide28 from '@/slides-ct-echo/Slide28';
import Slide29 from '@/slides-ct-echo/Slide29';
import Slide30 from '@/slides-ct-echo/Slide30';

import Slide32 from '@/slides-ct-echo/Slide32';
import Slide33 from '@/slides-ct-echo/Slide33';
import Slide34 from '@/slides-ct-echo/Slide34';
import Slide35 from '@/slides-ct-echo/Slide35';
import Slide36 from '@/slides-ct-echo/Slide36';
import Slide37 from '@/slides-ct-echo/Slide37';
import Slide38 from '@/slides-ct-echo/Slide38';
import Slide39 from '@/slides-ct-echo/Slide39';
import Slide40 from '@/slides-ct-echo/Slide40';
import Slide41 from '@/slides-ct-echo/Slide41';
import Slide42 from '@/slides-ct-echo/Slide42';
import Slide43 from '@/slides-ct-echo/Slide43';
import Slide44 from '@/slides-ct-echo/Slide44';
import Slide45 from '@/slides-ct-echo/Slide45';
import Slide46 from '@/slides-ct-echo/Slide46';
import Slide47 from '@/slides-ct-echo/Slide47';
import Slide48 from '@/slides-ct-echo/Slide48';
import Slide49 from '@/slides-ct-echo/Slide49';
import Slide50 from '@/slides-ct-echo/Slide50';
import Slide51 from '@/slides-ct-echo/Slide51';
import Slide52 from '@/slides-ct-echo/Slide52';
import Slide53 from '@/slides-ct-echo/Slide53';
import Slide54 from '@/slides-ct-echo/Slide54';
import Slide55 from '@/slides-ct-echo/Slide55';
import Slide56 from '@/slides-ct-echo/Slide56';
import Slide57 from '@/slides-ct-echo/Slide57';
import Slide57Recorrencia from '@/slides-ct-echo/Slide57Recorrencia';
import Slide58 from '@/slides-ct-echo/Slide58';
import Slide58Recorrencia from '@/slides-ct-echo/Slide58Recorrencia';
import Slide59Recorrencia from '@/slides-ct-echo/Slide59Recorrencia';
import Slide59 from '@/slides-ct-echo/Slide59';
import Slide60Recorrencia from '@/slides-ct-echo/Slide60Recorrencia';
import Slide60 from '@/slides-ct-echo/Slide60';
import Slide61Recorrencia from '@/slides-ct-echo/Slide61Recorrencia';
import Slide61 from '@/slides-ct-echo/Slide61';
import Slide62Recorrencia from '@/slides-ct-echo/Slide62Recorrencia';
import Slide62 from '@/slides-ct-echo/Slide62';
import Slide63 from '@/slides-ct-echo/Slide63';
import Slide64 from '@/slides-ct-echo/Slide64';
import Slide65 from '@/slides-ct-echo/Slide65';
import Slide66 from '@/slides-ct-echo/Slide66';
import Slide67 from '@/slides-ct-echo/Slide67';


export interface SlideDefinition extends SlideConfig {
  component: ComponentType;
  title?: string;
}

export const ctEchoSlidesConfig: SlideDefinition[] = [
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
  { id: 'slide-33', order: 32, component: Slide33, title: 'Slide 33' },
  { id: 'slide-34', order: 33, component: Slide34, title: 'Slide 34' },
  { id: 'slide-35', order: 34, component: Slide35, title: 'Slide 35' },
  { id: 'slide-36', order: 35, component: Slide36, title: 'Slide 36' },
  { id: 'slide-37', order: 36, component: Slide37, title: 'Slide 37' },
  { id: 'slide-38', order: 37, component: Slide38, title: 'Slide 38' },
  { id: 'slide-39', order: 38, component: Slide39, title: 'A IA É O NOVO PETRÓLEO' },
  { id: 'slide-40', order: 39, component: Slide40, title: 'Escalar Inside Sales B2B' },
  { id: 'slide-41', order: 40, component: Slide41, title: 'Dúvidas?' },
  { id: 'slide-42', order: 41, component: Slide42, title: 'Célula Termínus - ECHO' },
  { id: 'slide-43', order: 42, component: Slide43, title: 'Implementação Híbrida MQL Machine' },
  { id: 'slide-44', order: 43, component: Slide44, title: 'Plano de Ação Personalizado' },
  { id: 'slide-45', order: 44, component: Slide45, title: 'Grupo do WhatsApp do Projeto' },
  { id: 'slide-46', order: 45, component: Slide46, title: 'Visão Geral das IAs' },
  { id: 'slide-47', order: 46, component: Slide47, title: 'IA SDR - Porta de Entrada Inteligente' },
  { id: 'slide-48', order: 47, component: Slide48, title: 'IA de Compromisso - Agenda Cheia' },
  { id: 'slide-49', order: 48, component: Slide49, title: 'IA de Follow-up - Persistência Inteligente' },
  { id: 'slide-50', order: 49, component: Slide50, title: 'IA Estrategista - Cérebro Tático' },
  { id: 'slide-51', order: 50, component: Slide51, title: '2 Tutorias 1:1' },
  { id: 'slide-52', order: 51, component: Slide52, title: 'Playbook Operacional' },
  { id: 'slide-53', order: 52, component: Slide53, title: 'Trilha de Vídeos: Portal e Painéis' },
  { id: 'slide-54', order: 53, component: Slide54, title: 'Trilha de Vídeos: Automações e IAs' },
  { id: 'slide-55', order: 54, component: Slide55, title: 'Inteligência Coletiva Borusa (BCF v2)' },
  { id: 'slide-56', order: 55, component: Slide56, title: 'Bônus: Arsenal Open Source' },
  { id: 'slide-57', order: 56, component: Slide57, title: 'Em Resumo Como Será a Nossa Jornada Juntos?' },
  { id: 'slide-58', order: 57, component: Slide58, title: 'Jornada de 90 Dias' },
  { id: 'slide-57-recorrencia', order: 58, component: Slide57Recorrencia, title: 'E DEPOIS DOS 90 DIAS?' },
  { id: 'slide-58-recorrencia', order: 59, component: Slide58Recorrencia, title: 'Acesso ao Portal + BCF + IA Estrategista' },
  { id: 'slide-59-recorrencia', order: 60, component: Slide59Recorrencia, title: 'Suporte Contínuo e Academy' },
  { id: 'slide-60-recorrencia', order: 61, component: Slide60Recorrencia, title: 'Data Moat e Proteção' },
  { id: 'slide-61-recorrencia', order: 62, component: Slide61Recorrencia, title: 'Release Notes e Evolução' },
  { id: 'slide-62-recorrencia', order: 63, component: Slide62Recorrencia, title: 'Você Nunca Fica Sozinho' },
  { id: 'slide-59', order: 64, component: Slide59, title: 'Garantia de R$20.000,00' },
  { id: 'slide-60', order: 65, component: Slide60, title: 'Dúvidas?' },
  { id: 'slide-61', order: 66, component: Slide61, title: 'Quanto Vale?' },
  { id: 'slide-62', order: 67, component: Slide62, title: 'Valor × Preço' },
  { id: 'slide-63', order: 68, component: Slide63, title: 'Custo do Time 1:1' },
  { id: 'slide-64', order: 69, component: Slide64, title: 'Valor × Preço × ROI' },
  { id: 'slide-65', order: 70, component: Slide65, title: 'Valor da Implementação Célula Términus - ECHO' },
  { id: 'slide-66', order: 71, component: Slide66, title: 'Programa de Implementação Célula Términus - ECHO' },
  { id: 'slide-67', order: 72, component: Slide67, title: 'Preço do Programa vs Valor Sangue no Olho' },
];

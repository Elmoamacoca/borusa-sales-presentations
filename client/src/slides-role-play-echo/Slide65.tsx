import { motion } from 'framer-motion';
import { MeshGradient } from "@paper-design/shaders-react";
import { useState, useEffect, useRef } from 'react';

export default function Slide65() {
  const [visibleItems, setVisibleItems] = useState(1);
  const [showTotal, setShowTotal] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showValue, setShowValue] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Tom de azul correto
  const blueColors = [
    "#0a0a0a",
    "#1a2332",
    "#2d3e50",
    "#3d5a80",
    "#1a1a1a",
  ];

  const items = [
    { text: "Plano de Ação Personalizado de 90 dias", value: "R$ 5.000,00" },
    { text: "Grupo de WhatsApp do Projeto", value: "R$ 3.000,00" },
    { text: "IA SDR operacional (recepção, triagem, qualificação básica, pipeline, reporting)", value: "R$ 20.000,00" },
    { text: "IA de Compromisso (agendamentos, lembretes, no-show, briefing)", value: "R$ 15.000,00" },
    { text: "IA de Follow-up (9 tentativas, retomada contextual, reengajamento)", value: "R$ 20.000,00" },
    { text: "IA Estrategista (análise de funil, gargalos, recomendações)", value: "R$ 18.000,00" },
    { text: "Infraestrutura completa + Portal do Cliente (VPS, integrações, painel)", value: "R$ 25.000,00" },
    { text: "4 Tutorias 1:1 com o Gabriel", value: "R$ 12.000,00" },
    { text: "Playbook Operacional da Célula Términus", value: "R$ 4.000,00" },
    { text: "Trilha de Vídeos – Portal e Painéis", value: "R$ 3.500,00" },
    { text: "Trilha de Vídeos – Automações e IAs", value: "R$ 4.500,00" },
    { text: "Atualizações de Base de Conhecimento", value: "R$ 6.000,00" },
    { text: "Correção de Bugs e Otimizações", value: "R$ 5.000,00" },
    { text: "Reunião Mensal de Acompanhamento", value: "R$ 9.000,00" },
    { text: "QBR Trimestral (ROI acumulado + roadmap)", value: "R$ 5.000,00" },
    { text: "Borusa Academy (Portal de vídeos e treinamentos)", value: "R$ 5.000,00" },
    { text: "Data Moat (Proteção da memória da operação)", value: "R$ 7.000,00" },
    { text: "Bônus 1: Acesso antecipado à Inteligência Coletiva BCF v2 (em validação)", value: "R$ 10.000,00" },
    { text: "Bônus 2: Arsenal Open Source (\"Caixa de Pandora\")", value: "R$ 15.000,00" },
  ];

  // Auto-scroll quando novos itens aparecem
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [visibleItems, showTotal, showQuestion, showValue]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        if (visibleItems < items.length) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          setVisibleItems(prev => prev + 1);
        } else if (!showTotal) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          setShowTotal(true);
        } else if (!showQuestion) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          setShowQuestion(true);
        } else if (!showValue) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          setShowValue(true);
        }
        // Se showValue já está true, deixa avançar normalmente
      } else if (e.key === 'ArrowLeft') {
        // Se não está no estado inicial, volta tudo de uma vez
        if (showValue || showQuestion || showTotal || visibleItems > 1) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          setShowValue(false);
          setShowQuestion(false);
          setShowTotal(false);
          setVisibleItems(1);
        }
        // Se já está no estado inicial (visibleItems === 1), deixa voltar para o slide anterior
      }
    };

    window.addEventListener('keydown', handleKeyDown, true);
    return () => window.removeEventListener('keydown', handleKeyDown, true);
  }, [visibleItems, showTotal, showQuestion, showValue, items.length]);

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <MeshGradient
          className="w-full h-full"
          colors={blueColors}
          speed={0.15}
          minPixelRatio={1.0}
        />
      </div>

      <div className="w-full h-full flex flex-col px-12 py-6 relative z-10">
        {/* Título - Posição fixa no topo */}
        <div className="mb-4 flex-shrink-0">
          <h1 className="text-2xl md:text-3xl font-light text-white font-sans text-center">
            VALOR DA IMPLEMENTAÇÃO 1:1 DA CÉLULA TÉRMINUS – VEIL
          </h1>
        </div>

        {/* Container com scroll */}
        <div 
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto max-w-5xl mx-auto w-full [&::-webkit-scrollbar]:hidden"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {/* Lista de itens */}
          <div className="space-y-2 mb-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-6 text-white"
                style={{ visibility: index < visibleItems ? 'visible' : 'hidden', display: index < visibleItems ? 'flex' : 'none' }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: index < visibleItems ? 1 : 0, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-start gap-2 flex-1"
                >
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-white mt-2" />
                  <p className="text-sm md:text-base font-light font-sans leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index < visibleItems ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex-shrink-0 min-w-[130px] text-right"
                >
                  <span className="text-sm md:text-base font-normal text-white font-sans">
                    {item.value}
                  </span>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Total Recebido */}
          {showTotal && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-purple-900/40 to-purple-800/30 border-2 border-purple-500 rounded-xl px-6 py-4 mb-6"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl md:text-2xl font-bold text-white font-sans">
                  TOTAL RECEBIDO (VALOR DE MERCADO):
                </h2>
                <p className="text-2xl md:text-3xl font-bold text-purple-400 font-sans">
                  R$ 192.000,00
                </p>
              </div>
            </motion.div>
          )}

          {/* Proposta com desconto */}
          {showQuestion && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-3 pb-4"
            >
              <p className="text-lg md:text-xl text-gray-300 font-light font-sans">
                Se você pudesse ter um desconto de <span className="text-white font-semibold">75%</span> desse valor…
              </p>
              
              <p className="text-xl md:text-2xl text-yellow-400 font-light font-sans">
                você seria meu cliente hoje por
              </p>
              
              {/* Espaço reservado para o valor */}
              <div className="min-h-[80px] flex items-center justify-center">
                {showValue && (
                  <motion.p
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-6xl font-bold text-yellow-400 font-sans"
                  >
                    R$ 47.625,00?
                  </motion.p>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

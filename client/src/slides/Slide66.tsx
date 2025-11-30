import { motion } from 'framer-motion';
import { MeshGradient } from "@paper-design/shaders-react";
import { useState, useEffect } from 'react';

export default function Slide66() {
  const [showValues, setShowValues] = useState(false);

  // Tom de azul correto
  const blueColors = [
    "#0a0a0a",
    "#1a2332",
    "#2d3e50",
    "#3d5a80",
    "#1a1a1a",
  ];

  const items = [
    "Plano de Ação Personalizado de 90 dias",
    "Grupo de WhatsApp do Projeto",
    "IASDR operacional (recepção, triagem, qualificação básica, pipeline, reporting)",
    "IA de Compromisso (agendamentos, lembretes, no-show, briefing pro closer)",
    "IA de Follow-up (9 tentativas, retomada contextual, reengajamento multicanal)",
    "IA Estrategista (análise de funil, gargalos, recomendações de testes/ajustes)",
    "Infraestrutura completa + Portal do Cliente (VPS, integrações, painéis)",
    "6 Tutorais 1:1 com o Gabriel",
    "Playbook Operacional da Célula Términus",
    "Trilha de Vídeos – Portal e Painéis",
    "Trilha de Vídeos – Automações e IAs",
    "Bônus 1: Acesso antecipado à Inteligência Coletiva Borusa (BCF v2, em validação)",
    "Bônus 2: Arsenal Open Source (\"Caixa de Pandora\")",
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        if (!showValues) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          setShowValues(true);
        }
        // Se showValues já é true, deixa avançar normalmente
      } else if (e.key === 'ArrowLeft') {
        if (showValues) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          setShowValues(false);
        }
        // Se showValues é false, deixa voltar ao slide anterior
      }
    };

    window.addEventListener('keydown', handleKeyDown, true);
    return () => window.removeEventListener('keydown', handleKeyDown, true);
  }, [showValues]);

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

      <div className="w-full h-full flex gap-24 px-16 py-12 relative z-10">
        {/* Lado Esquerdo - Título e Valor */}
        <div className="flex-shrink-0 w-[500px] flex flex-col justify-center">
          {/* Título */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white font-sans leading-tight">
              PROGRAMA DE IMPLEMENTAÇÃO DA CÉLULA TÉRMINUS – NEST
            </h1>
          </motion.div>

          {/* Box de Valor com linha vertical */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="relative pl-8"
          >
            {/* Linha vertical decorativa */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-400 shadow-lg shadow-cyan-500/50" />
            
            <div className="space-y-6">
              {/* VALOR com destaque */}
              <motion.h2
                animate={{
                  textShadow: [
                    '0 0 20px rgba(34, 211, 238, 0.5)',
                    '0 0 40px rgba(34, 211, 238, 0.8)',
                    '0 0 20px rgba(34, 211, 238, 0.5)'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-5xl md:text-6xl font-bold text-cyan-400 font-sans tracking-wide"
              >
                VALOR
              </motion.h2>
              
              {/* Preço à vista */}
              <motion.p
                animate={{ opacity: showValues ? 1 : 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-white font-sans"
                style={{ visibility: showValues ? 'visible' : 'hidden' }}
              >
                R$20.000,00 - à vista
              </motion.p>
              
              {/* Parcelado */}
              <motion.p
                animate={{ opacity: showValues ? 1 : 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-2xl md:text-3xl font-light text-gray-300 font-sans"
                style={{ visibility: showValues ? 'visible' : 'hidden' }}
              >
                6x de R$4.000,00
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Lado Direito - Lista de Entregáveis */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="flex-1 flex items-center"
        >
          <div className="space-y-3 w-full">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.05, duration: 0.5 }}
                className="flex items-start gap-3 text-white"
              >
                <div className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-cyan-400 mt-2 shadow-lg shadow-cyan-500/50" />
                <p className="text-base md:text-lg font-light font-sans leading-relaxed">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

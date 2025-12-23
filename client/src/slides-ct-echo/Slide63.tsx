import { motion } from 'framer-motion';
import { MeshGradient } from "@paper-design/shaders-react";
import { useState, useEffect } from 'react';

export default function Slide63() {
  const [visibleRoles, setVisibleRoles] = useState(1);
  const [showTotal, setShowTotal] = useState(false);
  const [showPains, setShowPains] = useState(false);

  // Tom de preto carvão
  const blackColors = [
    "#0a0a0a",
    "#1a1a1a",
    "#0f0f0f",
    "#141414",
    "#050505",
  ];

  const roles = [
    { title: "ENGENHEIRO / ARQUITETO DE IA COMERCIAL", price: "R$ 36.000,00 / 90 dias" },
    { title: "DEVOPS + INTEGRAÇÕES (VPS, WhatsApp, CRM, e-mail)", price: "R$ 24.000,00 / 90 dias" },
    { title: "ESTRATEGISTA COMERCIAL / REVOPS", price: "R$ 27.000,00 / 90 dias" },
    { title: "CS / TUTOR SÊNIOR (onboarding, treinamentos, tutorias)", price: "R$ 15.000,00 / 90 dias" },
  ];

  const pains = [
    "Recrutar, entrevistar e treinar cada pessoa desse time.",
    "Risco trabalhista, encargos e contrato CLT/PJ.",
    "Gestão diária, alinhamento de agenda e conflitos de prioridade.",
    "Ramp-up de 2–3 meses até o time entender seu funil.",
    "Dependência total de pessoas: se alguém sai, você volta pra estaca zero."
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        if (visibleRoles < roles.length) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          setVisibleRoles(prev => prev + 1);
        } else if (!showTotal) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          setShowTotal(true);
        } else if (!showPains) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          setShowPains(true);
        }
        // Se showPains já está true, deixa avançar normalmente
      } else if (e.key === 'ArrowLeft') {
        if (showPains) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          setShowPains(false);
        } else if (showTotal) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          setShowTotal(false);
        } else if (visibleRoles > 1) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          setVisibleRoles(prev => prev - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown, true);
    return () => window.removeEventListener('keydown', handleKeyDown, true);
  }, [visibleRoles, showTotal, showPains, roles.length]);

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <MeshGradient
          className="w-full h-full"
          colors={blackColors}
          speed={0.1}
          minPixelRatio={1.0}
        />
      </div>

      <div className="w-full h-full flex relative z-10">
        {/* Lado Esquerdo - Custos */}
        <div className="w-1/2 h-full flex flex-col justify-center px-12 py-16 border-r border-gray-700/50">
          {/* Lista de Roles */}
          <div className="space-y-5 mb-8">
            {roles.slice(0, visibleRoles).map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-1"
              >
                <h3 className="text-lg md:text-xl font-light text-white font-sans leading-tight">
                  {role.title}
                </h3>
                <p className="text-base md:text-lg text-gray-400 font-light font-sans">
                  {role.price}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Total */}
          {showTotal && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-red-900/40 to-red-800/30 border-2 border-red-500 rounded-xl px-6 py-4"
            >
              <h2 className="text-lg md:text-xl font-semibold text-white mb-1 font-sans">
                TOTAL DO TIME 1:1 POR 90 DIAS:
              </h2>
              <p className="text-3xl md:text-4xl font-bold text-red-400 font-sans">
                R$ 102.000,00
              </p>
            </motion.div>
          )}
        </div>

        {/* Lado Direito - Dores */}
        <div className="w-1/2 h-full flex flex-col justify-center px-12 py-16">
          {showPains && (
            <>
              {/* Título */}
              <motion.h2
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-3xl font-bold text-red-400 mb-8 font-sans leading-tight"
              >
                ALÉM DE TODA A DOR DE CABEÇA:
              </motion.h2>

              {/* Lista de Dores */}
              <div className="space-y-4">
                {pains.map((pain, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-red-500 mt-2" />
                    <p className="text-base md:text-lg text-gray-300 font-light font-sans leading-relaxed">
                      {pain}
                    </p>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { MeshGradient } from "@paper-design/shaders-react";

export default function Slide67() {
  const [showValor, setShowValor] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && !showValor) {
        e.preventDefault();
        e.stopPropagation();
        setShowValor(true);
      } else if (e.key === 'ArrowLeft' && showValor) {
        e.preventDefault();
        e.stopPropagation();
        setShowValor(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown, true);
    return () => window.removeEventListener('keydown', handleKeyDown, true);
  }, [showValor]);

  const blueColors = ["#0a0a0a", "#1a2332", "#2d3e50", "#3d5a80", "#1a1a1a"];
  const goldColors = ["#b8860b", "#d4a017", "#daa520", "#b8860b", "#8b6914"];

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden flex">
      {/* Lado Esquerdo - Azul com MeshGradient */}
      <div className="w-1/2 relative">
        <div className="absolute inset-0">
          <MeshGradient className="w-full h-full" colors={blueColors} speed={0.15} minPixelRatio={1.0} />
        </div>

        <div className="relative z-10 w-full h-full flex flex-col justify-center px-16">
          {/* Texto pequeno superior */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm text-gray-300 font-light font-sans uppercase tracking-wide mb-12"
          >
            OPÇÃO DE FAZER PARTE DA IMPLEMENTAÇÃO<br />DA CÉLULA TÉRMINUS – NEST
          </motion.p>

          {/* Título PREÇO DO PROGRAMA */}
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-5xl font-light text-white font-sans leading-tight mb-16"
          >
            PREÇO DO<br />PROGRAMA
          </motion.h1>

          {/* PREÇO REGULAR */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="relative space-y-4 pl-6"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-500" />

            <h2 className="text-2xl font-light text-cyan-400 font-sans mb-4">
              PREÇO REGULAR
            </h2>

            <p className="text-4xl font-bold text-white font-sans mb-3">
              6x de R$ 4.000,00
            </p>

            <div className="flex items-center gap-3 text-white">
              <span className="text-xl">♦</span>
              <p className="text-xl font-light font-sans">
                À vista: R$ 20.000,00
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lado Direito - Dourado com MeshGradient */}
      <div className="w-1/2 relative">
        <div className="absolute inset-0">
          <MeshGradient className="w-full h-full" colors={goldColors} speed={0.15} minPixelRatio={1.0} />
        </div>

        <div className="relative z-10 w-full h-full flex flex-col justify-center px-16">
          {/* Asterisco */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 0.3, scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-white font-bold text-9xl mb-12 self-center"
          >
            *
          </motion.div>

          {/* Título VALOR SANGUE NO OLHO */}
          <motion.h1
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-5xl font-light text-white font-sans leading-tight mb-16"
          >
            VALOR SANGUE<br />NO OLHO
          </motion.h1>

          {/* Valores - Posição fixa, apenas opacity muda */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showValor ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            <h2 className="text-2xl font-light text-yellow-400 font-sans mb-4">
              VALOR ESPECIAL
            </h2>

            <p className="text-4xl font-bold text-white font-sans mb-3">
              R$ 9.000,00 à vista
            </p>

            <p className="text-xl font-light font-sans text-white/90">
              (Pix ou até 12x no cartão)
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

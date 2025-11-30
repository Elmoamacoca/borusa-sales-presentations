import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { MeshGradient } from "@paper-design/shaders-react";

export default function Slide67() {
  const [step, setStep] = useState(0); // 0 = inicial, 1 = mostra lado direito, 2 = mostra valor

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && step < 2) {
        e.preventDefault();
        e.stopPropagation();
        setStep(step + 1);
      } else if (e.key === 'ArrowLeft' && step > 0) {
        e.preventDefault();
        e.stopPropagation();
        setStep(step - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown, true);
    return () => window.removeEventListener('keydown', handleKeyDown, true);
  }, [step]);

  const blueColors = ["#0a0a0a", "#1a2332", "#2d3e50", "#3d5a80", "#1a1a1a"];
  const goldColors = ["#b8860b", "#d4a017", "#daa520", "#b8860b", "#8b6914"];

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden flex">
      {/* Lado Esquerdo - Azul com MeshGradient */}
      <motion.div
        initial={{ width: '100%' }}
        animate={{ width: step >= 1 ? '50%' : '100%' }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="relative"
      >
        <div className="absolute inset-0">
          <MeshGradient className="w-full h-full" colors={blueColors} speed={0.15} minPixelRatio={1.0} />
        </div>

        <motion.div
          className="relative z-10 w-full h-full"
          initial={{ paddingLeft: '0', paddingRight: '0' }}
          animate={{
            paddingLeft: step >= 1 ? '64px' : '0',
            paddingRight: step >= 1 ? '64px' : '0'
          }}
          transition={{ duration: 0.4 }}
        >
          {/* Texto pequeno superior - Altura: 180px */}
          <div style={{ position: 'absolute', top: '180px', left: step >= 1 ? '64px' : '50%', right: '64px', transform: step >= 1 ? 'none' : 'translateX(-50%)', width: step >= 1 ? 'auto' : '600px' }}>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, textAlign: step >= 1 ? 'left' : 'center' }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-base text-gray-300 font-light font-sans uppercase tracking-wide"
            >
              OPÇÃO DE FAZER PARTE DA IMPLEMENTAÇÃO<br />DA CÉLULA TÉRMINUS – NEST
            </motion.p>
          </div>

          {/* Título PREÇO DO PROGRAMA - Altura: 280px */}
          <div style={{ position: 'absolute', top: '280px', left: step >= 1 ? '64px' : '50%', right: '64px', transform: step >= 1 ? 'none' : 'translateX(-50%)', width: step >= 1 ? 'auto' : '600px' }}>
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0, textAlign: step >= 1 ? 'left' : 'center' }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-6xl font-light text-white font-sans leading-tight"
            >
              PREÇO DO<br />PROGRAMA
            </motion.h1>
          </div>

          {/* PREÇO REGULAR - Altura: 480px */}
          <div style={{ position: 'absolute', top: '480px', left: step >= 1 ? '88px' : '50%', right: '64px', transform: step >= 1 ? 'none' : 'translateX(-50%)', width: step >= 1 ? 'auto' : '600px' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="relative space-y-5"
              style={{ paddingLeft: step >= 1 ? '0' : '24px' }}
            >
              <div className="absolute left-[-24px] top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-500" />

              <h2 className="text-3xl font-light text-cyan-400 font-sans mb-5">
                PREÇO REGULAR
              </h2>

              <p className="text-5xl font-bold text-white font-sans mb-4">
                6x de R$ 4.000,00
              </p>

              <div className="flex items-center gap-3 text-white">
                <span className="text-2xl">♦</span>
                <p className="text-2xl font-light font-sans">
                  À vista: R$ 20.000,00
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Lado Direito - Dourado com MeshGradient */}
      <AnimatePresence>
        {step >= 1 && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '50%', opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="relative overflow-hidden"
          >
            <div className="absolute inset-0">
              <MeshGradient className="w-full h-full" colors={goldColors} speed={0.15} minPixelRatio={1.0} />
            </div>

            <div className="relative z-10 w-full h-full">
              {/* Asterisco - Altura: 80px */}
              <div style={{ position: 'absolute', top: '80px', left: '50%', transform: 'translateX(-50%)' }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ opacity: 0.3, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, duration: 1 }}
                  className="text-white font-bold"
                  style={{ fontSize: '180px' }}
                >
                  *
                </motion.div>
              </div>

              {/* Título VALOR SANGUE NO OLHO - Altura: 280px */}
              <div style={{ position: 'absolute', top: '280px', left: '64px', right: '64px' }}>
                <motion.h1
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                  className="text-6xl font-light text-white font-sans leading-tight"
                >
                  VALOR SANGUE<br />NO OLHO
                </motion.h1>
              </div>

              {/* Valores - Altura: 480px */}
              <div style={{ position: 'absolute', top: '480px', left: '64px', right: '64px' }}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: step >= 2 ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative space-y-5"
                >
                  <div style={{ height: '32px' }}></div>
                  
                  <p className="text-5xl font-bold text-white font-sans mb-4">
                    R$ 9.000,00 à vista
                  </p>

                  <p className="text-2xl font-light font-sans text-white/90">
                    (Pix ou até 12x no cartão)
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

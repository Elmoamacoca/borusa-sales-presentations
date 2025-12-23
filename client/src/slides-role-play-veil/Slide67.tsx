import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { MeshGradient } from "@paper-design/shaders-react";
import { usePresentationStore } from '../store/presentationStore';

export default function Slide67() {
  const [step, setStep] = useState(0); // 0 = inicial, 1 = mostra lado direito, 2 = mostra valor

  const { setCurrentSlide } = usePresentationStore();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Navegação interna do slide (steps 0 e 1)
      if (e.key === 'ArrowRight' && step < 2) {
        e.preventDefault();
        e.stopPropagation();
        setStep(step + 1);
      } else if (e.key === 'ArrowLeft' && step > 0) {
        e.preventDefault();
        e.stopPropagation();
        setStep(step - 1);
      }
      // Bloquear seta direita no step 2 - apenas tecla 1 funciona
      else if (e.key === 'ArrowRight' && step === 2) {
        e.preventDefault();
        e.stopPropagation();
        // Não faz nada - bloqueia a navegação
      }
      // Navegação condicional com tecla 1 (apenas no step 2) - vai para ECHO
      else if (step === 2 && e.key === '1') {
        e.preventDefault();
        e.stopPropagation();
        setCurrentSlide('slide-68');
      }
    };

    window.addEventListener('keydown', handleKeyDown, true);
    return () => window.removeEventListener('keydown', handleKeyDown, true);
  }, [step, setCurrentSlide]);

  const blueColors = ["#0a0a0a", "#1a2332", "#2d3e50", "#3d5a80", "#1a1a1a"];
  const yellowColors = ["#854d0e", "#eab308", "#facc15", "#ca8a04", "#713f12"];

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

        {step === 0 ? (
          // Estado inicial - Conteúdo centralizado
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
            {/* Texto pequeno superior */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-base text-gray-300 font-light font-sans uppercase tracking-wide text-center mb-12"
            >
              OPÇÃO DE FAZER PARTE DA IMPLEMENTAÇÃO<br />DA CÉLULA TÉRMINUS – VEIL
            </motion.p>

            {/* Título PREÇO DO PROGRAMA */}
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-6xl font-light text-white font-sans leading-tight text-center mb-16"
            >
              PREÇO DO<br />PROGRAMA
            </motion.h1>

            {/* PREÇO REGULAR */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="relative space-y-5 pl-6"
              style={{ transform: 'translateX(60px)' }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-500" />

              <h2 className="text-3xl font-light text-cyan-400 font-sans mb-8">
                PREÇO REGULAR
              </h2>

              <div className="space-y-6">
                {/* Implementação */}
                <div className="space-y-1">
                  <p className="text-xl font-bold text-cyan-400 font-sans">
                    Implementação
                  </p>
                  <p className="text-3xl font-bold text-white font-sans">
                    R$18.000,00 à vista
                  </p>
                </div>

                {/* Licença de Uso */}
                <div className="space-y-1">
                  <p className="text-xl font-bold text-cyan-400 font-sans">
                    Licença de Uso
                  </p>
                  <p className="text-3xl font-bold text-white font-sans">
                    R$2.500,00/Mês
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        ) : (
          // Estado com lado direito - Posicionamento absoluto
          <div className="relative z-10 w-full h-full">
            {/* Texto pequeno superior - Altura: 60px */}
            <div style={{ position: 'absolute', top: '60px', left: '64px', right: '64px' }}>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-base text-gray-300 font-light font-sans uppercase tracking-wide"
              >
                OPÇÃO DE FAZER PARTE DA IMPLEMENTAÇÃO<br />DA CÉLULA TÉRMINUS – VEIL
              </motion.p>
            </div>

            {/* Título PREÇO DO PROGRAMA - Altura: 140px */}
            <div style={{ position: 'absolute', top: '140px', left: '64px', right: '64px' }}>
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="text-6xl font-light text-white font-sans leading-tight"
              >
                PREÇO DO<br />PROGRAMA
              </motion.h1>
            </div>

            {/* PREÇO REGULAR - Altura: 380px */}
            <div style={{ position: 'absolute', top: '380px', left: '88px', right: '64px' }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="relative space-y-5"
              >
                <div className="absolute left-[-24px] top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-500" />

                <h2 className="text-5xl font-light text-cyan-400 font-sans mb-6">
                  PREÇO REGULAR
                </h2>

                <div className="space-y-5">
                  {/* Implementação */}
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-cyan-400 font-sans">
                      Implementação
                    </p>
                    <p className="text-4xl font-bold text-white font-sans">
                      R$18.000,00 à vista
                    </p>
                  </div>

                  {/* Licença de Uso */}
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-cyan-400 font-sans">
                      Licença de Uso
                    </p>
                    <p className="text-4xl font-bold text-white font-sans">
                      R$2.500,00/Mês
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
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
              <MeshGradient className="w-full h-full" colors={yellowColors} speed={0.15} minPixelRatio={1.0} />
            </div>

            <div className="relative z-10 w-full h-full">
              {/* Asterisco - Canto superior direito */}
              <div style={{ position: 'absolute', top: '20px', right: '40px' }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ opacity: 0.3, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, duration: 1 }}
                  className="text-white font-bold"
                  style={{ fontSize: '120px' }}
                >
                  *
                </motion.div>
              </div>

              {/* Título VALOR SANGUE NO OLHO - Altura: 140px */}
              <div style={{ position: 'absolute', top: '140px', left: '64px', right: '64px' }}>
                <motion.h1
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                  className="text-6xl font-light text-white font-sans leading-tight"
                >
                  VALOR SANGUE<br />NO OLHO
                </motion.h1>
              </div>

              {/* PREÇO PROTAGONISTA - Altura: 380px (igual ao PREÇO REGULAR) */}
              <div style={{ position: 'absolute', top: '380px', left: '88px', right: '64px' }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: step >= 2 ? 1 : 0, y: step >= 2 ? 0 : 20 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  className="relative space-y-5"
                >
                  <div className="absolute left-[-24px] top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-300 to-yellow-500" />

                  <h2 className="text-5xl font-light text-yellow-300 font-sans mb-6">
                    PREÇO PROTAGONISTA
                  </h2>

                  <div className="space-y-5">
                    {/* Implementação */}
                    <div className="space-y-1">
                      <p className="text-2xl font-bold text-yellow-300 font-sans">
                        Implementação
                      </p>
                      <p className="text-4xl font-bold text-white font-sans">
                        R$11.000,00
                      </p>
                    </div>

                    {/* Licença de Uso */}
                    <div className="space-y-1">
                      <p className="text-2xl font-bold text-yellow-300 font-sans">
                        Licença de Uso
                      </p>
                      <p className="text-4xl font-bold text-white font-sans">
                        R$1.500,00/Mês
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Slide67() {
  const [showSangueNoOlho, setShowSangueNoOlho] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Bloquear seta direita completamente - apenas teclas 1 e 2 funcionam
      if (e.key === 'ArrowRight') {
        if (!showSangueNoOlho) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          setShowSangueNoOlho(true);
        } else {
          // Bloquear avanço mesmo com valores visíveis
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
        }
      } else if (e.key === 'ArrowLeft') {
        if (showSangueNoOlho) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          setShowSangueNoOlho(false);
        }
        // Se está oculto, deixa voltar ao slide anterior
      }
    };

    window.addEventListener('keydown', handleKeyDown, true);
    return () => window.removeEventListener('keydown', handleKeyDown, true);
  }, [showSangueNoOlho]);

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden flex">
      {/* Lado Esquerdo - Azul Escuro */}
      <div className="w-1/2 bg-gradient-to-br from-[#0a1628] via-[#1a2a3e] to-[#0a1628] flex items-center justify-center px-16 py-12">
        <div className="max-w-xl">
          {/* Título pequeno */}
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm md:text-base text-gray-300 font-light font-sans mb-8 uppercase tracking-wide"
          >
            OPÇÃO DE FAZER PARTE DA IMPLEMENTAÇÃO<br />DA CÉLULA TÉRMINUS – NEST
          </motion.p>

          {/* PREÇO DO PROGRAMA */}
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-5xl md:text-6xl font-light text-white font-sans mb-12 leading-tight"
          >
            PREÇO DO<br />PROGRAMA
          </motion.h1>

          {/* PREÇO REGULAR */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="relative pl-6 space-y-4"
          >
            {/* Linha vertical */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-500" />

            <h2 className="text-3xl md:text-4xl font-light text-cyan-400 font-sans mb-4">
              PREÇO REGULAR
            </h2>

            <p className="text-4xl md:text-5xl font-bold text-white font-sans">
              6x de R$ 4.000,00
            </p>

            <div className="flex items-center gap-3 text-white">
              <span className="text-2xl">♦</span>
              <p className="text-2xl md:text-3xl font-light font-sans">
                À vista: R$ 20.000,00
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lado Direito - Dourado/Amarelo */}
      <div className="w-1/2 bg-gradient-to-br from-[#b8860b] via-[#d4a017] to-[#b8860b] flex items-center justify-center px-16 py-12 relative">
        {/* Asterisco decorativo */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 0.15, scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="absolute top-12 right-12 text-white text-9xl font-bold"
        >
          *
        </motion.div>

        <div className="max-w-xl relative z-10">
          {/* Título pequeno invisível para manter alinhamento */}
          <p className="text-sm md:text-base text-transparent font-light font-sans mb-8 uppercase tracking-wide">
            ESPAÇO RESERVADO<br />PARA ALINHAMENTO
          </p>

          {/* VALOR SANGUE NO OLHO */}
          <motion.h1
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-5xl md:text-6xl font-light text-white font-sans mb-12 leading-tight"
          >
            VALOR SANGUE<br />NO OLHO
          </motion.h1>

          {/* Valores - Espaço reservado */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showSangueNoOlho ? 1 : 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
            style={{ visibility: showSangueNoOlho ? 'visible' : 'hidden' }}
          >
            <p className="text-4xl md:text-5xl font-bold text-white font-sans">
              R$ 9.000,00 à vista
            </p>

            <p className="text-2xl md:text-3xl font-light text-white font-sans">
              (Pix ou até 12x no cartão)
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

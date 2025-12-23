import { motion } from 'framer-motion';
import { useState } from 'react';

// Slide 2025 com zoom - versão atualizada
export default function Slide2025() {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="relative z-20 w-full h-screen overflow-hidden"
    >
      <div className="grid grid-cols-2 w-full h-full">
        {/* Coluna Esquerda - Texto */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center justify-center px-12"
        >
          <div className="space-y-8">
            {/* Ano com destaque */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h3 className="text-4xl font-semibold text-yellow-500 mb-2 font-sans">2025</h3>
              <div className="w-16 h-1 bg-yellow-500"></div>
            </motion.div>

            {/* Texto */}
            <p className="text-xl md:text-2xl text-white leading-relaxed font-light font-sans">
              A mesma cabeça de operação, com IA como motor. O que era feito manualmente em operações como apostas online, hoje o projeto é utilizado IA em cima de dados.
            </p>
          </div>
        </motion.div>

        {/* Coluna Direita - Imagem */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex items-center justify-center px-8 py-8"
        >
          <div className="relative inline-block">
            <img
              src="/assets/ia-dashboard.jpg"
              alt="Dashboard IA"
              onClick={() => setIsZoomed(true)}
              className="max-h-[85vh] w-auto object-contain rounded-lg border-2 border-yellow-500/30 shadow-2xl transition-transform duration-300 hover:scale-105 cursor-pointer"
              style={{
                imageRendering: 'high-quality',
                WebkitFontSmoothing: 'antialiased',
              }}
            />
            {/* Brilho sutil atrás da imagem */}
            <div className="absolute inset-0 bg-yellow-500/10 blur-2xl rounded-lg -z-10"></div>
          </div>
        </motion.div>
      </div>
    </motion.div>

    {/* Modal de Zoom */}
    {isZoomed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 right-0 bottom-0 z-[9999] flex items-center justify-center bg-black/90 p-8"
          onClick={() => setIsZoomed(false)}
        >
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            src="/assets/ia-dashboard.jpg"
            alt="Dashboard IA"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg border-2 border-yellow-500/50 shadow-2xl"
            style={{
              imageRendering: 'high-quality',
              WebkitFontSmoothing: 'antialiased',
            }}
          />
        </motion.div>
      )}
    </>
  );
}

import { motion } from 'framer-motion';
import { MeshGradient } from "@paper-design/shaders-react";

export default function Slide28() {
  const blueColors = [
    "#0a0a0a",
    "#1a2332",
    "#2d3e50",
    "#3d5a80",
    "#1a1a1a",
  ];

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden">
      {/* Fundo animado azul */}
      <div className="absolute inset-0 z-0">
        <MeshGradient
          className="w-full h-full"
          colors={blueColors}
          speed={0.15}
          minPixelRatio={2.0}
        />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 w-full h-full flex flex-col px-8 py-8">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-4"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-white font-sans">
            FLUXO COMERCIAL ATUAL
          </h1>
          <div className="w-64 h-1 bg-red-500 mt-2"></div>
        </motion.div>

        {/* Imagem do Fluxo Comercial */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex-1 w-full bg-white rounded-lg shadow-2xl overflow-auto flex items-center justify-center p-4"
          style={{ pointerEvents: 'auto' }}
        >
          <img 
            src="/fluxo-comercial-atual.jpg" 
            alt="Fluxo Comercial Atual"
            className="max-w-full h-auto object-contain"
            style={{ maxHeight: '100%' }}
          />
        </motion.div>


      </div>
    </div>
  );
}

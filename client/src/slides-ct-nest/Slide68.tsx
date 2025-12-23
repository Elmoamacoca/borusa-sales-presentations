import { motion } from 'framer-motion';
import { MeshGradient } from "@paper-design/shaders-react";

export default function Slide68() {
  // Tons de preto carvão (mesma paleta usada em outros slides)
  const charcoalColors = [
    "#0f0f0f",
    "#1a1a1a",
    "#0a0a0a",
    "#151515",
  ];

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden">
      {/* Fundo animado preto carvão */}
      <div className="absolute inset-0 z-0">
        <MeshGradient
          className="w-full h-full"
          colors={charcoalColors}
          speed={0.15}
          minPixelRatio={1.0}
        />
      </div>

      <div className="relative z-10 w-full h-full flex items-center justify-center px-16">
        {/* Texto Principal em duas linhas */}
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-light text-white font-sans tracking-wide mb-4"
          >
            CÉLULA TÉRMINUS™
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.span
              animate={{
                opacity: [1, 0.6, 1],
                scale: [1, 1.1, 1],
                textShadow: [
                  '0 0 20px rgba(168, 85, 247, 0.5)',
                  '0 0 40px rgba(168, 85, 247, 0.8)',
                  '0 0 20px rgba(168, 85, 247, 0.5)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="text-6xl md:text-7xl lg:text-8xl text-purple-500 font-semibold font-sans"
            >
              ECHO
            </motion.span>
          </motion.h2>
        </div>
      </div>
    </div>
  );
}

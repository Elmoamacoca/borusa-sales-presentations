import { motion } from 'framer-motion';
import { MeshGradient } from "@paper-design/shaders-react";

export default function Veil3() {
  // Tons de preto carvão (fundo escuro animado)
  const charcoalColors = [
    "#0f0f0f",
    "#1a1a1a",
    "#0a0a0a",
    "#151515",
  ];

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <MeshGradient
          className="w-full h-full"
          colors={charcoalColors}
          speed={0.15}
          minPixelRatio={1.0}
        />
      </div>

      <div className="relative z-10 w-full h-full flex items-center justify-start px-16 md:px-20 lg:px-24">
        <div className="max-w-4xl">
          {/* Título Principal */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-light text-white font-sans leading-tight mb-12"
          >
            Eu estou te apresentando uma oportunidade de acelerar o seu negócio...
          </motion.h1>

          {/* Lista de Itens com Losangos Amarelos */}
          <div className="flex flex-col gap-6">
            {/* Item 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="flex items-center gap-4"
            >
              <span className="text-yellow-400 text-4xl md:text-5xl">◆</span>
              <p className="text-3xl md:text-4xl lg:text-5xl font-light text-white font-sans">
                com mais lucro
              </p>
            </motion.div>

            {/* Item 2 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="flex items-center gap-4"
            >
              <span className="text-yellow-400 text-4xl md:text-5xl">◆</span>
              <p className="text-3xl md:text-4xl lg:text-5xl font-light text-white font-sans">
                mais segurança
              </p>
            </motion.div>

            {/* Item 3 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.7 }}
              className="flex items-center gap-4"
            >
              <span className="text-yellow-400 text-4xl md:text-5xl">◆</span>
              <p className="text-3xl md:text-4xl lg:text-5xl font-light text-white font-sans">
                mais praticidade
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

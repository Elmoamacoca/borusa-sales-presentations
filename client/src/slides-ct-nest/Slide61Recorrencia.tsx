import { motion } from 'framer-motion';
import { MeshGradient } from "@paper-design/shaders-react";
import { GitBranch, Lightbulb, Zap, Rocket } from 'lucide-react';

export default function Slide61Recorrencia() {
  const charcoalColors = [
    "#0f0f0f",
    "#1a1a1a",
    "#252525",
    "#1e1e1e",
    "#141414",
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

      <div className="w-full h-full flex relative z-10">
        {/* Conteúdo à Esquerda - 50% */}
        <div className="w-[50%] h-full flex flex-col justify-center px-8 md:px-12 lg:px-16 relative z-10">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-8 font-sans"
          >
            RELEASE NOTES
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-base md:text-lg lg:text-xl font-light text-white leading-relaxed mb-8">
              Seu sistema <span className="text-yellow-400 font-semibold">nunca fica parado</span>:
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-yellow-400 mt-2"></div>
                <p className="text-base md:text-lg font-light text-white leading-relaxed">
                  <span className="font-semibold text-yellow-400">Release Notes Semanais:</span> Ex: "Versão 2.3 - Nova técnica de negociação";
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-yellow-400 mt-2"></div>
                <p className="text-base md:text-lg font-light text-white leading-relaxed">
                  <span className="font-semibold text-yellow-400">Atualizações de Base:</span> Prompts otimizados e conhecimento curado;
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-yellow-400 mt-2"></div>
                <p className="text-base md:text-lg font-light text-white leading-relaxed">
                  <span className="font-semibold text-yellow-400">Melhorias de Performance:</span> Velocidade, latência e precisão;
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-yellow-400 mt-2"></div>
                <p className="text-base md:text-lg font-light text-white leading-relaxed">
                  <span className="font-semibold text-yellow-400">Roadmap Futuro:</span> Você tem visibilidade do que vem por aí.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Animação à Direita - 50% */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-[50%] h-full relative overflow-hidden flex items-center justify-center"
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            width: '50vw',
            height: '100%',
          }}
        >
          <div className="relative w-full max-w-lg px-12 py-16">
            {/* Grid de 4 cards */}
            <div className="grid grid-cols-1 gap-6">
              
              {/* Card 1: Release Notes */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="bg-gradient-to-r from-yellow-400/20 to-yellow-600/10 border-2 border-yellow-400 rounded-xl p-5 backdrop-blur-md"
                style={{ boxShadow: '0 4px 20px rgba(212, 160, 23, 0.3)' }}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-yellow-400 p-3 rounded-lg flex-shrink-0">
                    <GitBranch className="w-7 h-7 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1 font-sans">Release Notes</h3>
                    <p className="text-gray-300 text-sm font-sans">Semanais com novidades</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Atualizações */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="bg-gradient-to-r from-yellow-400/20 to-yellow-600/10 border-2 border-yellow-400 rounded-xl p-5 backdrop-blur-md"
                style={{ boxShadow: '0 4px 20px rgba(212, 160, 23, 0.3)' }}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-yellow-400 p-3 rounded-lg flex-shrink-0">
                    <Lightbulb className="w-7 h-7 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1 font-sans">Atualizações</h3>
                    <p className="text-gray-300 text-sm font-sans">De base de conhecimento</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 3: Performance */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="bg-gradient-to-r from-yellow-400/20 to-yellow-600/10 border-2 border-yellow-400 rounded-xl p-5 backdrop-blur-md"
                style={{ boxShadow: '0 4px 20px rgba(212, 160, 23, 0.3)' }}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-yellow-400 p-3 rounded-lg flex-shrink-0">
                    <Zap className="w-7 h-7 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1 font-sans">Performance</h3>
                    <p className="text-gray-300 text-sm font-sans">Melhorias contínuas</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 4: Roadmap */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="bg-gradient-to-r from-yellow-400/20 to-yellow-600/10 border-2 border-yellow-400 rounded-xl p-5 backdrop-blur-md"
                style={{ boxShadow: '0 4px 20px rgba(212, 160, 23, 0.3)' }}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-yellow-400 p-3 rounded-lg flex-shrink-0">
                    <Rocket className="w-7 h-7 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1 font-sans">Roadmap</h3>
                    <p className="text-gray-300 text-sm font-sans">Visibilidade do futuro</p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

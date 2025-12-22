import { motion } from 'framer-motion';
import { MeshGradient } from "@paper-design/shaders-react";
import { Users, Zap, Heart, TrendingUp } from 'lucide-react';

export default function Slide62Recorrencia() {
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
            VOCÊ NUNCA FICA SOZINHO
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-base md:text-lg lg:text-xl font-light text-white leading-relaxed mb-8">
              Vamos <span className="text-yellow-400 font-semibold">crescer juntos</span> nos próximos 9 meses:
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-yellow-400 mt-2"></div>
                <p className="text-base md:text-lg font-light text-white leading-relaxed">
                  <span className="font-semibold text-yellow-400">Suporte Exclusivo:</span> Equipe dedicada ao seu sucesso;
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-yellow-400 mt-2"></div>
                <p className="text-base md:text-lg font-light text-white leading-relaxed">
                  <span className="font-semibold text-yellow-400">Evolução Contínua:</span> Sistema sempre melhorando com releases semanais;
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-yellow-400 mt-2"></div>
                <p className="text-base md:text-lg font-light text-white leading-relaxed">
                  <span className="font-semibold text-yellow-400">Proteção Garantida:</span> Sua base de conhecimento é seu ativo;
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-yellow-400 mt-2"></div>
                <p className="text-base md:text-lg font-light text-white leading-relaxed">
                  <span className="font-semibold text-yellow-400">Crescimento Exponencial:</span> Cada mês mais eficiente e lucrativo.
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
              
              {/* Card 1: Suporte */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="bg-gradient-to-r from-yellow-400/20 to-yellow-600/10 border-2 border-yellow-400 rounded-xl p-5 backdrop-blur-md"
                style={{ boxShadow: '0 4px 20px rgba(212, 160, 23, 0.3)' }}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-yellow-400 p-3 rounded-lg flex-shrink-0">
                    <Users className="w-7 h-7 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1 font-sans">Suporte</h3>
                    <p className="text-gray-300 text-sm font-sans">Exclusivo e dedicado</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Evolução */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="bg-gradient-to-r from-yellow-400/20 to-yellow-600/10 border-2 border-yellow-400 rounded-xl p-5 backdrop-blur-md"
                style={{ boxShadow: '0 4px 20px rgba(212, 160, 23, 0.3)' }}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-yellow-400 p-3 rounded-lg flex-shrink-0">
                    <Zap className="w-7 h-7 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1 font-sans">Evolução</h3>
                    <p className="text-gray-300 text-sm font-sans">Contínua e constante</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 3: Proteção */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="bg-gradient-to-r from-yellow-400/20 to-yellow-600/10 border-2 border-yellow-400 rounded-xl p-5 backdrop-blur-md"
                style={{ boxShadow: '0 4px 20px rgba(212, 160, 23, 0.3)' }}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-yellow-400 p-3 rounded-lg flex-shrink-0">
                    <Heart className="w-7 h-7 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1 font-sans">Proteção</h3>
                    <p className="text-gray-300 text-sm font-sans">Garantida e blindada</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 4: Crescimento */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="bg-gradient-to-r from-yellow-400/20 to-yellow-600/10 border-2 border-yellow-400 rounded-xl p-5 backdrop-blur-md"
                style={{ boxShadow: '0 4px 20px rgba(212, 160, 23, 0.3)' }}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-yellow-400 p-3 rounded-lg flex-shrink-0">
                    <TrendingUp className="w-7 h-7 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1 font-sans">Crescimento</h3>
                    <p className="text-gray-300 text-sm font-sans">Exponencial garantido</p>
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

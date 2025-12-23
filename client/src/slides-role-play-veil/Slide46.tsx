import { motion } from 'framer-motion';
import { MeshGradient } from "@paper-design/shaders-react";
import { Brain, Calendar, RefreshCw, Lightbulb } from 'lucide-react';

export default function Slide46() {
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
            VISÃO GERAL DAS IAs
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-base md:text-lg lg:text-xl font-light text-white leading-relaxed mb-8">
              Na Célula Términus – <span className="text-green-400 font-semibold">VEIL</span> você passa a operar com quatro IAs especializadas:
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-green-400 mt-2"></div>
                <p className="text-base md:text-lg font-light text-white leading-relaxed">
                  <span className="font-semibold text-green-400">IA SDR:</span> entrada e triagem dos leads;
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-green-400 mt-2"></div>
                <p className="text-base md:text-lg font-light text-white leading-relaxed">
                  <span className="font-semibold text-green-400">IA de Compromisso:</span> agenda, lembretes e no-show;
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-green-400 mt-2"></div>
                <p className="text-base md:text-lg font-light text-white leading-relaxed">
                  <span className="font-semibold text-green-400">IA de Follow-up:</span> retomada, persistência e fechamento;
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-green-400 mt-2"></div>
                <p className="text-base md:text-lg font-light text-white leading-relaxed">
                  <span className="font-semibold text-green-400">IA Estrategista:</span> leitura do funil, insights e decisões.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Diagrama à Direita - 50% */}
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
              
              {/* Card 1: IA SDR */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="bg-gradient-to-r from-green-400/20 to-green-600/10 border-2 border-green-400 rounded-xl p-5 backdrop-blur-md"
                style={{ boxShadow: '0 4px 20px rgba(212, 160, 23, 0.3)' }}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-green-400 p-3 rounded-lg flex-shrink-0">
                    <Brain className="w-7 h-7 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1 font-sans">IA SDR</h3>
                    <p className="text-gray-300 text-sm font-sans">Entrada e triagem dos leads</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: IA de Compromisso */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="bg-gradient-to-r from-green-400/20 to-green-600/10 border-2 border-green-400 rounded-xl p-5 backdrop-blur-md"
                style={{ boxShadow: '0 4px 20px rgba(212, 160, 23, 0.3)' }}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-green-400 p-3 rounded-lg flex-shrink-0">
                    <Calendar className="w-7 h-7 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1 font-sans">IA de Compromisso</h3>
                    <p className="text-gray-300 text-sm font-sans">Agenda, lembretes e no-show</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 3: IA de Follow-up */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="bg-gradient-to-r from-green-400/20 to-green-600/10 border-2 border-green-400 rounded-xl p-5 backdrop-blur-md"
                style={{ boxShadow: '0 4px 20px rgba(212, 160, 23, 0.3)' }}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-green-400 p-3 rounded-lg flex-shrink-0">
                    <RefreshCw className="w-7 h-7 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1 font-sans">IA de Follow-up</h3>
                    <p className="text-gray-300 text-sm font-sans">Retomada, persistência e fechamento</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 4: IA Estrategista */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="bg-gradient-to-r from-green-400/20 to-green-600/10 border-2 border-green-400 rounded-xl p-5 backdrop-blur-md"
                style={{ boxShadow: '0 4px 20px rgba(212, 160, 23, 0.3)' }}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-green-400 p-3 rounded-lg flex-shrink-0">
                    <Lightbulb className="w-7 h-7 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1 font-sans">IA Estrategista</h3>
                    <p className="text-gray-300 text-sm font-sans">Leitura do funil, insights e decisões</p>
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

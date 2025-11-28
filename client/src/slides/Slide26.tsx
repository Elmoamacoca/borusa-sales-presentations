import { motion } from 'framer-motion';
import { MeshGradient } from "@paper-design/shaders-react";
import { Users, Clock, TrendingDown, AlertTriangle, Hand, Target } from 'lucide-react';

export default function Slide26() {
  const darkColors = [
    "#1a1a1a",
    "#0f0f0f",
    "#262626",
    "#1f1f1f",
    "#141414",
  ];

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden">
      {/* Fundo animado preto */}
      <div className="absolute inset-0 z-0">
        <MeshGradient
          className="w-full h-full"
          colors={darkColors}
          speed={0.15}
          minPixelRatio={1.0}
        />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-start pt-12 px-8">
        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-white mb-16 font-sans text-center"
        >
          RISCOS FAZER SOZINHO SEM O CONHECIMENTO
        </motion.h1>

        {/* Container de hexágonos */}
        <div className="relative w-full max-w-5xl h-[400px] mb-12">
          {/* Hexágono central com alerta */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="absolute top-0 left-1/2 transform -translate-x-1/2"
          >
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-yellow-600 to-yellow-700 clip-hexagon flex items-center justify-center">
                <Users className="w-12 h-12 text-white" strokeWidth={1.5} />
              </div>
              <p className="text-sm text-white text-center mt-3 font-light">Sujar sua base</p>
            </div>
          </motion.div>

          {/* Ícone de alerta central */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-10 h-10 text-black" strokeWidth={2} />
            </div>
          </motion.div>

          {/* Hexágono: Frustrar a equipe (esquerda superior) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute top-20 left-8"
          >
            <div className="relative">
              <div className="w-28 h-28 bg-gradient-to-br from-yellow-600 to-yellow-700 clip-hexagon flex items-center justify-center">
                <Users className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
              <p className="text-sm text-white mt-3 font-light max-w-[120px]">Frustrar a equipe</p>
            </div>
          </motion.div>

          {/* Hexágono: Perder tempo (direita superior) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute top-20 right-8"
          >
            <div className="relative">
              <div className="w-28 h-28 bg-gradient-to-br from-yellow-600 to-yellow-700 clip-hexagon flex items-center justify-center">
                <Clock className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
              <p className="text-sm text-white text-right mt-3 font-light max-w-[120px] ml-auto">Perder tempo</p>
            </div>
          </motion.div>

          {/* Hexágono: Perder caixa (esquerda inferior) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="absolute bottom-0 left-8"
          >
            <div className="relative">
              <div className="w-28 h-28 bg-gradient-to-br from-yellow-600 to-yellow-700 clip-hexagon flex items-center justify-center">
                <TrendingDown className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
              <p className="text-sm text-white mt-3 font-light max-w-[140px]">
                Perder caixa
                <span className="text-xs block text-gray-400">(Deixar dinheiro na mesa & fuga de clientes)</span>
              </p>
            </div>
          </motion.div>

          {/* Hexágono: Perder moral (centro inferior) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
          >
            <div className="relative">
              <div className="w-28 h-28 bg-gradient-to-br from-yellow-600 to-yellow-700 clip-hexagon flex items-center justify-center">
                <Hand className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
              <p className="text-sm text-white text-center mt-3 font-light">Perder moral</p>
            </div>
          </motion.div>

          {/* Hexágono: Perder espaço (direita inferior) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="absolute bottom-0 right-8"
          >
            <div className="relative">
              <div className="w-28 h-28 bg-gradient-to-br from-yellow-600 to-yellow-700 clip-hexagon flex items-center justify-center">
                <Target className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
              <p className="text-sm text-white text-right mt-3 font-light max-w-[160px] ml-auto">
                Perder espaço
                <span className="text-xs block text-gray-400">para a concorrência, por ficar atrasado no timing do mercado</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Frase de fechamento */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="text-center max-w-4xl mt-8"
        >
          <p className="text-lg md:text-xl font-light text-white leading-relaxed">
            Nada gera tanta fuga de talentos quanto a{' '}
            <span className="font-semibold text-yellow-400">intoxicação por leads desqualificados.</span>
          </p>
        </motion.div>
      </div>

      {/* CSS para hexágonos */}
      <style jsx>{`
        .clip-hexagon {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
      `}</style>
    </div>
  );
}

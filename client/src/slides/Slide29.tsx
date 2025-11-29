import { motion } from 'framer-motion';
import { MeshGradient } from "@paper-design/shaders-react";

export default function Slide29() {
  const charcoalColors = [
    "#0f0f0f",
    "#1a1a1a",
    "#252525",
    "#1e1e1e",
    "#141414",
  ];

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden">
      {/* Fundo animado preto carvão */}
      <div className="absolute inset-0 z-0">
        <MeshGradient
          className="w-full h-full"
          colors={charcoalColors}
          speed={0.15}
          minPixelRatio={2.0}
        />
      </div>

      {/* Elementos decorativos dourados - canto superior esquerdo */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-30">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Círculos concêntricos */}
          <circle cx="0" cy="0" r="80" fill="none" stroke="#d4a017" strokeWidth="1" />
          <circle cx="0" cy="0" r="100" fill="none" stroke="#d4a017" strokeWidth="0.5" />
          {/* Linhas */}
          <line x1="0" y1="0" x2="0" y2="180" stroke="#d4a017" strokeWidth="1" />
          <line x1="0" y1="0" x2="180" y2="0" stroke="#d4a017" strokeWidth="1" />
        </svg>
      </div>

      {/* Elementos decorativos dourados - canto inferior direito */}
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-30">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Círculos concêntricos */}
          <circle cx="200" cy="200" r="80" fill="none" stroke="#d4a017" strokeWidth="1" />
          <circle cx="200" cy="200" r="100" fill="none" stroke="#d4a017" strokeWidth="0.5" />
          {/* Linhas */}
          <line x1="200" y1="200" x2="200" y2="20" stroke="#d4a017" strokeWidth="1" />
          <line x1="200" y1="200" x2="20" y2="200" stroke="#d4a017" strokeWidth="1" />
        </svg>
      </div>

      {/* Conteúdo central */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center max-w-6xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight font-sans">
            Sua nova estrutura comercial de{' '}
            <span className="relative inline-block">
              IA
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute bottom-2 left-0 h-2 bg-yellow-500"
              />
            </span>
            {' '}para escalar com lucro previsível
          </h1>
        </motion.div>
      </div>
    </div>
  );
}

import { motion } from 'framer-motion';
import { MeshGradient } from "@paper-design/shaders-react";
import { CheckCircle2 } from 'lucide-react';

export default function Slide47() {
  const charcoalColors = [
    "#0f0f0f",
    "#1a1a1a",
    "#252525",
    "#1e1e1e",
    "#141414",
  ];

  const features = [
    'Recepção inicial automática dos leads nos canais integrados',
    'Triagem leve (pergunta o básico sem cansar o lead)',
    'Qualificação básica (fit, urgência, orçamento aproximado)',
    'Gestão de pipeline inicial (move o lead pelas primeiras etapas)',
    'Reporting básico do topo de funil',
    'Atuação multicanal (WhatsApp, e-mail, Instagram)'
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
            className="text-xl md:text-2xl font-semibold text-white mb-6 font-sans leading-tight"
          >
            <span className="text-purple-400 font-bold">IA SDR</span> <span className="text-white">–</span> SUA PORTA DE ENTRADA INTELIGENTE
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-base md:text-lg font-light text-white leading-relaxed font-sans">
              A <span className="text-purple-400 font-semibold">IA</span> <span className="text-purple-400 font-semibold">SDR</span> é a IA que recebe todo lead que entra, entende quem ele é, por que chegou até você e se faz sentido seguir adiante. Ela limpa a bagunça da entrada e garante que só chega no vendedor quem tem contexto mínimo e fit inicial.
            </p>

            <div>
              <p className="text-base md:text-lg font-semibold text-purple-400 mb-5 font-sans">
                Nesta versão da Célula Términus você recebe:
              </p>

              <div className="space-y-4">
                {features.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                    className="flex items-start gap-3 bg-purple-400/5 border-l-2 border-purple-400 pl-4 py-2.5 rounded-r"
                  >
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm md:text-base font-light text-white leading-relaxed font-sans">
                      {item}
                    </p>
                  </motion.div>
                ))}
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
          <div className="relative w-full max-w-md h-full flex items-center justify-center px-12">
            
            {/* Funil de entrada */}
            <svg viewBox="0 0 300 400" className="w-full h-full">
              <defs>
                <linearGradient id="funnelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#a855f7', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: '#a855f7', stopOpacity: 0.1 }} />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Funil principal */}
              <motion.path
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 1, pathLength: 1 }}
                transition={{ delay: 0.5, duration: 1.5 }}
                d="M 50 50 L 250 50 L 200 200 L 200 350 L 100 350 L 100 200 Z"
                fill="url(#funnelGrad)"
                stroke="#a855f7"
                strokeWidth="3"
                filter="url(#glow)"
              />

              {/* Linhas de separação (etapas) */}
              <motion.line
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 0.6, pathLength: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                x1="70" y1="120" x2="230" y2="120"
                stroke="#a855f7"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
              <motion.line
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 0.6, pathLength: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                x1="90" y1="190" x2="210" y2="190"
                stroke="#a855f7"
                strokeWidth="2"
                strokeDasharray="5,5"
              />

              {/* Labels das etapas */}
              <motion.text
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                x="150" y="85"
                textAnchor="middle"
                fill="#ffffff"
                fontSize="12"
                fontWeight="600"
                className="font-sans"
              >
                ENTRADA
              </motion.text>
              <motion.text
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: 1.7, duration: 0.5 }}
                x="150" y="155"
                textAnchor="middle"
                fill="#ffffff"
                fontSize="12"
                fontWeight="600"
                className="font-sans"
              >
                TRIAGEM
              </motion.text>
              <motion.text
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: 1.9, duration: 0.5 }}
                x="150" y="270"
                textAnchor="middle"
                fill="#ffffff"
                fontSize="12"
                fontWeight="600"
                className="font-sans"
              >
                QUALIFICAÇÃO
              </motion.text>

              {/* Leads entrando (círculos caindo) */}
              {[0, 1, 2, 3, 4].map((i) => {
                const startX = 100 + i * 25; // Posição inicial mais centralizada
                return (
                  <motion.circle
                    key={i}
                    initial={{ cy: 30, cx: startX, opacity: 0, r: 4 }}
                    animate={{
                      cy: [30, 120, 190, 320],
                      cx: [startX, 110 + i * 20, 115 + i * 15, 120 + i * 12], // Convergindo para o centro do funil
                      opacity: [0, 1, 1, 0.3],
                      r: [4, 4, 3.5, 3]
                    }}
                    transition={{
                      delay: 2 + i * 0.4,
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 1,
                      ease: "easeIn"
                    }}
                    fill="#a855f7"
                    filter="url(#glow)"
                  />
                );
              })}

              {/* Seta de saída (leads qualificados) */}
              <motion.path
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 0.8, pathLength: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
                d="M 150 360 L 150 390"
                stroke="#a855f7"
                strokeWidth="3"
                markerEnd="url(#arrow)"
              />
              <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                  <polygon points="0 0, 10 5, 0 10" fill="#a855f7" />
                </marker>
              </defs>

              {/* Label de saída */}
              <motion.text
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 0.5 }}
                x="180" y="380"
                fill="#a855f7"
                fontSize="11"
                fontWeight="700"
                className="font-sans"
              >
                LEADS QUALIFICADOS
              </motion.text>

            </svg>

          </div>
        </motion.div>
      </div>
    </div>
  );
}

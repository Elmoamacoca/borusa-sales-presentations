import { motion } from 'framer-motion';
import { MeshGradient } from "@paper-design/shaders-react";
import { CheckCircle2 } from 'lucide-react';

export default function Veil10() {
  const charcoalColors = [
    "#0f0f0f",
    "#1a1a1a",
    "#252525",
    "#1e1e1e",
    "#141414",
  ];

  const features = [
    'Até 9 tentativas de contato configuradas por oportunidade',
    'Detecção de silêncio pra reativar quem sumiu',
    'Retomada contextual (sempre usando histórico da conversa)',
    'Escalonamento pro humano quando a conversa pede vendedor',
    'Persistência estratégica (não vira spam, mas também não desiste)',
    'Comunicação via WhatsApp',
    'Comunicação via E-mail'
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
        {/* Conteúdo à Esquerda - 60% */}
        <div className="w-[60%] h-full flex flex-col justify-center px-8 md:px-12 lg:px-16 relative z-10">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl font-semibold text-white mb-5 font-sans leading-tight"
          >
            <span className="text-purple-400 font-bold">IA DE FOLLOW-UP</span> <span className="text-white">–</span> NINGUÉM SOME DEPOIS DA PROPOSTA
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-base md:text-lg font-light text-white leading-relaxed font-sans">
              A <span className="text-purple-400 font-semibold">IA de Follow-up</span> entra em jogo depois que a proposta é enviada: ela puxa o lead de volta, responde dúvidas, insiste com inteligência e fecha o ciclo até o sim ou o não definitivo, sem depender da memória do vendedor.
            </p>

            <div>
              <p className="text-base md:text-lg font-semibold text-purple-400 mb-5 font-sans">
                Nesta versão da Célula Términus você recebe:
              </p>

              <div className="space-y-2.5">
                {features.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.08, duration: 0.4 }}
                    className="flex items-start gap-2.5 bg-purple-400/5 border-l-2 border-purple-400 pl-3 py-2 rounded-r"
                  >
                    <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <p className="text-xs md:text-sm font-light text-white leading-snug font-sans">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Animação à Direita - 40% */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-[40%] h-full relative overflow-hidden flex items-center justify-center"
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            width: '40vw',
            height: '100%',
          }}
        >
          <div className="relative w-full max-w-md h-full flex items-center justify-center px-12">
            
            {/* Ciclo de Follow-up */}
            <svg viewBox="0 0 300 350" className="w-full h-full">
              <defs>
                <filter id="glow3">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                <marker id="arrowYellow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                  <polygon points="0 0, 8 4, 0 8" fill="#a855f7" />
                </marker>
              </defs>

              {/* Lead no centro */}
              <motion.circle
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                cx="150" cy="175" r="30"
                fill="#a855f7"
                fillOpacity="0.3"
                stroke="#a855f7"
                strokeWidth="3"
                filter="url(#glow3)"
              />
              <motion.text
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                x="150" y="180"
                textAnchor="middle"
                fill="#ffffff"
                fontSize="14"
                fontWeight="700"
                className="font-sans"
              >
                LEAD
              </motion.text>

              {/* Círculo de tentativas ao redor */}
              <motion.circle
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.4 }}
                transition={{ delay: 1, duration: 2 }}
                cx="150" cy="175" r="90"
                stroke="#a855f7"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5 5"
              />

              {/* 9 pontos de tentativa ao redor do círculo */}
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
                const angle = (360 / 9) * i - 90; // -90 para começar no topo
                const rad = (angle * Math.PI) / 180;
                const x = 150 + Math.cos(rad) * 90;
                const y = 175 + Math.sin(rad) * 90;
                
                return (
                  <motion.g key={i}>
                    {/* Círculo da tentativa */}
                    <motion.circle
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: [0, 1, 1],
                        scale: [0, 1.2, 1]
                      }}
                      transition={{ 
                        delay: 1.2 + i * 0.2,
                        duration: 0.5
                      }}
                      cx={x} cy={y} r="8"
                      fill="#a855f7"
                      stroke="#ffffff"
                      strokeWidth="2"
                      filter="url(#glow3)"
                    />
                    
                    {/* Número da tentativa */}
                    <motion.text
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.4 + i * 0.2, duration: 0.3 }}
                      x={x} y={y + 4}
                      textAnchor="middle"
                      fill="#000000"
                      fontSize="10"
                      fontWeight="700"
                      className="font-sans"
                    >
                      {i + 1}
                    </motion.text>

                    {/* Seta apontando para o lead */}
                    <motion.line
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ 
                        pathLength: [0, 1, 1, 0],
                        opacity: [0, 0.6, 0.6, 0]
                      }}
                      transition={{ 
                        delay: 2.5 + i * 0.3,
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 4
                      }}
                      x1={x} y1={y}
                      x2={150 + Math.cos(rad) * 35} y2={175 + Math.sin(rad) * 35}
                      stroke="#a855f7"
                      strokeWidth="2"
                      markerEnd="url(#arrowYellow)"
                    />
                  </motion.g>
                );
              })}

              {/* Labels */}
              <motion.text
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: 3, duration: 0.5 }}
                x="150" y="50"
                textAnchor="middle"
                fill="#ffffff"
                fontSize="12"
                fontWeight="600"
                className="font-sans"
              >
                9 TENTATIVAS
              </motion.text>



              {/* Indicadores de canal */}
              <motion.g
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.5, duration: 0.5 }}
              >
                <rect x="40" y="280" width="80" height="20" rx="10" fill="#a855f7" fillOpacity="0.2" stroke="#a855f7" strokeWidth="1.5"/>
                <text x="80" y="294" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="600" className="font-sans">WhatsApp</text>
              </motion.g>

              <motion.g
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.7, duration: 0.5 }}
              >
                <rect x="180" y="280" width="80" height="20" rx="10" fill="#a855f7" fillOpacity="0.2" stroke="#a855f7" strokeWidth="1.5"/>
                <text x="220" y="294" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="600" className="font-sans">E-mail</text>
              </motion.g>

            </svg>

          </div>
        </motion.div>
      </div>
    </div>
  );
}

import { motion } from 'framer-motion';
import { MeshGradient } from "@paper-design/shaders-react";
import { Play, Brain, Calendar, RefreshCw, Lightbulb } from 'lucide-react';

export default function Veil15() {
  const charcoalColors = [
    "#0f0f0f",
    "#1a1a1a",
    "#252525",
    "#1e1e1e",
    "#141414",
  ];

  const sections = [
    'Vídeos específicos explicando a IASDR, IA de Compromisso, Follow-up e Estrategista.',
    'Demonstração prática de cada fluxo disparando em ambiente real.',
    'Orientação sobre como pedir ajustes de mensagem, regras e cadências.',
    'Funciona como documentação viva da sua máquina de IA comercial.'
  ];

  const videoIAs = [
    { name: 'IA SDR', icon: Brain },
    { name: 'IA Compromisso', icon: Calendar },
    { name: 'IA Follow-up', icon: RefreshCw },
    { name: 'IA Estrategista', icon: Lightbulb }
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
            className="text-xl md:text-2xl font-semibold text-white mb-8 font-sans leading-tight"
          >
            <span className="text-green-400 font-bold">TRILHA DE VÍDEOS:</span> AUTOMAÇÕES E IAs
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6"
          >
            {sections.map((item, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.15, duration: 0.4 }}
                className="text-base md:text-lg font-light text-gray-300 leading-relaxed font-sans"
              >
                {item}
              </motion.p>
            ))}
          </motion.div>
        </div>

        {/* Animação à Direita - 50% - Grid de Vídeos das IAs */}
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
          <div className="relative w-full max-w-lg h-full flex items-center justify-center px-12">
            
            <svg viewBox="0 0 300 400" className="w-full h-auto max-h-full">
              <defs>
                <filter id="glowVideoIA">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Grid 2x2 de Players de Vídeo */}
              {videoIAs.map((ia, i) => {
                const row = Math.floor(i / 2);
                const col = i % 2;
                const x = 30 + col * 140;
                const y = 50 + row * 150;
                const Icon = ia.icon;
                
                return (
                  <motion.g
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + i * 0.2, duration: 0.6 }}
                  >
                    {/* Tela do vídeo */}
                    <rect 
                      x={x} y={y} 
                      width="120" height="80" 
                      rx="6" 
                      fill="#000000" 
                      stroke="#22c55e" 
                      strokeWidth="2.5"
                      filter="url(#glowVideoIA)"
                    />
                    
                    {/* Botão Play */}
                    <motion.g
                      animate={{ 
                        scale: [1, 1.15, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ 
                        delay: 1 + i * 0.2,
                        duration: 2,
                        repeat: Infinity
                      }}
                    >
                      <circle 
                        cx={x + 60} cy={y + 40} 
                        r="18" 
                        fill="#22c55e" 
                        fillOpacity="0.3" 
                        stroke="#22c55e" 
                        strokeWidth="2"
                      />
                      <polygon 
                        points={`${x + 55},${y + 33} ${x + 55},${y + 47} ${x + 68},${y + 40}`} 
                        fill="#ffffff"
                      />
                    </motion.g>
                    
                    {/* Barra de progresso */}
                    <rect 
                      x={x + 10} y={y + 70} 
                      width="100" height="3" 
                      rx="1.5" 
                      fill="#333333"
                    />
                    <motion.rect 
                      animate={{ width: [0, 70, 0] }}
                      transition={{ 
                        delay: 1.5 + i * 0.3,
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      x={x + 10} y={y + 70} 
                      width="0" height="3" 
                      rx="1.5" 
                      fill="#22c55e"
                    />
                    
                    {/* Label da IA */}
                    <text 
                      x={x + 60} y={y + 95} 
                      textAnchor="middle" 
                      fill="#22c55e" 
                      fontSize="9" 
                      fontWeight="700" 
                      className="font-sans"
                    >
                      {ia.name}
                    </text>
                    
                    {/* Ícone pequeno no canto */}
                    <motion.circle
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.2 + i * 0.2, duration: 0.3 }}
                      cx={x + 105} cy={y + 15} 
                      r="8"
                      fill="#22c55e"
                      fillOpacity="0.4"
                      stroke="#22c55e"
                      strokeWidth="1.5"
                    />
                  </motion.g>
                );
              })}

              {/* Texto central */}
              <motion.text
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 0.5 }}
                x="150" y="370"
                textAnchor="middle"
                fill="#22c55e"
                fontSize="10"
                fontWeight="700"
                className="font-sans"
              >
                4 VÍDEOS TUTORIAIS
              </motion.text>
              
              <motion.text
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 2.7, duration: 0.5 }}
                x="150" y="385"
                textAnchor="middle"
                fill="#22c55e"
                fontSize="8"
                fontWeight="600"
                className="font-sans"
              >
                DOCUMENTAÇÃO VIVA
              </motion.text>

            </svg>

          </div>
        </motion.div>
      </div>
    </div>
  );
}

import { motion } from 'framer-motion';
import { MeshGradient } from "@paper-design/shaders-react";
import { Play, BarChart3, Users, TrendingUp } from 'lucide-react';

export default function Veil14() {
  const charcoalColors = [
    "#0f0f0f",
    "#1a1a1a",
    "#252525",
    "#1e1e1e",
    "#141414",
  ];

  const sections = [
    'Série de vídeos mostrando como navegar no Portal Borusa.',
    'Explicação de onde ver leads, etapas do funil e ações da IA.',
    'Guia pra ler os principais indicadores (agendamentos, show rate, retomadas).',
    'Deixa o time independente pra usar o painel sem depender de você.'
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
            <span className="text-green-400 font-bold">TRILHA DE VÍDEOS:</span> PORTAL E PAINÉIS
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

        {/* Animação à Direita - 50% - Player de Vídeo + Painéis */}
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
                <filter id="glowVideo">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Player de Vídeo Principal */}
              <motion.g
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {/* Tela do vídeo */}
                <rect 
                  x="50" y="40" 
                  width="200" height="130" 
                  rx="8" 
                  fill="#000000" 
                  stroke="#22c55e" 
                  strokeWidth="3"
                  filter="url(#glowVideo)"
                />
                
                {/* Barra de progresso */}
                <rect 
                  x="60" y="155" 
                  width="180" height="4" 
                  rx="2" 
                  fill="#333333"
                />
                <motion.rect 
                  animate={{ width: [0, 120, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  x="60" y="155" 
                  width="0" height="4" 
                  rx="2" 
                  fill="#22c55e"
                />
                
                {/* Botão Play */}
                <motion.g
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <circle cx="150" cy="105" r="25" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="2"/>
                  <polygon points="145,95 145,115 165,105" fill="#ffffff"/>
                </motion.g>
                
                {/* Label */}
                <text x="150" y="190" textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="700" className="font-sans">
                  VÍDEO TUTORIAL
                </text>
              </motion.g>

              {/* 3 Mini Painéis (Dashboard Cards) */}
              {[
                { y: 210, icon: 'chart', label: 'LEADS', value: '342', delay: 1.2 },
                { y: 265, icon: 'users', label: 'AGENDAMENTOS', value: '89', delay: 1.4 },
                { y: 320, icon: 'trend', label: 'SHOW RATE', value: '67%', delay: 1.6 }
              ].map((panel, i) => (
                <motion.g
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: panel.delay, duration: 0.5 }}
                >
                  {/* Card do painel */}
                  <rect 
                    x="70" y={panel.y} 
                    width="160" height="45" 
                    rx="6" 
                    fill="#22c55e" 
                    fillOpacity="0.1" 
                    stroke="#22c55e" 
                    strokeWidth="2"
                  />
                  
                  {/* Ícone */}
                  <circle cx="95" cy={panel.y + 22} r="12" fill="#22c55e" fillOpacity="0.3"/>
                  
                  {/* Label */}
                  <text 
                    x="115" y={panel.y + 20} 
                    fill="#22c55e" 
                    fontSize="9" 
                    fontWeight="600" 
                    className="font-sans"
                  >
                    {panel.label}
                  </text>
                  
                  {/* Valor */}
                  <text 
                    x="115" y={panel.y + 35} 
                    fill="#ffffff" 
                    fontSize="16" 
                    fontWeight="700" 
                    className="font-sans"
                  >
                    {panel.value}
                  </text>
                  
                  {/* Mini gráfico de barras */}
                  {[0, 1, 2, 3].map((bar) => (
                    <motion.rect
                      key={bar}
                      animate={{ 
                        height: [10, 15 + Math.random() * 10, 10]
                      }}
                      transition={{ 
                        delay: panel.delay + 0.5 + bar * 0.1,
                        duration: 1.5,
                        repeat: Infinity
                      }}
                      x={180 + bar * 10} 
                      y={panel.y + 25} 
                      width="6" 
                      height="15" 
                      rx="1"
                      fill="#22c55e"
                      fillOpacity="0.6"
                    />
                  ))}
                </motion.g>
              ))}

              {/* Texto rodapé */}
              <motion.text
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 2.5, duration: 0.5 }}
                x="150" y="385"
                textAnchor="middle"
                fill="#22c55e"
                fontSize="9"
                fontWeight="600"
                className="font-sans"
              >
                TREINAMENTO COMPLETO
              </motion.text>

            </svg>

          </div>
        </motion.div>
      </div>
    </div>
  );
}

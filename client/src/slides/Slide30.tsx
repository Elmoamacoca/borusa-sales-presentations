import { motion } from 'framer-motion';
import { MeshGradient } from "@paper-design/shaders-react";
import { useEffect, useState, useMemo } from 'react';

interface Particle {
  id: number;
  angle: number;
  delay: number;
}

export default function Slide30() {
  const blueColors = [
    "#0a0a0a",
    "#1a2332",
    "#2d3e50",
    "#3d5a80",
    "#1a1a1a",
  ];

  // Gerar partículas uma vez e reusar
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      angle: (360 * i) / 12,
      delay: i * 0.25
    }));
  }, []);

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden">
      {/* Fundo animado azul */}
      <div className="absolute inset-0 z-0">
        <MeshGradient
          className="w-full h-full"
          colors={blueColors}
          speed={0.15}
          minPixelRatio={2.0}
        />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
        
        {/* Container com rotação suave - GPU accelerated */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ willChange: "transform" }}
          className="relative w-full max-w-4xl aspect-square flex items-center justify-center"
        >
          
          {/* SETOR OTIMIZA - Topo */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0, rotate: -360 }}
              transition={{ 
                opacity: { delay: 0.5, duration: 0.5 },
                y: { delay: 0.5, duration: 0.5 },
                rotate: { duration: 60, repeat: Infinity, ease: "linear" }
              }}
              style={{ willChange: "transform" }}
              className="text-center"
            >
              <h3 className="text-xl font-bold text-white mb-3 tracking-wider">OTIMIZA</h3>
              <div className="flex justify-center gap-2">
                {['Processos', 'Tempo', 'Recursos'].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2.5 min-w-[85px]"
                  >
                    <p className="text-white text-[11px] font-medium text-center leading-tight">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* SETOR ESCALA - Direita baixo */}
          <div className="absolute bottom-12 right-0 w-80">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0, rotate: -360 }}
              transition={{ 
                opacity: { delay: 0.6, duration: 0.5 },
                x: { delay: 0.6, duration: 0.5 },
                rotate: { duration: 60, repeat: Infinity, ease: "linear" }
              }}
              style={{ willChange: "transform" }}
              className="text-center"
            >
              <h3 className="text-xl font-bold text-white mb-3 tracking-wider">ESCALA</h3>
              <div className="flex justify-center gap-2">
                {['Atendimento', 'Conversão', 'Receita'].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2.5 min-w-[85px]"
                  >
                    <p className="text-white text-[11px] font-medium text-center leading-tight">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* SETOR APRENDE - Esquerda baixo */}
          <div className="absolute bottom-12 left-0 w-80">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0, rotate: -360 }}
              transition={{ 
                opacity: { delay: 0.7, duration: 0.5 },
                x: { delay: 0.7, duration: 0.5 },
                rotate: { duration: 60, repeat: Infinity, ease: "linear" }
              }}
              style={{ willChange: "transform" }}
              className="text-center"
            >
              <h3 className="text-xl font-bold text-white mb-3 tracking-wider">APRENDE</h3>
              <div className="flex justify-center gap-2">
                {['Padrões', 'Comportamento', 'Melhora'].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + i * 0.1, duration: 0.4 }}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2.5 min-w-[85px]"
                  >
                    <p className="text-white text-[11px] font-medium text-center leading-tight">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* SVG para setas circulares e linhas radiais */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 500" style={{ zIndex: 15 }}>
            <defs>
              <marker id="arrowhead-white" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="white" />
              </marker>
            </defs>

            {/* Círculo externo decorativo */}
            <motion.circle
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.15 }}
              transition={{ delay: 1.2, duration: 2 }}
              cx="250" cy="250" r="200"
              stroke="white"
              strokeWidth="1"
              fill="none"
              strokeDasharray="8 8"
            />

            {/* Setas circulares */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ delay: 1.4, duration: 1.2 }}
              d="M 320 120 Q 420 180 380 320"
              stroke="white"
              strokeWidth="3"
              fill="none"
              markerEnd="url(#arrowhead-white)"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ delay: 1.6, duration: 1.2 }}
              d="M 350 360 Q 250 440 120 360"
              stroke="white"
              strokeWidth="3"
              fill="none"
              markerEnd="url(#arrowhead-white)"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ delay: 1.8, duration: 1.2 }}
              d="M 120 320 Q 60 180 180 100"
              stroke="white"
              strokeWidth="3"
              fill="none"
              markerEnd="url(#arrowhead-white)"
            />

            {/* Linhas radiais */}
            <motion.line
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ delay: 1, duration: 0.6 }}
              x1="250" y1="185" x2="250" y2="120"
              stroke="white"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <motion.line
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              x1="280" y1="270" x2="340" y2="330"
              stroke="white"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <motion.line
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              x1="220" y1="270" x2="160" y2="330"
              stroke="white"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
          </svg>

        </motion.div>

        {/* Centro - IA com pulsação (fixo, não roda) */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1
          }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="absolute z-30"
        >
          <div className="relative">
            {/* Brilho pulsante */}
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{ willChange: "transform, opacity" }}
              className="absolute inset-0 bg-yellow-500/30 blur-3xl rounded-full scale-150"
            ></motion.div>
            {/* Círculo IA */}
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{ willChange: "transform" }}
              className="relative w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-2xl"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">IA</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Partículas sendo sugadas para o centro - Otimizadas */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 500" style={{ zIndex: 25 }}>
          {particles.map((particle) => {
            const startX = 250 + Math.cos((particle.angle * Math.PI) / 180) * 350;
            const startY = 250 + Math.sin((particle.angle * Math.PI) / 180) * 350;
            
            return (
              <motion.circle
                key={particle.id}
                initial={{ 
                  cx: startX, 
                  cy: startY,
                  opacity: 0,
                  r: 3
                }}
                animate={{ 
                  cx: 250, 
                  cy: 250,
                  opacity: [0, 0.8, 0.8, 0],
                  r: [3, 2.5, 1.5, 0]
                }}
                transition={{ 
                  duration: 2.5,
                  delay: particle.delay,
                  repeat: Infinity,
                  repeatDelay: 2.5,
                  ease: "easeIn"
                }}
                fill="white"
                style={{ willChange: "transform, opacity" }}
              />
            );
          })}
        </svg>

      </div>
    </div>
  );
}

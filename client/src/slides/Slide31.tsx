import { motion, AnimatePresence } from 'framer-motion';
import { MeshGradient } from "@paper-design/shaders-react";
import { useEffect, useState } from 'react';

export default function Slide31() {
  const blueColors = [
    "#0a0a0a",
    "#1a2332",
    "#2d3e50",
    "#3d5a80",
    "#1a1a1a",
  ];

  const [internalState, setInternalState] = useState(0);

  const explanations = {
    otimiza: {
      text: "A IA torna seus processos comerciais mais eficientes e eficazes. Reduz tempo de resposta, elimina tarefas manuais repetitivas e maximiza o aproveitamento de recursos.",
      position: "top-24 right-24"
    },
    escala: {
      text: "A IA multiplica resultados que já funcionam sem aumentar custos proporcionalmente. Atende 10x mais leads com o mesmo time, converte mais sem contratar.",
      position: "bottom-32 right-24"
    },
    aprende: {
      text: "A IA identifica padrões de comportamento, adapta estratégias automaticamente e melhora continuamente. Cada interação alimenta o sistema, tornando-o mais inteligente.",
      position: "bottom-32 left-24"
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && internalState < 3) {
        e.stopPropagation();
        e.preventDefault();
        setInternalState(prev => prev + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown, true);
    return () => window.removeEventListener('keydown', handleKeyDown, true);
  }, [internalState]);

  const focusedPillar = internalState === 1 ? 'otimiza' : internalState === 2 ? 'escala' : internalState === 3 ? 'aprende' : null;

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
        
        {/* Overlay escuro quando há foco - z-index 15 */}
        <AnimatePresence>
          {focusedPillar && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/70 z-15"
            />
          )}
        </AnimatePresence>

        {/* Container */}
        <div className="relative w-full max-w-4xl aspect-square flex items-center justify-center">
          
          {/* SETOR OTIMIZA - Topo - z-index 20 quando focado */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ 
                opacity: focusedPillar && focusedPillar !== 'otimiza' ? 0.05 : 1,
                y: 0,
                scale: focusedPillar === 'otimiza' ? 1.15 : 1
              }}
              transition={{ 
                opacity: { duration: 0.3 },
                y: { delay: 0.5, duration: 0.5 },
                scale: { duration: 0.3 }
              }}
              className="text-center"
              style={{ position: 'relative', zIndex: focusedPillar === 'otimiza' ? 20 : 10 }}
            >
              <motion.h3 
                animate={{
                  textShadow: focusedPillar === 'otimiza' ? '0 0 30px rgba(251, 191, 36, 1)' : '0 0 0px rgba(0,0,0,0)'
                }}
                className="text-xl font-bold text-white mb-3 tracking-wider"
              >
                OTIMIZA
              </motion.h3>
              <div className="flex justify-center gap-2">
                {['Processos', 'Tempo', 'Recursos'].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      boxShadow: focusedPillar === 'otimiza' ? '0 0 20px rgba(251, 191, 36, 0.8)' : '0 0 0px rgba(0,0,0,0)'
                    }}
                    transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2.5 min-w-[85px]"
                  >
                    <p className="text-white text-[11px] font-medium text-center leading-tight">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* SETOR ESCALA - Direita baixo - z-index 20 quando focado */}
          <div className="absolute bottom-12 right-0 w-80">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ 
                opacity: focusedPillar && focusedPillar !== 'escala' ? 0.05 : 1,
                x: 0,
                scale: focusedPillar === 'escala' ? 1.15 : 1
              }}
              transition={{ 
                opacity: { duration: 0.3 },
                x: { delay: 0.6, duration: 0.5 },
                scale: { duration: 0.3 }
              }}
              className="text-center"
              style={{ position: 'relative', zIndex: focusedPillar === 'escala' ? 20 : 10 }}
            >
              <motion.h3
                animate={{
                  textShadow: focusedPillar === 'escala' ? '0 0 30px rgba(34, 197, 94, 1)' : '0 0 0px rgba(0,0,0,0)'
                }}
                className="text-xl font-bold text-white mb-3 tracking-wider"
              >
                ESCALA
              </motion.h3>
              <div className="flex justify-center gap-2">
                {['Atendimento', 'Conversão', 'Receita'].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      boxShadow: focusedPillar === 'escala' ? '0 0 20px rgba(34, 197, 94, 0.8)' : '0 0 0px rgba(0,0,0,0)'
                    }}
                    transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2.5 min-w-[85px]"
                  >
                    <p className="text-white text-[11px] font-medium text-center leading-tight">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* SETOR APRENDE - Esquerda baixo - z-index 20 quando focado */}
          <div className="absolute bottom-12 left-0 w-80">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ 
                opacity: focusedPillar && focusedPillar !== 'aprende' ? 0.05 : 1,
                x: 0,
                scale: focusedPillar === 'aprende' ? 1.15 : 1
              }}
              transition={{ 
                opacity: { duration: 0.3 },
                x: { delay: 0.7, duration: 0.5 },
                scale: { duration: 0.3 }
              }}
              className="text-center"
              style={{ position: 'relative', zIndex: focusedPillar === 'aprende' ? 20 : 10 }}
            >
              <motion.h3
                animate={{
                  textShadow: focusedPillar === 'aprende' ? '0 0 30px rgba(59, 130, 246, 1)' : '0 0 0px rgba(0,0,0,0)'
                }}
                className="text-xl font-bold text-white mb-3 tracking-wider"
              >
                APRENDE
              </motion.h3>
              <div className="flex justify-center gap-2">
                {['Padrões', 'Comportamento', 'Melhora'].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      boxShadow: focusedPillar === 'aprende' ? '0 0 20px rgba(59, 130, 246, 0.8)' : '0 0 0px rgba(0,0,0,0)'
                    }}
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
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 500" style={{ zIndex: 12 }}>
            <defs>
              <marker id="arrowhead-white-31" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="white" />
              </marker>
            </defs>

            {/* Círculo externo decorativo */}
            <motion.circle
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: 0.15 
              }}
              transition={{ 
                delay: 1.2, 
                duration: 2
              }}
              cx="250" cy="250" r="200"
              stroke="white"
              strokeWidth="1"
              fill="none"
              strokeDasharray="8 8"
            />

            {/* Setas circulares */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: focusedPillar ? 0.3 : 0.8
              }}
              transition={{ 
                delay: 1.4, 
                duration: 1.2
              }}
              d="M 320 120 Q 420 180 380 320"
              stroke="white"
              strokeWidth="3"
              fill="none"
              markerEnd="url(#arrowhead-white-31)"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: focusedPillar ? 0.3 : 0.8
              }}
              transition={{ 
                delay: 1.6, 
                duration: 1.2
              }}
              d="M 350 360 Q 250 440 120 360"
              stroke="white"
              strokeWidth="3"
              fill="none"
              markerEnd="url(#arrowhead-white-31)"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: focusedPillar ? 0.3 : 0.8
              }}
              transition={{ 
                delay: 1.8, 
                duration: 1.2
              }}
              d="M 120 320 Q 60 180 180 100"
              stroke="white"
              strokeWidth="3"
              fill="none"
              markerEnd="url(#arrowhead-white-31)"
            />

            {/* Linhas radiais */}
            <motion.line
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: focusedPillar ? 0.1 : 0.3
              }}
              transition={{ 
                delay: 1, 
                duration: 0.6
              }}
              x1="250" y1="185" x2="250" y2="120"
              stroke="white"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <motion.line
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: focusedPillar ? 0.1 : 0.3
              }}
              transition={{ 
                delay: 1.1, 
                duration: 0.6
              }}
              x1="280" y1="270" x2="340" y2="330"
              stroke="white"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <motion.line
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: focusedPillar ? 0.1 : 0.3
              }}
              transition={{ 
                delay: 1.2, 
                duration: 0.6
              }}
              x1="220" y1="270" x2="160" y2="330"
              stroke="white"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
          </svg>

        </div>

        {/* Centro - IA com pulsação - z-index 18 */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: focusedPillar ? 0.4 : 1
          }}
          transition={{ 
            delay: 0.3, 
            duration: 0.6
          }}
          className="absolute z-18"
        >
          <div className="relative">
            {/* Brilho pulsante */}
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: focusedPillar ? [0.1, 0.2, 0.1] : [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              style={{ willChange: "transform, opacity" }}
              className="absolute inset-0 bg-yellow-500/30 blur-3xl rounded-full scale-150"
            ></motion.div>
            {/* Círculo IA */}
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              style={{ willChange: "transform" }}
              className="relative w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-2xl"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">IA</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Caixa de explicação ao lado quando pilar está em foco - z-index 30 */}
        <AnimatePresence mode="wait">
          {focusedPillar && (
            <motion.div
              key={focusedPillar}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className={`absolute z-30 max-w-md ${explanations[focusedPillar as keyof typeof explanations].position}`}
            >
              {/* SEM FUNDO - apenas borda */}
              <div className="border-2 border-yellow-500/80 rounded-xl p-6">
                <p className="text-white text-base leading-relaxed">
                  {explanations[focusedPillar as keyof typeof explanations].text}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

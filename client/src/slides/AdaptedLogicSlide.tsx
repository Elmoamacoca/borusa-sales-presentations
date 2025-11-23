import { motion, AnimatePresence } from 'framer-motion';
import { Slide } from '@/components/presentation/Slide';
import { useState, useEffect } from 'react';
import { Database, Server, Cpu, Zap, Brain, Lock, Shield, Cloud, Workflow, Boxes } from 'lucide-react';

export default function AdaptedLogicSlide() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && stage < 4) {
        e.preventDefault();
        e.stopPropagation();
        setStage(prev => prev + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown, { capture: true });
    return () => window.removeEventListener('keydown', handleKeyDown, { capture: true });
  }, [stage]);

  const assets = [
    { icon: Database, label: 'A1' },
    { icon: Server, label: 'A2' },
    { icon: Cpu, label: 'A3' },
    { icon: Zap, label: 'A4' },
    { icon: Brain, label: 'A5' },
  ];

  // Gerar 30 módulos
  const iconList = [Lock, Shield, Cloud, Workflow, Boxes, Database, Server, Cpu, Zap, Brain];
  const hiddenAssets = Array.from({ length: 30 }, (_, i) => ({
    icon: iconList[i % iconList.length],
    label: '...'
  }));

  return (
    <Slide className="!items-start !justify-start !pt-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="w-full"
      >
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-tight font-sans whitespace-nowrap text-center mb-6">
          E essa lógica foi adaptada para uma operação comercial
        </h1>

        <div className="flex flex-col items-center gap-2">
          
          {/* Stage 1: CCA */}
          <AnimatePresence>
            {stage >= 1 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className={`px-5 py-2 bg-transparent border-2 border-white/80 rounded-lg ${stage >= 3 ? 'animate-pulse-slow' : ''}`}
              >
                <h2 className="text-lg font-bold text-white text-center">CCA</h2>
                <p className="text-xs text-gray-300 text-center mt-1">Cérebro Central</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Linha vertical */}
          <AnimatePresence>
            {stage >= 2 && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: '16px' }}
                transition={{ duration: 0.4 }}
                className="w-0.5 bg-white/60"
              />
            )}
          </AnimatePresence>

          {/* Stage 2: Infraestrutura */}
          <AnimatePresence>
            {stage >= 2 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`px-5 py-2 bg-transparent border-2 border-white/80 rounded-lg ${stage >= 3 ? 'animate-pulse-slow' : ''}`}
              >
                <h2 className="text-base font-bold text-white text-center">Infraestrutura</h2>
                <p className="text-xs text-gray-300 text-center mt-1">VPS • Servidores • Cloud</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Espaço para conexão visual */}
          <AnimatePresence>
            {stage >= 3 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full max-w-4xl flex flex-col items-center gap-2"
              >
                {/* Linha vertical curta */}
                <div className="w-0.5 h-4 bg-white/60" />
                
                {/* Ativos */}
                <div className="flex items-center justify-center gap-6">
                  {assets.map((asset, index) => {
                    const Icon = asset.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: 0.4 + index * 0.1,
                          ease: 'backOut'
                        }}
                        className="flex flex-col items-center"
                      >
                        <div className={`w-12 h-12 rounded-full bg-transparent border-2 border-white/80 flex items-center justify-center ${stage >= 3 ? 'animate-pulse-slow' : ''}`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-xs text-gray-400 mt-1">{asset.label}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Stage 4: Segunda cadeia oculta */}
          <AnimatePresence>
            {stage >= 4 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center gap-0 mt-0"
              >
                <div className="w-0.5 h-4 border-l-2 border-dashed border-white/30" />
                
                <div className="flex flex-wrap items-center justify-center gap-1.5 w-full px-8">
                  {hiddenAssets.map((asset, index) => {
                    const Icon = asset.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.3, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                        className="flex flex-col items-center"
                      >
                        <div className="w-10 h-10 rounded-full bg-transparent border-2 border-white/30 border-dashed flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white/50" />
                        </div>
                        <p className="text-[10px] text-gray-500 mt-0.5">...</p>
                      </motion.div>
                    );
                  })}
                </div>

                <p className="text-xs text-gray-400 text-center mt-1 italic">+ Módulos escaláveis</p>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </motion.div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      `}</style>
    </Slide>
  );
}

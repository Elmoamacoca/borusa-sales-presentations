import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';
import { Clock, DollarSign, Settings, Building2, Hourglass } from 'lucide-react';

export default function ObstaclesSlide() {
  const obstacles = [
    { icon: Clock, label: 'Tempo' },
    { icon: DollarSign, label: 'Investimento' },
    { icon: Settings, label: 'Execução' },
    { icon: Building2, label: 'Estrutura' },
    { icon: Hourglass, label: 'Momento' }
  ];

  return (
    <Slide className="!items-center !justify-center">
      {/* Linhas decorativas no canto superior esquerdo */}
      <div className="absolute top-8 left-8 w-24 h-24">
        <div className="w-0.5 h-16 bg-yellow-500 absolute left-8"></div>
        <div className="w-16 h-0.5 bg-yellow-500 absolute top-8"></div>
      </div>

      {/* Linha decorativa no canto inferior direito */}
      <div className="absolute bottom-8 right-8 w-32 h-32">
        <div className="w-24 h-0.5 bg-yellow-500 absolute bottom-8"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="w-full max-w-3xl mx-auto px-20"
      >
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-16 font-sans text-left">
          Obstáculos no Caminho
        </h1>

        <div className="space-y-6">
          {obstacles.map((obstacle, index) => {
            const Icon = obstacle.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.15, duration: 0.5 }}
                style={{ marginLeft: `${index * 40}px` }}
              >
                {/* Ícone e texto na mesma linha */}
                <div className="flex items-center gap-4 mb-2">
                  <Icon className="w-8 h-8 text-white flex-shrink-0" strokeWidth={1.5} />
                  <p className="text-white text-xl font-medium">
                    {obstacle.label}
                  </p>
                </div>
                
                {/* Linha horizontal embaixo (exceto no último item) */}
                {index < obstacles.length - 1 && (
                  <div className="h-px bg-white w-full" />
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </Slide>
  );
}

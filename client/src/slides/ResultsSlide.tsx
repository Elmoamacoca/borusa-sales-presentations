import { motion } from 'framer-motion';
import { Slide } from '@/components/presentation/Slide';
import { Briefcase, Network, CheckCircle } from 'lucide-react';

export default function ResultsSlide() {
  const columns = [
    {
      icon: Briefcase,
      text: 'Empresário atrás de Empresário querendo parar de depender só de SDR e pedir "um sistema que pense o comercial", não mais uma campanha ou funil solto.'
    },
    {
      icon: Network,
      text: 'Operações em mercados diferentes (apostas online, educação, jurídico) buscando modelar a mesma lógica de "CCA" para organizar o caos e ter previsibilidade.'
    },
    {
      icon: CheckCircle,
      text: 'Primeiros projetos fechados de sistema de IA comercial validando funcionalidade do CCA'
    }
  ];

  return (
    <Slide className="!items-start !justify-start !pt-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="w-full max-w-6xl mx-auto px-20"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-56 font-sans text-left">
          Resultados?
        </h1>

        <div className="grid grid-cols-3 gap-0 relative">
          {columns.map((column, index) => {
            const Icon = column.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                className="relative px-8 flex flex-col items-center"
              >
                {/* Divisória amarela à direita (exceto última coluna) */}
                {index < columns.length - 1 && (
                  <div className="absolute right-0 top-0 bottom-0 w-px bg-yellow-500/60" />
                )}
                
                {/* Ícone */}
                <div className="mb-6">
                  <Icon className="w-12 h-12 text-yellow-500/80" strokeWidth={1.5} />
                </div>
                
                {/* Texto */}
                <p className="text-white/90 text-sm md:text-base leading-relaxed font-light text-center">
                  {column.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </Slide>
  );
}

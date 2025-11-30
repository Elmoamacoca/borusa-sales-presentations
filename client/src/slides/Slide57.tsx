import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function Slide57() {
  return (
    <Slide>
      <div className="w-full h-full flex items-center justify-center px-16">
        {/* Texto Principal centralizado */}
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-wide font-sans"
          >
            EM RESUMO COMO SERÁ A NOSSA JORNADA JUNTOS?
          </motion.h1>
        </div>
      </div>
    </Slide>
  );
}

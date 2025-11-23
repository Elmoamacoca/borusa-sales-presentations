import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function MethodologySlide() {
  return (
    <Slide className="flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-8 w-full">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight text-center font-sans"
        >
          Hoje a minha metodologia usa a mesma lógica de IA aplicada em sistemas críticos como o Autopilot da Tesla.
        </motion.h1>
      </div>
    </Slide>
  );
}

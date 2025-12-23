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
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-tight text-center font-sans"
        >
          Hoje a minha metodologia usa a mesma lógica de <span className="underline decoration-yellow-500 decoration-1 underline-offset-4">IA aplicada</span> em sistemas críticos como o <span className="underline decoration-yellow-500 decoration-1 underline-offset-4">Autopilot da Tesla</span>.
        </motion.h1>
      </div>
    </Slide>
  );
}

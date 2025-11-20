import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function Slide40() {
  return (
    <Slide className="flex items-center justify-center">
      <div className="w-full px-8 md:px-16 py-12">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.6 }} className="text-center space-y-6">
          <h2 className="text-2xl md:text-3xl text-white font-sans">...IMPLEMENTAÇÃO HÍBRIDA</h2>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight font-sans">
            MQL MACHINE
          </h1>
        </motion.div>
      </div>
    </Slide>
  );
}

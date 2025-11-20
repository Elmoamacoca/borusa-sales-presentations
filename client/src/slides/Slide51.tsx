import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function Slide51() {
  return (
    <Slide className="flex items-center justify-center">
      <div className="w-full px-8 md:px-16 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white font-sans">PROGRAMA COMPLETO</h1>
        </motion.div>
      </div>
    </Slide>
  );
}

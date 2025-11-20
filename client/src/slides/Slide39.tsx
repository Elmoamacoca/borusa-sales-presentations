import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function Slide39() {
  return (
    <Slide className="flex items-center justify-center">
      <div className="w-full px-8 md:px-16 py-12 flex items-center justify-center gap-12">
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="relative">
          <div className="w-64 h-64 rounded-full border-8 border-yellow-500 flex items-center justify-center relative bg-gradient-to-br from-yellow-900/50 to-black">
            <div className="text-9xl text-yellow-500">?</div>
            <div className="absolute inset-0 rounded-full border-4 border-yellow-600 opacity-30" style={{transform: 'scale(1.2)'}}></div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, duration: 0.6 }}>
          <h1 className="text-6xl md:text-7xl font-bold text-white font-sans">DÚVIDAS?</h1>
        </motion.div>
      </div>
    </Slide>
  );
}

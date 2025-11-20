import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function Slide50() {
  return (
    <Slide className="flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-950">
      <div className="w-full px-8 md:px-16 py-12">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.6 }} className="flex items-center justify-center gap-16">
          <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl px-16 py-12 text-center shadow-2xl">
            <h2 className="text-6xl font-bold text-white mb-4">VALOR</h2>
            <p className="text-white text-xl italic">quanto vale?</p>
          </div>
          <div className="text-9xl font-bold text-white">X</div>
          <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl px-16 py-12 text-center shadow-2xl">
            <h2 className="text-6xl font-bold text-gray-900 mb-4">PREÇO</h2>
            <p className="text-gray-900 text-xl italic">quanto paga?</p>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}

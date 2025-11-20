import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function DownsellYSlide() {
  return (
    <Slide className="flex items-center justify-center">
      <div className="w-full px-8 md:px-16 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-sans">Mentorias Gabriel Rucci</h1>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.6 }} className="flex justify-center">
          <div className="grid grid-cols-2 gap-4 max-w-4xl">
            <div className="bg-gray-900 rounded-lg p-4 h-64 flex items-center justify-center"><p className="text-white text-xs">Screenshot Instagram 1</p></div>
            <div className="bg-gray-900 rounded-lg p-4 h-64 flex items-center justify-center"><p className="text-white text-xs">Perfil @gabrielrucci</p></div>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}

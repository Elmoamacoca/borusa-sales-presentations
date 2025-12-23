import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function NextStepsSlide() {
  return (
    <Slide className="flex items-center justify-center">
      <div className="w-full h-full flex flex-col md:flex-row">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="w-full md:w-1/2 flex items-center justify-center px-8 py-12 relative">
          <div className="w-full max-w-md h-96 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-lg shadow-2xl flex items-center justify-center">
            <div className="text-white text-center"><p className="text-sm">Foto do evento Full Sales</p></div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className="w-full md:w-1/2 flex items-center justify-center px-8 md:px-16 py-12 relative">
          <div className="space-y-8 max-w-2xl">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-sans">
              COMO<br />CHEGAMOS<br />ATÉ AQUI?
            </motion.h1>
            <div className="absolute bottom-8 right-8 w-24 h-24"><div className="w-20 h-0.5 bg-yellow-500 absolute bottom-8"></div></div>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}

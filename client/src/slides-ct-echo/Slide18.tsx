import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function Slide18() {
  return (
    <Slide className="flex items-center justify-center">
      <div className="w-full h-full flex flex-col md:flex-row">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="w-full md:w-1/2 flex items-center justify-center px-8 md:px-16 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-sans leading-tight">
            O que acontece se você sempre varrer a sujeira para baixo da cama?
          </h1>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, duration: 0.6 }} className="w-full md:w-1/2 flex items-center justify-center px-8 py-12">
          <div className="w-full max-w-md h-96 bg-gradient-to-br from-red-900 to-red-700 rounded-lg shadow-2xl flex items-center justify-center">
            <div className="text-white text-center"><p className="text-sm">Ilustração: pessoa varrendo sujeira para baixo da cama</p></div>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}

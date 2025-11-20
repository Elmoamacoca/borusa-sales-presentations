import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function DownsellZSlide() {
  return (
    <Slide className="flex items-center justify-center">
      <div className="w-full px-8 md:px-16 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-sans">Mastermind High-Sales</h1>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.6 }} className="flex justify-center">
          <div className="grid grid-cols-3 gap-4 max-w-5xl">
            <div className="bg-gray-900 rounded-lg p-4 h-48 flex items-center justify-center"><p className="text-white text-xs text-center">Aula @fiel.mat</p></div>
            <div className="bg-gray-900 rounded-lg p-4 h-48 flex items-center justify-center"><p className="text-white text-xs text-center">Aula sensacional</p></div>
            <div className="bg-gray-900 rounded-lg p-4 h-48 flex items-center justify-center"><p className="text-white text-xs text-center">Perfil Instagram</p></div>
            <div className="bg-gray-900 rounded-lg p-4 h-48 flex items-center justify-center"><p className="text-white text-xs text-center">@matutamatheus</p></div>
            <div className="bg-gray-900 rounded-lg p-4 h-48 flex items-center justify-center"><p className="text-white text-xs text-center">Aula High Sales</p></div>
            <div className="bg-gray-900 rounded-lg p-4 h-48 flex items-center justify-center"><p className="text-white text-xs text-center">@fullsalessystem</p></div>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}

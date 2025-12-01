import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function DownsellXSlide() {
  return (
    <Slide className="flex items-center justify-center">
      <div className="w-full h-full flex flex-col md:flex-row">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="w-full md:w-1/2 flex items-center justify-center px-8 md:px-16 py-12 relative">
          <div className="space-y-8 max-w-2xl">
            <div className="absolute top-8 left-8 w-24 h-24">
              <div className="w-0.5 h-20 bg-yellow-500 absolute left-8"></div>
              <div className="w-20 h-0.5 bg-yellow-500 absolute top-8"></div>
            </div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-white leading-tight font-sans">
              Hoje a minha metodologia está nas <span className="underline decoration-yellow-500 decoration-4 underline-offset-8">Maiores Mentorias e Masterminds do Brasil</span>...
            </motion.h1>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, duration: 0.6 }} className="w-full md:w-1/2 flex items-center justify-center px-8 py-12 relative">
          <div className="w-full max-w-md h-96 bg-gradient-to-br from-blue-900 to-orange-600 rounded-lg shadow-2xl flex items-center justify-center">
            <div className="text-white text-center"><p className="text-sm">Foto de palestra/evento</p></div>
          </div>
          <div className="absolute bottom-8 right-8 w-24 h-24"><div className="w-20 h-0.5 bg-yellow-500 absolute bottom-8"></div></div>
        </motion.div>
      </div>
    </Slide>
  );
}

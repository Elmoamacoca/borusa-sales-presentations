import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function OfferMainSlide() {
  return (
    <Slide className="flex items-center justify-center">
      <div className="w-full h-full flex flex-col md:flex-row">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="w-full md:w-1/2 flex items-center justify-center px-8 md:px-16 py-12 relative">
          <div className="space-y-8 max-w-2xl">
            <div className="absolute top-8 left-8 w-24 h-24">
              <div className="w-0.5 h-20 bg-yellow-500 absolute left-8"></div>
              <div className="w-20 h-0.5 bg-yellow-500 absolute top-8"></div>
            </div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className="text-4xl md:text-5xl font-bold text-white leading-tight font-sans">
              O Léo conseguiu...
            </motion.h1>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, duration: 0.6 }} className="w-full md:w-1/2 flex items-center justify-center px-8 py-12 relative">
          <div className="bg-gray-900 rounded-lg shadow-2xl p-4 max-w-md w-full">
            <div className="bg-gray-800 rounded-t p-3 flex items-center gap-2 border-b border-gray-700">
              <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
              <span className="text-white text-sm font-bold">Leonardo Muller...</span>
            </div>
            <div className="p-4 space-y-3">
              <div className="bg-gray-700 rounded-lg p-3"><p className="text-white text-xs">Que com parte da mentoria que contigo...</p></div>
              <div className="bg-gray-700 rounded-lg p-3"><p className="text-white text-xs">O que me permitiu ficar mais seguro...</p></div>
              <div className="bg-gray-700 rounded-lg p-3"><p className="text-white text-xs">Com isso, nessa semana eu fechei o nosso maior contrato...</p></div>
              <div className="bg-green-700 rounded-lg p-3"><p className="text-white text-sm font-bold">Carambaaaa, meus parabéns!!!</p></div>
            </div>
          </div>
          <div className="absolute bottom-8 right-8 w-24 h-24"><div className="w-20 h-0.5 bg-yellow-500 absolute bottom-8"></div></div>
        </motion.div>
      </div>
    </Slide>
  );
}

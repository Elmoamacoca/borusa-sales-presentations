import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function Slide13() {
  return (
    <Slide className="flex items-center justify-center">
      <div className="w-full h-full flex flex-col md:flex-row">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="w-full md:w-1/2 flex items-center justify-center px-8 md:px-16 py-12 relative">
          <div className="space-y-8 max-w-2xl">
            <div className="absolute top-8 left-8 w-24 h-24">
              <div className="w-0.5 h-20 bg-yellow-500 absolute left-8"></div>
              <div className="w-20 h-0.5 bg-yellow-500 absolute top-8"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-sans">Otimização de Tempo</h1>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-red-700 rounded p-4"><p className="text-white font-medium">Sem toneladas de conteúdo diário</p></div>
              <div className="bg-red-700 rounded p-4"><p className="text-white font-medium">Sem centenas de criativos novos</p></div>
              <div className="bg-red-700 rounded p-4"><p className="text-white font-medium">Mesmo sem gravar vídeos</p></div>
              <div className="bg-red-700 rounded p-4"><p className="text-white font-medium">Apenas 2h por semana</p></div>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, duration: 0.6 }} className="w-full md:w-1/2 flex items-center justify-center px-8 py-12 relative">
          <div className="w-full max-w-md h-96 bg-gradient-to-br from-red-900 to-black rounded-lg shadow-2xl flex items-center justify-center overflow-hidden">
            <div className="text-white text-center"><p className="text-sm">Imagem de relógio/tempo</p></div>
          </div>
          <div className="absolute bottom-8 right-8 w-32 h-32"><div className="w-24 h-0.5 bg-yellow-500 absolute bottom-8"></div></div>
        </motion.div>
      </div>
    </Slide>
  );
}

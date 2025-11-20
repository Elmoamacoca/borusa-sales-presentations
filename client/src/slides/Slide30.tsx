import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function Slide30() {
  return (
    <Slide className="flex items-center justify-center">
      <div className="w-full px-8 md:px-16 py-12 relative">
        <div className="absolute top-8 left-8"><div className="w-0.5 h-16 bg-yellow-500"></div><div className="w-16 h-0.5 bg-yellow-500"></div></div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="flex items-center justify-center">
          <div className="relative w-full max-w-4xl">
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-32"><div className="w-32 h-32 border-4 border-yellow-500 rounded-full flex items-center justify-center"><div className="text-center"><div className="text-4xl mb-2">🎯</div><p className="text-white text-sm font-bold">Funis de Marketing</p></div></div></div>
                <div className="absolute top-1/2 -left-40 -translate-y-1/2"><div className="w-32 h-32 border-4 border-yellow-500 rounded-full flex items-center justify-center"><div className="text-center"><div className="text-4xl mb-2">🔄</div><p className="text-white text-sm font-bold">Recorrência</p></div></div></div>
                <div className="w-48 h-48 border-4 border-yellow-500 rounded-full flex items-center justify-center bg-gradient-to-br from-yellow-900 to-yellow-700"><div className="text-center"><div className="text-5xl mb-2">📊</div><p className="text-white font-bold">Fontes de Aquisição</p></div></div>
                <div className="absolute top-1/2 -right-40 -translate-y-1/2"><div className="w-32 h-32 border-4 border-yellow-500 rounded-full flex items-center justify-center"><div className="text-center"><div className="text-4xl mb-2">🤝</div><p className="text-white text-sm font-bold">Processos<br/>Comerciais</p></div></div></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-32"><div className="w-32 h-32 border-4 border-yellow-500 rounded-full flex items-center justify-center"><div className="text-center"><div className="text-4xl mb-2">💎</div><p className="text-white text-sm font-bold">Produtos e Ofertas<br/>de Alto Valor</p></div></div></div>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="absolute bottom-4 left-0 right-0"><div className="h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div></div>
      </div>
    </Slide>
  );
}

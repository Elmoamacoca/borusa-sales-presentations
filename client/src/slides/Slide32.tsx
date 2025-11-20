import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function Slide32() {
  return (
    <Slide className="flex items-center justify-center">
      <div className="w-full h-full flex">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="w-1/2 flex items-center justify-center px-12 relative">
          <div className="absolute top-8 left-8 w-32 h-32">
            <div className="w-0.5 h-24 bg-yellow-500"></div>
            <div className="w-24 h-0.5 bg-yellow-500 absolute top-0"></div>
            <div className="absolute top-12 left-12">
              <div className="w-16 h-16 border-2 border-yellow-500 rounded-full"></div>
            </div>
          </div>
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white font-sans">LEVANTADAS<br/>DE MÃO</h1>
            <p className="text-white text-lg">publicações (Story e Feed) que fazem os Leads mais aquecidos "Levantarem a Mão" e se tornarem oportunidades quentes de venda.</p>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, duration: 0.6 }} className="w-1/2 bg-gray-900 flex items-center justify-center p-8 relative">
          <div className="absolute top-8 right-8 bg-red-600 text-white px-4 py-2 rounded text-sm font-bold max-w-xs">apenas com uma ação Rápido, extraiu vendas com urgência</div>
          <div className="w-full max-w-md bg-black rounded-lg overflow-hidden">
            <div className="bg-gray-800 p-3 flex items-center justify-between">
              <div className="flex items-center gap-2"><div className="w-8 h-8 bg-gray-700 rounded-full"></div><p className="text-white text-sm font-bold">Herbert Faria</p></div>
              <p className="text-gray-400 text-xs">287</p>
            </div>
            <div className="p-4 space-y-3 bg-gray-900">
              <div className="bg-gray-800 rounded-lg p-3"><p className="text-white">Mestre, bão demais?</p><p className="text-gray-400 text-xs">12:16</p></div>
              <div className="bg-gray-800 rounded-lg p-3"><p className="text-white">Segura aí...</p><p className="text-gray-400 text-xs">12:16</p></div>
              <div className="bg-gray-800 rounded-lg p-3"><p className="text-white">Mais um venda de 10k</p><div className="text-3xl">🔥🔥🔥</div><p className="text-gray-400 text-xs">12:16</p></div>
              <div className="flex gap-2"><div className="bg-green-600 text-white px-4 py-2 rounded-full text-sm">Cara</div><div className="bg-green-600 text-white px-4 py-2 rounded-full text-sm">Boaaa</div></div>
            </div>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}

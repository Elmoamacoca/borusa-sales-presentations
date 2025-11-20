import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function Slide33() {
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
            <h1 className="text-5xl md:text-6xl font-bold text-white font-sans">CRIATIVOS<br/>SEM PROMESSA</h1>
            <p className="text-white text-lg">Anúncios que captam Leads dispostos a pagar caro para solucionar RÁPIDO problemas ainda mais caros (podendo ou não aparecer)</p>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, duration: 0.6 }} className="w-1/2 bg-gray-900 flex items-center justify-center p-8 relative">
          <div className="absolute top-8 right-8 bg-red-600 text-white px-4 py-2 rounded text-sm font-bold max-w-xs">com apenas 1 ajuste em 1 captar Grandes Experts, seguinte</div>
          <div className="w-full max-w-md bg-black rounded-lg overflow-hidden p-4 space-y-3">
            <div className="bg-green-900 rounded-lg p-3"><p className="text-white font-bold">Consegue pegar grandes já agora?</p><p className="text-gray-400 text-xs">Jean Seller</p><p className="text-white text-sm">sim</p><p className="text-gray-400 text-xs">16:20</p></div>
            <div className="bg-gray-800 rounded-lg p-3"><p className="text-white">vou pegar aqui no e passo aqui</p><p className="text-gray-400 text-xs">16:27</p></div>
            <div className="bg-gray-800 rounded-lg p-3"><p className="text-white">Mas eu sei que já Gabriel Rucci, Thales Cris Franklin</p><div className="text-red-500 text-xl">❤️</div><p className="text-gray-400 text-xs">16:28</p></div>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}

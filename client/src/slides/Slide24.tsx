import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';
import { Users, Clock, DollarSign, TrendingDown, Frown, Globe } from 'lucide-react';

export default function Slide24() {
  return (
    <Slide className="flex items-center justify-center">
      <div className="w-full px-8 md:px-16 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="space-y-12 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-sans text-center">RISCOS FAZER SOZINHO SEM O CONHECIMENTO</h1>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-yellow-700 clip-hexagon flex items-center justify-center mb-4"><Users className="w-12 h-12 text-white" /></div>
                <p className="text-white font-medium">Frustrar a equipe</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-yellow-700 clip-hexagon flex items-center justify-center mb-4"><Frown className="w-12 h-12 text-white" /></div>
                <p className="text-white font-medium">Sujar sua base</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-yellow-700 clip-hexagon flex items-center justify-center mb-4"><Clock className="w-12 h-12 text-white" /></div>
                <p className="text-white font-medium">Perder tempo</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-yellow-700 clip-hexagon flex items-center justify-center mb-4"><DollarSign className="w-12 h-12 text-white" /></div>
                <p className="text-white font-medium">Perder caixa<br/><span className="text-sm">(Deixar dinheiro na mesa & fuga de clientes)</span></p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-yellow-700 clip-hexagon flex items-center justify-center mb-4 relative"><div className="text-6xl text-white">⚠️</div></div>
                <p className="text-white font-medium">Perder moral</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-yellow-700 clip-hexagon flex items-center justify-center mb-4"><Globe className="w-12 h-12 text-white" /></div>
                <p className="text-white font-medium">Perder espaço<br/><span className="text-sm">para a concorrência, por ficar atrasado no timing do mercado</span></p>
              </div>
            </div>
          </div>
          <p className="text-white text-center text-lg">Nada gera tanta fuga de talentos quanto a <u className="text-yellow-500 font-bold">intoxicação por leads desqualificados.</u></p>
        </motion.div>
      </div>
    </Slide>
  );
}

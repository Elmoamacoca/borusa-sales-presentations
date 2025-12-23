import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';
import { Rocket, DollarSign, TrendingUp, Users } from 'lucide-react';

export default function Slide16() {
  return (
    <Slide className="flex items-center justify-center">
      <div className="w-full px-8 md:px-16 py-12 relative">
        <div className="absolute top-8 left-8 w-24 h-24">
          <div className="w-0.5 h-20 bg-yellow-500 absolute left-8"></div>
          <div className="w-20 h-0.5 bg-yellow-500 absolute top-8"></div>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="space-y-12 max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-sans">Estrutura</h1>
          <div className="flex items-center gap-8">
            <div className="flex flex-col gap-4">
              <div className="bg-red-700 rounded-lg p-6 flex items-center gap-4">
                <Rocket className="w-8 h-8 text-white" />
                <p className="text-white text-xl font-medium">MQLs compram mais rápido, mais caro e mais fácil;</p>
              </div>
              <div className="bg-red-700 rounded-lg p-6 flex items-center gap-4">
                <DollarSign className="w-8 h-8 text-white" />
                <p className="text-white text-xl font-medium">Mais lucro, com menos clientes;</p>
              </div>
              <div className="bg-red-700 rounded-lg p-6 flex items-center gap-4">
                <TrendingUp className="w-8 h-8 text-white" />
                <div>
                  <p className="text-white text-xl font-medium">Maior Cash-Collect</p>
                  <p className="text-white/80 text-sm">Fluxo de caixa otimizado</p>
                </div>
              </div>
              <div className="bg-red-700 rounded-lg p-6 flex items-center gap-4">
                <Users className="w-8 h-8 text-white" />
                <p className="text-white text-xl font-medium">Uma Equipe mais Enxuta consegue converter;</p>
              </div>
            </div>
          </div>
          <p className="text-white/70 text-sm italic">Este modelo é pensado para quem não quer ter um Time de 30 pessoas pra um trabalho que poderia ser feito por 3;</p>
        </motion.div>
      </div>
    </Slide>
  );
}

import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';

export default function Slide58() {
  return (
    <Slide className="flex items-center justify-center">
      <div className="w-full h-full flex">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="w-1/2 bg-gradient-to-br from-blue-950 to-black flex flex-col items-center justify-center px-12 py-8 space-y-8">
          <div className="text-center space-y-4">
            <p className="text-white/80 text-sm uppercase tracking-wider">OPÇÃO DE FAZER PARTE DO ÚNICO PROGRAMA DE</p>
            <p className="text-white/80 text-sm uppercase tracking-wider">IMPLEMENTAÇÃO HÍBRIDA E A 4 MÃOS DO BRASIL</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white font-sans">PREÇO DO<br/>PROGRAMA</h1>
          </div>
          <div className="border-l-4 border-cyan-400 pl-6 space-y-4">
            <h2 className="text-3xl font-bold text-cyan-400">PREÇO REGULAR</h2>
            <p className="text-5xl font-bold text-white">6 x de R$10.000,00</p>
            <p className="text-xl text-white/80">À Vista: 50.000</p>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, duration: 0.6 }} className="w-1/2 bg-gradient-to-br from-yellow-600 to-yellow-700 flex flex-col items-center justify-center px-12 py-8 relative">
          <div className="absolute top-8 right-8">
            <Flame className="w-16 h-16 text-white" />
          </div>
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-2">
              <div className="text-8xl">*</div>
              <h2 className="text-5xl font-bold text-white">VALOR SAN<br/>NO OLHO</h2>
            </div>
            <div className="space-y-4">
              <p className="text-6xl font-bold text-white">3x de 12 mil</p>
              <p className="text-3xl text-white">ou R$ 30.000 à vista</p>
              <p className="text-xl text-white/90">(PIX ou até 12x no Cartão)</p>
            </div>
          </div>
          <div className="absolute bottom-8 left-8">
            <Flame className="w-12 h-12 text-white/50" />
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}

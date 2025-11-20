import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function Slide57() {
  return (
    <Slide className="flex items-center justify-center">
      <div className="w-full px-8 md:px-16 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="space-y-12 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center font-sans">INVESTIMENTO</h1>
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-8 text-center">
            <p className="text-white text-2xl mb-4">De R$181.794,00 por apenas:</p>
            <h2 className="text-7xl font-bold text-white mb-2">R$60.000</h2>
            <p className="text-white text-xl">em até 12x no cartão</p>
          </div>
          <div className="text-center">
            <p className="text-white text-3xl font-bold">ou R$50.000 à vista</p>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}

import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function Slide54() {
  return (
    <Slide className="flex items-center justify-center">
      <div className="w-full px-8 md:px-16 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-sans">VALOR TOTAL</h1>
          <div className="space-y-6 text-white text-2xl max-w-4xl">
            <p>Programa Base: <span className="font-bold">R$120.000,00</span></p>
            <p>Bônus: <span className="font-bold">R$61.794,00</span></p>
            <div className="h-1 bg-yellow-500 w-full"></div>
            <p className="text-4xl font-bold">Total: R$181.794,00</p>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}

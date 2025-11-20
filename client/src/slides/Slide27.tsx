import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function Slide27() {
  return (
    <Slide className="flex items-center justify-center">
      <div className="w-full px-8 md:px-16 py-12 relative">
        <div className="absolute top-8 left-8 w-32 h-32">
          <div className="w-0.5 h-24 bg-yellow-500"></div>
          <div className="w-24 h-0.5 bg-yellow-500 absolute top-0"></div>
          <div className="absolute top-12 left-12">
            <div className="w-16 h-16 border-2 border-yellow-500 rounded-full"></div>
            <div className="w-20 h-20 border-2 border-yellow-500 rounded-full absolute -top-2 -left-2"></div>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.6 }} className="text-center space-y-8 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-sans">
            SUA NOVA ESTRUTURA<br />DE MÚLTIPLOS 6~7<br />DÍGITOS COM <span className="border-b-4 border-yellow-500">ROAS 30+</span>
          </h1>
        </motion.div>
        <div className="absolute bottom-8 right-8 w-32 h-32">
          <div className="absolute bottom-12 right-12">
            <div className="w-16 h-16 border-2 border-yellow-500 rounded-full"></div>
            <div className="w-20 h-20 border-2 border-yellow-500 rounded-full absolute -bottom-2 -right-2"></div>
          </div>
        </div>
      </div>
    </Slide>
  );
}

import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';
import { TrendingDown, DollarSign, Clock } from 'lucide-react';

export default function Slide20() {
  return (
    <Slide className="flex items-center justify-center">
      <div className="w-full px-8 md:px-16 py-12 relative">
        <div className="absolute top-8 left-8 w-24 h-24">
          <div className="w-0.5 h-20 bg-yellow-500 absolute left-8"></div>
          <div className="w-20 h-0.5 bg-yellow-500 absolute top-8"></div>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="space-y-12 max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-sans">Momento</h1>
          <p className="text-white text-xl">Leads Desqualificados são como um tumor silencioso no seu negócio.</p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <TrendingDown className="w-10 h-10 text-red-500" />
              <p className="text-white text-lg">deixam o Comercial vitimista e desmotivado</p>
            </div>
            <div className="flex items-center gap-4">
              <DollarSign className="w-10 h-10 text-red-500" />
              <p className="text-white text-lg">consomem sua Margem de Lucro</p>
            </div>
            <div className="flex items-center gap-4">
              <Clock className="w-10 h-10 text-red-500" />
              <p className="text-white text-lg">Te exigem MAIS pra fazer MENOS</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}

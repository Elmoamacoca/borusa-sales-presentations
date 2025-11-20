import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';
import { Clock, DollarSign, Building2, AlertCircle, Hourglass } from 'lucide-react';

export default function ObstaclesSlide() {
  return (
    <Slide className="flex items-center justify-center">
      <div className="w-full px-8 md:px-16 py-12 relative">
        <div className="absolute top-8 left-8 w-24 h-24">
          <div className="w-0.5 h-20 bg-yellow-500 absolute left-8"></div>
          <div className="w-20 h-0.5 bg-yellow-500 absolute top-8"></div>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="text-left mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-sans">Obstáculos no Caminho</h1>
        </motion.div>
        <div className="space-y-6 max-w-3xl">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.5 }} className="flex items-center gap-4">
            <Clock className="w-8 h-8 text-white flex-shrink-0" />
            <div className="flex-1"><div className="h-px bg-white w-full"></div></div>
            <p className="text-white text-lg font-medium">Tempo</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.5 }} className="flex items-center gap-4">
            <DollarSign className="w-8 h-8 text-white flex-shrink-0" />
            <div className="flex-1"><div className="h-px bg-white w-full"></div></div>
            <p className="text-white text-lg font-medium">Investimento</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, duration: 0.5 }} className="flex items-center gap-4">
            <Building2 className="w-8 h-8 text-white flex-shrink-0" />
            <div className="flex-1"><div className="h-px bg-white w-full"></div></div>
            <p className="text-white text-lg font-medium">Estrutura</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7, duration: 0.5 }} className="flex items-center gap-4">
            <AlertCircle className="w-8 h-8 text-white flex-shrink-0" />
            <div className="flex-1"><div className="h-px bg-white w-full"></div></div>
            <p className="text-white text-lg font-medium">Habilidade</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, duration: 0.5 }} className="flex items-center gap-4">
            <Hourglass className="w-8 h-8 text-white flex-shrink-0" />
            <div className="flex-1"><div className="h-px bg-white w-full"></div></div>
            <p className="text-white text-lg font-medium">Momento</p>
          </motion.div>
        </div>
        <div className="absolute bottom-8 right-8 w-32 h-32">
          <div className="w-24 h-0.5 bg-yellow-500 absolute bottom-8"></div>
        </div>
      </div>
    </Slide>
  );
}

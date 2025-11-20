import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';
import { User, Users, DollarSign } from 'lucide-react';

export default function ClosingSlide() {
  return (
    <Slide className="flex items-center justify-center">
      <div className="w-full px-8 md:px-16 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="text-left mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-sans">Resultados?</h1>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }} className="space-y-4">
            <div className="flex justify-center"><User className="w-12 h-12 text-white" /></div>
            <div className="border-l-2 border-yellow-500 pl-4"><p className="text-white text-sm md:text-base">Grande Player atrás de Grande Player querendo implementar a metodologia de "Copy Sem Promessa";</p></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }} className="space-y-4">
            <div className="flex justify-center"><Users className="w-12 h-12 text-white" /></div>
            <div className="border-l-2 border-yellow-500 pl-4"><p className="text-white text-sm md:text-base">Centenas de pessoas buscando modelar e replicar minhas Copies;</p></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }} className="space-y-4">
            <div className="flex justify-center"><DollarSign className="w-12 h-12 text-white" /></div>
            <div className="border-l-2 border-yellow-500 pl-4"><p className="text-white text-sm md:text-base">6 dígitos no 1º mês com foco no projeto como Expert;</p></div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}

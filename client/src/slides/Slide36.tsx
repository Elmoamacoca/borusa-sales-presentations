import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function Slide36() {
  return (
    <Slide className="flex items-center justify-center">
      <div className="w-full h-full flex">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="w-1/2 flex items-center justify-center px-12 relative">
          <div className="absolute top-8 left-8 w-32 h-32">
            <div className="w-0.5 h-24 bg-yellow-500"></div>
            <div className="w-24 h-0.5 bg-yellow-500 absolute top-0"></div>
          </div>
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white font-sans">FUNIL DE ISCA</h1>
            <p className="text-white text-lg">um "Hack de Tráfego" para alcançar 80%, até 100% de taxa de Leads Qualificados e viciar o Meta Ads a te mostrar APENAS para as pessoas corretas.</p>
            <p className="text-white text-lg">Para isso, utilizamos iscas que podem ser...</p>
            <p className="text-white text-lg">&gt;&gt; Gratuitas: para maior volume de Leads, mais rápido;</p>
            <p className="text-white text-lg">&gt;&gt; Pagas: para gerar Leads Qualificados a CAC zero.</p>
            <div className="h-1 bg-yellow-500 w-32"></div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, duration: 0.6 }} className="w-1/2 bg-gray-900 flex items-center justify-center"></motion.div>
      </div>
    </Slide>
  );
}

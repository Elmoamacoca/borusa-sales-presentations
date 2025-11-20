import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';
import { Rocket, Users, Zap, Shield } from 'lucide-react';

export default function Slide41() {
  return (
    <Slide className="flex items-center justify-center">
      <div className="w-full px-8 md:px-16 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="space-y-12">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-sans">NO QUE CONSISTE A IMPLEMENTAÇÃO<br/>HÍBRIDA DO MQL MACHINE</h1>
            <p className="text-xl text-white/80 italic">(12 meses de ciclo)</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className="flex gap-4">
              <Rocket className="w-12 h-12 text-white flex-shrink-0" />
              <div>
                <p className="text-white text-lg">Uma Implementação a 4 mãos de toda a metodologia, eu faço parte do trabalho POR você</p>
                <div className="h-1 bg-yellow-500 w-32 mt-4"></div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.6 }} className="flex gap-4">
              <Users className="w-12 h-12 text-white flex-shrink-0" />
              <div>
                <p className="text-white text-lg">Acompanhamento personalizado do seu negócio, de forma individual</p>
                <div className="h-1 bg-yellow-500 w-32 mt-4"></div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, duration: 0.6 }} className="flex gap-4">
              <Zap className="w-12 h-12 text-white flex-shrink-0" />
              <div>
                <p className="text-white text-lg">Sprints Estratégicos para acelerar a sua escala de maneira lucrativa</p>
                <div className="h-1 bg-yellow-500 w-32 mt-4"></div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7, duration: 0.6 }} className="flex gap-4">
              <Shield className="w-12 h-12 text-white flex-shrink-0" />
              <div>
                <p className="text-white text-lg">Suporte Individual com quem fez primeiro no Campo de Batalha, pra depois ensinar</p>
                <div className="h-1 bg-yellow-500 w-32 mt-4"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}

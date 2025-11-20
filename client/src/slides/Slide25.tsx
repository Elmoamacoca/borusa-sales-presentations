import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';
import { Heart, Target, TrendingUp, UserCheck, Clock, Smile } from 'lucide-react';

export default function Slide25() {
  return (
    <Slide className="flex items-center justify-center">
      <div className="w-full px-8 md:px-16 py-12 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="space-y-12 max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-900/50 backdrop-blur rounded-lg p-6 border border-blue-500/30 space-y-4">
              <Heart className="w-12 h-12 text-red-500" />
              <p className="text-white text-lg">Clientes que <span className="font-bold">pagam bem, pagam rápido</span> e <span className="font-bold">pagam fácil</span></p>
            </div>
            <div className="bg-blue-900/50 backdrop-blur rounded-lg p-6 border border-blue-500/30 space-y-4">
              <Target className="w-12 h-12 text-red-500" />
              <p className="text-white text-lg">Um negócio que opera com alta margem de lucro, <span className="font-bold">mesmo na escala</span></p>
            </div>
            <div className="bg-blue-900/50 backdrop-blur rounded-lg p-6 border border-blue-500/30 space-y-4">
              <TrendingUp className="w-12 h-12 text-red-500" />
              <p className="text-white text-lg">Recorrência no High-Ticket pra <span className="font-bold">aumento do ROI</span> e dar previsibilidade</p>
            </div>
            <div className="bg-blue-900/50 backdrop-blur rounded-lg p-6 border border-blue-500/30 space-y-4">
              <UserCheck className="w-12 h-12 text-red-500" />
              <p className="text-white text-lg">Um negócio que vende <span className="font-bold">sem a sua presença</span>, mesmo sem colaboradores geniais</p>
            </div>
            <div className="bg-blue-900/50 backdrop-blur rounded-lg p-6 border border-blue-500/30 space-y-4">
              <Clock className="w-12 h-12 text-red-500" />
              <p className="text-white text-lg">Muito mais <span className="font-bold">previsibilidade</span>, sem o "tô rico, tô pobre"</p>
            </div>
            <div className="bg-blue-900/50 backdrop-blur rounded-lg p-6 border border-blue-500/30 space-y-4">
              <Smile className="w-12 h-12 text-red-500" />
              <p className="text-white text-lg">Alívio do estresse, mais tempo e <span className="font-bold">mais tranquilidade</span> pra focar em outras áreas da vida</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full p-6 text-center">
            <p className="text-white text-2xl font-bold">Quanto que valeria hoje pro seu negócio, tudo isso? →</p>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}

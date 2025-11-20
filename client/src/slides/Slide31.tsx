import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function Slide31() {
  return (
    <Slide className="flex items-center justify-center">
      <div className="w-full h-full flex">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="w-1/2 flex items-center justify-center px-12 relative">
          <div className="absolute top-8 left-8 w-32 h-32">
            <div className="w-0.5 h-24 bg-yellow-500"></div>
            <div className="w-24 h-0.5 bg-yellow-500 absolute top-0"></div>
            <div className="absolute top-12 left-12">
              <div className="w-16 h-16 border-2 border-yellow-500 rounded-full"></div>
            </div>
          </div>
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white font-sans">CONTEÚDOS<br/>HBW</h1>
            <p className="text-white text-lg">Conteúdos intencionais que amplificam sua autoridade e reconhecimento no mercado, além de te tornar famoso nas "bolhas" certas (que pagam bem, pagam rápido e viram case).</p>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, duration: 0.6 }} className="w-1/2 bg-gray-900 flex items-center justify-center p-8">
          <div className="w-full max-w-md bg-black rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
              <div><p className="text-white font-bold text-sm">fiel.mat</p><p className="text-white/70 text-xs">Seguir</p></div>
            </div>
            <div className="p-4 space-y-3">
              {['jacksonandredebr', 'fergon.joao', 'brunohaubergint', 'connieirsmartt', 'bruno.r.melo', 'victordasmartofficial', 'jacopylomatos'].map((user, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                  <div className="flex-1"><p className="text-white text-sm">{user}</p><p className="text-gray-400 text-xs">curtiu • Responder</p></div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}

import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function Slide41() {
  return (
    <Slide>
      <div className="w-full h-full flex items-center justify-center gap-12 px-16">
        {/* Ícone de Interrogação */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-yellow-400 text-9xl font-bold"
        >
          ?
        </motion.div>

        {/* Texto DÚVIDAS? */}
        <motion.h1
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-8xl font-light text-white font-sans"
        >
          <span className="border-b-4 border-yellow-400">DÚVIDAS</span>?
        </motion.h1>
      </div>
    </Slide>
  );
}

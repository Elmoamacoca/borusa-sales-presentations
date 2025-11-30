import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function Slide68() {
  return (
    <Slide>
      <div className="w-full h-full flex items-center justify-center px-16">
        {/* Texto Principal em duas linhas */}
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-light text-white font-sans tracking-wide mb-4"
          >
            CÉLULA TÉRMINUS™
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.span
              animate={{
                opacity: [1, 0.6, 1],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="text-6xl md:text-7xl lg:text-8xl text-yellow-400 font-semibold font-sans"
            >
              NEST
            </motion.span>
          </motion.h2>
        </div>
      </div>
    </Slide>
  );
}

import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function PerguntaIASlide() {
  return (
    <Slide>
      <div className="w-full h-full flex items-center justify-center px-16">
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-6xl font-light text-white text-center leading-tight font-sans max-w-4xl"
        >
          Será que eu preciso mesmo mexer com IA agora?
        </motion.h1>
      </div>
    </Slide>
  );
}

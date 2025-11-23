import { motion } from 'framer-motion';
import { Slide } from '@/components/presentation/Slide';

export default function JourneySlide() {
  return (
    <Slide>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="w-full h-full flex items-center justify-center"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center leading-tight font-sans">
          Como chegamos até aqui
        </h1>
      </motion.div>
    </Slide>
  );
}

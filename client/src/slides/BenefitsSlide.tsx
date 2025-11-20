import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function BenefitsSlide() {
  return (
    <Slide className="flex items-center justify-center">
      <div className="w-full h-full flex items-center justify-center px-8 md:px-16 py-12 relative">
        <div className="absolute top-8 left-8 w-24 h-24">
          <div className="w-0.5 h-20 bg-yellow-500 absolute left-8"></div>
          <div className="w-20 h-0.5 bg-yellow-500 absolute top-8"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center space-y-8 max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-sans">
            Já Imaginou<br />
            Fazer 6 Dígitos<br />
            Com Apenas 1<br />
            Cliente?
          </h1>
        </motion.div>
        <div className="absolute bottom-8 right-8 w-32 h-32">
          <div className="w-24 h-0.5 bg-yellow-500 absolute bottom-8"></div>
        </div>
      </div>
    </Slide>
  );
}

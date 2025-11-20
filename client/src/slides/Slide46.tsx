import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function Slide46() {
  return (
    <Slide className="flex items-center justify-center">
      <div className="w-full px-8 md:px-16 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="space-y-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-sans">E QUANTO VALE...</h1>
          <div className="space-y-6 text-white text-xl">
            <p>Ter uma implementação híbrida onde eu faço PARTE do trabalho por você?</p>
            <p>Ter sprints estratégicos para acelerar seus resultados?</p>
            <p>Ter um plano de ação personalizado para os próximos 90 dias do seu negócio?</p>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}

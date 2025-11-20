import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function Slide48() {
  return (
    <Slide className="flex items-center justify-center">
      <div className="w-full px-8 md:px-16 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="space-y-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-sans">QUANTO VOCÊ PAGA?</h1>
          <div className="space-y-6 text-white text-xl">
            <p>Por uma transformação completa no seu negócio?</p>
            <p>Por ter acesso direto a quem já trilhou esse caminho?</p>
            <p>Por uma metodologia que já provou resultados consistentes?</p>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}

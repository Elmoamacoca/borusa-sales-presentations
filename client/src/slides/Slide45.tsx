import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function Slide45() {
  return (
    <Slide className="flex items-center justify-center">
      <div className="w-full px-8 md:px-16 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="space-y-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-sans">QUANTO VALE...</h1>
          <div className="space-y-6 text-white text-xl">
            <p>Ter alguém que já fez isso dezenas de vezes te guiando passo a passo?</p>
            <p>Ter acesso a uma metodologia validada que já gerou +8 dígitos?</p>
            <p>Ter suporte individual e personalizado durante 12 meses?</p>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}

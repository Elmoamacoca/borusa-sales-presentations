import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function Slide38() {
  return (
    <Slide className="flex items-center justify-center">
      <div className="w-full px-8 md:px-16 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="text-center max-w-5xl mx-auto">
          <p className="text-white text-2xl md:text-3xl leading-relaxed">
            A única maneira de escalar com lucro, previsibilidade e liberdade, é criando uma máquina de captação e conversão de MQLs em clientes de Alto Valor
          </p>
        </motion.div>
      </div>
    </Slide>
  );
}

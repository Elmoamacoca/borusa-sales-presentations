import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function Slide40() {
  return (
    <Slide>
      <div className="w-full h-full flex items-center justify-center px-16">
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl font-light text-white text-center leading-tight font-sans max-w-6xl"
        >
          A única maneira de escalar seu Inside Sales B2B com lucro previsível e time enxuto é transformar <span className="text-yellow-400 font-semibold">IA bruta</span> em um <span className="text-yellow-400 font-semibold">Sistema Operacional Comercial</span> que otimiza, multiplica e aprende dentro da sua operação.
        </motion.h1>
      </div>
    </Slide>
  );
}

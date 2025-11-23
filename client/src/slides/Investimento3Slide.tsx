import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function Investimento3Slide() {
  return (
    <Slide className="!p-0 !max-w-none">
      <div className="w-full h-full flex">
        {/* Lado ESQUERDO - Conteúdo de texto */}
        <div className="w-1/2 h-full flex flex-col justify-center px-16 relative z-10">
          {/* Pergunta */}
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl font-light text-white leading-relaxed font-sans"
          >
            O que aconteceu com as empresas que decidiram "esperar a internet passar" lá nos anos 2000?
          </motion.h1>
        </div>

        {/* Lado DIREITO - Imagem */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-1/2 h-full relative overflow-hidden"
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            width: '50vw',
            height: '100%',
          }}
        >
          <img
            src="/investimento3-tech.jpg"
            alt="Investimento"
            className="w-full h-full object-cover object-center"
          />
          {/* Overlay sutil */}
          <div className="absolute inset-0 bg-black/10"></div>
        </motion.div>
      </div>
    </Slide>
  );
}

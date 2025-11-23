import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function MissionSlide() {
  return (
    <Slide className="flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Logo à esquerda */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex justify-center md:justify-end"
          >
            <img
              src="/assets/borusa-logo.png"
              alt="BORUSA"
              className="w-80 md:w-96 lg:w-[28rem] opacity-90"
            />
          </motion.div>

          {/* Conteúdo à direita */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-8"
          >
            {/* Título "Nossa Missão" com tipografia serifada */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif">
              NOSSA MISSÃO
            </h2>

            {/* Texto da missão com tipografia mais fina */}
            <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed font-sans font-light">
              Desenhar, implementar e operar sistemas de IA comercial que tornem operações de Inside Sales B2B mais previsíveis, eficientes e escaláveis, com maior geração de receita e menor dependência de pessoas, ferramentas e agências.
            </p>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}

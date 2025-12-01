import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function OtimizacaoTempo2Slide() {
  return (
    <Slide className="flex flex-col items-center justify-start relative overflow-hidden">
      {/* Imagem de fundo no topo - position absolute para ocupar 100vw */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="absolute top-0 left-0 right-0 h-[38vh] overflow-hidden"
        style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}
      >
        <img 
          src="/momento-ai-future.png" 
          alt="Momento"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 20%' }}
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/80 to-transparent"></div>
      </motion.div>

      {/* Spacer para empurrar conteúdo para baixo */}
      <div className="h-[28vh] w-full"></div>

      {/* Conteúdo principal */}
      <div className="w-full max-w-6xl mx-auto px-8 md:px-16 pt-20 pb-6 flex-1 flex flex-col justify-start relative z-10">
        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mt-0 mb-8 font-sans leading-tight"
        >
          Momento
        </motion.h1>

        {/* Parágrafos */}
        <div className="space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-gray-300 text-sm md:text-base leading-relaxed font-light"
          >
            A IA está hoje no mesmo ponto em que a internet estava nos anos 2000.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-gray-300 text-sm md:text-base leading-relaxed font-light"
          >
            Adiar não te tira do jogo, só te faz entrar{' '}
            <span className="underline decoration-yellow-500 decoration-1 underline-offset-4">mais caro</span>{' '}
            e com{' '}
            <span className="underline decoration-yellow-500 decoration-1 underline-offset-4">menos vantagem</span>.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-gray-300 text-sm md:text-base leading-relaxed font-light"
          >
            Enquanto você espera, concorrentes{' '}
            <span className="underline decoration-yellow-500 decoration-1 underline-offset-4">treinam sistema</span>,{' '}
            <span className="underline decoration-yellow-500 decoration-1 underline-offset-4">afinam processo</span>{' '}
            e{' '}
            <span className="underline decoration-yellow-500 decoration-1 underline-offset-4">acostumam o time</span>.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-gray-300 text-sm md:text-base leading-relaxed font-light"
          >
            Quando você entrar, eles já vão estar{' '}
            <span className="text-yellow-500">alguns anos à frente em dados, aprendizado e eficiência</span>.
          </motion.p>
        </div>
      </div>
    </Slide>
  );
}

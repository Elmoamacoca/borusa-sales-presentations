import { Slide } from '@/components/presentation/Slide';
import { OptimizedImage } from '@/components/OptimizedImage';
import { motion } from 'framer-motion';

export default function OtimizacaoTempoSlide() {
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
        <OptimizedImage 
          src="/otimizacao-tempo-new.png" 
          alt="Otimização de Tempo"
          priority={true}
          containerClassName="w-full h-full"
          objectFit="cover"
          objectPosition="center"
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
          className="text-4xl md:text-5xl font-normal text-white mt-0 mb-8 font-sans"
        >
          Otimização de tempo
        </motion.h1>

        {/* Grid de cards 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="rounded-lg p-6 border border-white/20 bg-transparent"
          >
            <p className="text-white text-lg md:text-xl font-normal">
              Começamos em 1 processo crítico do funil.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="rounded-lg p-6 border border-white/20 bg-transparent"
          >
            <p className="text-white text-lg md:text-xl font-normal">
              Você não precisa estudar IA.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="rounded-lg p-6 border border-white/20 bg-transparent"
          >
            <p className="text-white text-lg md:text-xl font-normal">
              Não exige parar a operação atual.
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="rounded-lg p-6 border border-white/20 bg-transparent"
          >
            <p className="text-white text-lg md:text-xl font-normal">
              Implementação calibrada por níveis (aumenta só depois que faz sentido).
            </p>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}

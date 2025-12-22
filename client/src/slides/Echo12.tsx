import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function Echo12() {
  return (
    <Slide>
      <div className="w-full h-full flex flex-col items-start justify-center px-16 py-8">
        {/* Título Principal */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 font-sans leading-tight">
            <span className="text-purple-400 font-semibold">2 TUTORIAS 1:1</span>
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-12 font-sans leading-tight">
            PRA AJUSTAR O JOGO JUNTO COM VOCÊ
          </h2>
        </motion.div>

        {/* Conteúdo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="space-y-8 max-w-4xl"
        >
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light font-sans">
            Além da implementação, você tem direito a{' '}
            <span className="text-white font-semibold">2 tutorias individuais durante o ciclo</span>: pra falar de marketing, comercial, processo ou qualquer ponto crítico da operação.
          </p>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light font-sans">
            É você trazendo o{' '}
            <span className="text-white font-semibold">problema da semana</span> e a gente{' '}
            <span className="text-white font-semibold">resolvendo em cima do que o sistema está mostrando.</span>
          </p>
        </motion.div>
      </div>
    </Slide>
  );
}

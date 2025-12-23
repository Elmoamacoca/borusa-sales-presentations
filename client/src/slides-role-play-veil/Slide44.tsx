import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function Slide44() {
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
            PLANO DE AÇÃO
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-12 font-sans leading-tight">
            PERSONALIZADO E INDIVIDUAL
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
            Em uma reunião individual vamos definir todas as ações, funis, metas e métricas que vamos buscar para um{' '}
            <span className="text-white font-semibold">Sprint de 90 dias.</span>
          </p>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light font-sans">
            Você sairá com todos os{' '}
            <span className="text-white font-semibold">próximos 90 dias do seu negócio desenhados de forma personalizada</span>
          </p>
        </motion.div>
      </div>
    </Slide>
  );
}

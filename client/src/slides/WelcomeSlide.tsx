import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';
import { DollarSign, Target, TrendingUp } from 'lucide-react';

export default function WelcomeSlide() {
  return (
    <Slide className="flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-12"
        >
          {/* Título Principal */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight font-sans">
            Você encontrou a peça que faltava. Vamos instalar um sistema de{' '}
            <span className="underline decoration-yellow-500 decoration-4 underline-offset-8">
              IA comercial
            </span>{' '}
            que otimiza seus resultados, multiplica o que já está bom e se alimenta da inteligência da sua operação.
          </h1>

          {/* Linha decorativa */}
          <div className="w-64 h-1 bg-gradient-to-r from-yellow-500 to-transparent"></div>

          {/* Grid de Benefícios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            {/* Benefício 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Você consegue ver onde está vazando sua receita. Decisões baseadas em dados, não em achismo.
                </p>
              </div>
            </motion.div>

            {/* Benefício 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Cada lead que você pagou em mídia agora recebe a atenção que merecia. Nenhuma venda perdida.
                </p>
              </div>
            </motion.div>

            {/* Benefício 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Sua operação não apenas funciona, ela melhora sozinha. Inteligência contínua evoluindo.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Linha decorativa inferior */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"
          ></motion.div>
        </motion.div>
      </div>
    </Slide>
  );
}

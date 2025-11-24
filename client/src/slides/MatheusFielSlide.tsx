import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, Brain, Award } from 'lucide-react';

export default function MatheusFielSlide() {
  return (
    <Slide className="flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src="/assets/gabriel-torres.png"
              alt="Gabriel Torres"
              className="w-full max-w-md rounded-lg shadow-2xl"
            />
          </motion.div>

          {/* Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-8"
          >
            {/* Nome */}
            <h2 className="text-4xl md:text-5xl font-semibold text-white font-sans mb-12">
              GABRIEL TORRES
            </h2>

            {/* Lista de informações com ícones */}
            <div className="space-y-6">
              {/* Item 1 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex gap-4 items-center"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-transparent">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-white text-base md:text-lg leading-snug font-light">
                  Empresário com mais de 4 anos de experiência em vendas B2B
                </p>
              </motion.div>

              {/* Item 2 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex gap-4 items-center"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-transparent">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-white text-base md:text-lg leading-snug font-light">
                  +7 Dígitos em vendas B2B
                </p>
              </motion.div>

              {/* Item 3 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex gap-4 items-center"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-transparent">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-white text-base md:text-lg leading-snug font-light">
                  Desenvolvedor do Cérebro Comercial Autônomo (CCA)
                </p>
              </motion.div>

              {/* Item 4 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex gap-4 items-center"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-transparent">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-white text-base md:text-lg leading-snug font-light">
                  Responsável por modelar a o framework da tesla de aprendizagem de inteligência artificial no Brasil.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}

import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Mail, Target } from 'lucide-react';

export default function IntroSlide() {
  return (
    <Slide className="flex items-center justify-center">
      <div className="w-full h-full flex flex-col md:flex-row">
        {/* Lado Esquerdo - Imagem */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-full md:w-2/5 bg-red-600 flex items-end justify-center relative overflow-hidden"
        >
          {/* Placeholder para imagem */}
          <div className="w-full h-full flex items-end justify-center">
            <div className="w-3/4 h-4/5 bg-gradient-to-t from-black/30 to-transparent rounded-t-full"></div>
          </div>
          
          {/* Linha decorativa dourada no topo */}
          <div className="absolute top-0 right-0 w-20 h-20">
            <div className="w-full h-0.5 bg-yellow-500 absolute top-8"></div>
            <div className="w-0.5 h-full bg-yellow-500 absolute right-8"></div>
          </div>
        </motion.div>

        {/* Lado Direito - Conteúdo */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-full md:w-3/5 flex items-center justify-center px-8 md:px-16 py-12"
        >
          <div className="space-y-8 max-w-2xl">
            {/* Título */}
            <h1 className="text-4xl md:text-5xl font-bold text-white font-sans">
              MATHEUS FIEL:
            </h1>

            {/* Lista de Credenciais */}
            <div className="space-y-6">
              {/* Item 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex gap-4 items-start"
              >
                <div className="flex-shrink-0 mt-1">
                  <BarChart3 className="w-6 h-6 text-red-500" />
                </div>
                <p className="text-white text-lg md:text-xl font-medium">
                  Copywriter e Estrategista Especializado em High-Ticket;
                </p>
              </motion.div>

              {/* Item 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex gap-4 items-start"
              >
                <div className="flex-shrink-0 mt-1">
                  <BarChart3 className="w-6 h-6 text-red-500" />
                </div>
                <p className="text-white text-lg md:text-xl font-medium">
                  +8 Dígitos em vendas B2B
                </p>
              </motion.div>

              {/* Item 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="flex gap-4 items-start"
              >
                <div className="flex-shrink-0 mt-1">
                  <Mail className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <p className="text-white text-lg md:text-xl font-medium">
                    7 Dígitos com ROAS 25+
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    Em um Perfil sem ostentação, sem nome famoso e (quase) sem aparecer
                  </p>
                </div>
              </motion.div>

              {/* Item 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="flex gap-4 items-start"
              >
                <div className="flex-shrink-0 mt-1">
                  <Target className="w-6 h-6 text-red-500" />
                </div>
                <p className="text-white text-lg md:text-xl font-medium">
                  Responsável por gerar taxas de qualificação de +85% mesmo pra público frio;
                </p>
              </motion.div>
            </div>

            {/* Linha decorativa inferior */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="w-full h-px bg-gradient-to-r from-yellow-500/50 to-transparent"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}

import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function ProblemSlide() {
  return (
    <Slide className="flex items-center justify-center">
      <div className="w-full h-full flex flex-col md:flex-row">
        {/* Lado Esquerdo - Texto */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-full md:w-1/2 flex items-center justify-center px-8 md:px-16 py-12 relative"
        >
          <div className="space-y-8 max-w-2xl">
            {/* Linhas decorativas douradas no canto superior esquerdo */}
            <div className="absolute top-8 left-8 w-24 h-24">
              <div className="w-0.5 h-20 bg-yellow-500 absolute left-8"></div>
              <div className="w-20 h-0.5 bg-yellow-500 absolute top-8"></div>
            </div>

            {/* Ano */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-2xl font-bold text-white font-sans"
            >
              2022
            </motion.p>

            {/* Texto Principal */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-white leading-tight font-sans"
            >
              Início da jornada com Ofertas de R$2.000 e R$782K no 1º Lançamento que escreveu...
            </motion.h1>
          </div>
        </motion.div>

        {/* Lado Direito - Screenshot Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="w-full md:w-1/2 flex items-center justify-center px-8 py-12 relative"
        >
          {/* Placeholder para screenshot */}
          <div className="bg-blue-600 rounded-lg shadow-2xl p-6 max-w-md w-full space-y-3">
            <div className="space-y-2">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-orange-500 rounded p-2 text-white text-xs">
                  Notificação de venda #{i + 1}
                </div>
              ))}
            </div>
            <div className="bg-black/30 rounded-lg p-4 text-center">
              <p className="text-white text-lg font-bold">
                Quase R$400K<br />menos de 1 dia
              </p>
            </div>
          </div>

          {/* Linhas decorativas douradas no canto inferior direito */}
          <div className="absolute bottom-8 right-8 w-24 h-24">
            <div className="w-20 h-0.5 bg-yellow-500 absolute bottom-8"></div>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}

import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function SolutionSlide() {
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
              2025
            </motion.p>

            {/* Texto Principal */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-white leading-tight font-sans"
            >
              Alta conversão em Ofertas de R$10.000, R$60.000 e muito (muito!) mais...
            </motion.h1>
          </div>
        </motion.div>

        {/* Lado Direito - Screenshots de Contratos */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="w-full md:w-1/2 flex items-center justify-center px-8 py-12 relative"
        >
          <div className="grid grid-cols-2 gap-4 max-w-lg">
            {/* Card 1 - Contrato R$24.000 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="bg-black/60 rounded-lg p-4 space-y-2"
            >
              <div className="bg-red-600 text-white text-xs font-bold p-2 rounded">
                contrato de R$24.000,00 fechado
              </div>
              <div className="bg-gray-800 rounded p-2">
                <p className="text-white text-xs">contrato de 24K fechado. 8K primeira parcela...</p>
              </div>
            </motion.div>

            {/* Card 2 - Oferta R$5.000 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="bg-black/60 rounded-lg p-4 space-y-2"
            >
              <div className="bg-red-600 text-white text-xs font-bold p-2 rounded">
                cobrava R$5.000 e com 1 ajuste de Oferta já fechou 5 clientes a R$30.000
              </div>
              <div className="bg-green-600 rounded p-2">
                <p className="text-white text-xs font-bold">30k à vista<br />12x3 no cartão</p>
              </div>
            </motion.div>

            {/* Card 3 - Contrato R$60.000 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.4 }}
              className="col-span-2 bg-black/60 rounded-lg p-4"
            >
              <div className="bg-red-600 text-white text-xs font-bold p-2 rounded">
                contrato de R$60.000,00 fechado
              </div>
            </motion.div>
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

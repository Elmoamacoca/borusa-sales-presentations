import { Slide } from '@/components/presentation/Slide';
import { OptimizedImage } from '@/components/OptimizedImage';
import { motion } from 'framer-motion';

export default function InvestimentoSlide() {
  return (
    <Slide className="!p-0 !max-w-none">
      <div className="w-full h-full flex">
        {/* Lado ESQUERDO - Conteúdo de texto */}
        <div className="w-1/2 h-full flex flex-col justify-start pt-24 px-16 relative z-10">
          {/* Título */}
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl font-light text-white mb-8 font-sans"
          >
            Investimento
          </motion.h1>

          {/* Parágrafo 1 */}
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gray-300 text-xl font-light leading-relaxed mb-6"
          >
            Imagina que você financia um imóvel comercial numa das melhores ruas da cidade.
          </motion.p>

          {/* Parágrafo 2 */}
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-gray-300 text-xl font-light leading-relaxed mb-6"
          >
            Parcela mensal: R$ 20.000.
            <br />
            Receita média daquele ponto: R$ 12.000.
          </motion.p>

          {/* Parágrafo 3 */}
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-yellow-500 text-xl font-light leading-relaxed"
          >
            Esse ponto está ou não está te trazendo mais prejuízo do que caixa?
          </motion.p>
        </div>

        {/* Lado DIREITO - Imagem */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-1/2 h-full relative overflow-hidden"
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            width: '50vw',
            height: '100%',
          }}
        >
          <OptimizedImage
            src="/investimento-oil.jpg"
            alt="Investimento"
            priority={true}
            containerClassName="w-full h-full"
            objectFit="cover"
            objectPosition="center"
          />
          {/* Overlay sutil */}
          <div className="absolute inset-0 bg-black/10"></div>
        </motion.div>
      </div>
    </Slide>
  );
}

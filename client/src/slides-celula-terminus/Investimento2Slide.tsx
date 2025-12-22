import { Slide } from '@/components/presentation/Slide';
import { OptimizedImage } from '@/components/OptimizedImage';
import { motion } from 'framer-motion';

export default function Investimento2Slide() {
  const bulletPoints = [
    "A cada lead que entra e sai sem ser trabalhado, é mais um mês em que esse \"ponto\" não se paga.",
    "Seu time gasta energia em conversa solta e deixa de falar com quem tem dinheiro e urgência.",
    "Você segura custo de ponto caro com movimento de ponto ruim.",
    "É dinheiro que você está deixando na mesa todo mês."
  ];

  return (
    <Slide className="!p-0 !max-w-none">
      <div className="w-full h-full flex">
        {/* Lado ESQUERDO - Conteúdo de texto */}
        <div className="w-1/2 h-full flex flex-col justify-start pt-24 pl-4 pr-8 relative z-10">
          {/* Título */}
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl font-light text-white mb-12 font-sans"
          >
            Investimento
          </motion.h1>

          {/* Lista de bullet points */}
          <ul className="space-y-4">
            {bulletPoints.map((text, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                className="flex items-start gap-3"
              >
                <span className="text-yellow-500 text-lg mt-1 flex-shrink-0">•</span>
                <p className="text-gray-300 text-base font-light leading-relaxed">
                  {text}
                </p>
              </motion.li>
            ))}
          </ul>
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
            src="/investimento2-store.jpg"
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

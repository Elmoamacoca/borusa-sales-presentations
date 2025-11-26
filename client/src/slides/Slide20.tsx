import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function Slide20() {
  const items = [
    'Custo por aquisição subindo todo trimestre.',
    'Margem cada vez mais espremida entre mídia, comissão e estrutura.',
    'Leads mais caros, frios, desqualificados e descomprometidos.',
    'Falta de previsibilidade: mês bom, mês ruim e ninguém sabe exatamente por quê.',
    'Time comercial viciado em desculpa, desmotivado e com alto turnover.',
    'Cash collect baixo: muito "vendido" que não vira caixa nos primeiros 30 dias.',
    'Falta braço pra rodar follow-up, nutrição e reengajamento do jeito certo.',
    'Base cheia de leads quebrados, e os realmente qualificados pingando a conta-gotas.',
  ];

  return (
    <Slide className="!p-0 !max-w-none">
      <div className="w-full h-full flex">
        {/* Lado ESQUERDO - Conteúdo de texto */}
        <div className="w-[60%] h-full flex flex-col justify-start pt-24 pl-4 pr-8 relative z-10">
          {/* Título */}
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl font-light text-white mb-12 font-sans"
          >
            CENÁRIO DO MERCADO HOJE:
          </motion.h1>

          {/* Bullet Points */}
          <ul className="space-y-4">
            {items.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                className="flex items-start gap-3"
              >
                <span className="text-yellow-500 text-xl mt-1">•</span>
                <span className="text-base text-gray-300 leading-relaxed">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Lado DIREITO - Imagem */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-[40%] h-full relative overflow-hidden"
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            width: '40vw',
            height: '100%',
          }}
        >
          <img
            src="/slide20-image.png"
            alt="Cenário do Mercado Hoje"
            className="w-full h-full object-cover object-right"
          />
          {/* Overlay sutil */}
          <div className="absolute inset-0 bg-black/10"></div>
        </motion.div>
      </div>
    </Slide>
  );
}

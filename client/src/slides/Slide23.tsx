import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function Slide23() {
  const items = [
    'Priorizar quem tem dinheiro, urgência e fit, sem precisar dobrar investimento em mídia.',
    'Aumentar comparecimento em reuniões sem lotar o time de tarefa manual.',
    'Subir a conversão por etapa com roteiro, timing e follow-up padronizados.',
    'Melhorar cash collect: mais caixa nos primeiros 30 dias de venda.',
    'Escalar mantendo margem, em vez de crescer só aumentando custo de gente e operação.',
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
            className="text-4xl font-light text-white mb-6 font-sans"
          >
            SOLUÇÃO PARA ESCALA COM LUCRO
          </motion.h1>

          {/* Subtítulo/Parágrafo */}
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-base text-gray-300 leading-relaxed mb-8"
          >
            Aproveitar ao máximo o fluxo que você já tem com um sistema de IA que otimiza, multiplica e aprende a cada interação.
          </motion.p>

          {/* Bullet Points */}
          <ul className="space-y-4">
            {items.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
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
            src="/slide21-image.png"
            alt="Solução para Escala com Lucro"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 30%' }}
          />
          {/* Overlay sutil */}
          <div className="absolute inset-0 bg-black/10"></div>
        </motion.div>
      </div>
    </Slide>
  );
}

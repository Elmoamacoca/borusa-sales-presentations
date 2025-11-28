import { motion } from 'framer-motion';
import { MeshGradient } from "@paper-design/shaders-react";
import { DollarSign, MessageSquare, Building2, Zap } from 'lucide-react';

export default function Slide25() {
  const yellowColors = [
    "#b8860b",
    "#9a7209",
    "#8b6914",
    "#7a5c0f",
    "#6b4f0a",
  ];

  const columns = [
    {
      icon: DollarSign,
      title: "IA BRUTA",
      items: [
        "GPT-4: R$ 0,06/1k tokens",
        "Claude: R$ 0,08/1k tokens",
        "1k tokens ≈ 1 resposta média de IA"
      ],
      conclusion: "Abundante e barato"
    },
    {
      icon: MessageSquare,
      title: "CHAT CONVERSACIONAL",
      items: [
        "ChatGPT Plus: R$ 97/mês",
        "Claude Pro: R$ 100/mês",
        ""
      ],
      conclusion: "Uso superficial e limitado"
    },
    {
      icon: Building2,
      title: "PLATAFORMAS",
      items: [
        "CRM com IA: R$ 500/mês",
        "+ Sistema de créditos:",
        "R$ 0,50 a R$ 2,00/interação"
      ],
      conclusion: "Semi-aplicada, semi-calibrada + você paga bomba + lucro da plataforma + créditos"
    },
    {
      icon: Zap,
      title: "IA PRÓPRIA (IDEAL)",
      items: [
        "IA interna: R$ 200/mês",
        "Interação: R$ 0,006",
        ""
      ],
      conclusion: "IA bruta + infraestrutura montada + calibrada para resolver seu problema comercial + você paga só o bruto"
    }
  ];

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden">
      {/* Fundo animado amarelo */}
      <div className="absolute inset-0 z-0">
        <MeshGradient
          className="w-full h-full"
          colors={yellowColors}
          speed={0.15}
          minPixelRatio={1.0}
        />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-start pt-16 px-8">
        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 font-sans text-center"
        >
          IA: O MESMO PARADOXO
        </motion.h1>

        {/* Subtítulo/Disclaimer */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-base md:text-lg font-light text-white/90 mb-12 text-center max-w-4xl"
        >
          O que acontece com o petróleo já acontece com a IA e tende a piorar. A cada ano, você pagará ainda mais caro por cada interação.
        </motion.p>

        {/* Grid de 4 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full mb-12">
          {columns.map((column, index) => {
            const Icon = column.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.15, duration: 0.6 }}
                className="relative bg-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col"
              >
                {/* Divisória à direita (exceto última coluna) */}
                {index < columns.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-4 bottom-4 w-px bg-yellow-500/40" />
                )}
                
                {/* Ícone */}
                <div className="flex justify-center mb-4">
                  <Icon className="w-10 h-10 text-yellow-500" strokeWidth={1.5} />
                </div>
                
                {/* Título */}
                <h3 className="text-sm md:text-base font-semibold text-white text-center mb-4">
                  {column.title}
                </h3>
                
                {/* Items */}
                <div className="flex-1 space-y-2 mb-4">
                  {column.items.map((item, idx) => (
                    <p key={idx} className="text-xs md:text-sm font-light text-white/90 text-center">
                      {item}
                    </p>
                  ))}
                </div>
                
                {/* Conclusão */}
                <p className="text-xs md:text-sm font-light text-white text-center border-t border-white/20 pt-4">
                  {column.conclusion}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Frase de fechamento */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="text-center max-w-4xl"
        >
          <p className="text-lg md:text-xl font-light text-white leading-relaxed mb-2">
            IA é o novo petróleo e você está usando ela muito mal.
          </p>
          <p className="text-lg md:text-xl font-semibold text-yellow-300 leading-relaxed">
            Com nosso sistema: IA calibrada para sua realidade, resolvendo seu problema comercial e pagando barato.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

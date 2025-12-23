import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';
import { Bot, Brain, Settings, Target } from 'lucide-react';

export default function EstruturaSlide() {
  const items = [
    {
      icon: Bot,
      title: 'A IA assume o trabalho repetitivo e padroniza atendimento e follow-up.',
      subtitle: null,
    },
    {
      icon: Brain,
      title: 'O vendedor deixa de ser "operador de tarefa" e vira cérebro da operação.',
      subtitle: null,
    },
    {
      icon: Settings,
      title: 'Gargalos aparecem no sistema; o time pensa onde mexer, a IA executa o ajuste.',
      subtitle: null,
    },
    {
      icon: Target,
      title: 'Você paga vendedor pra racionalizar, não pra ficar preso em rotina mecânica.',
      subtitle: null,
    },
  ];

  return (
    <Slide>
      <div className="w-full h-full flex flex-col justify-center items-center px-16">
        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl font-light text-white mb-16 self-start font-sans"
        >
          Estrutura
        </motion.h1>

        {/* 4 Blocos Verticais */}
        <div className="flex flex-col gap-6 w-full max-w-4xl mb-12">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
                className="flex items-center gap-6"
              >
                {/* Ícone em caixa transparente com borda branca */}
                <div className="flex-shrink-0 w-16 h-16 bg-transparent border border-white/20 rounded-lg flex items-center justify-center">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Conteúdo */}
                <div className="flex-1">
                  <h3 className="text-xl font-light text-white leading-relaxed font-sans">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="text-sm text-gray-400 mt-1 font-sans">{item.subtitle}</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Rodapé */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-lg text-gray-400 italic text-center max-w-3xl font-sans"
        >
          Essa estrutura coloca a repetição na mão da IA e o pensamento na mão do seu time comercial.
        </motion.p>
      </div>
    </Slide>
  );
}

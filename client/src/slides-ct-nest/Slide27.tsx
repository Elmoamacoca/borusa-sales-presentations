import { motion } from 'framer-motion';
import { MeshGradient } from "@paper-design/shaders-react";
import { Zap, Eye, Users, RefreshCw, TrendingUp, Brain } from 'lucide-react';

export default function Slide27() {
  // Paleta azul da primeira dobra do site Borusa (mesma do BackgroundShader)
  const blueColors = [
    "#0a0a0a",
    "#1a2332",
    "#2d3e50",
    "#3d5a80",
    "#1a1a1a",
  ];

  const benefits = [
    { 
      icon: Zap, 
      text: "Clientes que são atendidos rápido e não ficam largados em nenhum canal", 
      delay: 0.4 
    },
    { 
      icon: Eye, 
      text: "Um comercial que enxerga o funil inteiro, vê onde o dinheiro está vazando e corrige", 
      delay: 0.5 
    },
    { 
      icon: Users, 
      text: "Mais vendas com time enxuto sem precisar inflar a equipe pra dar conta dos leads", 
      delay: 0.6 
    },
    { 
      icon: RefreshCw, 
      text: "Base viva: follow-up, retomada e reengajamento acontecendo todo dia, em escala, sem depender de humor de vendedor", 
      delay: 0.7 
    },
    { 
      icon: TrendingUp, 
      text: "Muito mais previsibilidade de caixa em vez de viver no \"mês bom / mês ruim\"", 
      delay: 0.8 
    },
    { 
      icon: Brain, 
      text: "Um sistema que aprende com a sua operação e melhora sozinho a cada dia", 
      delay: 0.9 
    },
  ];

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden">
      {/* Fundo animado azul */}
      <div className="absolute inset-0 z-0">
        <MeshGradient
          className="w-full h-full"
          colors={blueColors}
          speed={0.15}
          minPixelRatio={2.0}
        />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-8 py-12">
        {/* Grid de benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full mb-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: benefit.delay, duration: 0.5 }}
              className="flex flex-col items-center text-center p-6 border border-white/10"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <benefit.icon className="w-12 h-12 text-white" strokeWidth={1.5} />
              </div>
              <p className="text-sm md:text-base font-light text-white leading-relaxed">
                {benefit.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Faixa de baixo com pergunta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="w-full max-w-4xl mt-4"
        >
          <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-cyan-400 rounded-full px-8 py-4 flex items-center justify-center gap-4 shadow-2xl">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-3xl font-bold text-blue-600">?</span>
            </div>
            <p className="text-base md:text-lg lg:text-xl font-semibold text-white text-center">
              Quanto valeria hoje pro seu negócio ter tudo isso rodando em IA, sem você virar desenvolvedor nem montar um time de 30 pessoas?
            </p>
            <span className="text-white text-2xl">→</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

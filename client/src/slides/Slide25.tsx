import { motion } from 'framer-motion';
import { MeshGradient } from "@paper-design/shaders-react";
import { Briefcase, Network, CheckCircle } from 'lucide-react';

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
      icon: Briefcase,
      text: 'Empresário atrás de Empresário querendo parar de depender só de SDR e pedir "um sistema que pense o comercial", não mais uma campanha ou funil solto.'
    },
    {
      icon: Network,
      text: 'Operações em mercados diferentes (apostas online, educação, jurídico) buscando modelar a mesma lógica de "CCA" para organizar o caos e ter previsibilidade.'
    },
    {
      icon: CheckCircle,
      text: 'Primeiros projetos fechados de sistema de IA comercial validando funcionalidade do CCA'
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
      <div className="relative z-10 w-full h-full flex items-start justify-start pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-full max-w-6xl mx-auto px-20"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-36 font-sans text-left">
            Resultados?
          </h1>

          <div className="grid grid-cols-3 gap-0 relative">
            {columns.map((column, index) => {
              const Icon = column.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                  className="relative px-8 flex flex-col items-center"
                >
                  {/* Divisória amarela à direita (exceto última coluna) */}
                  {index < columns.length - 1 && (
                    <div className="absolute right-0 top-0 bottom-0 w-px bg-yellow-500/60" />
                  )}
                  
                  {/* Ícone */}
                  <div className="mb-6">
                    <Icon className="w-12 h-12 text-yellow-500/80" strokeWidth={1.5} />
                  </div>
                  
                  {/* Texto */}
                  <p className="text-white/90 text-sm md:text-base leading-relaxed font-light text-center">
                    {column.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

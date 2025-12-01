import { motion } from 'framer-motion';
import { MeshGradient } from "@paper-design/shaders-react";
import { DollarSign, Users, Lock, AlertTriangle, TrendingDown, Clock } from 'lucide-react';

export default function Slide26() {
  const darkColors = [
    "#1a1a1a",
    "#0f0f0f",
    "#262626",
    "#1f1f1f",
    "#141414",
  ];

  const risks = [
    { icon: DollarSign, text: "Queimar caixa em teste eterno", delay: 0.4 },
    { icon: Users, text: "Treinar a IA do fornecedor, não a sua", delay: 0.5 },
    { icon: Lock, text: "Virar refém de ferramenta e dev", delay: 0.6 },
    { icon: AlertTriangle, text: "Intoxicar base e funil de vendas", delay: 0.7 },
    { icon: TrendingDown, text: "Desmotivar o time comercial", delay: 0.8 },
    { icon: Clock, text: "Chegar atrasado na curva da IA", delay: 0.9 },
  ];

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden">
      {/* Fundo animado preto */}
      <div className="absolute inset-0 z-0">
        <MeshGradient
          className="w-full h-full"
          colors={darkColors}
          speed={0.15}
          minPixelRatio={1.0}
        />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-8 py-12">
        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4 font-sans text-center max-w-5xl"
        >
          RISCOS DE TENTAR IA COMERCIAL SOZINHO
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="text-xl md:text-2xl font-semibold text-white mb-2 font-sans text-center"
        >
          (OU COM O PARCEIRO ERRADO)
        </motion.h2>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-base md:text-lg font-light text-yellow-400 mb-12 text-center italic"
        >
          Quando você tem o petróleo, mas não tem a refinaria certa.
        </motion.p>

        {/* Grid de riscos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full mb-12">
          {risks.map((risk, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: risk.delay, duration: 0.5 }}
              className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-full">
                <risk.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <p className="text-sm md:text-base font-light text-white leading-relaxed">
                {risk.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Frase de fechamento */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="text-center max-w-4xl border-l-4 border-yellow-500 pl-6 py-2"
        >
          <p className="text-base md:text-lg lg:text-xl font-light text-white leading-relaxed">
            O pior cenário não é <span className="italic text-gray-400">"IA que não funciona"</span>.
          </p>
          <p className="text-base md:text-lg lg:text-xl font-semibold text-yellow-400 leading-relaxed mt-2">
            É gastar muito, travar o comercial e matar a moral do time com IA.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

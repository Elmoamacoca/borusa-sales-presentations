import { motion } from 'framer-motion';
import { MeshGradient } from "@paper-design/shaders-react";
import { MessageCircle, Database, Monitor, Brain, Sparkles } from 'lucide-react';

export default function Slide58Recorrencia() {
  const charcoalColors = [
    "#0f0f0f",
    "#1a1a1a",
    "#252525",
    "#1e1e1e",
    "#141414",
  ];

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <MeshGradient
          className="w-full h-full"
          colors={charcoalColors}
          speed={0.15}
          minPixelRatio={1.0}
        />
      </div>

      <div className="w-full h-full flex flex-col items-center justify-center px-12 py-8 relative z-10">
        {/* Título Principal */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="-mt-16 mb-12 text-center"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-2 font-sans leading-tight">
            O QUE VOCÊ CONTINUA RECEBENDO
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-3 font-sans">
            DURANTE OS <span className="text-purple-400">9 MESES</span> DE ACOMPANHAMENTO
          </h2>
          <p className="text-base md:text-lg text-gray-300 italic font-light font-sans">
            (Após os 90 dias de implementação)
          </p>
        </motion.div>

        {/* Grid de Entregáveis - 4 itens em 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl w-full mb-8">
          {/* Item 1 - Portal do Cliente */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex gap-3 items-start"
          >
            <div className="flex-shrink-0 mt-1">
              <Monitor className="w-6 h-6 text-purple-400" />
            </div>
            <div className="border-b-2 border-purple-400 pb-3">
              <h3 className="text-white text-base md:text-lg font-semibold mb-1 font-sans">
                Acesso ao Portal do Cliente (Front-end)
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed font-light font-sans">
                Interface completa para acompanhar sua operação, métricas e resultados em tempo real.
              </p>
            </div>
          </motion.div>

          {/* Item 2 - BCF */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex gap-3 items-start"
          >
            <div className="flex-shrink-0 mt-1">
              <Sparkles className="w-6 h-6 text-purple-400" />
            </div>
            <div className="border-b-2 border-purple-400 pb-3">
              <h3 className="text-white text-base md:text-lg font-semibold mb-1 font-sans">
                Borusa Client Federado (BCF)
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed font-light font-sans">
                Releases semanais com novas funcionalidades, melhorias e otimizações do sistema.
              </p>
            </div>
          </motion.div>

          {/* Item 3 - IA Estrategista */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex gap-3 items-start"
          >
            <div className="flex-shrink-0 mt-1">
              <Brain className="w-6 h-6 text-purple-400" />
            </div>
            <div className="border-b-2 border-purple-400 pb-3">
              <h3 className="text-white text-base md:text-lg font-semibold mb-1 font-sans">
                IA Estrategista
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed font-light font-sans">
                Monitoramento contínuo, identificação de gargalos e recomendações estratégicas para sua operação.
              </p>
            </div>
          </motion.div>

          {/* Item 4 - Base de Conhecimento */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex gap-3 items-start"
          >
            <div className="flex-shrink-0 mt-1">
              <Database className="w-6 h-6 text-purple-400" />
            </div>
            <div className="border-b-2 border-purple-400 pb-3">
              <h3 className="text-white text-base md:text-lg font-semibold mb-1 font-sans">
                Atualizações de Base de Conhecimento (Sentinela)
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed font-light font-sans">
                Refinamento contínuo das técnicas de negociação, prompts otimizados e conhecimento curado.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Item 5 - WhatsApp - Centralizado embaixo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex gap-3 items-start justify-center max-w-xl"
        >
          <div className="flex-shrink-0 mt-1">
            <MessageCircle className="w-6 h-6 text-purple-400" />
          </div>
          <div className="border-b-2 border-purple-400 pb-3 text-center">
            <h3 className="text-white text-base md:text-lg font-semibold mb-1 font-sans">
              Grupo WhatsApp do Projeto
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed font-light font-sans">
              Suporte dedicado com dúvidas respondidas em tempo real e acompanhamento personalizado.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

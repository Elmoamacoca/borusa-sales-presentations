import { motion } from 'framer-motion';
import { MeshGradient } from "@paper-design/shaders-react";
import { MessageCircle, Database, Wrench, Lock } from 'lucide-react';

export default function Echo20() {
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
          className="-mt-20 mb-24 text-center"
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

        {/* Grid de Entregáveis */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full">
          {/* Item 1 - WhatsApp */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex gap-3 items-start"
          >
            <div className="flex-shrink-0 mt-1">
              <MessageCircle className="w-6 h-6 text-purple-400" />
            </div>
            <div className="border-b-2 border-purple-400 pb-3">
              <h3 className="text-white text-base md:text-lg font-semibold mb-1.5 font-sans">
                Grupo WhatsApp do Projeto
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light font-sans">
                C.S Exclusivo para sua operação - Suporte direto, dúvidas respondidas em tempo real e acompanhamento personalizado.
              </p>
            </div>
          </motion.div>

          {/* Item 2 - Base de Conhecimento */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex gap-3 items-start"
          >
            <div className="flex-shrink-0 mt-1">
              <Database className="w-6 h-6 text-purple-400" />
            </div>
            <div className="border-b-2 border-purple-400 pb-3">
              <h3 className="text-white text-base md:text-lg font-semibold mb-1.5 font-sans">
                Atualizações de Base de Conhecimento
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light font-sans">
                Refinamento contínuo das técnicas de negociação, prompts otimizados e conhecimento curado específico para seu mercado.
              </p>
            </div>
          </motion.div>

          {/* Item 3 - Correção de Bugs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex gap-3 items-start"
          >
            <div className="flex-shrink-0 mt-1">
              <Wrench className="w-6 h-6 text-purple-400" />
            </div>
            <div className="border-b-2 border-purple-400 pb-3">
              <h3 className="text-white text-base md:text-lg font-semibold mb-1.5 font-sans">
                Correção de Bugs
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light font-sans">
                Correções prioritárias de qualquer problema identificado, melhorias de performance e otimizações contínuas do sistema.
              </p>
            </div>
          </motion.div>

          {/* Item 4 - Licença de Uso */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex gap-3 items-start"
          >
            <div className="flex-shrink-0 mt-1">
              <Lock className="w-6 h-6 text-purple-400" />
            </div>
            <div className="border-b-2 border-purple-400 pb-3">
              <h3 className="text-white text-base md:text-lg font-semibold mb-1.5 font-sans">
                Acesso a Licença de USO
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light font-sans">
                Licença ativa da Célula Términus com todas as IAs, integrações e features disponíveis durante todo o período de acompanhamento.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

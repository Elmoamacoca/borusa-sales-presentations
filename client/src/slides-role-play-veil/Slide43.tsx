import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';
import { Wrench, BrainCircuit, TrendingUp, UserCheck } from 'lucide-react';

export default function Slide43() {
  return (
    <Slide>
      <div className="w-full h-full flex flex-col items-center justify-center px-12 py-8">
        {/* Título Principal */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="-mt-20 mb-24 text-center"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-2 font-sans leading-tight">
            NO QUE CONSISTE A IMPLEMENTAÇÃO DA
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-3 font-sans">
            CÉLULA TERMÍNUS – <span className="text-green-400">VEIL</span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 italic font-light font-sans">
            (90 dias entre implantação e operação assistida)
          </p>
        </motion.div>

        {/* Grid de Benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full">
          {/* Item 1 - Implantação */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex gap-3 items-start"
          >
            <div className="flex-shrink-0 mt-1">
              <Wrench className="w-6 h-6 text-green-400" />
            </div>
            <div className="border-b-2 border-green-400 pb-3">
              <h3 className="text-white text-base md:text-lg font-semibold mb-1.5 font-sans">
                Implantação a 4 mãos do Sistema Operacional Comercial
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light font-sans">
                Eu entro no campo com você pra desenhar, configurar e conectar toda a refinaria de IA dentro do seu Inside Sales.
              </p>
            </div>
          </motion.div>

          {/* Item 2 - Agentes de IA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex gap-3 items-start"
          >
            <div className="flex-shrink-0 mt-1">
              <BrainCircuit className="w-6 h-6 text-green-400" />
            </div>
            <div className="border-b-2 border-green-400 pb-3">
              <h3 className="text-white text-base md:text-lg font-semibold mb-1.5 font-sans">
                Montagem dos agentes de IA e das integrações críticas
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light font-sans">
                IA SDR, IA de Compromisso, IA de Follow-up, IA Estrategista, portal do cliente e conexões com WhatsApp, CRM e agenda.
              </p>
            </div>
          </motion.div>

          {/* Item 3 - Sprints de Otimização */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex gap-3 items-start"
          >
            <div className="flex-shrink-0 mt-1">
              <TrendingUp className="w-6 h-6 text-green-400" />
            </div>
            <div className="border-b-2 border-green-400 pb-3">
              <h3 className="text-white text-base md:text-lg font-semibold mb-1.5 font-sans">
                Sprints de ajustes e otimização nos primeiros 90 dias
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light font-sans">
                Refinamos mensagens, cadências, regras de qualificação e indicadores até o fluxo rodar redondo em produção.
              </p>
            </div>
          </motion.div>

          {/* Item 4 - Acompanhamento Individual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex gap-3 items-start"
          >
            <div className="flex-shrink-0 mt-1">
              <UserCheck className="w-6 h-6 text-green-400" />
            </div>
            <div className="border-b-2 border-green-400 pb-3">
              <h3 className="text-white text-base md:text-lg font-semibold mb-1.5 font-sans">
                Acompanhamento individual do projeto, não de turma
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light font-sans">
                Decisões tomadas junto com você, via calls e grupo dedicado, até a operação ficar estável e previsível.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}

import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Slide55() {
  const items = [
    'Call Individual de Planejamento Estratégico',
    '24 Consultorias de Copy',
    '24 Consultorias Comerciais',
    '6 Calls 1x1 de Otimização e Checkpoint',
    'Grupo de WhatsApp personalizado do seu negócio p',
    '24 Calls de Aprofundamento de Conteúdo',
    'BackStage Pass (1x por mês)',
    'Trilhas Específicas de toda Metodologia',
    '12 Tutorias Individuais On-Demand',
    'Bônus 01: Swipe File & Playbooks de Copy (R$15.000)',
    'Bônus 02: Swipe File & Playbooks Comerciais (R$15.0',
    'Bônus 03: CRM All-In-One por 365 Dias (R$1.794,00)',
    'Bônus 04: Agente de IA Vitalício (R$10.000,00)',
    'Bônus 04: 30 Criativos Corrigidos (On-Demand) (R$20.000,00)',
    'Bônus 05: Implementação Híbrida dos Funis (R$50.000,00)'
  ];

  return (
    <Slide className="flex items-center justify-center bg-gradient-to-br from-blue-950 to-black">
      <div className="w-full h-full flex">
        <div className="w-2/3 px-12 py-8 flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
            <h1 className="text-4xl font-bold text-white mb-8 font-sans">PROGRAMA DE<br/>IMPLEMENTAÇÃO<br/>HÍBRIDA 1X1</h1>
            <div className="border-l-4 border-cyan-400 pl-4 mb-8">
              <h2 className="text-3xl font-bold text-cyan-400">VALOR</h2>
            </div>
            <div className="space-y-3 text-white text-sm">
              {items.map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <p>{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}

import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function Slide53() {
  return (
    <Slide className="flex items-center justify-center">
      <div className="w-full px-8 md:px-16 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-sans">BÔNUS EXCLUSIVOS</h1>
          <div className="space-y-4 text-white text-lg max-w-4xl">
            <p>🎁 Bônus 01: Swipe File & Playbooks de Copy (R$15.000)</p>
            <p>🎁 Bônus 02: Swipe File & Playbooks Comerciais (R$15.000)</p>
            <p>🎁 Bônus 03: CRM All-In-One por 365 Dias (R$1.794,00)</p>
            <p>🎁 Bônus 04: Agente de IA Vitalício (R$10.000,00)</p>
            <p>🎁 Bônus 05: 30 Criativos Corrigidos (On-Demand) (R$20.000,00)</p>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}

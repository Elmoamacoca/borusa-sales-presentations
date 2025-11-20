import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function Slide52() {
  return (
    <Slide className="flex items-center justify-center">
      <div className="w-full px-8 md:px-16 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-sans">O QUE ESTÁ INCLUSO</h1>
          <div className="space-y-4 text-white text-lg max-w-4xl">
            <p>✓ Implementação Híbrida 1x1 por 12 meses</p>
            <p>✓ Plano de Ação Personalizado a cada 90 dias</p>
            <p>✓ Sprints Estratégicos para acelerar resultados</p>
            <p>✓ Suporte Individual direto comigo</p>
            <p>✓ Acesso a toda metodologia Copy Sem Promessa</p>
            <p>✓ Grupo de WhatsApp exclusivo</p>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}

import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function Slide42() {
  return (
    <Slide className="flex items-center justify-center">
      <div className="w-full px-8 md:px-16 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="space-y-8 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white font-sans">PLANO DE AÇÃO<br/>PERSONALIZADO E INDIVIDUAL</h1>
          <div className="space-y-6 text-white text-xl">
            <p>Em uma reunião individual vamos definir todas as ações, funis, metas e métricas que vamos buscar para um <span className="font-bold">Sprint de 90 dias.</span></p>
            <p>Você sairá com todos os <span className="font-bold">próximos 90 dias do seu negócio desenhados de forma personalizada</span></p>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}

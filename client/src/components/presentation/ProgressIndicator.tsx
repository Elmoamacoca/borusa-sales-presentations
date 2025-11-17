import { usePresentationStore } from '@/store/presentationStore';
import { getProgress } from '@/config/slides.config';
import { motion } from 'framer-motion';

/**
 * Indicador de progresso da apresentação
 * 
 * Mostra uma barra no topo da tela indicando o progresso atual
 */
export function ProgressIndicator() {
  const { currentSlideId } = usePresentationStore();
  const progress = getProgress(currentSlideId);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-muted/20">
      <motion.div
        className="h-full bg-primary"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      />
    </div>
  );
}

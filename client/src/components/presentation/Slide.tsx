import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface SlideProps {
  children: ReactNode;
  className?: string;
}

/**
 * Componente base para cada slide da apresentação
 * 
 * Features:
 * - Animações de entrada/saída com Framer Motion
 * - Layout centralizado e responsivo
 * - Suporte a classes customizadas
 */
export function Slide({ children, className }: SlideProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className={cn(
        'relative z-10 min-h-screen w-full flex flex-col items-center justify-center p-8 md:p-12 lg:p-16',
        className
      )}
    >
      <div className="w-full max-w-6xl mx-auto">
        {children}
      </div>
    </motion.div>
  );
}

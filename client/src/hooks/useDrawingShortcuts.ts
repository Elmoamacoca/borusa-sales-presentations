import { useEffect } from 'react';
import { useDrawingStore } from '@/store/drawingStore';

/**
 * Hook para gerenciar atalho do laser
 * 
 * Atalho:
 * - R: Ativar/desativar laser pointer
 */
export function useDrawingShortcuts() {
  const { toggleLaser } = useDrawingStore();

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Ignorar se estiver digitando em um input
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      const key = e.key.toLowerCase();

      // R - Ativar/desativar laser
      if (key === 'r') {
        e.preventDefault();
        toggleLaser();
        return;
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [toggleLaser]);
}

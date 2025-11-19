import { useEffect } from 'react';
import { usePresentationStore } from '@/store/presentationStore';
import { useLaser } from '@/hooks/useLaser';

/**
 * Hook para gerenciar atalhos de teclado da apresentação
 * 
 * Atalhos:
 * - D: Próximo slide
 * - A: Slide anterior
 * - F: Tela cheia
 * - 1, 2, 3: Downsells condicionais
 */
export function useKeyboardShortcuts() {
  const {
    goNext,
    goBack,
    handleConditionalRoute,
    getCurrentSlide,
    isFullscreen,
    setFullscreen,
  } = usePresentationStore();
  const { toggle: toggleLaser } = useLaser();

  useEffect(() => {
    const handleKeyPress = async (e: KeyboardEvent) => {
      // Ignorar se estiver digitando em um input
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      const key = e.key.toLowerCase();
      const currentSlide = getCurrentSlide();

      // D - Próximo slide
      if (key === 'd') {
        e.preventDefault();
        goNext();
        return;
      }

      // A - Slide anterior
      if (key === 'a') {
        e.preventDefault();
        goBack();
        return;
      }

      // R - Laser
      if (key === 'r') {
        e.preventDefault();
        toggleLaser();
        console.log('Laser toggled');
        return;
      }

      // F - Tela cheia
      if (key === 'f') {
        e.preventDefault();
        try {
          if (!document.fullscreenElement) {
            await document.documentElement.requestFullscreen();
            setFullscreen(true);
          } else {
            await document.exitFullscreen();
            setFullscreen(false);
          }
        } catch (error) {
          console.error('Erro ao alternar fullscreen:', error);
        }
        return;
      }

      // Escape para sair do fullscreen
      if (e.key === 'Escape' && isFullscreen) {
        try {
          if (document.fullscreenElement) {
            await document.exitFullscreen();
            setFullscreen(false);
          }
        } catch (error) {
          console.error('Erro ao sair do fullscreen:', error);
        }
        return;
      }

      // Downsells condicionais (1, 2, 3)
      if (currentSlide?.conditionalRoutes) {
        if (['1', '2', '3'].includes(e.key)) {
          e.preventDefault();
          handleConditionalRoute(e.key);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [goNext, goBack, handleConditionalRoute, getCurrentSlide, isFullscreen, setFullscreen]);

  // Listener para mudanças de fullscreen
  useEffect(() => {
    const handleFullscreenChange = () => {
      setFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [setFullscreen]);
}

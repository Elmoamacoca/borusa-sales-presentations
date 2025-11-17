import { useEffect } from 'react';
import { usePresentationStore } from '@/store/presentationStore';

/**
 * Hook para gerenciar atalhos de teclado globais da apresentação
 * 
 * Atalhos disponíveis:
 * - ArrowRight / Enter: Próximo slide
 * - ArrowLeft: Slide anterior
 * - 1, 2, 3: Rotas condicionais (quando disponíveis no slide atual)
 * - f / F: Toggle fullscreen
 * - Escape: Sair do fullscreen
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

  useEffect(() => {
    const handleKeyPress = async (e: KeyboardEvent) => {
      // Ignorar se estiver digitando em um input
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      const currentSlide = getCurrentSlide();

      // Navegação normal
      if (e.key === 'ArrowRight' || e.key === 'Enter') {
        e.preventDefault();
        goNext();
        return;
      }

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goBack();
        return;
      }

      // Fullscreen
      if (e.key === 'f' || e.key === 'F') {
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

      // Rotas condicionais (teclas 1, 2, 3)
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

  // Listener para mudanças de fullscreen (quando usuário usa F11 ou botão do navegador)
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

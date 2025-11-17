import { Button } from '@/components/ui/button';
import { Maximize2, Minimize2 } from 'lucide-react';
import { usePresentationStore } from '@/store/presentationStore';

/**
 * Botão para ativar/desativar modo tela cheia
 * 
 * Posicionado no canto superior direito da tela
 */
export function FullscreenButton() {
  const { isFullscreen, setFullscreen } = usePresentationStore();

  const toggleFullscreen = async () => {
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
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleFullscreen}
      className="fixed top-4 right-4 z-50 bg-background/50 backdrop-blur-sm hover:bg-background/80"
      title={isFullscreen ? 'Sair da tela cheia (F)' : 'Tela cheia (F)'}
    >
      {isFullscreen ? (
        <Minimize2 className="h-5 w-5" />
      ) : (
        <Maximize2 className="h-5 w-5" />
      )}
    </Button>
  );
}

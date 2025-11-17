import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { usePresentationStore, setSlidesConfig } from '@/store/presentationStore';
import { slidesConfig } from '@/config/slides.config';
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts';
import { ProgressIndicator } from '@/components/presentation/ProgressIndicator';
import { FullscreenButton } from '@/components/presentation/FullscreenButton';
import BackgroundShader from '@/components/BackgroundShader';

export default function Presentation() {
  const { currentSlideId } = usePresentationStore();

  // Inicializar configuração de slides
  useEffect(() => {
    setSlidesConfig(slidesConfig);
  }, []);

  // Ativar atalhos de teclado
  useKeyboardShortcuts();

  // Encontrar slide atual
  const currentSlide = slidesConfig.find((slide) => slide.id === currentSlideId);
  const SlideComponent = currentSlide?.component;

  if (!SlideComponent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Slide não encontrado</p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background animado */}
      <BackgroundShader />
      {/* Indicador de progresso */}
      <ProgressIndicator />

      {/* Botão de tela cheia */}
      <FullscreenButton />

      {/* Slide atual com animação */}
      <AnimatePresence mode="wait">
        <SlideComponent key={currentSlideId} />
      </AnimatePresence>

      {/* Instruções de navegação (apenas em desenvolvimento) */}
      {import.meta.env.DEV && (
        <div className="fixed bottom-4 left-4 text-xs text-muted-foreground bg-background/80 backdrop-blur-sm p-3 rounded-lg">
          <p className="font-semibold mb-1">Atalhos:</p>
          <p>→ / Enter: Próximo</p>
          <p>← : Anterior</p>
          <p>F: Tela cheia</p>
          {currentSlide?.conditionalRoutes && (
            <p className="mt-1 text-primary">1, 2, 3: Downsells</p>
          )}
        </div>
      )}
    </div>
  );
}

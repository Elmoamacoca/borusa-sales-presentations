import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { usePresentationStore, setSlidesConfig } from '@/store/presentationStore';
import { slidesConfig } from '@/config/slides.config';
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts';
import { useDrawingShortcuts } from '@/hooks/useDrawingShortcuts';
import { ProgressIndicator } from '@/components/presentation/ProgressIndicator';
import { FullscreenButton } from '@/components/presentation/FullscreenButton';
import BackgroundShader from '@/components/BackgroundShader';
import { LaserPointer } from '@/components/presentation/LaserPointer';
import { useLaser } from '@/hooks/useLaser';

export default function Presentation() {
  const { currentSlideId } = usePresentationStore();
  const { active: laserActive } = useLaser();

  // Inicializar configuração de slides
  useEffect(() => {
    setSlidesConfig(slidesConfig);
  }, []);

  // Ativar atalhos de teclado
  useKeyboardShortcuts();
  useDrawingShortcuts();

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

      {/* Laser */}
      <LaserPointer active={laserActive} />

      {/* Slide atual com animação */}
      <AnimatePresence mode="wait">
        <SlideComponent key={currentSlideId} />
      </AnimatePresence>


    </div>
  );
}

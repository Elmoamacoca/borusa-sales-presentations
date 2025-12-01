import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { usePresentationStore, setSlidesConfig } from '@/store/presentationStore';
import { getSlidesByConfigId } from '@/config/slides.config';
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts';
import { useDrawingShortcuts } from '@/hooks/useDrawingShortcuts';

import { FullscreenButton } from '@/components/presentation/FullscreenButton';
import BackgroundShader from '@/components/BackgroundShader';
import { LaserPointer } from '@/components/presentation/LaserPointer';
import { SlideCounter } from '@/components/presentation/SlideCounter';
import { useLaser } from '@/hooks/useLaser';

interface PresentationProps {
  slidesConfigId: string;
}

export default function Presentation({ slidesConfigId }: PresentationProps) {
  const { currentSlideId } = usePresentationStore();
  const { active: laserActive } = useLaser();

  // Carregar configuração de slides específica para esta apresentação
  const slidesConfig = getSlidesByConfigId(slidesConfigId);

  // Inicializar configuração de slides
  useEffect(() => {
    setSlidesConfig(slidesConfig);
  }, [slidesConfig]);

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


      {/* Botão de tela cheia */}
      <FullscreenButton />

      {/* Laser */}
      <LaserPointer active={laserActive} />

      {/* Contador de slides - oculto para celula-terminus */}
      {slidesConfigId !== 'celula-terminus' && <SlideCounter />}

      {/* Slide atual com animação */}
      <AnimatePresence mode="wait">
        <SlideComponent key={currentSlideId} />
      </AnimatePresence>


    </div>
  );
}

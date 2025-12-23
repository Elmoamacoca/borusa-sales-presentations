import { useEffect, useRef } from 'react';
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
  const { currentSlideId, setCurrentSlide } = usePresentationStore();
  const { active: laserActive } = useLaser();
  const hasInitialized = useRef(false);

  // Carregar configuração de slides específica para esta apresentação
  const slidesConfig = getSlidesByConfigId(slidesConfigId);

  // Inicializar configuração de slides
  useEffect(() => {
    setSlidesConfig(slidesConfig);
    
    // Só executar a lógica de inicialização uma vez por montagem do componente
    if (!hasInitialized.current) {
      hasInitialized.current = true;
      
      // Verificar se há um slide salvo para esta apresentação específica
      const savedSlideKey = `presentation-slide-${slidesConfigId}`;
      const savedSlideId = localStorage.getItem(savedSlideKey);
      
      // Verificar se o slide salvo existe nesta configuração
      const slideExists = savedSlideId && slidesConfig.some(slide => slide.id === savedSlideId);
      
      if (slideExists) {
        // Restaurar o slide salvo para esta apresentação
        setCurrentSlide(savedSlideId, false);
      } else {
        // Se não há slide salvo ou não existe, começar do início
        setCurrentSlide('welcome', false);
      }
    }
  }, [slidesConfig, slidesConfigId, setCurrentSlide]);

  // Salvar o slide atual no localStorage específico desta apresentação
  useEffect(() => {
    if (hasInitialized.current && currentSlideId) {
      const savedSlideKey = `presentation-slide-${slidesConfigId}`;
      localStorage.setItem(savedSlideKey, currentSlideId);
    }
  }, [currentSlideId, slidesConfigId]);

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

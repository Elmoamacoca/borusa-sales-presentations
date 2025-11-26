import { usePresentationStore } from '@/store/presentationStore';
import { slidesConfig } from '@/config/slides.config';

export function SlideCounter() {
  const { currentSlideId } = usePresentationStore();

  // Encontrar o slide atual e sua posição
  const currentSlide = slidesConfig.find((slide) => slide.id === currentSlideId);
  const currentOrder = currentSlide?.order || 1;
  const totalSlides = slidesConfig.length;

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
      <span className="text-white/90 font-mono text-sm font-medium">
        {currentOrder} / {totalSlides}
      </span>
    </div>
  );
}

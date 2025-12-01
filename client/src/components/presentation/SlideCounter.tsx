import { usePresentationStore } from '@/store/presentationStore';
import { slidesConfig } from '@/config/slides.config';

export function SlideCounter() {
  const { currentSlideId } = usePresentationStore();

  // Encontrar o slide atual
  const currentSlide = slidesConfig.find((slide) => slide.id === currentSlideId);
  
  if (!currentSlide) return null;

  const currentPath = currentSlide.path || null;
  
  // Se estiver em um caminho específico (ECHO ou VEIL)
  if (currentPath) {
    // Filtrar apenas slides do mesmo caminho
    const pathSlides = slidesConfig.filter(s => s.path === currentPath);
    const sortedPathSlides = [...pathSlides].sort((a, b) => a.order - b.order);
    const currentIndex = sortedPathSlides.findIndex((s) => s.id === currentSlideId);
    const currentOrder = currentIndex + 1;
    const totalSlides = pathSlides.length;
    
    const pathLabel = currentPath === 'echo' ? 'ECHO' : 'VEIL';
    const pathColor = currentPath === 'echo' ? 'text-purple-400' : 'text-green-400';
    
    return (
      <div className="fixed bottom-6 right-6 z-50 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
        <span className={`${pathColor} font-mono text-sm font-bold mr-2`}>
          {pathLabel}
        </span>
        <span className="text-white/90 font-mono text-sm font-medium">
          {currentOrder} / {totalSlides}
        </span>
      </div>
    );
  }
  
  // Caminho principal - mostrar contador normal
  const mainSlides = slidesConfig.filter(s => !s.path);
  const currentOrder = currentSlide.order || 1;
  const totalSlides = mainSlides.length;

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
      <span className="text-white/90 font-mono text-sm font-medium">
        {currentOrder} / {totalSlides}
      </span>
    </div>
  );
}

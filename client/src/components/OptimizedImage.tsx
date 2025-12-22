import { useState, useEffect, useRef, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  onClick?: () => void;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
}

// Cache global para imagens já carregadas
const imageCache = new Set<string>();

// Preload de imagem
const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (imageCache.has(src)) {
      resolve();
      return;
    }
    const img = new Image();
    img.onload = () => {
      imageCache.add(src);
      resolve();
    };
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Componente de imagem otimizada com:
 * - Lazy loading com Intersection Observer
 * - Placeholder com blur/skeleton enquanto carrega
 * - Cache de imagens já carregadas
 * - Preload para imagens prioritárias
 * - Animação suave de fade-in quando a imagem carrega
 */
export const OptimizedImage = memo(function OptimizedImage({
  src,
  alt,
  className,
  containerClassName,
  priority = false,
  onClick,
  objectFit = 'cover',
  objectPosition = 'center',
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(imageCache.has(src));
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer para lazy loading
  useEffect(() => {
    if (priority || isInView) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '200px', // Começa a carregar 200px antes de entrar na viewport
        threshold: 0.01,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority, isInView]);

  // Preload para imagens prioritárias
  useEffect(() => {
    if (priority && !imageCache.has(src)) {
      preloadImage(src).catch(() => setHasError(true));
    }
  }, [priority, src]);

  // Handler de carregamento
  const handleLoad = () => {
    imageCache.add(src);
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div
      ref={containerRef}
      className={cn('relative overflow-hidden', containerClassName)}
      onClick={onClick}
    >
      {/* Placeholder/Skeleton enquanto carrega */}
      <AnimatePresence>
        {!isLoaded && !hasError && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 z-10"
          >
            {/* Skeleton com animação de pulse */}
            <div className="w-full h-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse" />
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Imagem real */}
      {(isInView || priority) && (
        <motion.img
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className={cn(
            'w-full h-full transition-opacity duration-300',
            className
          )}
          style={{
            objectFit,
            objectPosition,
          }}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      )}

      {/* Fallback em caso de erro */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
          <span className="text-gray-500 text-sm">Erro ao carregar imagem</span>
        </div>
      )}
    </div>
  );
});

/**
 * Hook para precarregar múltiplas imagens
 * Útil para precarregar imagens dos próximos slides
 */
export function useImagePreloader(imageSources: string[]) {
  useEffect(() => {
    imageSources.forEach((src) => {
      if (!imageCache.has(src)) {
        preloadImage(src).catch(console.error);
      }
    });
  }, [imageSources]);
}

/**
 * Função para precarregar uma lista de imagens
 * Pode ser chamada antes de navegar para um slide
 */
export async function preloadImages(sources: string[]): Promise<void> {
  await Promise.all(
    sources.map((src) => preloadImage(src).catch(() => {}))
  );
}

export default OptimizedImage;

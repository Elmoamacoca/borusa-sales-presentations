import { useEffect, useRef } from 'react';
import lottie, { AnimationItem } from 'lottie-web';

interface LordIconProps {
  src: string;
  trigger?: 'hover' | 'loop' | 'click';
  colors?: string;
  size?: number;
  className?: string;
  speed?: number;
}

export function LordIcon({ 
  src, 
  trigger = 'loop', 
  colors, 
  size = 96,
  className = '',
  speed = 1
}: LordIconProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Carregar animação
    animationRef.current = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: trigger === 'loop',
      autoplay: trigger === 'loop',
      path: src,
    });

    // Ajustar velocidade
    if (animationRef.current) {
      animationRef.current.setSpeed(speed);
    }

    // Aplicar cores personalizadas após carregar
    if (colors && animationRef.current) {
      animationRef.current.addEventListener('DOMLoaded', () => {
        const svgElement = containerRef.current?.querySelector('svg');
        if (svgElement) {
          // Aplicar cor a todos os paths e shapes
          const paths = svgElement.querySelectorAll('path, circle, rect, ellipse');
          paths.forEach((path) => {
            path.setAttribute('stroke', colors);
            path.setAttribute('fill', colors);
          });
        }
      });
    }

    // Configurar trigger hover
    if (trigger === 'hover' && containerRef.current) {
      const handleMouseEnter = () => animationRef.current?.play();
      const handleMouseLeave = () => animationRef.current?.stop();
      
      containerRef.current.addEventListener('mouseenter', handleMouseEnter);
      containerRef.current.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        containerRef.current?.removeEventListener('mouseenter', handleMouseEnter);
        containerRef.current?.removeEventListener('mouseleave', handleMouseLeave);
        animationRef.current?.destroy();
      };
    }

    return () => {
      animationRef.current?.destroy();
    };
  }, [src, trigger]);

  return (
    <div 
      ref={containerRef} 
      className={className}
      style={{ 
        width: size, 
        height: size,
        filter: colors === '#FFFFFF' || colors === 'white' 
          ? 'brightness(0) saturate(100%) invert(100%)' 
          : colors === '#EAB308' 
          ? 'brightness(0) saturate(100%) invert(77%) sepia(55%) saturate(476%) hue-rotate(358deg) brightness(98%) contrast(92%)'
          : 'none'
      }}
    />
  );
}

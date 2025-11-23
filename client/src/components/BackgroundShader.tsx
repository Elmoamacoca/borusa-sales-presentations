import { MeshGradient } from "@paper-design/shaders-react";
import { useEffect, useState } from "react";
import { usePresentationStore } from '@/store/presentationStore';

export default function BackgroundShader() {
  const { currentSlideId } = usePresentationStore();
  const [isVisible, setIsVisible] = useState(false);

  // Adiar renderização do shader para não competir com primeira dobra
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Aguarda 500ms após site aparecer
    return () => clearTimeout(timer);
  }, []);

  // Paleta azul da primeira dobra do site Borusa
  const blueColors = [
    "#0a0a0a",
    "#1a2332",
    "#2d3e50",
    "#3d5a80",
    "#1a1a1a",
  ];

  // Paleta de preto carvão para slide HydraNet
  const charcoalColors = [
    "#0f0f0f",
    "#1a1a1a",
    "#252525",
    "#1e1e1e",
    "#141414",
  ];

  // Usar cores diferentes para slides HydraNet, AdaptedLogic, Results, Obstacles e OtimizacaoTempo
  const isDarkSlide = currentSlideId === 'hydranet' || currentSlideId === 'adapted-logic' || currentSlideId === 'results' || currentSlideId === 'obstacles' || currentSlideId === 'otimizacao-tempo' || currentSlideId === 'otimizacao-tempo-2' || currentSlideId === 'investimento' || currentSlideId === 'investimento-2' || currentSlideId === 'estrutura' || currentSlideId === 'pergunta-ia' || currentSlideId === 'investimento-3' || currentSlideId === 'investimento-4';
  const colors = isDarkSlide ? charcoalColors : blueColors;
  const fallbackColor = isDarkSlide ? '#1a1a1a' : '#0a0a0a';

  // Não renderizar até estar visível
  if (!isVisible) {
    return <div className="fixed inset-0 z-0" style={{ backgroundColor: fallbackColor }} />;
  }

  return (
    <div 
      className="fixed inset-0 z-0" 
      style={{
        willChange: 'transform',
        contain: 'layout style paint',
        transform: 'translateZ(0)',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.8s ease-in',
      }}
    >
      <MeshGradient
        className="w-full h-full"
        colors={colors}
        speed={0.15}
        minPixelRatio={1.0}
      />
    </div>
  );
}

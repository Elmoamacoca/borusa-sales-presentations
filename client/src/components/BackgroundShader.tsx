import { MeshGradient } from "@paper-design/shaders-react";
import { useEffect, useState } from "react";
import { usePresentationStore } from '@/store/presentationStore';

export default function BackgroundShader() {
  const { currentSlideId } = usePresentationStore();
  const [isVisible, setIsVisible] = useState(false);
  const [displayedSlideId, setDisplayedSlideId] = useState(currentSlideId);

  // Adiar renderização do shader para não competir com primeira dobra
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Aguarda 500ms após site aparecer
    return () => clearTimeout(timer);
  }, []);

  // Delay na mudança de fundo para sincronizar com animação do conteúdo
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayedSlideId(currentSlideId);
    }, 400); // Aguarda 400ms para o conteúdo aparecer antes de mudar o fundo
    return () => clearTimeout(timer);
  }, [currentSlideId]);

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
  const isDarkSlide = displayedSlideId === 'hydranet' || displayedSlideId === 'adapted-logic' || displayedSlideId === 'results' || displayedSlideId === 'obstacles' || displayedSlideId === 'otimizacao-tempo' || displayedSlideId === 'otimizacao-tempo-2' || displayedSlideId === 'investimento' || displayedSlideId === 'investimento-2' || displayedSlideId === 'estrutura' || displayedSlideId === 'pergunta-ia' || displayedSlideId === 'investimento-3' || displayedSlideId === 'investimento-4';
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

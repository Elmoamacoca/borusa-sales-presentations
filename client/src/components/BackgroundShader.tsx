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

  // Paleta vermelha de perigo para Slide 20
  const dangerColors = [
    "#0a0000",
    "#1a0000",
    "#2d0000",
    "#450000",
    "#5a0000",
  ];

  // Usar cores diferentes para slides HydraNet, AdaptedLogic, Results, Obstacles e OtimizacaoTempo
  const isDarkSlide = displayedSlideId === 'hydranet' || displayedSlideId === 'adapted-logic' || displayedSlideId === 'results' || displayedSlideId === 'obstacles' || displayedSlideId === 'otimizacao-tempo' || displayedSlideId === 'otimizacao-tempo-2' || displayedSlideId === 'investimento' || displayedSlideId === 'investimento-2' || displayedSlideId === 'estrutura' || displayedSlideId === 'pergunta-ia' || displayedSlideId === 'investimento-3' || displayedSlideId === 'investimento-4' || displayedSlideId === 'slide-21' || displayedSlideId === 'slide-42' || displayedSlideId === 'slide-43' || displayedSlideId === 'slide-44' || displayedSlideId === 'slide-45' || displayedSlideId === 'slide-46' || displayedSlideId === 'slide-47' || displayedSlideId === 'slide-48' || displayedSlideId === 'slide-49' || displayedSlideId === 'slide-50' || displayedSlideId === 'slide-51' || displayedSlideId === 'slide-52' || displayedSlideId === 'slide-53' || displayedSlideId === 'slide-54' || displayedSlideId === 'slide-57' || displayedSlideId === 'veil-4' || displayedSlideId === 'veil-5' || displayedSlideId === 'veil-12' || displayedSlideId === 'echo-2' || displayedSlideId === 'echo-3' || displayedSlideId === 'echo-4' || displayedSlideId === 'echo-5' || displayedSlideId === 'echo-6' || displayedSlideId === 'echo-7' || displayedSlideId === 'echo-8' || displayedSlideId === 'echo-9' || displayedSlideId === 'echo-10' || displayedSlideId === 'echo-11' || displayedSlideId === 'echo-12' || displayedSlideId === 'echo-13' || displayedSlideId === 'echo-14' || displayedSlideId === 'echo-15' || displayedSlideId === 'echo-16' || displayedSlideId === 'echo-17' || displayedSlideId === 'echo-20' || displayedSlideId === 'echo-21' || displayedSlideId === 'echo-22' || displayedSlideId === 'echo-23' || displayedSlideId === 'echo-24';
  const isDangerSlide = displayedSlideId === 'slide-20';
  const colors = isDangerSlide ? dangerColors : (isDarkSlide ? charcoalColors : blueColors);
  const fallbackColor = isDangerSlide ? '#1a0a0a' : (isDarkSlide ? '#1a1a1a' : '#0a0a0a');

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

import { MeshGradient } from "@paper-design/shaders-react";
import { useEffect, useState } from "react";

export default function BackgroundShader() {
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

  // Não renderizar até estar visível
  if (!isVisible) {
    return <div className="fixed inset-0 z-0 bg-[#0a0a0a]" />; // Fallback estático
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
        colors={blueColors}
        speed={0.15}
        minPixelRatio={1.0}
      />
    </div>
  );
}

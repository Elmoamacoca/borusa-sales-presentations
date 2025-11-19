import { useEffect, useRef } from 'react';
import { useDrawingStore } from '@/store/drawingStore';

export function DrawingCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { laserActive, laserPoints, addLaserPoint, clearLaser } = useDrawingStore();
  const isDrawingRef = useRef(false);

  // Configurar canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  // Limpar laser points antigos (fade out)
  useEffect(() => {
    if (laserPoints.length === 0) return;

    const interval = setInterval(() => {
      const now = Date.now();
      const filtered = laserPoints.filter((p) => now - p.timestamp < 800);
      
      if (filtered.length !== laserPoints.length) {
        clearLaser();
        filtered.forEach((p) => addLaserPoint(p));
      }
    }, 50);

    return () => clearInterval(interval);
  }, [laserPoints, clearLaser, addLaserPoint]);

  // Renderizar laser points
  useEffect(() => {
    if (!laserActive || laserPoints.length === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Desenhar laser trail com efeito neon
    const now = Date.now();
    
    // Glow externo
    ctx.beginPath();
    laserPoints.forEach((point, index) => {
      if (index === 0) {
        ctx.moveTo(point.x, point.y);
      } else {
        ctx.lineTo(point.x, point.y);
      }
    });
    const avgOpacity = laserPoints.reduce((sum, p) => sum + Math.max(0, 1 - (now - p.timestamp) / 800), 0) / laserPoints.length;
    ctx.strokeStyle = `rgba(255, 0, 0, ${avgOpacity * 0.3})`;
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.shadowBlur = 30;
    ctx.shadowColor = 'rgba(255, 0, 0, 1)';
    ctx.stroke();
    
    // Linha principal
    ctx.beginPath();
    laserPoints.forEach((point, index) => {
      if (index === 0) {
        ctx.moveTo(point.x, point.y);
      } else {
        ctx.lineTo(point.x, point.y);
      }
    });
    const mainOpacity = laserPoints.reduce((sum, p) => sum + Math.max(0, 1 - (now - p.timestamp) / 800), 0) / laserPoints.length;
    ctx.strokeStyle = `rgba(255, 20, 20, ${mainOpacity})`;
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.shadowBlur = 25;
    ctx.shadowColor = 'rgba(255, 0, 0, 1)';
    ctx.stroke();

    // Resetar shadow
    ctx.shadowBlur = 0;

    // Ponto atual
    const lastPoint = laserPoints[laserPoints.length - 1];
    
    // Glow externo do ponto
    ctx.beginPath();
    ctx.arc(lastPoint.x, lastPoint.y, 15, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 0, 0, 0.2)';
    ctx.shadowBlur = 25;
    ctx.shadowColor = 'rgba(255, 0, 0, 0.8)';
    ctx.fill();
    
    // Ponto central brilhante
    ctx.beginPath();
    ctx.arc(lastPoint.x, lastPoint.y, 6, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.shadowBlur = 10;
    ctx.shadowColor = 'rgba(255, 0, 0, 1)';
    ctx.fill();
    
    // Resetar shadow
    ctx.shadowBlur = 0;
  }, [laserPoints, laserActive]);

  // Event listeners nativos
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !laserActive) return;

    const handleMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      
      isDrawingRef.current = true;

      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      clearLaser();
      addLaserPoint({ x, y, timestamp: Date.now() });
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDrawingRef.current) return;

      e.preventDefault();
      e.stopPropagation();

      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      addLaserPoint({ x, y, timestamp: Date.now() });
    };

    const handleMouseUp = () => {
      isDrawingRef.current = false;
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseleave', handleMouseUp);

    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mouseleave', handleMouseUp);
    };
  }, [laserActive, addLaserPoint, clearLaser]);

  if (!laserActive) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[100] cursor-crosshair"
      style={{ 
        pointerEvents: 'auto',
        touchAction: 'none'
      }}
    />
  );
}

import { useEffect, useRef, useState } from 'react';

interface Point {
  x: number;
  y: number;
  time: number;
}

export function LaserPointer({ active }: { active: boolean }) {
  const [points, setPoints] = useState<Point[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  // Resize canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  // Mouse events
  useEffect(() => {
    if (!active) {
      setPoints([]);
      setIsDrawing(false);
      return;
    }

    const handleMouseDown = (e: MouseEvent) => {
      setIsDrawing(true);
      setPoints([{ x: e.clientX, y: e.clientY, time: Date.now() }]);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDrawing) return;
      setPoints(prev => [...prev, { x: e.clientX, y: e.clientY, time: Date.now() }]);
    };

    const handleMouseUp = () => {
      setIsDrawing(false);
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [active, isDrawing]);

  // Render loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !active) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const now = Date.now();
      const validPoints = points.filter(p => now - p.time < 800);

      if (validPoints.length !== points.length && validPoints.length > 0) {
        setPoints(validPoints);
      } else if (validPoints.length === 0 && points.length > 0) {
        setPoints([]);
      }

      if (validPoints.length > 0) {
        // Draw trail
        ctx.beginPath();
        validPoints.forEach((p, i) => {
          if (i === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        });

        const avgAge = validPoints.reduce((sum, p) => sum + (now - p.time), 0) / validPoints.length;
        const opacity = Math.max(0, 1 - avgAge / 800);

        // Glow
        ctx.strokeStyle = `rgba(255, 0, 0, ${opacity * 0.3})`;
        ctx.lineWidth = 10;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.shadowBlur = 30;
        ctx.shadowColor = 'rgba(255, 0, 0, 1)';
        ctx.stroke();

        // Main line
        ctx.beginPath();
        validPoints.forEach((p, i) => {
          if (i === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        });
        ctx.strokeStyle = `rgba(255, 20, 20, ${opacity})`;
        ctx.lineWidth = 3;
        ctx.shadowBlur = 25;
        ctx.stroke();

        // Dot
        const last = validPoints[validPoints.length - 1];
        ctx.shadowBlur = 0;
        ctx.beginPath();
        ctx.arc(last.x, last.y, 15, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 0, 0, 0.2)';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(last.x, last.y, 6, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(255, 0, 0, 1)';
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [active, points]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[100] pointer-events-none cursor-crosshair"
      style={{ cursor: 'crosshair' }}
    />
  );
}

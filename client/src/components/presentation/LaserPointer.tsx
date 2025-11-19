import { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  timestamp: number;
}

export function LaserPointer({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const isDrawingRef = useRef(false);
  const animationIdRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !active) return;

    // Setup canvas size
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Mouse handlers
    const onMouseDown = (e: MouseEvent) => {
      console.log('MOUSE DOWN', e.clientX, e.clientY);
      isDrawingRef.current = true;
      pointsRef.current = [{ x: e.clientX, y: e.clientY, timestamp: Date.now() }];
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDrawingRef.current) return;
      console.log('MOUSE MOVE', e.clientX, e.clientY);
      pointsRef.current.push({ x: e.clientX, y: e.clientY, timestamp: Date.now() });
    };

    const onMouseUp = () => {
      console.log('MOUSE UP');
      isDrawingRef.current = false;
    };

    // Add listeners to canvas
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseup', onMouseUp);
    canvas.addEventListener('mouseleave', onMouseUp);

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const now = Date.now();
      // Remove old points (older than 800ms)
      pointsRef.current = pointsRef.current.filter(p => now - p.timestamp < 800);

      if (pointsRef.current.length > 0) {
        // Draw trail
        ctx.beginPath();
        pointsRef.current.forEach((p, i) => {
          if (i === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        });

        // Glow effect
        ctx.strokeStyle = 'rgba(255, 0, 0, 0.3)';
        ctx.lineWidth = 12;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.shadowBlur = 30;
        ctx.shadowColor = '#ff0000';
        ctx.stroke();

        // Main line
        ctx.beginPath();
        pointsRef.current.forEach((p, i) => {
          if (i === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        });
        ctx.strokeStyle = '#ff0000';
        ctx.lineWidth = 3;
        ctx.shadowBlur = 20;
        ctx.stroke();

        // Dot at end
        const last = pointsRef.current[pointsRef.current.length - 1];
        ctx.shadowBlur = 15;
        ctx.beginPath();
        ctx.arc(last.x, last.y, 8, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
      }

      animationIdRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousedown', onMouseDown);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseup', onMouseUp);
      canvas.removeEventListener('mouseleave', onMouseUp);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      pointsRef.current = [];
    };
  }, [active]);

  if (!active) return null;

  return (
    <>
      <style>{`
        .laser-cursor {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" fill="red" opacity="0.8"/><circle cx="12" cy="12" r="2" fill="white"/></svg>') 12 12, pointer;
        }
      `}</style>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-[100] laser-cursor"
        style={{
          pointerEvents: 'auto',
          touchAction: 'none',
        }}
      />
    </>
  );
}

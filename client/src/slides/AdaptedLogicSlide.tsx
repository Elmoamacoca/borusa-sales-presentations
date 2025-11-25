import { Slide } from '@/components/presentation/Slide';
import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

export default function AdaptedLogicSlide() {
  const brainRef = useRef<HTMLDivElement>(null);
  const registerRef = useRef<HTMLDivElement>(null);
  const submitedRef = useRef<HTMLDivElement>(null);
  const reportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (brainRef.current) {
      const animation = lottie.loadAnimation({
        container: brainRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/brain.json'
      });
      
      animation.setSpeed(0.5);

      return () => animation.destroy();
    }
  }, []);

  useEffect(() => {
    if (registerRef.current) {
      const animation = lottie.loadAnimation({
        container: registerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/Register.json'
      });
      
      animation.setSpeed(0.5);

      return () => animation.destroy();
    }
  }, []);

  useEffect(() => {
    if (submitedRef.current) {
      const animation = lottie.loadAnimation({
        container: submitedRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/Submited.json'
      });
      
      animation.setSpeed(0.5);

      return () => animation.destroy();
    }
  }, []);

  useEffect(() => {
    if (reportRef.current) {
      const animation = lottie.loadAnimation({
        container: reportRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/report.json'
      });
      
      animation.setSpeed(0.5);

      return () => animation.destroy();
    }
  }, []);

  return (
    <Slide className="!justify-start !items-start pt-32">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-tight font-sans text-center w-full mb-16">
        E essa lógica foi adaptada para uma <span className="underline decoration-yellow-500 decoration-1 underline-offset-4">Operação Comercial</span>
      </h1>
      
      <div className="flex flex-col items-center w-full mt-20">
        {/* Texto CCA */}
        <div className="text-center mb-4">
          <h2 className="text-yellow-500 text-xl font-bold mb-1">CCA</h2>
          <p className="text-yellow-500 text-xs font-semibold">Cérebro Comercial Autônomo</p>
        </div>
        
        {/* Cérebro com círculo */}
        <div className="relative flex items-center justify-center" style={{ width: 70, height: 70 }}>
          <div className="absolute inset-0 rounded-full border-2 border-yellow-500" />
          <div ref={brainRef} style={{ width: 50, height: 50 }} />
        </div>
        
        {/* Linha vertical */}
        <div className="w-0.5 h-16 bg-yellow-500" />
        
        {/* Caixinha */}
        <div className="border-2 border-yellow-500 rounded-2xl px-6 py-3 bg-transparent">
          <p className="text-white text-sm font-semibold">Operação Comercial</p>
        </div>

        {/* Linha conectora simples */}
        <div className="w-0.5 h-16 bg-yellow-500" />

        {/* 3 ícones animados em linha horizontal com linhas conectoras */}
        <div className="relative flex gap-12 items-center justify-center">
          {/* Register */}
          <div className="flex flex-col items-center">
            <div className="relative flex items-center justify-center" style={{ width: 70, height: 70 }}>
              <div className="absolute inset-0 rounded-full border-2 border-yellow-500" />
              <div ref={registerRef} style={{ width: 50, height: 50 }} />
            </div>
          </div>

          {/* Linha horizontal esquerda - da borda direita do Register até borda esquerda do Submitted */}
          <div className="bg-yellow-500" style={{ width: '48px', height: '2px' }} />

          {/* Submitted */}
          <div className="flex flex-col items-center">
            <div className="relative flex items-center justify-center" style={{ width: 70, height: 70 }}>
              <div className="absolute inset-0 rounded-full border-2 border-yellow-500" />
              <div ref={submitedRef} style={{ width: 50, height: 50 }} />
            </div>
          </div>

          {/* Linha horizontal direita - da borda direita do Submitted até borda esquerda do Report */}
          <div className="bg-yellow-500" style={{ width: '48px', height: '2px' }} />

          {/* Report */}
          <div className="flex flex-col items-center">
            <div className="relative flex items-center justify-center" style={{ width: 70, height: 70 }}>
              <div className="absolute inset-0 rounded-full border-2 border-yellow-500" />
              <div ref={reportRef} style={{ width: 50, height: 50 }} />
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}

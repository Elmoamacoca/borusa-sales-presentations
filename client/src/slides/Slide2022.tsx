import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Slide2022() {
  const [isImageZoomed, setIsImageZoomed] = useState(false);

  return (
    <Slide className="flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Conteúdo à esquerda */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-8"
          >
            {/* Ano com destaque */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h3 className="text-4xl font-bold text-yellow-500 mb-2 font-sans">2023</h3>
              <div className="w-16 h-1 bg-yellow-500"></div>
            </motion.div>

            {/* Título */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-relaxed font-sans"
            >
              Antes da hype de IA, já fazia operação sair do caos para o controle.
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg md:text-xl text-white leading-relaxed"
            >
              Nos últimos <span className="text-yellow-500 font-bold">4+ anos</span> trabalhou integrando marketing e vendas em mercados diferentes, um dos cases no mercado de{' '}
              <span className="text-yellow-500 font-bold">iGaming</span>
            </motion.p>
          </motion.div>

          {/* Imagem à direita com zoom */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex justify-center relative"
          >
            <div 
              className="relative cursor-zoom-in overflow-visible"
              onMouseEnter={() => setIsImageZoomed(true)}
              onMouseLeave={() => setIsImageZoomed(false)}
            >
              {/* Efeito de brilho atrás da imagem */}
              <div className="absolute inset-0 bg-yellow-500/20 blur-3xl rounded-lg"></div>
              
              {/* Imagem com zoom */}
              <img
                src="/assets/igaming-dashboard.jpg"
                alt="Dashboard iGaming"
                style={{
                  imageRendering: 'high-quality',
                  WebkitFontSmoothing: 'antialiased',
                }}
                className={`relative w-full rounded-lg shadow-2xl border-2 border-yellow-500/30 transition-all duration-500 ${
                  isImageZoomed ? 'scale-[2.5] z-50' : 'scale-100'
                }`}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Overlay escuro quando zoom está ativo */}
      {isImageZoomed && (
        <div className="fixed inset-0 bg-black/80 z-40 pointer-events-none" />
      )}
    </Slide>
  );
}

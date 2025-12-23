import { motion } from 'framer-motion';
import { MeshGradient } from "@paper-design/shaders-react";

export default function Slide23() {
  const yellowColors = [
    "#b8860b",
    "#9a7209",
    "#8b6914",
    "#7a5c0f",
    "#6b4f0a",
  ];

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden">
      {/* Fundo animado amarelo */}
      <div className="absolute inset-0 z-0">
        <MeshGradient
          className="w-full h-full"
          colors={yellowColors}
          speed={0.15}
          minPixelRatio={1.0}
        />
      </div>

      <div className="w-full h-full flex relative z-10">
        {/* Lado ESQUERDO - Conteúdo de texto */}
        <div className="w-[50%] h-full flex flex-col justify-center px-8 md:px-12 lg:px-16 relative z-10">
          {/* Título */}
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold text-white mb-8 font-sans"
          >
            O PARADOXO PETROBRAS
          </motion.h1>

          {/* Corpo - Texto em blocos */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6 mb-8"
          >
            <p className="text-base md:text-lg font-light text-white leading-relaxed">
              O Brasil está entre os maiores produtores de petróleo do mundo.
            </p>
            
            <p className="text-lg md:text-xl font-semibold text-white leading-relaxed">
              Preço médio na bomba (semana recente): <span className="text-yellow-300">R$ 6,16/litro</span>
            </p>
            
            <p className="text-base md:text-lg font-light text-white leading-relaxed">
              Importação de gasolina A representa ~14% da oferta, mesmo com produção nacional.
            </p>
          </motion.div>

          {/* Destaque - Paradoxo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="border-l-4 border-white pl-6"
          >
            <p className="text-base md:text-lg font-light text-white leading-relaxed">
              <span className="font-semibold">Paradoxo:</span> Petróleo abundante, mas preço alto por paridade internacional, tributos e gargalos logísticos.
            </p>
          </motion.div>
        </div>

        {/* Lado DIREITO - Imagem */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-[50%] h-full relative overflow-hidden"
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            width: '50vw',
            height: '100%',
          }}
        >
          <img
            src="/slide23-image.png"
            alt="O Paradoxo Petrobras"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center top' }}
          />
          {/* Overlay sutil */}
          <div className="absolute inset-0 bg-black/10"></div>
        </motion.div>
      </div>
    </div>
  );
}

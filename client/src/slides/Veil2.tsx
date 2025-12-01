import { motion } from 'framer-motion';
import { MeshGradient } from "@paper-design/shaders-react";
import jayAbraham from '@/assets/jay-abraham.jpg';

export default function Veil2() {
  // Tons de preto carvão (fundo escuro animado)
  const charcoalColors = [
    "#0f0f0f",
    "#1a1a1a",
    "#0a0a0a",
    "#151515",
  ];

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <MeshGradient
          className="w-full h-full"
          colors={charcoalColors}
          speed={0.15}
          minPixelRatio={1.0}
        />
      </div>

      <div className="w-full h-full flex relative z-10">
        {/* Imagem à Esquerda - 40% */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-[40%] h-full relative overflow-hidden flex items-center justify-center"
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '40vw',
            height: '100%',
          }}
        >
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            src={jayAbraham}
            alt="Jay Abraham"
            className="w-full h-full object-cover"
            style={{
              filter: 'brightness(0.9) contrast(1.1)',
              objectPosition: 'center center'
            }}
          />
          {/* Fade overlay no canto inferior */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent pointer-events-none" />
        </motion.div>

        {/* Conteúdo à Direita - 60% */}
        <div className="w-[60%] h-full flex flex-col justify-center px-12 md:px-16 lg:px-20 relative z-10 ml-[40%]">
          {/* Frase Principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mb-12"
          >
            <p className="text-3xl md:text-4xl lg:text-5xl font-light text-white font-sans leading-relaxed">
              "Se você não vende várias vezes para o mesmo cliente, então você está sentado em uma pilha de dinheiro pedindo esmola a desconhecidos"
            </p>
          </motion.div>

          {/* Autor */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="border-l-4 border-green-500 pl-6"
          >
            <p className="text-2xl md:text-3xl font-light text-green-400 font-sans italic">
              - Jay Abraham
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

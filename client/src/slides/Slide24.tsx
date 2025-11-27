import { motion } from 'framer-motion';
import { MeshGradient } from "@paper-design/shaders-react";

export default function Slide24() {
  const yellowColors = [
    "#b8860b",
    "#9a7209",
    "#8b6914",
    "#7a5c0f",
    "#6b4f0a",
  ];

  const breakdown = [
    { valor: "R$ 2,01", descricao: "parcela Petrobras (produção + refino)", percentual: "36%" },
    { valor: "R$ 1,22", descricao: "imposto estadual", percentual: "21,9%" },
    { valor: "R$ 1,06", descricao: "distribuição e revenda", percentual: "19%" },
    { valor: "R$ 0,69", descricao: "impostos federais", percentual: "12,4%" },
    { valor: "R$ 0,56", descricao: "etanol anidro", percentual: "10%" },
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
            className="text-4xl md:text-5xl font-semibold text-white mb-8 font-sans"
          >
            PREÇO EXATO NA BOMBA
          </motion.h1>

          {/* Preço médio em destaque */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-8"
          >
            <p className="text-xl md:text-2xl font-light text-white leading-relaxed">
              Preço médio da gasolina no Brasil (jan/2024): <span className="font-semibold">R$ 5,58</span> por litro.
            </p>
          </motion.div>

          {/* Breakdown - Lista numérica */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-3 mb-8"
          >
            {breakdown.map((item, index) => (
              <div key={index} className="flex items-baseline gap-3">
                <span className="text-lg md:text-xl font-semibold text-white min-w-[80px]">
                  {item.valor}
                </span>
                <span className="text-base md:text-lg font-light text-gray-300">
                  ≈ {item.descricao}
                </span>
                <span className="text-base md:text-lg font-light text-white ml-auto">
                  {item.percentual}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Frase de fechamento */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="border-l-4 border-white pl-4"
          >
            <p className="text-base md:text-lg font-light text-white leading-relaxed">
              De cada R$ 5,58 que você paga,
            </p>
            <p className="text-base md:text-lg font-light text-white leading-relaxed">
              cerca de <span className="font-semibold">R$ 2,00</span> são "petróleo + refino"
            </p>
            <p className="text-base md:text-lg font-light text-white leading-relaxed">
              e mais de <span className="font-semibold">R$ 3,50</span> são camadas em cima: imposto, logística e margem.
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
            src="/slide21-image.png"
            alt="Preço Exato na Bomba"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 30%' }}
          />
          {/* Overlay sutil */}
          <div className="absolute inset-0 bg-black/10"></div>
        </motion.div>
      </div>
    </div>
  );
}

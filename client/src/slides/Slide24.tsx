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
    { valor: "R$ 0,90", descricao: "Refino/Produtor (gasolina A)" },
    { valor: "R$ 1,15", descricao: "Distribuição + margem revenda" },
    { valor: "R$ 0,90", descricao: "Etanol anidro (mix E30)" },
    { valor: "R$ 2,10", descricao: "Tributos (ICMS + PIS/COFINS + CIDE)", destaque: true },
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
              Preço médio real (2025): <span className="font-semibold text-yellow-300">R$ 6,16/litro</span>
            </p>
          </motion.div>

          {/* Breakdown - Lista de valores */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-3 mb-8"
          >
            {breakdown.map((item, index) => (
              <div key={index} className={`flex items-baseline gap-3 ${item.destaque ? 'font-semibold' : ''}`}>
                <span className="text-lg md:text-xl text-white min-w-[90px]">
                  {item.valor}
                </span>
                <span className="text-base md:text-lg font-light text-white">
                  ≈ {item.descricao}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Preço ideal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-8 p-4 bg-white/10 rounded-lg"
          >
            <p className="text-base md:text-lg font-light text-white leading-relaxed">
              Com infraestrutura eficiente + alíquota zero:
            </p>
            <p className="text-xl md:text-2xl font-semibold text-yellow-300 mt-2">
              R$ 1,90 a R$ 2,05/litro
            </p>
          </motion.div>

          {/* Conclusão */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="border-l-4 border-white pl-6"
          >
            <p className="text-base md:text-lg font-light text-white leading-relaxed">
              Você paga <span className="font-semibold">R$ 6,00</span> na bomba.
            </p>
            <p className="text-base md:text-lg font-light text-white leading-relaxed">
              Mais da metade são tributos + cadeia.
            </p>
            <p className="text-base md:text-lg font-light text-white leading-relaxed">
              O preço puro poderia ser <span className="font-semibold">R$ 2,00</span>.
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
            src="/slide24-image.png"
            alt="Frentista no Posto de Gasolina"
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

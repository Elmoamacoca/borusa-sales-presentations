import { motion } from 'framer-motion';
import { MeshGradient } from "@paper-design/shaders-react";
import garantiaCertificado from '@/assets/garantia-certificado.png';

export default function Slide59() {
  // Tom de azul correto (mesmo do slide 1 e BackgroundShader)
  const blueColors = [
    "#0a0a0a",
    "#1a2332",
    "#2d3e50",
    "#3d5a80",
    "#1a1a1a",
  ];

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <MeshGradient
          className="w-full h-full"
          colors={blueColors}
          speed={0.15}
          minPixelRatio={1.0}
        />
      </div>

      <div className="w-full h-full flex relative z-10">
        {/* Imagem à Esquerda - 50% */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-[50%] h-full relative overflow-hidden flex items-center justify-center"
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '50vw',
            height: '100%',
          }}
        >
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            src={garantiaCertificado}
            alt="Business Guarantee Certificate"
            className="w-full h-full object-cover"
            style={{
              filter: 'drop-shadow(0 0 40px rgba(212, 160, 23, 0.3))'
            }}
          />
          {/* Fade overlay no canto inferior */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent pointer-events-none" />
        </motion.div>

        {/* Conteúdo à Direita - 50% */}
        <div className="w-[50%] h-full flex flex-col justify-center px-12 md:px-16 lg:px-20 relative z-10 ml-[50%]">
          {/* Título */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white font-sans leading-tight">
              GARANTIA DE <span className="text-yellow-400">R$20.000,00</span>
            </h1>
          </motion.div>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-200 font-light font-sans mb-8"
          >
            Caso contrário, você pode optar por:
          </motion.p>

          {/* Opções em Verde */}
          <div className="grid grid-cols-2 gap-5 mb-8">
            {/* Opção 1 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="bg-gradient-to-br from-green-600/30 to-green-700/20 border-2 border-green-500 rounded-2xl p-6 backdrop-blur-sm hover:from-green-600/40 hover:to-green-700/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                  <span className="text-xl font-bold text-white font-sans">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-green-400 mb-2 font-sans">
                    Opção 1
                  </h3>
                  <p className="text-base md:text-lg text-gray-100 font-light font-sans leading-relaxed">
                    Receber 100% do valor de implementação de volta.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Opção 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="bg-gradient-to-br from-green-600/30 to-green-700/20 border-2 border-green-500 rounded-2xl p-6 backdrop-blur-sm hover:from-green-600/40 hover:to-green-700/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                  <span className="text-xl font-bold text-white font-sans">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-green-400 mb-2 font-sans">
                    Opção 2
                  </h3>
                  <p className="text-base md:text-lg text-gray-100 font-light font-sans leading-relaxed">
                    Manter tudo o que já foi implementado e usar 100% do valor investido como crédito para subir de nível na Célula Términus (Agente Kesher, Operador Havaia ou Instância Lapid).
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Rodapé */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            className="border-t border-gray-500/30 pt-5"
          >
            <p className="text-sm md:text-base text-gray-400 font-light font-sans italic leading-relaxed">
              Condicionado a você seguir o plano de ação combinado e nos dar a chance de ajustar o sistema ao longo do projeto.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

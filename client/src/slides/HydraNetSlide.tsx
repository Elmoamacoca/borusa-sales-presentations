import { motion } from 'framer-motion';

export default function HydraNetSlide() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="relative z-20 w-full h-screen overflow-hidden"
    >
      <div className="grid grid-cols-2 w-full h-full">
        {/* Coluna Esquerda - Texto */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center justify-center px-12"
        >
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed font-sans">
              Essa lógica é conhecida como HydraNet: um único cérebro de IA coordenando várias cabeças especializadas ao mesmo tempo.
            </h1>
          </div>
        </motion.div>

        {/* Coluna Direita - Imagem OCUPANDO TUDO */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative w-full h-full overflow-hidden"
        >
          <img
            src="/assets/hydranet-tesla.png"
            alt="Tesla Computer Vision System"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              imageRendering: 'high-quality',
              WebkitFontSmoothing: 'antialiased',
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

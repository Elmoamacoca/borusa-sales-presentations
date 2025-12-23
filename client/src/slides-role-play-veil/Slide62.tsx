import { motion } from 'framer-motion';
import { MeshGradient } from "@paper-design/shaders-react";
import { X } from 'lucide-react';

export default function Slide62() {
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

      <div className="w-full h-full flex items-center justify-center gap-12 px-16 relative z-10">
        {/* Card VALOR */}
        <motion.div
          initial={{ opacity: 0, x: -80, rotateY: -30 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl px-16 py-12 shadow-2xl shadow-cyan-500/50 min-w-[320px]">
            <h2 className="text-6xl md:text-7xl font-bold text-white text-center mb-6 font-sans">
              VALOR
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-xl text-white/90 text-center font-light italic font-sans"
            >
              quanto vale?
            </motion.p>
          </div>
          
          {/* Brilho decorativo */}
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-3xl pointer-events-none"
          />
        </motion.div>

        {/* Símbolo X */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.6, duration: 0.8, type: "spring", stiffness: 150 }}
        >
          <X className="w-24 h-24 text-white stroke-[3]" />
        </motion.div>

        {/* Card PREÇO */}
        <motion.div
          initial={{ opacity: 0, x: 80, rotateY: 30 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-gray-400 to-gray-600 rounded-3xl px-16 py-12 shadow-2xl shadow-gray-500/50 min-w-[320px]">
            <h2 className="text-6xl md:text-7xl font-bold text-white text-center mb-6 font-sans">
              PREÇO
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-xl text-white/90 text-center font-light italic font-sans"
            >
              quanto paga?
            </motion.p>
          </div>
          
          {/* Brilho decorativo */}
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
            className="absolute inset-0 bg-gradient-to-br from-gray-300/20 to-transparent rounded-3xl pointer-events-none"
          />
        </motion.div>
      </div>
    </div>
  );
}

import { motion } from 'framer-motion';
import { MeshGradient } from "@paper-design/shaders-react";

export default function Slide61() {
  // Tom de preto carvão
  const blackColors = [
    "#0a0a0a",
    "#1a1a1a",
    "#0f0f0f",
    "#141414",
    "#050505",
  ];

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <MeshGradient
          className="w-full h-full"
          colors={blackColors}
          speed={0.1}
          minPixelRatio={1.0}
        />
      </div>

      <div className="w-full h-full flex items-center justify-center gap-20 px-16 relative z-10">
        {/* Texto "QUANTO VALE?" */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-yellow-400 font-sans leading-tight">
            QUANTO<br />VALE?
          </h1>
        </motion.div>

        {/* Cifrão grande estilizado */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.6, duration: 0.8, type: "spring", stiffness: 120 }}
          className="relative"
        >
          <motion.div
            animate={{ 
              textShadow: [
                '0 0 40px rgba(212, 160, 23, 0.6)',
                '0 0 80px rgba(212, 160, 23, 1)',
                '0 0 40px rgba(212, 160, 23, 0.6)'
              ]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-[20rem] font-bold text-yellow-400 leading-none"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            $
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

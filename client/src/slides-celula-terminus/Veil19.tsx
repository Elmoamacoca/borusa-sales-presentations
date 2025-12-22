import { motion } from 'framer-motion';
import { MeshGradient } from "@paper-design/shaders-react";

export default function Veil19() {
  const charcoalColors = [
    "#0f0f0f",
    "#1a1a1a",
    "#252525",
    "#1e1e1e",
    "#141414",
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

      <div className="w-full h-full flex items-center justify-center px-16 relative z-10">
        {/* Texto Principal centralizado */}
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-wide font-sans"
          >
            E DEPOIS DOS 90 DIAS?
          </motion.h1>
        </div>
      </div>
    </div>
  );
}

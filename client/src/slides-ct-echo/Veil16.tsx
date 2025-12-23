import { motion } from 'framer-motion';
import { MeshGradient } from "@paper-design/shaders-react";

export default function Veil16() {
  // Tom de azul correto (mesmo do slide 1 e BackgroundShader)
  const blueColors = [
    "#0a0a0a",
    "#1a2332",
    "#2d3e50",
    "#3d5a80",
    "#1a1a1a",
  ];

  const sections = [
    'Acesso antecipado à versão 2 do Borusa Client Federado.',
    'Recebe releases e insights anônimos do que está funcionando em outras operações do mesmo nicho.',
    'Versão ainda em fase de validação, já inclusa pra você desde o início.',
    'Serve como radar externo: ideias de scripts, cadências e ajustes pra testar no seu funil.'
  ];

  // Posições dos nós da rede (operações)
  const nodes = [
    { x: 150, y: 100, id: 1 },
    { x: 80, y: 180, id: 2 },
    { x: 220, y: 180, id: 3 },
    { x: 50, y: 260, id: 4 },
    { x: 150, y: 260, id: 5 }, // Centro - VOCÊ
    { x: 250, y: 260, id: 6 },
    { x: 80, y: 340, id: 7 },
    { x: 220, y: 340, id: 8 },
  ];

  // Conexões entre os nós
  const connections = [
    [1, 2], [1, 3], [2, 4], [2, 5], [3, 5], [3, 6],
    [4, 5], [5, 6], [4, 7], [5, 7], [5, 8], [6, 8]
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
        {/* Animação à Esquerda - 50% - Rede de Inteligência Coletiva */}
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
          <div className="relative w-full max-w-lg h-full flex items-center justify-center px-12">
            
            <svg viewBox="0 0 300 450" className="w-full h-auto max-h-full">
              <defs>
                <filter id="glowNetwork">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                
                <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#a855f7" stopOpacity="0"/>
                  <stop offset="50%" stopColor="#a855f7" stopOpacity="1"/>
                  <stop offset="100%" stopColor="#a855f7" stopOpacity="0"/>
                </linearGradient>
              </defs>

              {/* Título da rede */}
              <motion.text
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                x="150" y="30"
                textAnchor="middle"
                fill="#a855f7"
                fontSize="12"
                fontWeight="700"
                className="font-sans"
              >
                REDE DE INTELIGÊNCIA COLETIVA
              </motion.text>

              {/* Conexões (linhas) */}
              {connections.map(([from, to], i) => {
                const nodeFrom = nodes.find(n => n.id === from);
                const nodeTo = nodes.find(n => n.id === to);
                
                return (
                  <motion.g key={`conn-${i}`}>
                    {/* Linha base */}
                    <motion.line
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.3 }}
                      transition={{ delay: 0.8 + i * 0.05, duration: 0.5 }}
                      x1={nodeFrom.x}
                      y1={nodeFrom.y}
                      x2={nodeTo.x}
                      y2={nodeTo.y}
                      stroke="#a855f7"
                      strokeWidth="1.5"
                    />
                    
                    {/* Pulso de dados */}
                    <motion.line
                      animate={{
                        x1: [nodeFrom.x, nodeTo.x],
                        y1: [nodeFrom.y, nodeTo.y],
                        x2: [nodeFrom.x, nodeTo.x],
                        y2: [nodeFrom.y, nodeTo.y],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        delay: 1.5 + i * 0.3,
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3
                      }}
                      x1={nodeFrom.x}
                      y1={nodeFrom.y}
                      x2={nodeFrom.x}
                      y2={nodeFrom.y}
                      stroke="url(#pulseGradient)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      filter="url(#glowNetwork)"
                    />
                  </motion.g>
                );
              })}

              {/* Nós (operações) */}
              {nodes.map((node, i) => {
                const isCenter = node.id === 5; // Nó central = VOCÊ
                
                return (
                  <motion.g key={`node-${node.id}`}>
                    {/* Círculo externo pulsante */}
                    <motion.circle
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: isCenter ? [1, 1.3, 1] : 1,
                        opacity: isCenter ? [0.2, 0.4, 0.2] : 0.2
                      }}
                      transition={{
                        delay: 0.7 + i * 0.1,
                        duration: isCenter ? 2 : 0.5,
                        repeat: isCenter ? Infinity : 0
                      }}
                      cx={node.x}
                      cy={node.y}
                      r={isCenter ? 30 : 20}
                      fill="#a855f7"
                    />
                    
                    {/* Círculo principal */}
                    <motion.circle
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.7 + i * 0.1, duration: 0.4, type: "spring" }}
                      cx={node.x}
                      cy={node.y}
                      r={isCenter ? 18 : 12}
                      fill={isCenter ? "#a855f7" : "#1a1a1a"}
                      stroke="#a855f7"
                      strokeWidth={isCenter ? 3 : 2}
                      filter="url(#glowNetwork)"
                    />
                    
                    {/* Pulso de dados interno */}
                    <motion.circle
                      animate={{
                        scale: [0, 1.5],
                        opacity: [0.8, 0]
                      }}
                      transition={{
                        delay: 2 + i * 0.4,
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 2
                      }}
                      cx={node.x}
                      cy={node.y}
                      r={8}
                      fill="none"
                      stroke="#a855f7"
                      strokeWidth="2"
                    />
                    
                    {/* Label "VOCÊ" no centro */}
                    {isCenter && (
                      <motion.text
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                        x={node.x}
                        y={node.y + 5}
                        textAnchor="middle"
                        fill="#000000"
                        fontSize="10"
                        fontWeight="900"
                        className="font-sans"
                      >
                        VOCÊ
                      </motion.text>
                    )}
                    
                    {/* Mini ícone de insights */}
                    {!isCenter && (
                      <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{
                          delay: 2.5 + i * 0.5,
                          duration: 1.5,
                          repeat: Infinity,
                          repeatDelay: 4
                        }}
                      >
                        <circle
                          cx={node.x}
                          cy={node.y - 20}
                          r="6"
                          fill="#a855f7"
                          fillOpacity="0.3"
                        />
                        <text
                          x={node.x}
                          y={node.y - 17}
                          textAnchor="middle"
                          fill="#a855f7"
                          fontSize="8"
                          fontWeight="700"
                        >
                          💡
                        </text>
                      </motion.g>
                    )}
                  </motion.g>
                );
              })}

              {/* Legenda inferior */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 0.5 }}
              >
                <rect
                  x="40" y="390"
                  width="220" height="45"
                  rx="6"
                  fill="#a855f7"
                  fillOpacity="0.1"
                  stroke="#a855f7"
                  strokeWidth="2"
                />
                
                <text
                  x="150" y="408"
                  textAnchor="middle"
                  fill="#a855f7"
                  fontSize="10"
                  fontWeight="700"
                  className="font-sans"
                >
                  INSIGHTS ANÔNIMOS
                </text>
                
                <text
                  x="150" y="422"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize="8"
                  fontWeight="400"
                  className="font-sans"
                  opacity="0.8"
                >
                  Aprendizado coletivo em tempo real
                </text>
              </motion.g>

            </svg>

          </div>
        </motion.div>

        {/* Conteúdo à Direita - 50% */}
        <div className="w-[50%] h-full flex flex-col justify-center px-8 md:px-12 lg:px-16 relative z-10 ml-[50%]">
          <motion.h1
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base md:text-lg font-semibold text-white mb-8 font-sans leading-tight"
          >
            <span className="text-purple-400 font-bold">BÔNUS: ACESSO ANTECIPADO À INTELIGÊNCIA COLETIVA BORUSA</span> (BCF v2)
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-5 mb-8"
          >
            {sections.map((item, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.15, duration: 0.4 }}
                className="text-sm md:text-base font-light text-gray-300 leading-relaxed font-sans"
              >
                {item}
              </motion.p>
            ))}
          </motion.div>

          {/* Card de Valor de Mercado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="inline-block"
          >
            <div className="bg-gradient-to-br from-purple-400/10 to-green-600/5 border-2 border-purple-400 rounded-xl px-8 py-6 backdrop-blur-sm shadow-lg shadow-purple-400/20">
              <p className="text-sm text-gray-400 font-sans mb-2">Valor de mercado:</p>
              <p className="text-4xl md:text-5xl font-bold text-purple-400 font-sans">R$ 10.000,00</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

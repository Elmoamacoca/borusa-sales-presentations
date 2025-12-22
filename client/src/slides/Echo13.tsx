import { motion } from 'framer-motion';
import { MeshGradient } from "@paper-design/shaders-react";
import { FileText, Brain, Calendar, RefreshCw, Lightbulb } from 'lucide-react';

export default function Echo13() {
  const charcoalColors = [
    "#0f0f0f",
    "#1a1a1a",
    "#252525",
    "#1e1e1e",
    "#141414",
  ];

  const sections = [
    'Documento com todas as automações ativas mapeadas, etapa por etapa.',
    'Explica o que cada IA faz em cada ponto do funil (IASDR, Compromisso, Follow-up, Estrategista).',
    'Mostra quais gatilhos disparam cada fluxo e quais condições tiram o lead de cada etapa.',
    'Serve de manual interno pro time (onboarding de novos vendedores/gestores).'
  ];

  const ias = [
    { name: 'IA SDR', icon: Brain, color: '#22c55e' },
    { name: 'IA Compromisso', icon: Calendar, color: '#22c55e' },
    { name: 'IA Follow-up', icon: RefreshCw, color: '#22c55e' },
    { name: 'IA Estrategista', icon: Lightbulb, color: '#22c55e' }
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
        {/* Conteúdo à Esquerda - 50% */}
        <div className="w-[50%] h-full flex flex-col justify-center px-8 md:px-12 lg:px-16 relative z-10">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-2xl md:text-3xl font-semibold text-white mb-8 font-sans leading-tight"
          >
            <span className="text-purple-400 font-bold">PLAYBOOK OPERACIONAL</span><br />
            DA CÉLULA TÉRMINUS
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6"
          >
            {sections.map((item, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.15, duration: 0.4 }}
                className="text-base md:text-lg font-light text-gray-300 leading-relaxed font-sans"
              >
                {item}
              </motion.p>
            ))}
          </motion.div>
        </div>

        {/* Animação à Direita - 50% - Documento Playbook */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-[50%] h-full relative overflow-hidden flex items-center justify-center"
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            width: '50vw',
            height: '100%',
          }}
        >
          <div className="relative w-full max-w-lg h-full flex items-center justify-center px-12">
            
            <svg viewBox="0 0 300 400" className="w-full h-auto max-h-full">
              <defs>
                <filter id="glowDoc">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Documento principal */}
              <motion.g
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {/* Fundo do documento */}
                <rect 
                  x="50" y="50" 
                  width="200" height="300" 
                  rx="8" 
                  fill="#1a1a1a" 
                  stroke="#22c55e" 
                  strokeWidth="3"
                  filter="url(#glowDoc)"
                />
                
                {/* Cabeçalho do documento */}
                <rect 
                  x="50" y="50" 
                  width="200" height="50" 
                  rx="8" 
                  fill="#22c55e" 
                  fillOpacity="0.3"
                />
                
                {/* Ícone de documento */}
                <motion.g
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                >
                  <circle cx="90" cy="75" r="15" fill="#22c55e" fillOpacity="0.4"/>
                  <text x="90" y="82" textAnchor="middle" fill="#ffffff" fontSize="18">📋</text>
                </motion.g>
                
                {/* Título */}
                <text x="120" y="72" fill="#ffffff" fontSize="12" fontWeight="700" className="font-sans">PLAYBOOK</text>
                <text x="120" y="88" fill="#22c55e" fontSize="10" fontWeight="600" className="font-sans">Célula Términus</text>
              </motion.g>

              {/* 4 Seções das IAs */}
              {ias.map((ia, i) => {
                const y = 120 + i * 55;
                const Icon = ia.icon;
                
                return (
                  <motion.g
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + i * 0.2, duration: 0.5 }}
                  >
                    {/* Card da IA */}
                    <rect 
                      x="65" y={y} 
                      width="170" height="45" 
                      rx="6" 
                      fill="#22c55e" 
                      fillOpacity="0.1" 
                      stroke="#22c55e" 
                      strokeWidth="2"
                    />
                    
                    {/* Nome da IA */}
                    <text 
                      x="100" y={y + 18} 
                      fill="#ffffff" 
                      fontSize="11" 
                      fontWeight="700" 
                      className="font-sans"
                    >
                      {ia.name}
                    </text>
                    
                    {/* Linhas de descrição (simulando texto) */}
                    <line x1="100" y1={y + 26} x2="220" y2={y + 26} stroke="#22c55e" strokeWidth="1.5" opacity="0.5"/>
                    <line x1="100" y1={y + 32} x2="200" y2={y + 32} stroke="#22c55e" strokeWidth="1.5" opacity="0.4"/>
                    <line x1="100" y1={y + 38} x2="210" y2={y + 38} stroke="#22c55e" strokeWidth="1.5" opacity="0.3"/>
                    
                    {/* Ícone da IA */}
                    <motion.circle
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.2 + i * 0.2, duration: 0.3 }}
                      cx="80" cy={y + 22} r="10"
                      fill="#22c55e"
                      fillOpacity="0.3"
                      stroke="#22c55e"
                      strokeWidth="2"
                    />
                    
                    {/* Pulso no ícone */}
                    <motion.circle
                      animate={{ 
                        r: [10, 14, 10],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{ 
                        delay: 1.5 + i * 0.2,
                        duration: 2,
                        repeat: Infinity
                      }}
                      cx="80" cy={y + 22} r="10"
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="2"
                    />
                  </motion.g>
                );
              })}

              {/* Rodapé do documento */}
              <motion.text
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 2.5, duration: 0.5 }}
                x="150" y="370"
                textAnchor="middle"
                fill="#22c55e"
                fontSize="9"
                fontWeight="600"
                className="font-sans"
              >
                MANUAL OPERACIONAL COMPLETO
              </motion.text>

            </svg>

          </div>
        </motion.div>
      </div>
    </div>
  );
}

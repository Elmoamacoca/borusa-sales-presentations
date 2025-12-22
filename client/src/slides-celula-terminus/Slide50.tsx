import { motion } from 'framer-motion';
import { MeshGradient } from "@paper-design/shaders-react";
import { CheckCircle2 } from 'lucide-react';

export default function Slide50() {
  const charcoalColors = [
    "#0f0f0f",
    "#1a1a1a",
    "#252525",
    "#1e1e1e",
    "#141414",
  ];

  const features = [
    'Monitoramento contínuo da operação comercial',
    'Identificação de gargalos por etapa do funil',
    'Relatórios de performance com leitura em linguagem simples',
    'Análise estatística básica (taxas, tempos médios, comparações)',
    'Recomendações estratégicas de ajuste (copy, cadência, segmentação)',
    'Releases/insights periódicos via WhatsApp/e-mail',
    'Identificação de Oportunidades'
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
            className="text-lg md:text-xl font-semibold text-white mb-6 font-sans leading-tight"
          >
            <span className="text-yellow-400 font-bold">IA ESTRATEGISTA</span> <span className="text-white">–</span> O CÉREBRO TÁTICO
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-base md:text-lg font-light text-white leading-relaxed font-sans">
              A <span className="text-yellow-400 font-semibold">IA Estrategista</span> não fala com cliente. Ela observa o funil, lê os números e mostra onde o time está vazando dinheiro. Em cima disso, sugere o que testar, o que ajustar e o que parar de fazer.
            </p>

            <div>
              <p className="text-base md:text-lg font-semibold text-yellow-400 mb-5 font-sans">
                Nesta versão da Célula Términus você recebe:
              </p>

              <div className="space-y-4">
                {features.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                    className="flex items-start gap-3 bg-yellow-400/5 border-l-2 border-yellow-400 pl-4 py-2.5 rounded-r"
                  >
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm md:text-base font-light text-white leading-relaxed font-sans">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Animação à Direita - 50% - RADAR TÁTICO */}
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
          <div className="relative w-full h-full flex items-center justify-center">
            
            <svg viewBox="0 0 400 400" className="w-full h-auto max-h-full">
              <defs>
                <filter id="glowRadar">
                  <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                <radialGradient id="radarGrad">
                  <stop offset="0%" style={{ stopColor: '#d4a017', stopOpacity: 0.6 }} />
                  <stop offset="100%" style={{ stopColor: '#d4a017', stopOpacity: 0 }} />
                </radialGradient>
                <linearGradient id="sweepGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#d4a017', stopOpacity: 0 }} />
                  <stop offset="50%" style={{ stopColor: '#d4a017', stopOpacity: 0.8 }} />
                  <stop offset="100%" style={{ stopColor: '#d4a017', stopOpacity: 0 }} />
                </linearGradient>
              </defs>

              {/* Centro - Cérebro IA */}
              <motion.g>
                <motion.circle
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  cx="200" cy="200" r="35"
                  fill="#d4a017"
                  fillOpacity="0.3"
                  stroke="#d4a017"
                  strokeWidth="3"
                  filter="url(#glowRadar)"
                />
                
                {/* Pulso central contínuo */}
                <motion.circle
                  animate={{ 
                    r: [35, 45, 35],
                    opacity: [0.5, 0.1, 0.5]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  cx="200" cy="200" r="35"
                  fill="none"
                  stroke="#d4a017"
                  strokeWidth="2"
                />

                <text x="200" y="210" textAnchor="middle" fill="#ffffff" fontSize="20" fontWeight="900" className="font-sans">IA</text>
              </motion.g>

              {/* Anéis concêntricos do radar */}
              {[70, 100, 130, 160].map((radius, i) => (
                <motion.circle
                  key={`ring-${i}`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.3, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.1, duration: 0.6 }}
                  cx="200" cy="200" r={radius}
                  fill="none"
                  stroke="#d4a017"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  opacity="0.3"
                />
              ))}

              {/* Linhas radiais (8 direções) */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                const rad = (angle * Math.PI) / 180;
                const x2 = 200 + Math.cos(rad) * 160;
                const y2 = 200 + Math.sin(rad) * 160;
                
                return (
                  <motion.line
                    key={`radial-${i}`}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.25 }}
                    transition={{ delay: 1 + i * 0.05, duration: 0.5 }}
                    x1="200" y1="200"
                    x2={x2} y2={y2}
                    stroke="#d4a017"
                    strokeWidth="1"
                  />
                );
              })}

              {/* Scanner rotativo (efeito radar) */}
              <g>
                <path
                  d="M 200 200 L 200 40 A 160 160 0 0 1 313.137 113.137 Z"
                  fill="url(#radarGrad)"
                  opacity="0.6"
                  filter="url(#glowRadar)"
                >
                  <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    type="rotate"
                    from="0 200 200"
                    to="360 200 200"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </path>
              </g>

              {/* Pontos de dados detectados (8 pontos ao redor) */}
              {[
                { angle: 30, label: 'TAXA', value: '23%', delay: 1.5 },
                { angle: 75, label: 'TEMPO', value: '4.2d', delay: 1.7 },
                { angle: 120, label: 'CUSTO', value: 'R$45', delay: 1.9 },
                { angle: 165, label: 'CONV', value: '12%', delay: 2.1 },
                { angle: 210, label: 'LEADS', value: '342', delay: 2.3 },
                { angle: 255, label: 'PROP', value: '89', delay: 2.5 },
                { angle: 300, label: 'FECH', value: '31', delay: 2.7 },
                { angle: 345, label: 'ROI', value: '3.2x', delay: 2.9 }
              ].map((point, i) => {
                const rad = (point.angle * Math.PI) / 180;
                const radius = 130;
                const x = 200 + Math.cos(rad) * radius;
                const y = 200 + Math.sin(rad) * radius;
                
                return (
                  <motion.g key={`point-${i}`}>
                    {/* Ponto pulsante */}
                    <motion.circle
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: [0, 1.2, 1],
                        opacity: [0, 1, 1]
                      }}
                      transition={{ delay: point.delay, duration: 0.5 }}
                      cx={x} cy={y} r="5"
                      fill="#d4a017"
                      filter="url(#glowRadar)"
                    />
                    
                    {/* Pulso contínuo */}
                    <motion.circle
                      animate={{ 
                        r: [5, 10, 5],
                        opacity: [0.8, 0, 0.8]
                      }}
                      transition={{ 
                        delay: point.delay + 0.5,
                        duration: 2,
                        repeat: Infinity
                      }}
                      cx={x} cy={y} r="5"
                      fill="none"
                      stroke="#d4a017"
                      strokeWidth="2"
                    />

                    {/* Label do dado */}
                    <motion.g
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: point.delay + 0.3, duration: 0.4 }}
                    >
                      <rect 
                        x={x - 20} y={y - 25} 
                        width="40" height="18" 
                        rx="3" 
                        fill="#000000" 
                        fillOpacity="0.8"
                        stroke="#d4a017"
                        strokeWidth="1"
                      />
                      <text x={x} y={y - 17} textAnchor="middle" fill="#d4a017" fontSize="7" fontWeight="700" className="font-sans">
                        {point.label}
                      </text>
                      <text x={x} y={y - 10} textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="700" className="font-sans">
                        {point.value}
                      </text>
                    </motion.g>
                  </motion.g>
                );
              })}

              {/* Texto de status */}
              <motion.text
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ delay: 3, duration: 2, repeat: Infinity }}
                x="200" y="380"
                textAnchor="middle"
                fill="#d4a017"
                fontSize="12"
                fontWeight="700"
                className="font-sans"
              >
                MONITORAMENTO ATIVO
              </motion.text>

            </svg>

          </div>
        </motion.div>
      </div>
    </div>
  );
}

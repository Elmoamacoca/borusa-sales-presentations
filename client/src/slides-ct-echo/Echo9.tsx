import { motion } from 'framer-motion';
import { MeshGradient } from "@paper-design/shaders-react";
import { CheckCircle2 } from 'lucide-react';

export default function Echo9() {
  const charcoalColors = [
    "#0f0f0f",
    "#1a1a1a",
    "#252525",
    "#1e1e1e",
    "#141414",
  ];

  const features = [
    'Lembretes automáticos de reunião (D-1, D-0, pós-agendamento)',
    'Confirmação de presença e pedido de confirmação do lead',
    'Envio de convite de calendário pro lead e pro vendedor',
    'Atuação multicanal (WhatsApp, e-mail, Instagram)'
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
        {/* Conteúdo à Esquerda - 60% */}
        <div className="w-[60%] h-full flex flex-col justify-center px-8 md:px-12 lg:px-16 relative z-10">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl font-semibold text-white mb-5 font-sans leading-tight"
          >
            <span className="text-purple-400 font-bold">IA DE COMPROMISSO</span> <span className="text-white">–</span> AGENDA CHEIA COM GENTE CERTA
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-base md:text-lg font-light text-white leading-relaxed font-sans">
              A <span className="text-purple-400 font-semibold">IA de Compromisso</span> assume a conversa quando o lead já está qualificado e leva até o agendamento: oferece horários, confirma, manda lembretes e prepara o terreno pro closer chegar na call sem surpresa.
            </p>

            <div>
              <p className="text-base md:text-lg font-semibold text-purple-400 mb-5 font-sans">
                Nesta versão da Célula Términus você recebe:
              </p>

              <div className="space-y-2.5">
                {features.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.08, duration: 0.4 }}
                    className="flex items-start gap-2.5 bg-purple-400/5 border-l-2 border-purple-400 pl-3 py-2 rounded-r"
                  >
                    <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <p className="text-xs md:text-sm font-light text-white leading-snug font-sans">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>

        {/* Animação à Direita - 40% */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-[40%] h-full relative overflow-hidden flex items-center justify-center"
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            width: '40vw',
            height: '100%',
          }}
        >
          <div className="relative w-full max-w-md h-full flex items-center justify-center px-12">
            
            {/* Calendário */}
            <svg viewBox="0 0 300 350" className="w-full h-full">
              <defs>
                <filter id="glow2">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Estrutura do calendário */}
              <motion.rect
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                x="50" y="50" width="200" height="250"
                rx="10"
                fill="none"
                stroke="#a855f7"
                strokeWidth="3"
                filter="url(#glow2)"
              />

              {/* Cabeçalho do calendário */}
              <motion.rect
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                x="50" y="50" width="200" height="40"
                rx="10"
                fill="#a855f7"
                fillOpacity="0.3"
              />

              {/* Título do mês */}
              <motion.text
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                x="150" y="75"
                textAnchor="middle"
                fill="#ffffff"
                fontSize="16"
                fontWeight="700"
                className="font-sans"
              >
                AGENDA
              </motion.text>

              {/* Grade de dias (3x3) */}
              {[0, 1, 2].map((row) => (
                [0, 1, 2].map((col) => {
                  const index = row * 3 + col;
                  const x = 70 + col * 60;
                  const y = 110 + row * 60;
                  
                  return (
                    <motion.g key={index}>
                      <motion.rect
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 0.6, scale: 1 }}
                        transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
                        x={x} y={y} width="50" height="50"
                        rx="5"
                        fill="none"
                        stroke="#a855f7"
                        strokeWidth="1.5"
                        strokeOpacity="0.4"
                      />
                      <motion.text
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        transition={{ delay: 1.4 + index * 0.1, duration: 0.4 }}
                        x={x + 25} y={y + 30}
                        textAnchor="middle"
                        fill="#ffffff"
                        fontSize="14"
                        fontWeight="500"
                        className="font-sans"
                      >
                        {index + 1}
                      </motion.text>
                    </motion.g>
                  );
                })
              ))}

              {/* Dias com compromissos agendados (destacados) */}
              {[1, 4, 7].map((day, i) => {
                const row = Math.floor(day / 3);
                const col = day % 3;
                const x = 70 + col * 60;
                const y = 110 + row * 60;
                
                return (
                  <motion.rect
                    key={day}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ 
                      opacity: [0.3, 0.8, 0.3],
                      scale: [0.9, 1, 0.9]
                    }}
                    transition={{ 
                      delay: 2 + i * 0.3,
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                    x={x} y={y} width="50" height="50"
                    rx="5"
                    fill="#a855f7"
                    fillOpacity="0.4"
                    stroke="#a855f7"
                    strokeWidth="2"
                  />
                );
              })}

              {/* Ícones de notificação (sinos) */}
              {[1, 4, 7].map((day, i) => {
                const row = Math.floor(day / 3);
                const col = day % 3;
                const x = 70 + col * 60 + 35;
                const y = 110 + row * 60 + 15;
                
                return (
                  <motion.g key={`bell-${day}`}>
                    {/* Sino simplificado */}
                    <motion.path
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: [0, 1, 1, 0],
                        scale: [0, 1.2, 1, 0.8],
                        y: [0, -3, 0, 3]
                      }}
                      transition={{ 
                        delay: 2.5 + i * 0.3,
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                      d={`M ${x-4} ${y} L ${x+4} ${y} L ${x+3} ${y+5} L ${x-3} ${y+5} Z`}
                      fill="#ffffff"
                      stroke="#a855f7"
                      strokeWidth="1"
                    />
                    <motion.circle
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: [0, 1, 1, 0],
                        scale: [0, 1.3, 1, 0.8]
                      }}
                      transition={{ 
                        delay: 2.5 + i * 0.3,
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                      cx={x} cy={y-2} r="1.5"
                      fill="#a855f7"
                    />
                  </motion.g>
                );
              })}

              {/* Linha do tempo abaixo do calendário */}
              <motion.line
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ delay: 2, duration: 1.5 }}
                x1="70" y1="320" x2="230" y2="320"
                stroke="#a855f7"
                strokeWidth="2"
              />

              {/* Marcadores de tempo */}
              {['D-1', 'D-0', 'PÓS'].map((label, i) => (
                <motion.g key={label}>
                  <motion.circle
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.5 + i * 0.3, duration: 0.5 }}
                    cx={90 + i * 70} cy="320" r="5"
                    fill="#a855f7"
                    filter="url(#glow2)"
                  />
                  <motion.text
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.7 + i * 0.3, duration: 0.5 }}
                    x={90 + i * 70} y="340"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="10"
                    fontWeight="600"
                    className="font-sans"
                  >
                    {label}
                  </motion.text>
                </motion.g>
              ))}

            </svg>

          </div>
        </motion.div>
      </div>
    </div>
  );
}

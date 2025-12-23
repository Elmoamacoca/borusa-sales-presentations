import { motion } from 'framer-motion';
import { MeshGradient } from "@paper-design/shaders-react";
import { Server, Database, Mail, Calendar, MessageSquare, FileText } from 'lucide-react';

export default function Slide56() {
  // Tom de azul correto (mesmo do slide 1 e BackgroundShader)
  const blueColors = [
    "#0a0a0a",
    "#1a2332",
    "#2d3e50",
    "#3d5a80",
    "#1a1a1a",
  ];

  const sections = [
    'Implantação de uma stack de ferramentas open source na sua própria VPS (ex.: Mautic, Chatwoot, cal.com e outras compatíveis com sua operação).',
    'Cada plataforma integrada ao ecossistema da Célula Términus (IAs, CRM, WhatsApp, e-mail, agenda, formulários etc.).',
    'Você deixa de pagar múltiplas assinaturas de SaaS por usuário e passa a operar em infraestrutura própria.',
    'Dados sob seu controle: histórico, leads, campanhas e atendimentos ficam na sua máquina, não presos em ferramentas de terceiros.',
    'Possibilidade de ativar novos módulos no futuro (como formulários, help desk, automação de marketing) reaproveitando a mesma infraestrutura.'
  ];

  const tools = [
    { name: 'Mautic', icon: Mail, desc: 'Marketing' },
    { name: 'Chatwoot', icon: MessageSquare, desc: 'Atendimento' },
    { name: 'cal.com', icon: Calendar, desc: 'Agenda' },
    { name: 'Database', icon: Database, desc: 'Dados' },
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
        {/* Animação à Esquerda - 50% - Stack de Ferramentas */}
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
                <filter id="glowStack">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Servidor Central (VPS) */}
              <motion.g
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                {/* Base do servidor */}
                <rect 
                  x="110" y="180" 
                  width="80" height="100" 
                  rx="6" 
                  fill="#1a1a1a" 
                  stroke="#22c55e" 
                  strokeWidth="3"
                  filter="url(#glowStack)"
                />
                
                {/* Detalhes do servidor */}
                {[0, 1, 2].map((i) => (
                  <motion.g key={i}>
                    <rect 
                      x="120" y={200 + i * 25} 
                      width="60" height="18" 
                      rx="3" 
                      fill="#22c55e" 
                      fillOpacity="0.2"
                      stroke="#22c55e"
                      strokeWidth="1.5"
                    />
                    <motion.circle
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ 
                        delay: i * 0.3,
                        duration: 2,
                        repeat: Infinity
                      }}
                      cx="130" cy={209 + i * 25} 
                      r="3"
                      fill="#22c55e"
                    />
                  </motion.g>
                ))}
                
                {/* Label VPS */}
                <text 
                  x="150" y="300" 
                  textAnchor="middle" 
                  fill="#22c55e" 
                  fontSize="11" 
                  fontWeight="700" 
                  className="font-sans"
                >
                  SUA VPS
                </text>
              </motion.g>

              {/* 4 Ferramentas ao redor */}
              {tools.map((tool, i) => {
                const angle = (i * 90 - 45) * (Math.PI / 180);
                const radius = 120;
                const x = 150 + Math.cos(angle) * radius;
                const y = 230 + Math.sin(angle) * radius;
                const Icon = tool.icon;
                
                return (
                  <motion.g key={i}>
                    {/* Linha conectando ao servidor */}
                    <motion.line
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.4 }}
                      transition={{ delay: 1 + i * 0.2, duration: 0.5 }}
                      x1="150"
                      y1="230"
                      x2={x}
                      y2={y}
                      stroke="#22c55e"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                    
                    {/* Pulso de dados */}
                    <motion.circle
                      animate={{
                        cx: [150, x],
                        cy: [230, y],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        delay: 2 + i * 0.4,
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 2
                      }}
                      cx="150"
                      cy="230"
                      r="4"
                      fill="#22c55e"
                      filter="url(#glowStack)"
                    />
                    
                    {/* Card da ferramenta */}
                    <motion.g
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.2 + i * 0.2, duration: 0.4, type: "spring" }}
                    >
                      <rect 
                        x={x - 35} y={y - 25} 
                        width="70" height="50" 
                        rx="6" 
                        fill="#1a1a1a" 
                        stroke="#22c55e" 
                        strokeWidth="2.5"
                        filter="url(#glowStack)"
                      />
                      
                      {/* Ícone */}
                      <circle 
                        cx={x} cy={y - 8} 
                        r="10" 
                        fill="#22c55e" 
                        fillOpacity="0.3"
                      />
                      
                      {/* Nome */}
                      <text 
                        x={x} y={y + 15} 
                        textAnchor="middle" 
                        fill="#22c55e" 
                        fontSize="8" 
                        fontWeight="700" 
                        className="font-sans"
                      >
                        {tool.name}
                      </text>
                      
                      {/* Descrição */}
                      <text 
                        x={x} y={y + 23} 
                        textAnchor="middle" 
                        fill="#ffffff" 
                        fontSize="6" 
                        fontWeight="400" 
                        className="font-sans"
                        opacity="0.7"
                      >
                        {tool.desc}
                      </text>
                    </motion.g>
                  </motion.g>
                );
              })}

              {/* Título superior */}
              <motion.text
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                x="150" y="80"
                textAnchor="middle"
                fill="#22c55e"
                fontSize="12"
                fontWeight="700"
                className="font-sans"
              >
                INFRAESTRUTURA PRÓPRIA
              </motion.text>

              {/* Badge "Open Source" */}
              <motion.g
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5, duration: 0.5 }}
              >
                <rect
                  x="90" y="370"
                  width="120" height="30"
                  rx="15"
                  fill="#22c55e"
                  fillOpacity="0.2"
                  stroke="#22c55e"
                  strokeWidth="2"
                />
                <text
                  x="150" y="390"
                  textAnchor="middle"
                  fill="#22c55e"
                  fontSize="11"
                  fontWeight="700"
                  className="font-sans"
                >
                  100% OPEN SOURCE
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
            <span className="text-green-400 font-bold">BÔNUS:</span> ARSENAL OPEN SOURCE "CAIXA DE PANDORA"
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
            <div className="bg-gradient-to-br from-green-400/10 to-green-600/5 border-2 border-green-400 rounded-xl px-8 py-6 backdrop-blur-sm shadow-lg shadow-green-400/20">
              <p className="text-sm text-gray-400 font-sans mb-2">Valor de mercado:</p>
              <p className="text-4xl md:text-5xl font-bold text-green-400 font-sans">R$ 15.000,00</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

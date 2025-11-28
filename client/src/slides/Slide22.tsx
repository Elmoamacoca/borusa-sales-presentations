import { motion } from 'framer-motion';
import { MeshGradient } from "@paper-design/shaders-react";
import { Asterisk } from 'lucide-react';

export default function Slide22() {
  // Paleta amarelo/dourado para o lado esquerdo
  const yellowColors = [
    "#d4a017",
    "#f4c430",
    "#e6b800",
    "#c9a000",
    "#b8860b",
  ];

  // Paleta preto carvão para o lado direito
  const charcoalColors = [
    "#0f0f0f",
    "#1a1a1a",
    "#252525",
    "#1e1e1e",
    "#141414",
  ];

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden">
      <div className="w-full h-full flex flex-col md:flex-row">
        {/* Lado Esquerdo - Amarelo */}
        <div className="relative w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center overflow-hidden">
          {/* Fundo animado amarelo */}
          <div className="absolute inset-0 z-0">
            <MeshGradient
              className="w-full h-full"
              colors={yellowColors}
              speed={0.15}
              minPixelRatio={1.0}
            />
          </div>

          {/* Conteúdo lado esquerdo */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative z-10 px-8 md:px-12 lg:px-16 py-12 space-y-5 max-w-3xl"
          >
            <p className="text-white/90 text-base md:text-lg font-light">
              Os maiores do mercado já entenderam…
            </p>
            
            <h1 className="text-3xl md:text-4xl font-semibold text-white leading-tight font-sans">
              IA é o novo petróleo.
            </h1>

            <p className="text-white/90 text-xl md:text-2xl font-light leading-relaxed">
              Mas de nada adianta ter petróleo bruto se você não sabe refinar.
            </p>

            <ul className="space-y-2 text-white text-base md:text-lg font-light">
              <li>• Acesso à IA bruta hoje é commodity.</li>
              <li>• O valor real está em refinar IA em processo e sistema.</li>
              <li>• Quem constrói a "refinaria" domina o mercado amanhã.</li>
              <li>• Quem só consome IA empacotada paga o 'preço da bomba': bruto barato + camadas de custo a cada interação.</li>
              <li>• IA refinada na operação vira vantagem injusta: otimiza, multiplica e aprende todo dia.</li>
            </ul>
          </motion.div>
        </div>

        {/* Lado Direito - Preto Carvão */}
        <div className="relative w-full md:w-1/2 h-1/2 md:h-full flex flex-col items-center justify-center overflow-hidden">
          {/* Fundo animado preto carvão */}
          <div className="absolute inset-0 z-0">
            <MeshGradient
              className="w-full h-full"
              colors={charcoalColors}
              speed={0.15}
              minPixelRatio={1.0}
            />
          </div>

          {/* Conteúdo lado direito */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative z-10 px-8 md:px-12 lg:px-16 py-12 space-y-8 max-w-2xl"
          >
            {/* Ícone amarelo */}
            <div className="flex justify-center mb-8">
              <Asterisk className="w-16 h-16 md:w-20 md:h-20 text-yellow-500" strokeWidth={3} />
            </div>

            {/* Texto explicativo */}
            <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed text-center">
              É o nível de refinamento da sua IA o quanto ela <span className="underline decoration-yellow-500 decoration-2 underline-offset-4">otimiza</span>, <span className="underline decoration-yellow-500 decoration-2 underline-offset-4">multiplica</span> e <span className="underline decoration-yellow-500 decoration-2 underline-offset-4">aprende</span> dentro do comercial que dita a velocidade, a longevidade e o lucro que a sua operação vai ter na escala.
            </p>

            {/* Fotos dos especialistas */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 pt-8">
              {/* Elon Musk */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-lg overflow-hidden mb-3">
                  <img 
                    src="/images/executives/elon-musk.jpg" 
                    alt="Elon Musk"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-white font-semibold text-sm md:text-base">Elon Musk</p>
                <p className="text-white/70 text-xs md:text-sm">CEO da Tesla / xAI</p>
              </motion.div>

              {/* Luiza Trajano */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.7, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-lg overflow-hidden mb-3">
                  <img 
                    src="/images/executives/luiza-trajano.jpg" 
                    alt="Luiza Trajano"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-white font-semibold text-sm md:text-base">Luiza Trajano</p>
                <p className="text-white/70 text-xs md:text-sm">Magazine Luiza</p>
              </motion.div>

              {/* David Vélez */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.8, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-lg overflow-hidden mb-3">
                  <img 
                    src="/images/executives/david-velez.jpg" 
                    alt="David Vélez"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-white font-semibold text-sm md:text-base">David Vélez</p>
                <p className="text-white/70 text-xs md:text-sm">Fundador do Nubank</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

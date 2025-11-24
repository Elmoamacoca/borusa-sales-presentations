import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';
import { LordIcon } from '@/components/LordIcon';

export default function WelcomeSlide() {
  return (
    <Slide className="flex items-start justify-center pt-56">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-20"
        >
          {/* Título Principal */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-tight font-sans mt-24">
            Você encontrou a peça que faltava. Vamos instalar um sistema de{' '}
            <span className="underline decoration-yellow-500 decoration-1 underline-offset-4">IA comercial</span>{' '}
            que otimiza seus{' '}
            <span className="underline decoration-yellow-500 decoration-1 underline-offset-4">resultados</span>,{' '}
            <span className="underline decoration-yellow-500 decoration-1 underline-offset-4">multiplica</span>{' '}
            o que já está bom e se alimenta da{' '}
            <span className="underline decoration-yellow-500 decoration-1 underline-offset-4">inteligência</span>{' '}
            da sua operação.
          </h1>

          {/* Grid de Benefícios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            {/* Benefício 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center p-2">
                  <LordIcon 
                    src="https://cdn.lordicon.com/qhviklyi.json"
                    trigger="loop"
                    size={32}
                    colors="#FFFFFF"
                    speed={0.5}
                  />
                </div>
              </div>
              <div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light">
                  Você consegue ver onde está vazando sua receita. Decisões baseadas em dados, não em achismo.
                </p>
              </div>
            </motion.div>

            {/* Benefício 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center p-2">
                  <LordIcon 
                    src="https://cdn.lordicon.com/pkmkagva.json"
                    trigger="loop"
                    size={32}
                    colors="#FFFFFF"
                    speed={0.5}
                  />
                </div>
              </div>
              <div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light">
                  Cada lead que você pagou em mídia agora recebe a atenção que merecia. Nenhuma venda perdida.
                </p>
              </div>
            </motion.div>

            {/* Benefício 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center p-2">
                  <LordIcon 
                    src="https://cdn.lordicon.com/egiwmiit.json"
                    trigger="loop"
                    size={32}
                    colors="#FFFFFF"
                    speed={0.5}
                  />
                </div>
              </div>
              <div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light">
                  Sua operação não apenas funciona, ela melhora sozinha. Inteligência contínua evoluindo.
                </p>
              </div>
            </motion.div>
          </div>


        </motion.div>
      </div>
    </Slide>
  );
}

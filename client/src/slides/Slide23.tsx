import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function Slide23() {
  return (
    <Slide className="flex items-center justify-center">
      <div className="w-full h-full flex flex-col md:flex-row">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="w-full md:w-1/2 flex items-center justify-center px-8 md:px-16 py-12 bg-gradient-to-r from-yellow-700 to-yellow-600">
          <div className="space-y-8">
            <p className="text-white text-xl">Os maiores do mercado já entenderam...</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white font-sans">MQL é o Bitcoin do Digital...</h1>
            <ul className="space-y-3 text-white text-xl">
              <li>• Alto Valor</li>
              <li>• Ganha mais quem tem mais</li>
              <li>• Alta Valorização</li>
              <li>• Número limitado</li>
              <li>• Alta Liquidez</li>
            </ul>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, duration: 0.6 }} className="w-full md:w-1/2 flex flex-col items-center justify-center px-8 py-12 bg-black">
          <div className="text-center space-y-6">
            <div className="text-yellow-500 text-7xl">*</div>
            <p className="text-white text-xl">É o nível de Qualificação quem dita a Velocidade, Longevidade e o Lucro que business terá na Escala.</p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center"><div className="w-24 h-24 bg-gray-700 rounded mx-auto mb-2"></div><p className="text-white text-sm">Frank Kern</p></div>
              <div className="text-center"><div className="w-24 h-24 bg-gray-700 rounded mx-auto mb-2"></div><p className="text-white text-sm">Dan Kennedy</p></div>
              <div className="text-center"><div className="w-24 h-24 bg-gray-700 rounded mx-auto mb-2"></div><p className="text-white text-sm">Russell Brunson</p></div>
            </div>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}

import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function Slide21() {
  return (
    <Slide className="flex items-center justify-center">
      <div className="w-full h-full flex flex-col md:flex-row bg-gradient-to-r from-red-900 to-red-700">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="w-full md:w-1/2 flex items-center justify-center px-8 md:px-16 py-12">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-sans">CENÁRIO DO MERCADO HOJE:</h1>
            <ul className="space-y-3 text-white text-lg">
              <li>• Aumento do custo por aquisição de clientes</li>
              <li>• Margem cada dia mais apertada</li>
              <li>• Leads mais caros, <u>desqualificados</u> e <u>descomprometidos</u></li>
              <li>• Falta de previsibilidade nas vendas</li>
              <li>• Time Comercial viciado em dar desculpas e alto Turn-Over</li>
              <li>• Cash-Collect baixo (menos de 30%)</li>
              <li>• Falta de braço pra executar todas as ações necessárias</li>
              <li>• Leads quebrados chegando aos montes e os qualificados à conta-gotas</li>
            </ul>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, duration: 0.6 }} className="w-full md:w-1/2 flex items-center justify-center px-8 py-12">
          <div className="w-full max-w-md h-96 bg-black/30 rounded-lg shadow-2xl flex items-center justify-center">
            <div className="text-white text-center"><p className="text-sm">Imagem: dinheiro explodindo</p></div>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}

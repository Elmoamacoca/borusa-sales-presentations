import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function Slide35() {
  return (
    <Slide className="flex items-center justify-center">
      <div className="w-full h-full flex">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="w-1/2 flex items-center justify-center px-12 relative">
          <div className="absolute top-8 left-8 w-32 h-32">
            <div className="w-0.5 h-24 bg-yellow-500"></div>
            <div className="w-24 h-0.5 bg-yellow-500 absolute top-0"></div>
            <div className="absolute top-12 left-12"><div className="w-16 h-16 border-2 border-yellow-500 rounded-full"></div></div>
          </div>
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white font-sans">FUNIL DE CAPTAÇÃO</h1>
            <p className="text-white text-lg">enchemos sua base de Leads que pagam bem, pagam rápido e pagam fácil...</p>
            <p className="text-white text-lg">O objetivo aqui é expandir sua base de Leads Qualificados...</p>
            <p className="text-white text-lg">ao mesmo tempo em que convertemos Leads quentes, mornos e até mesmo FRIOS em clientes de R$5.000,00 até R$145.000,00 (na 1ª semana de contato)</p>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, duration: 0.6 }} className="w-1/2 bg-gray-900 flex items-center justify-center p-8">
          <div className="w-full max-w-md space-y-4">
            <div className="bg-black rounded-lg p-4 text-white"><div className="text-sm text-gray-400">Receita Líquida (de Ads) ⓘ</div><div className="text-3xl font-bold">R$ 70.672,68</div></div>
            <div className="bg-black rounded-lg p-4 text-white"><div className="text-sm text-gray-400">Número de Leads ⓘ</div><div className="text-3xl font-bold">794</div></div>
            <div className="bg-black rounded-lg p-6 space-y-3 text-white text-sm">
              <p>• Meu caro</p>
              <p>• Como eu faço</p>
              <p>• Pra marcar uma</p>
              <p>• Comercial mesmo</p>
              <p>• v/c tem uma para curti</p>
              <p className="text-red-500">❤️</p>
              <p>• Uma picância na que falta em mim</p>
              <p className="text-red-500">❤️</p>
              <p>• Quero entender me ajudar</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}

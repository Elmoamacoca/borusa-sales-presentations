import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function Slide29() {
  return (
    <Slide className="flex items-center justify-center">
      <div className="w-full h-full flex">
        <div className="w-1/3 bg-gradient-to-b from-purple-900 to-purple-800 flex flex-col items-center justify-center p-8 space-y-6">
          <div className="bg-purple-700 rounded-2xl px-8 py-4 text-white text-center font-bold">CONTEÚDOS HBW<br/>COM LEVANTADA<br/>DE MÃO</div>
          <div className="bg-purple-700 rounded-2xl px-8 py-4 text-white text-center font-bold">ANÚNCIO SEM<br/>PROMESSAS</div>
        </div>
        <div className="w-2/3 bg-black flex items-center justify-center p-12 relative">
          <div className="absolute top-8 left-8"><div className="w-0.5 h-16 bg-yellow-500"></div><div className="w-16 h-0.5 bg-yellow-500"></div></div>
          <h2 className="absolute top-12 left-32 text-white text-3xl font-bold">A NOVA ESTRUTURA</h2>
          <div className="relative">
            <div className="w-64 h-64 rounded-full border-4 border-blue-500 flex items-center justify-center relative">
              <div className="absolute -top-16 bg-blue-500 rounded-full px-6 py-2 text-white font-bold">ISCA</div>
              <div className="absolute -right-20 bg-orange-500 rounded-full px-6 py-2 text-white font-bold">CAPTAÇÃO</div>
              <div className="absolute right-0 top-32 bg-yellow-500 rounded-2xl px-6 py-3 text-black font-bold">APRESENTAÇÃO<br/>COMERCIAL</div>
              <div className="absolute right-0 bottom-16 bg-yellow-400 rounded-2xl px-6 py-3 text-black font-bold">LOOM SALES</div>
              <div className="absolute bottom-0 bg-gradient-to-r from-red-600 to-orange-600 rounded-full px-6 py-2 text-white font-bold">EFEITO W</div>
              <div className="w-32 h-32 flex items-center justify-center">
                <div className="text-6xl">👑</div>
              </div>
            </div>
          </div>
          <div className="absolute top-8 right-8"><div className="w-24 h-24 border-2 border-yellow-500 rounded-full opacity-30"></div></div>
        </div>
      </div>
    </Slide>
  );
}

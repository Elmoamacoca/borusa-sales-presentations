import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function Slide26() {
  return (
    <Slide className="flex items-center justify-center">
      <div className="w-full px-8 md:px-16 py-12 relative">
        <div className="absolute top-8 left-8 w-32 h-32">
          <div className="w-0.5 h-24 bg-yellow-500"></div>
          <div className="w-24 h-0.5 bg-yellow-500 absolute top-0"></div>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="space-y-8 max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white font-sans">FUNIL DE VENDAS ATUAL DA MAIORIA</h1>
          <div className="bg-white rounded-lg p-8">
            <div className="flex items-center justify-between">
              <div className="space-y-4">
                <div className="border-2 border-black p-4 rounded"><p className="font-bold">CONTEÚDO</p></div>
                <div className="border-2 border-black p-4 rounded"><p className="font-bold">ANÚNCIOS</p></div>
              </div>
              <div className="flex items-center gap-8">
                <div className="border-2 border-black p-6 rounded"><p className="font-bold text-xl">FUNIL</p><p className="text-red-500 text-sm">-90% não aplicam</p></div>
                <div className="border-2 border-black p-6 rounded"><p className="font-bold text-xl">FORMULÁRIO</p><p className="text-red-500 text-sm">+90% desqualificados</p></div>
                <div className="border-2 border-black p-6 rounded"><p className="font-bold text-xl">CALL</p><p className="text-red-500 text-sm">+80% no-show</p></div>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-black p-4 rounded"><p className="font-bold">PRODUTO 1</p><p className="text-sm">R$ 10.000</p></div>
                <div className="border-2 border-black p-4 rounded"><p className="font-bold">PRODUTO 2</p><p className="text-sm">R$ 3.000</p></div>
                <div className="border-2 border-black p-4 rounded"><p className="font-bold">PRODUTO 3</p><p className="text-sm">R$ 500</p></div>
              </div>
            </div>
            <div className="mt-6 text-red-500 text-sm space-y-2">
              <p>→ menos de 30% de conversão no produto de +R$ 10.000; muitas vendas parceladas e pouca caixa</p>
              <p>→ quando não compra, perde do Lead;</p>
              <p>→ quando compra, não há LTV ou reativação;</p>
            </div>
            <div className="mt-4 text-red-500 font-bold">→ CPL caro = R$ 600,00</div>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}

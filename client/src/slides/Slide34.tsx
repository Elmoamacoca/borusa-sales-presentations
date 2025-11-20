import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function Slide34() {
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
            <h1 className="text-5xl md:text-6xl font-bold text-white font-sans">FUNIL DE<br/>SOCIAL SELLING</h1>
            <p className="text-white text-lg">transformamos até quem não é Lead, em Lead Quente.</p>
            <p className="text-white text-lg">fazemos um Lead "engajante" virar um cliente pagante em poucas semanas (quiçá dias), mesmo sem nenhum Funil.</p>
            <p className="text-white text-lg">Implementar isso pode aumentar de 30% a 50% seu faturamento mensal, sem aumento de tráfego.</p>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, duration: 0.6 }} className="w-1/2 bg-gray-200 flex items-center justify-center p-8">
          <div className="w-full max-w-sm bg-white rounded-lg shadow-xl p-6 space-y-4">
            <div className="bg-red-600 text-white px-3 py-1 rounded text-sm font-bold">Parte 01 (Atração)</div>
            <div className="space-y-2 text-sm"><p className="font-bold">Pergunta 01</p><p className="text-gray-600">Qual é o seu maior desafio hoje?</p></div>
            <div className="space-y-2 text-sm"><p className="font-bold">Pergunta 02</p><p className="text-gray-600">Como você tem tentado resolver isso?</p></div>
            <div className="bg-red-600 text-white px-3 py-1 rounded text-sm font-bold mt-4">Parte 02 (Qualificação)</div>
            <div className="space-y-2 text-sm"><p className="font-bold">Pergunta 03</p><p className="text-gray-600">Quanto isso está custando para você?</p></div>
            <div className="space-y-2 text-sm"><p className="font-bold">Pergunta 04</p><p className="text-gray-600">O que acontece se não resolver?</p></div>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}

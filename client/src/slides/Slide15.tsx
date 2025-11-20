import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function Slide15() {
  return (
    <Slide className="flex items-center justify-center">
      <div className="w-full h-full flex flex-col md:flex-row">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="w-full md:w-1/2 flex items-center justify-center px-8 md:px-16 py-12 relative">
          <div className="space-y-8 max-w-2xl">
            <div className="absolute top-8 left-8 w-24 h-24">
              <div className="w-0.5 h-20 bg-yellow-500 absolute left-8"></div>
              <div className="w-20 h-0.5 bg-yellow-500 absolute top-8"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-sans">Cada minuto que...</h1>
            <div className="space-y-4 text-white text-lg">
              <p>...entra um Lead desqualificado no seu Funil</p>
              <p>...seu SDR perde filtrando quem é <u>MQL</u> de quem não é</p>
              <p>...seu Closer passa sem fazer Call com um Lead que tem $$$ e Urgência</p>
              <p className="pt-4 font-bold">é dinheiro que TODOS vocês estão perdendo!</p>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, duration: 0.6 }} className="w-full md:w-1/2 flex items-center justify-center px-8 py-12 relative">
          <div className="w-full max-w-md h-96 bg-gradient-to-br from-orange-800 to-black rounded-lg shadow-2xl flex items-center justify-center">
            <div className="text-white text-center"><p className="text-sm">Imagem de ampulheta com dinheiro</p></div>
          </div>
          <div className="absolute bottom-8 right-8 w-32 h-32"><div className="w-24 h-0.5 bg-yellow-500 absolute bottom-8"></div></div>
        </motion.div>
      </div>
    </Slide>
  );
}

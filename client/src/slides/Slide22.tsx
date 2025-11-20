import { Slide } from '@/components/presentation/Slide';
import { motion } from 'framer-motion';

export default function Slide22() {
  return (
    <Slide className="flex items-center justify-center">
      <div className="w-full h-full flex flex-col md:flex-row">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="w-full md:w-1/2 flex items-center justify-center px-8 md:px-16 py-12">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-sans">SOLUÇÃO PARA ESCALA COM LUCRO</h1>
            <p className="text-white text-lg">Juntar um Fluxo Previsível de Leads com $$ e Urgência a um Sistema que encurta o período de conversão pro 1º contato</p>
            <ul className="space-y-3 text-white text-lg">
              <li>• enxurrada de leads <u>dispostos</u> a pagar caro pra resolver RÁPIDO problemas ainda mais caros</li>
              <li>• aumentar o comparecimento em calls pra +70%</li>
              <li>• aumentar a conversão da Call de 10%, 20%, pra até 60%</li>
              <li>• lucros elevados, podendo alcançar ROAS de 30+ nos múltiplos 6 dígitos/mês</li>
              <li>• alta previsibilidade de vendas</li>
              <li>• Cash-Collect de 50% (ou mais)</li>
              <li>• Margem de Lucro acima dos 60% mesmo na Escala</li>
            </ul>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, duration: 0.6 }} className="w-full md:w-1/2 flex items-center justify-center px-8 py-12">
          <div className="w-full max-w-md h-96 bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg shadow-2xl flex items-center justify-center">
            <div className="text-white text-center"><p className="text-sm">Imagem: pessoa com dashboards</p></div>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}

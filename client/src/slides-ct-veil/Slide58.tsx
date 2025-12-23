import { motion } from 'framer-motion';
import { MeshGradient } from "@paper-design/shaders-react";

export default function Slide58() {
  const blueColors = ["#0a0a0a", "#1a2332", "#2d3e50", "#3d5a80", "#1a1a1a"];

  const etapas = [
    {
      numero: "01",
      titulo: "Kickoff & Plano de Ação",
      periodo: "Semana 1",
      descricao: "Call de Alinhamento + Briefing. Definição do Plano de Ação de 90 dias (metas, funis, responsabilidades)."
    },
    {
      numero: "02",
      titulo: "Infraestrutura & Integrações",
      periodo: "Semanas 1–2",
      descricao: "Configuração da VPS dedicada e do Portal do Cliente. Conexão de WhatsApp, CRM, e-mail, agenda e formulários."
    },
    {
      numero: "03",
      titulo: "Treinamento da IA",
      periodo: "Semanas 2–3",
      descricao: "Criação do Knowledge Base e treinamento inicial. Testes de precisão e ajuste de tom de voz."
    },
    {
      numero: "04",
      titulo: "Automações & Fluxos",
      periodo: "Semanas 3–4",
      descricao: "Construção dos funis de vendas e automações. Integração com pipeline e configuração de gatilhos."
    },
    {
      numero: "05",
      titulo: "Go-Live & Monitoramento",
      periodo: "Semana 5",
      descricao: "Lançamento oficial do sistema. Monitoramento em tempo real e ajustes finos."
    },
    {
      numero: "06",
      titulo: "Otimização Contínua",
      periodo: "Semanas 6–12",
      descricao: "Análise de métricas e otimização de conversão. Expansão de funcionalidades conforme demanda."
    }
  ];

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden">
      <div className="absolute inset-0">
        <MeshGradient className="w-full h-full" colors={blueColors} speed={0.15} minPixelRatio={1.0} />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-start px-6 md:px-12 lg:px-16 pt-12">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-light text-white font-sans">
            JORNADA DE 90 DIAS
          </h1>
        </motion.div>

        {/* Grid de etapas */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-full max-w-6xl flex justify-center mt-20"
        >
          <div className="grid grid-cols-2 gap-x-32 gap-y-5 mx-auto">
            {etapas.map((etapa, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                className="flex items-start gap-5 min-h-[60px]"
              >
                {/* Círculo com número */}
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center border-3 border-white/20">
                  <span className="text-lg font-bold text-white">{etapa.numero}</span>
                </div>

                {/* Conteúdo */}
                <div className="flex-1 max-w-[280px]">
                  <div className="inline-block bg-green-400/20 px-3 py-1 rounded-full mb-1.5">
                    <span className="text-xs font-semibold text-green-300 uppercase tracking-wide">
                      {etapa.periodo}
                    </span>
                  </div>
                  <h3 className="text-lg font-light text-white mb-1.5 leading-tight font-sans">
                    {etapa.titulo}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {etapa.descricao}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-6 text-center"
        >
          <p className="text-sm text-green-300 font-light">
            ✦ Acompanhamento semanal e suporte dedicado durante toda a jornada
          </p>
        </motion.div>
      </div>
    </div>
  );
}

import { motion } from 'framer-motion';
import { Slide } from '@/components/presentation/Slide';
import ReactFlow, {
  Node,
  Edge,
  useNodesState,
  useEdgesState,
  Background,
  Handle,
  Position,
  getStraightPath,
  EdgeProps,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { Brain, Database, Users, Target, Zap, TrendingUp, BarChart3, Settings, Mail } from 'lucide-react';

// Componente customizado para o cérebro
const BrainNode = ({ data }: any) => {
  return (
    <motion.div
      className="flex items-center justify-center"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.5
      }}
    >
      <div className="relative">
        <motion.div 
          className="w-10 h-10 rounded-full bg-yellow-500/20 border border-yellow-500 flex items-center justify-center backdrop-blur-sm shadow-lg shadow-yellow-500/50"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Brain className="w-5 h-5 text-yellow-500" />
        </motion.div>
      </div>
      <Handle type="source" position={Position.Top} style={{ opacity: 0 }} />
      <Handle type="source" position={Position.Bottom} style={{ opacity: 0 }} />
      <Handle type="source" position={Position.Left} style={{ opacity: 0 }} />
      <Handle type="source" position={Position.Right} style={{ opacity: 0 }} />
    </motion.div>
  );
};

// Componente para ícones conectados
const IconNode = ({ data }: any) => {
  const Icon = data.icon;
  
  return (
    <motion.div
      className="flex items-center justify-center"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: data.delay || 1.5
      }}
    >
      <div className="relative">
        <motion.div 
          className="w-8 h-8 rounded-full bg-gray-800/50 border border-gray-600 flex items-center justify-center backdrop-blur-sm"
          animate={{
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Icon className="w-4 h-4 text-white" />
        </motion.div>
      </div>
      <Handle type="target" position={Position.Top} style={{ opacity: 0 }} />
      <Handle type="target" position={Position.Bottom} style={{ opacity: 0 }} />
      <Handle type="target" position={Position.Left} style={{ opacity: 0 }} />
      <Handle type="target" position={Position.Right} style={{ opacity: 0 }} />
    </motion.div>
  );
};

// Edge customizado totalmente reto
const StraightEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  style,
}: EdgeProps) => {
  // Criar path SVG manualmente para garantir linha 100% reta
  const edgePath = `M ${sourceX},${sourceY} L ${targetX},${targetY}`;

  return (
    <path
      id={id}
      style={style}
      className="react-flow__edge-path"
      d={edgePath}
      fill="none"
    />
  );
};

const nodeTypes = {
  brain: BrainNode,
  icon: IconNode,
};

// Removido edgeTypes customizado - usando padrão do React Flow

export default function AdaptedLogicSlide() {
  const initialNodes: Node[] = [
    {
      id: 'center',
      type: 'brain',
      position: { x: 400, y: 230 },
      data: {},
    },
    // 8 ícones em círculo ao redor do cérebro
    {
      id: 'icon1',
      type: 'icon',
      position: { x: 550, y: 150 }, // 45° (superior direita)
      data: { icon: Database, delay: 1.5 },
    },
    {
      id: 'icon2',
      type: 'icon',
      position: { x: 600, y: 230 }, // 0° (direita)
      data: { icon: Users, delay: 1.6 },
    },
    {
      id: 'icon3',
      type: 'icon',
      position: { x: 550, y: 310 }, // 315° (inferior direita)
      data: { icon: Target, delay: 1.7 },
    },
    {
      id: 'icon4',
      type: 'icon',
      position: { x: 400, y: 360 }, // 270° (embaixo)
      data: { icon: Zap, delay: 1.8 },
    },
    {
      id: 'icon5',
      type: 'icon',
      position: { x: 250, y: 310 }, // 225° (inferior esquerda)
      data: { icon: TrendingUp, delay: 1.9 },
    },
    {
      id: 'icon6',
      type: 'icon',
      position: { x: 200, y: 230 }, // 180° (esquerda)
      data: { icon: BarChart3, delay: 2.0 },
    },
    {
      id: 'icon7',
      type: 'icon',
      position: { x: 250, y: 150 }, // 135° (superior esquerda)
      data: { icon: Settings, delay: 2.1 },
    },
    {
      id: 'icon8',
      type: 'icon',
      position: { x: 400, y: 100 }, // 90° (em cima)
      data: { icon: Mail, delay: 2.2 },
    },
  ];

  const initialEdges: Edge[] = [
    {
      id: 'e1',
      source: 'center',
      target: 'icon1',
      type: 'straight',
      animated: false,
      style: { 
        stroke: '#eab308', 
        strokeWidth: 2.5,
        strokeOpacity: 0.8
      },
    },
    {
      id: 'e2',
      source: 'center',
      target: 'icon2',
      type: 'straight',
      animated: false,
      style: { 
        stroke: '#eab308', 
        strokeWidth: 2.5,
        strokeOpacity: 0.8
      },
    },
    {
      id: 'e3',
      source: 'center',
      target: 'icon3',
      type: 'straight',
      animated: false,
      style: { 
        stroke: '#eab308', 
        strokeWidth: 2.5,
        strokeOpacity: 0.8
      },
    },
    {
      id: 'e4',
      source: 'center',
      target: 'icon4',
      type: 'straight',
      animated: false,
      style: { 
        stroke: '#eab308', 
        strokeWidth: 2.5,
        strokeOpacity: 0.8
      },
    },
    {
      id: 'e5',
      source: 'center',
      target: 'icon5',
      type: 'straight',
      animated: false,
      style: { 
        stroke: '#eab308', 
        strokeWidth: 2.5,
        strokeOpacity: 0.8
      },
    },
    {
      id: 'e6',
      source: 'center',
      target: 'icon6',
      type: 'straight',
      animated: false,
      style: { 
        stroke: '#eab308', 
        strokeWidth: 2.5,
        strokeOpacity: 0.8
      },
    },
    {
      id: 'e7',
      source: 'center',
      target: 'icon7',
      type: 'straight',
      animated: false,
      style: { 
        stroke: '#eab308', 
        strokeWidth: 2.5,
        strokeOpacity: 0.8
      },
    },
    {
      id: 'e8',
      source: 'center',
      target: 'icon8',
      type: 'straight',
      animated: false,
      style: { 
        stroke: '#eab308', 
        strokeWidth: 2.5,
        strokeOpacity: 0.8
      },
    },
  ];

  const [nodes] = useNodesState(initialNodes);
  const [edges] = useEdgesState(initialEdges);

  return (
    <Slide className="overflow-hidden">
      <motion.div
        className="flex flex-col items-center justify-start h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center mb-12 mt-24"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          E essa lógica foi adaptada para uma <span className="underline decoration-yellow-500 decoration-4">Operação Comercial</span>
        </motion.h1>

        <div className="w-full h-[400px] mt-12">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}

            defaultEdgeOptions={{ type: 'straight', style: { stroke: '#eab308', strokeWidth: 2.5 } }}
            nodesDraggable={false}
            nodesConnectable={false}
            elementsSelectable={false}
            zoomOnScroll={false}
            panOnScroll={false}
            panOnDrag={false}
            zoomOnPinch={false}
            zoomOnDoubleClick={false}
            preventScrolling={true}
            fitView
            proOptions={{ hideAttribution: true }}
          >
            <Background style={{ opacity: 0 }} />
          </ReactFlow>
        </div>
      </motion.div>
    </Slide>
  );
}

/**
 * Configuração de todas as apresentações disponíveis
 * Organizadas por categorias
 */

export type PresentationStatus = 'available' | 'in_progress' | 'unavailable';
export type DownsellStatus = 'active' | 'in_progress' | 'unavailable';

export interface DownsellProduct {
  name: string;
  status: DownsellStatus;
}

export interface PresentationConfig {
  id: string;
  slug: string;
  password: string;
  name: string;
  product: string;
  anchorTicket: string;
  liveTicket: string;
  downsellProducts: DownsellProduct[];
  status: PresentationStatus;
  category: 'role-play' | 'celula-terminus' | 'agente-kesher' | 'operador-havaya';
  slidesConfigId: string;
  createdAt: string;
}

export const presentations: PresentationConfig[] = [
  // Role-Play
  {
    id: 'rp-celula-terminus-001',
    slug: 'a7k9m2',
    password: 'mvp2025',
    name: 'Apresentação Célula Terminus',
    product: 'Célula Terminus - NEST',
    anchorTicket: '30.000,00',
    liveTicket: '18.000,00',
    downsellProducts: [
      { name: 'Célula Terminus - ECHO - R$ 7.000,00', status: 'unavailable' },
      { name: 'Célula Terminus - VEIL - R$ 11.000,00', status: 'active' }
    ],
    status: 'available',
    category: 'role-play',
    slidesConfigId: 'role-play-celula-terminus',
    createdAt: '2025-01-19',
  },
  
  // Célula Terminus
  {
    id: 'ct-premium',
    name: 'Apresentação Célula Terminus',
    slug: 'x3p8w1',
    password: 'emp2025',
    product: 'Célula Terminus - NEST',
    anchorTicket: '30.000,00',
    liveTicket: '18.000,00',
    downsellProducts: [
      { name: 'Célula Terminus - ECHO - R$ 7.000,00', status: 'unavailable' },
      { name: 'Célula Terminus - VEIL - R$ 11.000,00', status: 'active' }
    ],
    status: 'available',
    category: 'celula-terminus',
    slidesConfigId: 'celula-terminus',
    createdAt: '2025-01-19',
  },
  
  // Agente Kesher
  {
    id: 'ak-produto-001',
    slug: 'q5n2r8',
    password: 'pn2025',
    name: 'Apresentação Conexão Estratégica',
    product: 'Plano Kesher',
    anchorTicket: '18.000,00',
    liveTicket: '15.000,00',
    downsellProducts: [
      { name: 'Plano Lite - R$ 9.000', status: 'unavailable' },
      { name: 'Plano Starter - R$ 6.000', status: 'unavailable' }
    ],
    status: 'unavailable',
    category: 'agente-kesher',
    slidesConfigId: 'default',
    createdAt: '2025-01-19',
  },
  
  // Operador Havaya
  {
    id: 'oh-produto-001',
    slug: 'b8m4n6',
    password: 'havaya2025',
    name: 'Apresentação Operação Havaya',
    product: 'Sistema Havaya',
    anchorTicket: '22.000,00',
    liveTicket: '18.000,00',
    downsellProducts: [
      { name: 'Plano Medium - R$ 12.000', status: 'unavailable' },
      { name: 'Plano Basic - R$ 7.000', status: 'unavailable' }
    ],
    status: 'unavailable',
    category: 'operador-havaya',
    slidesConfigId: 'default',
    createdAt: '2025-01-19',
  },
];

/**
 * Credenciais do dashboard (em produção, usar variáveis de ambiente)
 */
export const DASHBOARD_CREDENTIALS = {
  username: import.meta.env.VITE_DASHBOARD_USERNAME || 'Admin',
  password: import.meta.env.VITE_DASHBOARD_PASSWORD || 'Ga144129@#',
};

/**
 * Categorias disponíveis
 */
export const categories = [
  { id: 'role-play', name: 'Role-Play' },
  { id: 'celula-terminus', name: 'Célula Terminus' },
  { id: 'agente-kesher', name: 'Agente Kesher' },
  { id: 'operador-havaya', name: 'Operador Havaya' },
] as const;

/**
 * Helper para buscar apresentação por slug
 */
export const getPresentationBySlug = (slug: string): PresentationConfig | undefined => {
  return presentations.find((p) => p.slug === slug);
};

/**
 * Helper para validar senha de uma apresentação
 */
export const validatePresentationPassword = (slug: string, password: string): boolean => {
  const presentation = getPresentationBySlug(slug);
  return presentation?.password === password;
};

/**
 * Helper para buscar apresentações por categoria
 */
export const getPresentationsByCategory = (category: string): PresentationConfig[] => {
  return presentations.filter((p) => p.category === category);
};

/**
 * Helper para obter label de status
 */
export const getStatusLabel = (status: PresentationStatus): string => {
  const labels = {
    available: 'Disponível',
    in_progress: 'Em Criação',
    unavailable: 'Indisponível',
  };
  return labels[status];
};

/**
 * Helper para obter cor do status
 */
export const getStatusColor = (status: PresentationStatus): string => {
  const colors = {
    available: 'text-green-500 bg-green-500/10',
    in_progress: 'text-yellow-500 bg-yellow-500/10',
    unavailable: 'text-red-500 bg-red-500/10',
  };
  return colors[status];
};

/**
 * Helper para obter label de status do downsell
 */
export const getDownsellStatusLabel = (status: DownsellStatus): string => {
  const labels = {
    active: 'Ativo',
    in_progress: 'Em Criação',
    unavailable: 'Indisponível',
  };
  return labels[status];
};

/**
 * Helper para obter cor do status do downsell
 */
export const getDownsellStatusColor = (status: DownsellStatus): string => {
  const colors = {
    active: 'text-green-500',
    in_progress: 'text-yellow-500',
    unavailable: 'text-red-500',
  };
  return colors[status];
};

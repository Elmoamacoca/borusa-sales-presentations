/**
 * Configuração SEGURA de apresentações
 * NENHUMA SENHA está mais neste arquivo!
 * Todas as credenciais estão no backend
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
  // password removido - agora está no backend
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

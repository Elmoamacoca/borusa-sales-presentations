/**
 * Configuração de todas as apresentações disponíveis
 * 
 * Cada apresentação tem:
 * - slug: URL única (ex: /p/startup-mvp)
 * - password: Senha específica para acessar
 * - title: Nome da apresentação
 * - description: Descrição curta
 * - targetAudience: Para quem apresentar
 * - whenToUse: Quando usar esta apresentação
 * - product: Produto/serviço relacionado
 * - slidesConfigId: ID da configuração de slides a usar
 */

export interface PresentationConfig {
  slug: string;
  password: string;
  title: string;
  description: string;
  targetAudience: string;
  whenToUse: string;
  product: string;
  slidesConfigId: string;
  createdAt: string;
}

export const presentations: PresentationConfig[] = [
  {
    slug: 'a7k9m2',
    password: 'mvp2025',
    title: 'Apresentação Startup MVP',
    description: 'Apresentação focada em startups que precisam validar MVP rapidamente',
    targetAudience: 'Startups em fase inicial, fundadores técnicos',
    whenToUse: 'Primeira reunião com startups que precisam de velocidade',
    product: 'Plano Velocidade - MVP em 30 dias',
    slidesConfigId: 'default',
    createdAt: '2025-01-19',
  },
  {
    slug: 'x3p8w1',
    password: 'emp2025',
    title: 'Apresentação Empresa Médio Porte',
    description: 'Apresentação para empresas estabelecidas buscando transformação digital',
    targetAudience: 'Empresas de 50-500 funcionários, CTOs, Diretores de TI',
    whenToUse: 'Reunião com decisores que valorizam ROI e custo-benefício',
    product: 'Plano Custo-Benefício - Implementação completa',
    slidesConfigId: 'default',
    createdAt: '2025-01-19',
  },
  {
    slug: 'q5n2r8',
    password: 'pn2025',
    title: 'Apresentação Pequeno Negócio',
    description: 'Apresentação para pequenos negócios que querem começar digital',
    targetAudience: 'Pequenos negócios, MEIs, empresas até 20 funcionários',
    whenToUse: 'Cliente com budget limitado, quer começar pequeno',
    product: 'Plano Essencial - Começar do básico',
    slidesConfigId: 'default',
    createdAt: '2025-01-19',
  },
];

/**
 * Credenciais do dashboard (em produção, usar variáveis de ambiente)
 */
export const DASHBOARD_CREDENTIALS = {
  username: import.meta.env.VITE_DASHBOARD_USERNAME || 'closer',
  password: import.meta.env.VITE_DASHBOARD_PASSWORD || 'borusa2025',
};

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

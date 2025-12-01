-- ============================================
-- BORUSA SALES PRESENTATIONS - SUPABASE SCHEMA
-- ============================================

-- 1. Tabela de Apresentações
CREATE TABLE IF NOT EXISTS presentations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  name TEXT NOT NULL,
  product TEXT NOT NULL,
  anchor_ticket TEXT NOT NULL,
  live_ticket TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('available', 'in_progress', 'unavailable')),
  category TEXT NOT NULL CHECK (category IN ('role-play', 'celula-terminus', 'agente-kesher', 'operador-havaya')),
  slides_config_id TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Tabela de Downsells
CREATE TABLE IF NOT EXISTS downsell_products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  presentation_id UUID NOT NULL REFERENCES presentations(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('active', 'in_progress', 'unavailable')),
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Tabela de Usuários Admin (além do Supabase Auth)
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username TEXT UNIQUE NOT NULL,
  full_name TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  last_login TIMESTAMPTZ
);

-- 4. Tabela de Logs de Acesso (auditoria)
CREATE TABLE IF NOT EXISTS access_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  presentation_id UUID REFERENCES presentations(id) ON DELETE SET NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  access_type TEXT NOT NULL CHECK (access_type IN ('dashboard', 'presentation')),
  ip_address TEXT,
  user_agent TEXT,
  success BOOLEAN NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================

-- Habilitar RLS em todas as tabelas
ALTER TABLE presentations ENABLE ROW LEVEL SECURITY;
ALTER TABLE downsell_products ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE access_logs ENABLE ROW LEVEL SECURITY;

-- Políticas para presentations (leitura pública de metadados, sem senhas)
CREATE POLICY "Permitir leitura pública de apresentações disponíveis"
  ON presentations FOR SELECT
  USING (status = 'available');

CREATE POLICY "Apenas admins podem inserir/atualizar apresentações"
  ON presentations FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE id = auth.uid() AND is_active = TRUE
    )
  );

-- Políticas para downsell_products
CREATE POLICY "Permitir leitura pública de downsells"
  ON downsell_products FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM presentations 
      WHERE id = downsell_products.presentation_id 
      AND status = 'available'
    )
  );

CREATE POLICY "Apenas admins podem gerenciar downsells"
  ON downsell_products FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE id = auth.uid() AND is_active = TRUE
    )
  );

-- Políticas para admin_users
CREATE POLICY "Admins podem ver outros admins"
  ON admin_users FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE id = auth.uid() AND is_active = TRUE
    )
  );

-- Políticas para access_logs (apenas admins podem ler)
CREATE POLICY "Apenas admins podem ver logs"
  ON access_logs FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE id = auth.uid() AND is_active = TRUE
    )
  );

CREATE POLICY "Sistema pode inserir logs"
  ON access_logs FOR INSERT
  WITH CHECK (TRUE);

-- ============================================
-- FUNÇÕES AUXILIARES
-- ============================================

-- Função para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger para presentations
CREATE TRIGGER update_presentations_updated_at
  BEFORE UPDATE ON presentations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- ÍNDICES PARA PERFORMANCE
-- ============================================

CREATE INDEX IF NOT EXISTS idx_presentations_slug ON presentations(slug);
CREATE INDEX IF NOT EXISTS idx_presentations_status ON presentations(status);
CREATE INDEX IF NOT EXISTS idx_presentations_category ON presentations(category);
CREATE INDEX IF NOT EXISTS idx_downsells_presentation_id ON downsell_products(presentation_id);
CREATE INDEX IF NOT EXISTS idx_access_logs_created_at ON access_logs(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_access_logs_presentation_id ON access_logs(presentation_id);

-- ============================================
-- COMENTÁRIOS
-- ============================================

COMMENT ON TABLE presentations IS 'Armazena todas as apresentações de vendas com senhas criptografadas';
COMMENT ON TABLE downsell_products IS 'Produtos de downsell associados a cada apresentação';
COMMENT ON TABLE admin_users IS 'Usuários administradores do sistema';
COMMENT ON TABLE access_logs IS 'Logs de auditoria de todos os acessos ao sistema';

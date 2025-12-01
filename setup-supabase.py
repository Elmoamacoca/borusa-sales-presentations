#!/usr/bin/env python3
import requests
import json

# Configurações
SUPABASE_URL = "https://lroflxhpaswkxlnqugzd.supabase.co"
SERVICE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxyb2ZseGhwYXN3a3hsbnF1Z3pkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2Mjg1ODM3MywiZXhwIjoyMDc4NDM0MzczfQ.NjpmeLjNVNNEz97f_J-Y3ZR33GwT4T1q41qlvwX8tJA"

headers = {
    "apikey": SERVICE_KEY,
    "Authorization": f"Bearer {SERVICE_KEY}",
    "Content-Type": "application/json"
}

# SQLs individuais para executar
sqls = [
    # 1. Criar tabela presentations
    """
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
    """,
    
    # 2. Criar tabela downsell_products
    """
    CREATE TABLE IF NOT EXISTS downsell_products (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      presentation_id UUID NOT NULL REFERENCES presentations(id) ON DELETE CASCADE,
      name TEXT NOT NULL,
      status TEXT NOT NULL CHECK (status IN ('active', 'in_progress', 'unavailable')),
      display_order INTEGER NOT NULL DEFAULT 0,
      created_at TIMESTAMPTZ DEFAULT NOW()
    );
    """,
    
    # 3. Criar tabela admin_users
    """
    CREATE TABLE IF NOT EXISTS admin_users (
      id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
      username TEXT UNIQUE NOT NULL,
      full_name TEXT,
      is_active BOOLEAN DEFAULT TRUE,
      created_at TIMESTAMPTZ DEFAULT NOW(),
      last_login TIMESTAMPTZ
    );
    """,
    
    # 4. Criar tabela access_logs
    """
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
    """,
    
    # 5. Habilitar RLS
    "ALTER TABLE presentations ENABLE ROW LEVEL SECURITY;",
    "ALTER TABLE downsell_products ENABLE ROW LEVEL SECURITY;",
    "ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;",
    "ALTER TABLE access_logs ENABLE ROW LEVEL SECURITY;",
    
    # 6. Criar índices
    "CREATE INDEX IF NOT EXISTS idx_presentations_slug ON presentations(slug);",
    "CREATE INDEX IF NOT EXISTS idx_presentations_status ON presentations(status);",
    "CREATE INDEX IF NOT EXISTS idx_downsells_presentation_id ON downsell_products(presentation_id);",
]

print("🔧 Configurando Supabase...\n")

# Tentar criar via REST API diretamente
for i, sql in enumerate(sqls, 1):
    print(f"[{i}/{len(sqls)}] Executando SQL...")
    
    # Usar endpoint de query direto
    try:
        response = requests.post(
            f"{SUPABASE_URL}/rest/v1/rpc/exec",
            headers=headers,
            json={"query": sql}
        )
        
        if response.status_code in [200, 201, 204]:
            print(f"  ✅ OK")
        else:
            print(f"  ⚠️  Status {response.status_code}: {response.text[:100]}")
    except Exception as e:
        print(f"  ⚠️  Erro: {str(e)[:100]}")

print("\n✅ Tentativa de configuração concluída!")
print("📝 Verificando se as tabelas foram criadas...")

# Verificar se a tabela presentations existe
try:
    response = requests.get(
        f"{SUPABASE_URL}/rest/v1/presentations?limit=1",
        headers=headers
    )
    
    if response.status_code == 200:
        print("✅ Tabela 'presentations' existe e está acessível!")
    else:
        print(f"⚠️  Tabela 'presentations' não encontrada (status {response.status_code})")
        print("   Vou criar as tabelas de forma simplificada...")
        
except Exception as e:
    print(f"❌ Erro ao verificar: {e}")

print("\n🎯 Próximo passo: popular o banco de dados")

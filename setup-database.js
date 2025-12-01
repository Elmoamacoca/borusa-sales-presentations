import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
import bcrypt from 'bcryptjs';

const supabaseUrl = 'https://lroflxhpaswkxlnqugzd.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxyb2ZseGhwYXN3a3hsbnF1Z3pkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2Mjg1ODM3MywiZXhwIjoyMDc4NDM0MzczfQ.NjpmeLjNVNNEz97f_J-Y3ZR33GwT4T1q41qlvwX8tJA';

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

async function setupDatabase() {
  console.log('🔧 Configurando banco de dados...\n');

  // Dados das apresentações (com senhas que serão criptografadas)
  const presentationsData = [
    {
      slug: 'a7k9m2',
      password: 'mvp2025',
      name: 'Apresentação Célula Terminus',
      product: 'Célula Terminus - NEST',
      anchor_ticket: '30.000,00',
      live_ticket: '18.000,00',
      status: 'available',
      category: 'role-play',
      slides_config_id: 'role-play-celula-terminus',
      downsells: [
        { name: 'Célula Terminus - ECHO - R$ 7.000,00', status: 'unavailable', display_order: 1 },
        { name: 'Célula Terminus - VEIL - R$ 11.000,00', status: 'active', display_order: 2 }
      ]
    },
    {
      slug: 'x3p8w1',
      password: 'emp2025',
      name: 'Apresentação Célula Terminus',
      product: 'Célula Terminus - NEST',
      anchor_ticket: '30.000,00',
      live_ticket: '18.000,00',
      status: 'available',
      category: 'celula-terminus',
      slides_config_id: 'celula-terminus',
      downsells: [
        { name: 'Célula Terminus - ECHO - R$ 7.000,00', status: 'unavailable', display_order: 1 },
        { name: 'Célula Terminus - VEIL - R$ 11.000,00', status: 'active', display_order: 2 }
      ]
    },
    {
      slug: 'q5n2r8',
      password: 'pn2025',
      name: 'Apresentação Conexão Estratégica',
      product: 'Plano Kesher',
      anchor_ticket: '18.000,00',
      live_ticket: '15.000,00',
      status: 'unavailable',
      category: 'agente-kesher',
      slides_config_id: 'default',
      downsells: [
        { name: 'Plano Lite - R$ 9.000', status: 'unavailable', display_order: 1 },
        { name: 'Plano Starter - R$ 6.000', status: 'unavailable', display_order: 2 }
      ]
    },
    {
      slug: 'b8m4n6',
      password: 'havaya2025',
      name: 'Apresentação Operação Havaya',
      product: 'Sistema Havaya',
      anchor_ticket: '22.000,00',
      live_ticket: '18.000,00',
      status: 'unavailable',
      category: 'operador-havaya',
      slides_config_id: 'default',
      downsells: [
        { name: 'Plano Medium - R$ 12.000', status: 'unavailable', display_order: 1 },
        { name: 'Plano Basic - R$ 7.000', status: 'unavailable', display_order: 2 }
      ]
    }
  ];

  try {
    // 1. Inserir apresentações
    console.log('📊 Inserindo apresentações...');
    for (const pres of presentationsData) {
      const { downsells, password, ...presentationData } = pres;
      
      // Criptografar senha
      const passwordHash = await bcrypt.hash(password, 10);
      
      const { data: presentation, error: presError } = await supabase
        .from('presentations')
        .insert({
          ...presentationData,
          password_hash: passwordHash
        })
        .select()
        .single();

      if (presError) {
        console.error(`❌ Erro ao inserir ${pres.slug}:`, presError.message);
        continue;
      }

      console.log(`✅ Apresentação ${pres.slug} inserida`);

      // 2. Inserir downsells
      if (downsells && downsells.length > 0) {
        const downsellsToInsert = downsells.map(d => ({
          ...d,
          presentation_id: presentation.id
        }));

        const { error: downError } = await supabase
          .from('downsell_products')
          .insert(downsellsToInsert);

        if (downError) {
          console.error(`❌ Erro ao inserir downsells de ${pres.slug}:`, downError.message);
        } else {
          console.log(`   ↳ ${downsells.length} downsells inseridos`);
        }
      }
    }

    console.log('\n✅ Banco de dados configurado com sucesso!');
    console.log('\n📝 Próximos passos:');
    console.log('1. Criar usuário admin no Supabase Auth (Dashboard > Authentication > Users)');
    console.log('2. Email: admin@borusa.com.br');
    console.log('3. Senha: (escolha uma senha forte)');
    console.log('4. Depois de criar, execute: node add-admin-user.js <user_id>');

  } catch (error) {
    console.error('❌ Erro geral:', error);
  }
}

setupDatabase();

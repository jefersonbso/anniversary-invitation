# Supabase — Configuração rápida

Este arquivo mostra como criar a tabela que o backend usa e onde obter as credenciais.

1) Criar projeto no Supabase
- Acesse https://app.supabase.com
- Crie um novo projeto gratuito

2) Obter variáveis de ambiente
- No painel do projeto copie a `API URL` → SUPABASE_URL
- Vá em Settings → API → Service Role Key → copie para SUPABASE_SERVICE_KEY (MANTENHA SECRETO)

3) Criar a tabela SQL (SQL editor do Supabase)

Cole e execute este script no SQL Editor:

```sql
create extension if not exists "pgcrypto";

create table if not exists rsvps (
  id uuid primary key default gen_random_uuid(),
  guest_name text,
  roupa_nova text,
  sapato_novo text,
  joia text,
  tipo_comida text,
  com_criancas boolean,
  notes text,
  created_at timestamptz default now()
);
```

4) Testar
- Preencha o `.env` local (copiar de .env.example)
- npm install
- npm start
- Abra `http://localhost:3000`, clique em "Aceito" e envie o formulário
- Verifique os registros em Supabase (tabela rsvps)

Segurança: não comite chaves. Use as variáveis de ambiente no provedor de hospedagem (Vercel, Render, etc.).
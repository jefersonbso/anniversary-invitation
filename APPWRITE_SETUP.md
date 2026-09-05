# Appwrite Cloud — Configuração rápida

Este guia mostra como criar o projeto, database e coleção que o backend usa.

1) Criar conta e projeto
- Acesse https://cloud.appwrite.io e crie uma conta (ou faça login)
- Crie um novo Project (ex.: "Convite-Aniversario")

2) Obter variáveis de ambiente
- No Project > Settings > General: copie o Project ID → APPWRITE_PROJECT_ID
- No Project > API Keys: crie uma Server API Key (role: Server) e copie → APPWRITE_API_KEY
- Endpoint: use `https://cloud.appwrite.io/v1` como APPWRITE_ENDPOINT

3) Criar Database e Collection
- No Project, abra a seção Database e crie um novo Database (anote o Database ID)
- Dentro do Database, crie uma Collection chamada `rsvps` e anote a Collection ID

4) Criar atributos na coleção (fields)
- guest_name: Text (size 256)
- roupa_nova: Text (size 256)
- sapato_novo: Text (size 256)
- joia: Text (size 256)
- tipo_comida: Text (size 256)
- com_criancas: Boolean
- notes: Text (size 1024)
- created_at: Datetime (opcional — backend adiciona timestamp)

5) Regras de acesso
- Para gravação via backend usando API Key: mantenha a API Key no servidor (variável de ambiente) e permita que o servidor crie documentos.
- Se quiser permitir gravação diretamente do cliente, configure as permissões da coleção (RLS) com cuidado.

6) Atualizar .env
- Copie `.env.example` para `.env` e preencha:
  - APPWRITE_ENDPOINT
  - APPWRITE_PROJECT_ID
  - APPWRITE_API_KEY
  - APPWRITE_DATABASE_ID
  - APPWRITE_COLLECTION_ID

7) Testar localmente
- npm install
- npm start
- Abra http://localhost:3000 e envie o formulário
- Verifique os documentos no Database > Collections > rsvps

Dica: mantenha a API Key fora do repositório. Use as variáveis de ambiente do provedor de hospedagem (Vercel, Render, etc.) para deploy.
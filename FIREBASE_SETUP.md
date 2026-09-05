# Firebase (Google Cloud Firestore) — Guia passo a passo

Este guia mostra como configurar um projeto Firebase e conectar ao backend.

## 1) Criar projeto Firebase

1. Acesse https://console.firebase.google.com
2. Clique em "Criar projeto"
3. Escolha um nome (ex: "Convite-Aniversario")
4. Selecione a região (pode ser qualquer uma)
5. Clique "Criar projeto" e aguarde

## 2) Criar banco Firestore

1. No painel do projeto, à esquerda, clique em "Firestore Database"
2. Clique "Criar banco de dados"
3. Escolha "Modo de segurança: Iniciar no modo de testes" (depois vamos configurar regras)
4. Selecione a localização
5. Clique "Criar"

## 3) Criar chave de conta de serviço

1. No painel, clique no ícone ⚙️ (Configurações) → "Configurações do projeto"
2. Abra a aba "Contas de serviço"
3. Clique "Gerar nova chave privada"
4. Um arquivo JSON será baixado (GUARDE ESTE ARQUIVO COM SEGURANÇA)
5. Abra o JSON e copie TODO o conteúdo

## 4) Adicionar variável de ambiente

1. Copie o arquivo `.env.example` para `.env`
2. Substitua o valor de `FIREBASE_CONFIG_JSON` com o conteúdo JSON que você copiou
   - IMPORTANTE: Certifique-se de que a quebra de linha `\n` está preservada no JSON
   - No JSON, linhas quebradas devem virar `\n` (backslash-n), não espaços

Exemplo:
```
FIREBASE_CONFIG_JSON={"type":"service_account","project_id":"convite-aniversario","private_key_id":"abc123","private_key":"-----BEGIN PRIVATE KEY-----\nMIIEvQ...\n-----END PRIVATE KEY-----\n",...}
```

## 5) Instalar dependências e testar

```bash
npm install
npm start
```

Abra `http://localhost:3000`:
- Clique "Aceito"
- Preencha o formulário
- Clique "Enviar"

Se funcionar, os dados aparecerão no Firestore (Console Firebase > Firestore Database > Coleção "rsvps").

## 6) Configurar regras de segurança (opcional — para produção)

No Firestore, abra a aba "Regras" e configure para aceitar apenas escrita do backend:

```firestore
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /rsvps/{document=**} {
      allow read: if false;
      allow write: if false;
    }
  }
}
```

(A escrita acontece sempre no backend via API Key de conta de serviço, então está segura.)

## 7) Deploy

Quando fizer deploy (Vercel, Render, etc.):
- Adicione `FIREBASE_CONFIG_JSON` como variável de ambiente no painel do provedor
- Cole o JSON inteiro como valor
- Deploy normalmente

Pronto — o backend salvará todas as respostas no Firebase Firestore! 🎉

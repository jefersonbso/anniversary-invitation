# 🚀 Deploy no Render com Firebase — Guia Completo

## Passo 1: Preparar chave Firebase

1. Acesse https://console.firebase.google.com
2. Seu projeto → Configurações ⚙️ → "Contas de serviço"
3. Clique "Gerar nova chave privada"
4. Um arquivo JSON é baixado
5. Abra o arquivo com Notepad e **copie TODO o conteúdo** (incluindo as chaves)

**Dica:** O JSON inteiro é uma linha longa tipo:
```
{"type":"service_account","project_id":"seu-projeto",...}
```

## Passo 2: Fazer deploy no Render

1. Acesse https://render.com
2. Faça login com GitHub
3. Clique **"New +"** → **"Web Service"**
4. Selecione o repositório **`jefersonbso/anniversary-invitation`**
5. Preencha:
   - **Name:** `anniversary-invitation`
   - **Runtime:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Instance Type:** Free (gratuito)

## Passo 3: Adicionar Firebase (IMPORTANTE!)

1. Na mesma página, desça até **"Environment Variables"**
2. Clique **"Add Environment Variable"**
3. Preencha:
   - **Key:** `FIREBASE_CONFIG_JSON`
   - **Value:** Cole aqui o JSON inteiro que você copiou do Firebase (passo 1)
4. Clique **"Add"** (e ele adiciona à lista)

## Passo 4: Fazer Deploy

1. Clique no botão grande **"Create Web Service"** (no final da página)
2. Aguarde 3-5 minutos enquanto Render faz o deploy
3. Quando terminar, Render mostra uma URL tipo:
   ```
   https://anniversary-invitation-xxxxx.onrender.com
   ```

## Passo 5: Testar a aplicação

1. Abra a URL no navegador (ex: https://anniversary-invitation-xxxxx.onrender.com)
2. Clique em **"Aceito"**
3. Preencha o formulário:
   - Roupa nova
   - Sapato novo
   - Joia
   - Tipo de comida
   - Com ou sem crianças
   - Observações (opcional)
4. Clique **"Enviar"**
5. Se ver "Obrigado — resposta registrada!", funcionou! ✅

## Passo 6: Verificar dados no Firebase

1. Volte ao Firebase Console
2. Clique em seu projeto
3. Abra **"Firestore Database"**
4. Procure a coleção **"rsvps"**
5. Todos os dados que foram enviados aparecem lá!

---

## Compartilhar com sua esposa

Copie a URL do Render (tipo `https://anniversary-invitation-xxxxx.onrender.com`) e mande para Mirlane. Ela clica, preenche o formulário, e pronto! 💕

---

## Troubleshooting

**"Erro ao conectar"?**
- Verifique se o JSON do Firebase está completo (sem quebras de linha extras)
- Verifique o Firebase Console → Firestore Database → Collection "rsvps" existe

**"API retorna erro 500"?**
- Pode ser que o Firebase não inicializou
- Verifique se `FIREBASE_CONFIG_JSON` foi adicionado no Render
- Clique em "Logs" no painel do Render para ver mensagens de erro

**App lento?**
- É normal no plano gratuito (Render coloca em sleep após 15 min sem uso)
- Primeiro acesso leva mais tempo

---

**PRONTO! Seu convite está rodando na nuvem! 🎉**

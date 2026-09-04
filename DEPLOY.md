# 🚀 Deploy na Web com GitHub Pages + Render

Este guia mostra como fazer seu convite ficar **100% funcional na internet** usando:
- **GitHub Pages** para o frontend (GRÁTIS)
- **Render** para o backend (GRÁTIS)

---

## 📋 Requisitos

- Conta no GitHub (já tem!)
- Conta no Render (criar em https://render.com)
- 5 minutos do seu tempo

---

## ✅ PASSO 1: Deploy do Backend no Render

### 1.1 Acesse o Render
1. Vá para https://render.com
2. Clique em "Sign up" e crie uma conta (pode usar GitHub)
3. Confirme seu email

### 1.2 Criar novo serviço
1. No dashboard, clique em **"New +"** → **"Web Service"**
2. Conecte seu repositório GitHub
3. Busque por `jefersonbso/anniversary-invitation`
4. Selecione o repositório

### 1.3 Configurar o serviço
Preencha os campos assim:

| Campo | Valor |
|-------|-------|
| **Name** | `anniversary-invitation-api` |
| **Environment** | `Node` |
| **Build Command** | `npm install` |
| **Start Command** | `npm start` |
| **Instance Type** | `Free` |

### 1.4 Deploy
1. Clique em **"Deploy"**
2. Aguarde 2-3 minutos enquanto o servidor sobe
3. Quando ficar verde com ✅, procure a URL (parecida com: `https://anniversary-invitation-api.onrender.com`)
4. **Copie essa URL!** Você vai usar agora.

---

## 🌐 PASSO 2: Atualizar a URL no Frontend

### 2.1 Abra o arquivo `public/js/script.js`
No GitHub, navegue até `public/js/script.js` e clique no ✏️ (editar)

### 2.2 Procure por esta linha (perto do topo):
```javascript
API_BASE_URL = 'https://anniversary-invitation-api.onrender.com';
```

### 2.3 Substitua pela URL do seu Render
Se sua URL no Render for `https://seu-nome-app.onrender.com`, altere para:
```javascript
API_BASE_URL = 'https://seu-nome-app.onrender.com';
```

### 2.4 Faça commit
- Adicione a mensagem: `Update API URL for Render deployment`
- Clique em "Commit changes"

---

## 📱 PASSO 3: Deploy do Frontend no GitHub Pages

### 3.1 Vá para as configurações do repositório
1. No GitHub, abra seu repositório
2. Clique em **Settings** (Configurações)
3. Na sidebar, procure por **Pages**

### 3.2 Configure o GitHub Pages
1. Em "Source", selecione:
   - **Branch**: `main`
   - **Folder**: `/` (root) ou `/docs` se preferir
2. Clique em **Save**

### 3.3 Seu site estará disponível em:
```
https://jefersonbso.github.io/anniversary-invitation/
```

**Aguarde 2-5 minutos** para o GitHub processar. Depois acesse o link acima!

---

## 🔧 Possível Problema: CORS

Se receber erro de **CORS**, o backend no Render pode não estar permitindo requisições.

### Solução:
Vá para seu backend no Render e adicione variável de ambiente:

1. No Render, vá para seu serviço
2. Clique em **Environment**
3. Adicione:
   - **Key**: `FRONTEND_URL`
   - **Value**: `https://jefersonbso.github.io`
4. Clique em **Save Changes**

O servidor vai reiniciar automaticamente.

---

## ✨ URLs Finais

Depois do deploy, você terá:

| Tipo | URL |
|------|-----|
| **Frontend** | `https://jefersonbso.github.io/anniversary-invitation/` |
| **Backend** | `https://anniversary-invitation-api.onrender.com` |
| **API RSVP** | `https://anniversary-invitation-api.onrender.com/api/rsvp` |
| **Ver respostas** | `https://anniversary-invitation-api.onrender.com/api/rsvp/all` |

---

## 🧪 Testar o Funcionamento

1. Acesse: `https://jefersonbso.github.io/anniversary-invitation/`
2. Clique em **"Aceito! 💌"**
3. Preencha o formulário
4. Clique em **"Confirmar Minha Presença"**
5. Deverá aparecer um modal com ✨ confirmando!

Se funcionar = **SUCESSO!** 🎉

---

## 📊 Ver as Respostas

Acesse:
```
https://anniversary-invitation-api.onrender.com/api/rsvp/all
```

Lá você verá todas as respostas em JSON com os dados do formulário!

---

## 💡 Dicas Importantes

✅ **GitHub Pages é gratuito para sempre**
✅ **Render free tier aguenta bem tráfego baixo**
⚠️ **Render pode "desativar" após 15 dias de inatividade** (mas reativa ao acessar)
⚠️ **GitHub Pages tem limite de 100GB/mês**

---

## 🔄 Se Precisar Fazer Mudanças

1. Faça mudanças no GitHub
2. Commit e push
3. GitHub Pages atualiza **automaticamente** (1-5 min)
4. Backend no Render também pode redeployar se configurado para isso

---

## 🆘 Troubleshooting

**P: O formulário não envia?**
R: Verifique se a URL do Render está correta em `public/js/script.js`

**P: Erro CORS?**
R: Adicione a variável de ambiente `FRONTEND_URL` no Render

**P: Render desativou o servidor?**
R: Acesse a URL uma vez para "acordar" o servidor

**P: GitHub Pages não atualiza?**
R: Aguarde 5-10 minutos, limpe cache do navegador (Ctrl+Shift+Del)

---

## 🎉 Pronto!

Seu convite agora está:
- ✅ Online para qualquer pessoa acessar
- ✅ Salvando respostas de verdade
- ✅ Funcionando 24/7
- ✅ Gratuitamente!

**Compartilhe o link com Mirlane Taylor e veja a mágica acontecer!** 💕✨

---

**Dúvidas?** Revise os passos ou entre em contato! 🚀
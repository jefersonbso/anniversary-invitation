# 💕 Convite de Aniversário de Casamento - Mirlane Taylor

Um web app romântico e elegante para convidar sua esposa para comemorar o aniversário de casamento no dia **12 de Setembro**.

## 🚀 Status do Projeto

✅ **Frontend:** Pronto (HTML/CSS/JavaScript)  
✅ **Backend:** Pronto (Node.js + Express)  
✅ **Deploy:** Configurado (GitHub Pages + Render)

---

## 🌐 Acessar Online

### Frontend (GitHub Pages)
```
https://jefersonbso.github.io/anniversary-invitation/
```

### Backend API (Render)
```
https://anniversary-invitation-api.onrender.com
```

**Nota:** Siga o guia de deploy em `DEPLOY.md` para colocar online!

---

## 💻 Como Rodar Localmente

### Requisitos
- Node.js v14+
- npm

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/jefersonbso/anniversary-invitation.git
cd anniversary-invitation

# 2. Instale as dependências
npm install

# 3. Inicie o servidor
npm start
```

Abra o navegador em: `http://localhost:3000`

---

## 📁 Estrutura do Projeto

```
anniversary-invitation/
├── public/                    # Frontend (será servido)
│   ├── index.html            # Página inicial do convite
│   ├── rsvp.html             # Página de resposta RSVP
│   ├── css/
│   │   └── styles.css        # Estilos romanticamente bonitos
│   └── js/
│       └── script.js         # Lógica do frontend
├── responses/                 # Respostas salvas (gerado automaticamente)
│   └── rsvp-responses.json   # Arquivo JSON com as respostas
├── server.js                 # Servidor Express backend
├── package.json              # Dependências do projeto
├── render.yaml              # Configuração para deploy no Render
├── .env.example             # Template de variáveis de ambiente
├── DEPLOY.md                # Guia completo de deployment
├── INSTALACAO.md            # Guia de instalação local
├── .gitignore               # Arquivos ignorados pelo Git
└── README.md                # Este arquivo
```

---

## 🎯 Funcionalidades

### ✨ Página Inicial
- Design elegante com cores rose/pink
- Corações animados flutuando
- Apresentação formal do convite
- Botão "Aceito!" para confirmar presença

### 📝 Página de Resposta (RSVP)
Formulário interativo com campos para:
- 👗 Tipo de roupa que deseja
- 👠 Tipo de sapato  
- 💎 Tipo de joia
- 🍽️ Tipo de comida preferida
- 👶 Com ou sem crianças
- 💭 Observações adicionais

### ⚙️ Backend
- API REST para salvar respostas
- Armazenamento em arquivo JSON
- Modal de confirmação após envio
- Endpoint para visualizar todas as respostas

### 📱 Design Responsivo
- Funciona em desktop, tablet e mobile
- Animações suaves
- Palette de cores romântica

---

## 📡 API Endpoints

### POST `/api/rsvp`
Salva a resposta do RSVP

**Request:**
```json
{
  "roupa": "vestido-longo",
  "sapato": "salto-alto",
  "joia": "colar",
  "comida": "italiana",
  "criancas": "sem-criancas",
  "observacoes": "Observação opcional"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Resposta salva com sucesso!",
  "data": {
    "id": 1725416569000,
    "nome": "Mirlane Taylor",
    "roupa": "vestido-longo",
    "sapato": "salto-alto",
    "joia": "colar",
    "comida": "italiana",
    "criancas": "sem-criancas",
    "observacoes": "Observação opcional",
    "dataResposta": "04/09/2026 00:22:49",
    "timestamp": "2026-09-04T00:22:49.000Z"
  }
}
```

### GET `/api/rsvp/all`
Obtém todas as respostas salvas

**Response:**
```json
{
  "success": true,
  "totalRespostas": 1,
  "responses": [...]
}
```

### GET `/api/health`
Verifica o status do servidor

**Response:**
```json
{
  "status": "ok",
  "message": "Servidor rodando com sucesso!",
  "timestamp": "2026-09-04T00:22:49.000Z"
}
```

---

## 🚀 Deploy na Web

Para colocar seu convite online **gratuitamente**, siga o guia em **`DEPLOY.md`**

Ele guia você passo a passo para:
1. Deploy do backend no Render (gratuito)
2. Deploy do frontend no GitHub Pages (gratuito)

---

## 🎨 Personalizações

### Mudar a data
Edite em `public/index.html` (procure por "12 de Setembro")

### Mudar o nome
Edite em `public/index.html` (procure por "Mirlane Taylor")

### Mudar cores
Edite `public/css/styles.css`:
- Rosa/Vermelho: `#c94c4c`, `#d63384`, `#ff69b4`
- Marrom: `#8b6f47`
- Bege: `#ffecd2`

---

## 🛠️ Desenvolvimento

### Para desenvolvimento com auto-reload:
```bash
npm run dev
```

### Limpar cache do navegador:
```
Ctrl + Shift + Delete (Windows)
Cmd + Shift + Delete (Mac)
```

---

## 📊 Ver as Respostas

Acesse (após deploy):
```
https://anniversary-invitation-api.onrender.com/api/rsvp/all
```

Ou localmente:
```
http://localhost:3000/api/rsvp/all
```

---

## 🎁 Próximas Melhorias (Opcionais)

- [ ] Banco de dados (MongoDB)
- [ ] Autenticação de usuário
- [ ] Dashboard administrativo
- [ ] Envio de emails
- [ ] Integração com calendário
- [ ] QR Code para acessar
- [ ] Compartilhamento em redes sociais

---

## 📝 Tecnologias Usadas

**Frontend:**
- HTML5
- CSS3 (com animações)
- JavaScript vanilla

**Backend:**
- Node.js
- Express.js
- Body Parser
- CORS

**Deploy:**
- GitHub Pages (Frontend)
- Render (Backend)

---

## 💕 Informações do Evento

| Detalhe | Valor |
|---------|-------|
| **Para** | Mirlane Taylor |
| **Data** | 12 de Setembro |
| **Ocasião** | Aniversário de Casamento |
| **Tema** | Romantismo & Elegância |

---

## 🤝 Contribuições

Este projeto foi criado com ❤️. Sinta-se livre para fazer fork e personalizar para seus próprios eventos!

---

## 📄 Licença

Projeto livre para uso pessoal.

---

**Feito com 💕 para uma noite inesquecível!** ✨🎉

Se tiver dúvidas, consulte os arquivos:
- `DEPLOY.md` - Como colocar online
- `INSTALACAO.md` - Como rodar localmente
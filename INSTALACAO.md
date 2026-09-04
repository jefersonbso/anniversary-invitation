## 🎉 Convite de Aniversário de Casamento - Mirlane Taylor

Um web app romântico e elegante para convidar sua esposa para comemorar o aniversário de casamento no dia **12 de Setembro**.

---

## 💻 Requisitos

- **Node.js** v14+ instalado
- **npm** (gerenciador de pacotes)

---

## 🚀 Como Instalar e Rodar

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/jefersonbso/anniversary-invitation.git
cd anniversary-invitation
```

### 2️⃣ Instale as dependências

```bash
npm install
```

### 3️⃣ Configure as variáveis de ambiente

```bash
cp .env.example .env
```

### 4️⃣ Inicie o servidor

```bash
npm start
```

Ou, para desenvolvimento com auto-reload:

```bash
npm run dev
```

### 5️⃣ Acesse o app

Abra seu navegador e vá para:
```
http://localhost:3000
```

---

## 📁 Estrutura do Projeto

```
anniversary-invitation/
├── public/
│   ├── index.html          # Página inicial do convite
│   ├── rsvp.html           # Página de resposta do RSVP
│   ├── css/
│   │   └── styles.css      # Estilos romanticamente bonitos
│   └── js/
│       └── script.js       # Lógica do frontend
├── responses/
│   └── rsvp-responses.json # Arquivo onde as respostas são salvas
├── server.js               # Servidor Express backend
├── package.json            # Dependências do projeto
├── .env.example            # Template de variáveis de ambiente
├── .gitignore              # Arquivos ignorados pelo Git
└── README.md              # Este arquivo
```

---

## 🎯 Funcionalidades

✅ **Página Inicial Romântica**
- Design elegante com cores rosadas e corações animados
- Apresentação formal do convite
- Botão "Aceito!" para confirmar presença

✅ **Página de Resposta (RSVP)**
- Formulário interativo com campos para:
  - 👗 Tipo de roupa que deseja
  - 👠 Tipo de sapato
  - 💎 Tipo de joia
  - 🍽️ Tipo de comida preferida
  - 👶 Com ou sem crianças
  - 💭 Observações adicionais

✅ **Backend Funcional**
- API REST para salvar respostas
- Armazenamento em arquivo JSON
- Modal de confirmação após envio

✅ **Design Responsivo**
- Funciona perfeitamente em desktop, tablet e mobile
- Animações suaves e divertidas
- Palette de cores romântica

---

## 📡 API Endpoints

### POST `/api/rsvp`
Salva a resposta do RSVP

**Body:**
```json
{
  "roupa": "vestido-longo",
  "sapato": "salto-alto",
  "joia": "colar",
  "comida": "italiana",
  "criancas": "sem-criancas",
  "observacoes": "Sua observação aqui"
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
    "observacoes": "Sua observação aqui",
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
  "responses": [
    {
      "id": 1725416569000,
      "nome": "Mirlane Taylor",
      "roupa": "vestido-longo",
      ...
    }
  ]
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

## 🎨 Personalizações

### Mudar a data
Edite em `public/index.html`:
```html
<p class="detail">
    <strong>Data:</strong> 12 de Setembro
</p>
```

### Mudar o nome
Edite em `public/index.html`:
```html
<p class="greeting">Querida <span class="name">Mirlane Taylor</span>,</p>
```

### Adicionar horário e local
Edite em `public/index.html` na seção `.event-details`

### Mudar cores
Edite `public/css/styles.css` - procure por variáveis de cor como:
- `#c94c4c` (vermelho/rosa)
- `#8b6f47` (marrom)
- `#ffecd2` (bege claro)

---

## 📝 Dados das Respostas

As respostas são automaticamente salvas em:
```
responses/rsvp-responses.json
```

Você pode visualizar todas as respostas acessando:
```
http://localhost:3000/api/rsvp/all
```

---

## 🛠️ Troubleshooting

**Erro: "Cannot find module 'express'"**
```bash
npm install
```

**Porta 3000 já está em uso?**
```bash
# Defina uma porta diferente
PORT=3001 npm start
```

**Mudanças no frontend não aparecem?**
- Limpe o cache do navegador (Ctrl+Shift+Delete ou Cmd+Shift+Delete)
- Recarregue a página (F5 ou Cmd+R)

---

## 📊 Ver as Respostas

Acesse a API para ver todas as respostas:
```
http://localhost:3000/api/rsvp/all
```

Ou abra o arquivo diretamente:
```
responses/rsvp-responses.json
```

---

## 🎁 Próximas Melhorias (Opcional)

- [ ] Banco de dados (MongoDB, PostgreSQL)
- [ ] Autenticação de usuário
- [ ] Dashboard administrativo
- [ ] Envio de emails confirmando a resposta
- [ ] Integração com calendário
- [ ] QR Code para acessar o convite
- [ ] Compartilhamento em redes sociais

---

## 💕 Notas Finais

Este app foi criado com muito amor para tornar o convite especial ainda mais romântico! 

**Data:** 12 de Setembro  
**Para:** Mirlane Taylor  
**Com Amor:** 💕

---

## 📄 Licença

Projeto livre para uso pessoal.

---

**Feito com ❤️ para uma noite inesquecível!** 🎉✨
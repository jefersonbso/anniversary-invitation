# 💕 Convite de Aniversário de Casamento

Um web app romantic e elegante para convidar sua esposa (Mirlane Taylor) para comemorar o aniversário de casamento no dia 12 de setembro.

## 🚀 Como rodar o projeto

### Backend
1. Instale as dependências: `npm install`
2. Inicie o servidor: `npm start` ou `npm run dev`
3. O servidor rodará em `http://localhost:3000`

### Frontend
1. Abra o arquivo `public/index.html` no navegador
2. Ou use um servidor local (exemplo: Live Server)

## 📁 Estrutura do Projeto

```
anniversary-invitation/
├── server.js           # Backend Express
├── public/             # Frontend
│   ├── index.html      # Página inicial do convite
│   ├── rsvp.html       # Página de resposta
│   ├── css/
│   │   └── styles.css  # Estilos românticos
│   └── js/
│       └── script.js   # JavaScript frontend
├── routes/             # Rotas do backend
│   └── rsvp.js        # Rota para salvar respostas
├── package.json
└── .gitignore
```

## 🎉 Funcionalidades

- ✨ Página inicial com design romântico
- 💌 Botão "Aceito" que leva para formulário de respostas
- 📋 Campos: Roupa nova, Sapato novo, Joia, Tipo de comida, Com/sem crianças
- 💾 Backend para salvar as respostas

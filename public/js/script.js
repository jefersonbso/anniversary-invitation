// URL da API (será definida dinamicamente)
let API_BASE_URL = '';

// Detectar se estamos em desenvolvimento ou produção
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    API_BASE_URL = 'http://localhost:3000';
} else {
    // Defina a URL do seu backend no Render aqui
    // Exemplo: API_BASE_URL = 'https://seu-app.onrender.com';
    API_BASE_URL = 'https://anniversary-invitation-pleu.onrender.com/';
}

// Navegar para página de RSVP
function irParaRSVP() {
    window.location.href = '/rsvp.html';
}

// Voltar para página inicial
function voltarAoConvite() {
    window.location.href = '/index.html';
}

// Fechar modal
function fecharModal() {
    document.getElementById('successModal').classList.add('hidden');
    // Opcional: redirecionar para página inicial após alguns segundos
    setTimeout(() => {
        window.location.href = '/index.html';
    }, 1500);
}

// Submeter formulário de RSVP
document.addEventListener('DOMContentLoaded', function() {
    const rsvpForm = document.getElementById('rsvpForm');
    
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Coletar dados do formulário
            const formData = {
                roupa: document.getElementById('roupa').value,
                sapato: document.getElementById('sapato').value,
                joia: document.getElementById('joia').value,
                comida: document.getElementById('comida').value,
                criancas: document.getElementById('criancas').value,
                observacoes: document.getElementById('observacoes').value,
                dataResposta: new Date().toLocaleString('pt-BR')
            };

            // Mostrar loading
            const btnSubmit = rsvpForm.querySelector('.btn-submit');
            const btnTextoOriginal = btnSubmit.textContent;
            btnSubmit.textContent = '⏳ Enviando...';
            btnSubmit.disabled = true;

            // Enviar para backend
            fetch(`${API_BASE_URL}/api/rsvp`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (data.success) {
                    // Mostrar modal de sucesso
                    mostrarModalSucesso(formData);
                } else {
                    alert('Erro: ' + data.message);
                    btnSubmit.textContent = btnTextoOriginal;
                    btnSubmit.disabled = false;
                }
            })
            .catch(error => {
                console.error('Erro:', error);
                alert('Ocorreu um erro ao salvar seus dados. Por favor, tente novamente.\n\nDetalhes: ' + error.message);
                btnSubmit.textContent = btnTextoOriginal;
                btnSubmit.disabled = false;
            });
        });
    }
});

// Mostrar modal de sucesso com detalhes
function mostrarModalSucesso(dados) {
    const modal = document.getElementById('successModal');
    const confirmationDetails = document.getElementById('confirmationDetails');

    // Traduzir opções para exibição
    const traducoes = {
        'vestido-curto': 'Vestido Curto',
        'vestido-longo': 'Vestido Longo',
        'blusa-calca': 'Blusa + Calça',
        'saia': 'Saia e Blusa',
        'macacao': 'Macacão',
        'salto-alto': 'Salto Alto',
        'salto-medio': 'Salto Médio',
        'sapato-social': 'Sapato Social',
        'sapatilha': 'Sapatilha/Ballet',
        'sandalia': 'Sandália',
        'colar': 'Colar',
        'pulseira': 'Pulseira',
        'brinco': 'Brinco',
        'anel': 'Anel',
        'kit-completo': 'Kit Completo',
        'italiana': 'Italiana',
        'francesa': 'Francesa',
        'brasileira': 'Brasileira',
        'japonesa': 'Japonesa',
        'churrascaria': 'Churrascaria',
        'frutos-do-mar': 'Frutos do Mar',
        'com-criancas': 'Com crianças',
        'sem-criancas': 'Sem crianças (noite romântica)'
    };

    let detalhes = `
        <strong>Suas preferências:</strong><br>
        👗 Roupa: ${traducoes[dados.roupa] || dados.roupa}<br>
        👠 Sapato: ${traducoes[dados.sapato] || dados.sapato}<br>
        💎 Joia: ${traducoes[dados.joia] || dados.joia}<br>
        🍽️ Comida: ${traducoes[dados.comida] || dados.comida}<br>
        👶 Crianças: ${traducoes[dados.criancas] || dados.criancas}
    `;

    confirmationDetails.innerHTML = detalhes;
    modal.classList.remove('hidden');
}

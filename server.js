const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Criar diretório para armazenar respostas se não existir
const responsesDir = path.join(__dirname, 'responses');
if (!fs.existsSync(responsesDir)) {
    fs.mkdirSync(responsesDir, { recursive: true });
}

// Rota raiz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para a página de RSVP
app.get('/rsvp.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'rsvp.html'));
});

// API para salvar resposta RSVP
app.post('/api/rsvp', (req, res) => {
    try {
        const { roupa, sapato, joia, comida, criancas, observacoes, dataResposta } = req.body;

        // Validar dados
        if (!roupa || !sapato || !joia || !comida || !criancas) {
            return res.status(400).json({ 
                success: false, 
                message: 'Todos os campos obrigatórios devem ser preenchidos!' 
            });
        }

        // Criar objeto com a resposta
        const rsvpData = {
            id: Date.now(),
            nome: 'Mirlane Taylor',
            roupa,
            sapato,
            joia,
            comida,
            criancas,
            observacoes: observacoes || 'Nenhuma',
            dataResposta,
            timestamp: new Date().toISOString()
        };

        // Salvar em arquivo JSON
        const filePath = path.join(responsesDir, 'rsvp-responses.json');
        let responses = [];

        // Ler respostas existentes
        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf8');
            responses = JSON.parse(data || '[]');
        }

        // Adicionar nova resposta
        responses.push(rsvpData);

        // Salvar arquivo atualizado
        fs.writeFileSync(filePath, JSON.stringify(responses, null, 2), 'utf8');

        // Log no console
        console.log('✅ Nova resposta RSVP salva:');
        console.log(rsvpData);

        // Responder com sucesso
        res.json({ 
            success: true, 
            message: 'Resposta salva com sucesso!',
            data: rsvpData
        });

    } catch (error) {
        console.error('❌ Erro ao salvar resposta:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Erro ao processar sua resposta. Por favor, tente novamente.' 
        });
    }
});

// API para obter todas as respostas (opcional - para visualização)
app.get('/api/rsvp/all', (req, res) => {
    try {
        const filePath = path.join(responsesDir, 'rsvp-responses.json');
        
        if (!fs.existsSync(filePath)) {
            return res.json({ responses: [] });
        }

        const data = fs.readFileSync(filePath, 'utf8');
        const responses = JSON.parse(data || '[]');

        res.json({ 
            success: true,
            totalRespostas: responses.length,
            responses 
        });

    } catch (error) {
        console.error('❌ Erro ao obter respostas:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Erro ao obter respostas.' 
        });
    }
});

// Rota para verificar a saúde da API
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'ok', 
        message: 'Servidor rodando com sucesso!',
        timestamp: new Date().toISOString()
    });
});

// Tratamento de rotas não encontradas
app.use((req, res) => {
    res.status(404).json({ 
        success: false, 
        message: 'Rota não encontrada.' 
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log('');
    console.log('🎉 ========================================');
    console.log('💕 Servidor de Convite de Casamento');
    console.log('========================================');
    console.log(`✨ Servidor rodando em: http://localhost:${PORT}`);
    console.log(`📅 Data: 12 de Setembro`);
    console.log(`👰 Para: Mirlane Taylor`);
    console.log('========================================');
    console.log('');
});
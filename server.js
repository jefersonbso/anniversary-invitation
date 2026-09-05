require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const admin = require('firebase-admin');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// Firebase initialization
const firebaseConfigJson = process.env.FIREBASE_CONFIG_JSON;
if (!firebaseConfigJson) {
  console.warn('Warning: FIREBASE_CONFIG_JSON not set. API will fail until configured.');
} else {
  try {
    const serviceAccount = JSON.parse(firebaseConfigJson);
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
  } catch (err) {
    console.error('Firebase initialization error:', err.message);
  }
}

const db = admin.firestore();

// Serve index
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Accept page
app.get('/accept.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'accept.html'));
});

// POST RSVP -> insert into Firebase Firestore collection 'rsvps'
app.post('/api/rsvp', async (req, res) => {
  try {
    const payload = req.body || {};
    const doc = {
      guest_name: payload.guest_name || 'Mirlane Taylor',
      roupa_nova: payload.roupa_nova || null,
      sapato_novo: payload.sapato_novo || null,
      joia: payload.joia || null,
      tipo_comida: payload.tipo_comida || null,
      com_criancas: payload.com_criancas === true || payload.com_criancas === 'true' || payload.com_criancas === 'on' || payload.com_criancas === 1,
      notes: payload.notes || null,
      created_at: admin.firestore.Timestamp.now()
    };

    const docRef = await db.collection('rsvps').add(doc);
    return res.json({ success: true, data: { id: docRef.id, ...doc } });
  } catch (err) {
    console.error('Firebase error:', err);
    return res.status(500).json({ success: false, error: err.message });
  }
});

// GET all RSVPs
app.get('/api/rsvp/all', async (req, res) => {
  try {
    const snapshot = await db.collection('rsvps').orderBy('created_at', 'desc').get();
    const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return res.json({ success: true, total: docs.length, data: docs });
  } catch (err) {
    console.error('Firebase query error:', err);
    return res.status(500).json({ success: false, error: err.message });
  }
});

// Health
app.get('/api/health', (req, res) => res.json({ status: 'ok', timestamp: new Date().toISOString() }));

// 404
app.use((req, res) => res.status(404).json({ success: false, message: 'Rota não encontrada.' }));

app.listen(PORT, () => {
  console.log('💕 Convite - servidor rodando em', `http://localhost:${PORT}`);
});
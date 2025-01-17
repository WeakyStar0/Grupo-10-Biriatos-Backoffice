const express = require('express');
const mongoose = require('mongoose');
const reportRoutes = require('./routes/reportRoutes');
const cors = require('cors'); // Aqui estamos a importar o CORS
require('dotenv').config();

const app = express();
app.use(cors()); // Adiciona o middleware CORS aqui
app.use(express.json());

// Rotas
app.use('/api', reportRoutes);
// Ligação à base de dados
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Conectado ao MongoDB'))
    .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor a correr na porta ${PORT}`));

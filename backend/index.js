const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta base de prueba
app.get('/', (req, res) => {
  res.send('API funcionando 🎉');
});

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('🟢 Conectado a MongoDB');
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('🔴 Error al conectar a MongoDB:', error);
  });
const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  name: { type: String, required: true }
});

module.exports = mongoose.model('Usuario', usuarioSchema);
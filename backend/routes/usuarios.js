const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');

// Obtener todos los usuarios
router.get('/', async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
});

// Registrar un nuevo usuario
router.post('/', async (req, res) => {
  try {
    const nuevoUsuario = new Usuario({
      name: req.body.name
    });

    const usuarioGuardado = await nuevoUsuario.save();
    res.status(201).json(usuarioGuardado);
  } catch (error) {
    res.status(500).json({ error: 'Error al guardar usuario' });
  }
});

module.exports = router;
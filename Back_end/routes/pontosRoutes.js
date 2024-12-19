var express = require('express');
var router = express.Router();
var pontoController = require('../controls/pontosController');

// Rotas para pontos turísticos
router.get('/', pontoController.getPontos);            // Buscar todos
router.post('/', pontoController.createPonto);         // Criar novo
router.get('/:id', pontoController.getOnePonto);      // Buscar por ID
router.get('/cnpj/:id', pontoController.getOnePontoCNPJ); // Buscar por CNPJ
router.put('/:id', pontoController.updatePonto);      // Atualizar
router.delete('/:id', pontoController.deletePonto);   // Deletar

module.exports = router;

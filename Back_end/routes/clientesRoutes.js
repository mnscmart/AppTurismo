var express = require('express');
var router = express.Router();
var clienteController = require('../controls/clientesController.js');

router.get('/', clienteController.getClientes);
router.post('/', clienteController.createCliente);
router.get('/:id', clienteController.getoneCliente);
router.get('/cpf/:id', clienteController.getoneClienteCPF);
router.put('/:id', clienteController.updateCliente);
router.delete('/:id', clienteController.deleteCliente);

module.exports = router;
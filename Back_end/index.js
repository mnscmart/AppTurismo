const express = require('express');
const db = require('./db'); 

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas da API

// GET: Lista todos os clientes (usando a função findAll do db.js)
app.get('/clientes', async (req, res) => {
  try {
    const clientes = await db.findAll('clientes'); 
    res.status(200).json(clientes); // Retorna os clientes em formato JSON
  } catch (err) {
    console.error('Erro ao buscar clientes:', err);
    res.status(500).json({ error: 'Erro ao buscar clientes', details: err.message });
  }
});

// POST: Cria um novo cliente (usando a função insertDb do db.js)
app.post('/clientes', async (req, res) => {
  try {
    const novoCliente = req.body; // Assume que o corpo da requisição é o cliente a ser inserido
    await db.insertDb('clientes', novoCliente); // Insere o cliente na coleção 'clientes'
    res.status(201).json({ message: 'Cliente criado com sucesso!' });
  } catch (err) {
    res.status(400).json({ error: 'Erro ao criar cliente', details: err.message });
  }
});

// PUT: Atualiza um cliente (usando a função updateDb do db.js)
app.put('/clientes/:id', async (req, res) => {
  try {
    const { id } = req.params; // ID do cliente a ser atualizado
    const dadosAtualizados = req.body; // Dados para atualização
    await db.updateDb('clientes', id, dadosAtualizados); // Atualiza o cliente
    res.status(200).json({ message: 'Cliente atualizado com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar cliente', details: err.message });
  }
});

// DELETE: Deleta um cliente (usando a função deleteDb do db.js)
app.delete('/clientes/:id', async (req, res) => {
  try {
    const { id } = req.params; // ID do cliente a ser deletado
    await db.deleteDb('clientes', id); // Deleta o cliente
    res.status(200).json({ message: 'Cliente removido com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar cliente', details: err.message });
  }
});

// Inicia o servidor
app.listen(5000, () => {
  console.log(`Servidor de API rodando na porta ${5000}`);
});

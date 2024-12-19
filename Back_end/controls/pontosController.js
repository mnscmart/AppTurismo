const Ponto = require('../models/pontosModel.js'); // Importando o modelo

// Buscar todos os pontos turísticos
exports.getPontos = async (req, res) => {
  try {
    const pontos = await Ponto.PontoModel.find();
    res.status(200).json(pontos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Buscar um ponto turístico pelo ID
exports.getOnePonto = async (req, res) => {
  try {
    const ponto = await Ponto.PontoModel.findById(req.params.id);

    if (!ponto) {
      return res.status(404).json({ message: "Ponto turístico não encontrado" });
    }

    res.status(200).json(ponto);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Criar um novo ponto turístico
exports.createPonto = async (req, res) => {
  try {
    const novoPonto = await Ponto.PontoModel.create(req.body);
    res.status(201).json(novoPonto);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Atualizar um ponto turístico pelo ID
exports.updatePonto = async (req, res) => {
  try {
    const pontoAtualizado = await Ponto.PontoModel.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!pontoAtualizado) {
      return res.status(404).json({ message: "Ponto turístico não encontrado" });
    }

    res.status(200).json(pontoAtualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Deletar um ponto turístico pelo ID
exports.deletePonto = async (req, res) => {
  try {
    const pontoDeletado = await Ponto.PontoModel.findByIdAndDelete(req.params.id);

    if (!pontoDeletado) {
      return res.status(404).json({ message: "Ponto turístico não encontrado" });
    }

    res.status(200).json({ message: "Ponto turístico deletado com sucesso" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Buscar um ponto turístico pelo CNPJ
exports.getOnePontoCNPJ = async (req, res) => {
  try {
    const cnpj = req.params.cnpj; // CNPJ a ser pesquisado
    const ponto = await Ponto.PontoModel.findOne({ cnpj: cnpj });

    if (!ponto) {
      return res.status(404).json({ message: "Ponto turístico não encontrado pelo CNPJ" });
    }

    res.status(200).json(ponto);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

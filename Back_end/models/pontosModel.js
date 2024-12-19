const mongoose = require('mongoose');

// Conexão com o banco de dados
mongoose.connect("mongodb+srv://aiorosdesagitario13:gVlfM6GLCB2MmJj5@cluster0.6b4io.mongodb.net/Appturismo", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB com sucesso!'))
  .catch((error) => console.error('Erro ao conectar ao MongoDB:', error));

var Schema = mongoose.Schema;

// Definição do Schema para Pontos Turísticos
const ponto = new Schema({
    nome:       { type: String, required: true },         // Nome do ponto turístico
    cnpj:       { type: String, required: true },         // CNPJ do ponto turístico
    localizacao: { type: String, required: true },       // Cidade ou endereço do ponto
    descricao:  { type: String, required: true },        // Breve descrição do ponto
    contato:    { type: String, required: true },                        // Informações de contato
    horario:    { type: String, required: true },                        // Horário de funcionamento
 //   preco:      { type: Number, required: true },                        // Preço de entrada (opcional)
    imagemUrl:  { type: String }                         // URL de imagem (opcional)
});

// Criando o modelo
const PontoModel = mongoose.model('pontos_turisticos', ponto);

module.exports = { PontoModel };

const Cliente = require('../models/clientesModel.js')

exports.getClientes = async(req, res) => {
    try {
        const Clientes = await Cliente.ClienteModel.find();
        res.json(Clientes)
        //res.send(Clientes);
    }catch(error) {
        res.status(500).json({ message: error.message });

    }
}

exports.getoneCliente = async (req, res) => {   
  try {;
    res.status(201).json(await Cliente.ClienteModel.findById(req.params.id));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.createCliente = async (req, res) => {   
    try {;
      res.status(201).json(await Cliente.ClienteModel.create(req.body));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.updateCliente = async (req, res) => {   
    try {;
      res.status(201).json(await Cliente.ClienteModel.findByIdAndUpdate(req.params.id,req.body));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.deleteCliente = async (req, res) => {   
    try {;
      res.status(201).json(await Cliente.ClienteModel.findByIdAndDelete(req.params.id));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  
  exports.getoneClienteCPF = async (req, res) => {         
      try {

        const cpf = parseInt(req.params.id); // CPF a ser pesquisado
        const cliente = await Cliente.ClienteModel.findOne({ cpf: cpf }); // Procura cliente por CPF        

        if (!cliente) {
          return res.status(404).json({ message: "Cliente não encontrado" });
    }

    res.status(200).json(cliente);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
  };

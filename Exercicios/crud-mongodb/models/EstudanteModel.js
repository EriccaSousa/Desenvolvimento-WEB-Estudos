var mongoose = require("mongoose");

//Criando o schema, serve para criar o modelo (collections)
//Regras da coleção.
var EstudanteSchema = mongoose.Schema(
    {
        nome: { type: String, require: true, max: 150 },
        curso: { type: String, require: true, max: 100 },
        IRA: { type: Number, require: true }
    }
);

//Nomeando a coleção
var EstudanteModel = mongoose.model('estudantes', EstudanteSchema);

module.exports = EstudanteModel;
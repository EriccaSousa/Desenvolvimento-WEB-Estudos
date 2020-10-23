// Objeto
const pessoa = {
    nome: 'Érica',
    sobrenome: 'Sousa',
    idade: 21,
    endereco: {
        rua: 'Américo Militão',
        numero: 569
    }
};

console.log(pessoa);
console.log(pessoa.nome);

// Atribuição via desestruturação
const {
    sobrenome,
    idade,
    cpf = 'Não existe'
} = pessoa;
console.log(sobrenome, idade, cpf);

const {
    endereco: {
        rua,
        numero
    }
} = pessoa;

console.log(rua, numero);
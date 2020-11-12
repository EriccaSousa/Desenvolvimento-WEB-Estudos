// Vetor;
const frutas = ['Pera', 'Uva', 'Maçã'];

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}

// Muito utilizado com objeto;
for(let i in frutas){
    console.log(frutas[i]);
}

// Objeto;
const pessoa = {
    nome: 'Érica Sousa',
    idade: 21,
    cidade: 'Quixeramobim'
};

for(let i in pessoa){
    console.log(i, pessoa[i]);
}


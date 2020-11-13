const nome = 'Érica Sousa';
const nomes = ['Érica', 'Letícia', 'Marcus'];

// Retorna o índice;
for(let i = 0; i < nome.length; i++){
    console.log(nome[i]);
}

console.log('####')

// Retorna o índice;

for(let i in nome){
    console.log(nome[i]);
}

console.log('####')

// Retorna diretamente o valor;
for (const valor of nome) {
    console.log(valor);
}

console.log('####')

// Retorna diretamente o valor;
for (const valor of nomes) {
    console.log(valor);
}

console.log('####')

nomes.forEach(function(el, index){
    console.log(index, el)
});
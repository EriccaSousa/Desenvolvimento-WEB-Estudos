const verdadeira = true;

// Let tem escopo de bloco;
let nome = 'Luiz';
// var só tem escopo de função;
var nome2 = 'Luiz';

if (verdadeira) {
    let nome = 'Otávio';
    console.log(nome, nome2);

    if (verdadeira) {
        console.log(nome);
    }
}
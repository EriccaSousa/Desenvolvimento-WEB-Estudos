const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

// 'querySelector': seleciona apenas um elemento da DOM;
const container = document.querySelector('.container');

// Criar 'div' que vai receber 'elementos';
const div = document.createElement('div');

//Percorrer array de 'elementos';
for(let i = 0; i < elementos.length; i++){
    // Desestruturar 'elementos';
    let { tag, texto} = elementos[i];
    // Criando nó 'tag';
    let elementoTag = document.createElement(tag);
    //Criando nó 'text';
    let elementoTexto = document.createTextNode(texto);
    // Add texto a tag.
    elementoTag.appendChild(elementoTexto);
    // Add a tag com seu texto a 'div'.
    div.appendChild(elementoTag);
}

// Add 'div' à DOM
container.appendChild(div)
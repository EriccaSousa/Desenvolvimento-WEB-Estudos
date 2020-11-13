const divParagrafos = document.querySelector('.paragrafos');
const paragrafos = divParagrafos.querySelectorAll('p');

// Pegando o css computado pelo navegador;
const estilosBody = getComputedStyle(document.body);
// Pegando cor de fundo;
const backgroundColorBody = estilosBody.backgroundColor;

console.log(backgroundColorBody);

for(let paragrafo of paragrafos){
    // Manipulando CSS com JS
    paragrafo.style.backgroundColor = backgroundColorBody;
    paragrafo.style.color = '#FFFFFF';
}
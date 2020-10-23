/*
Valores avaliados como falso;
false;
0;
"" ou '' ou ``;
null ou undefine;
NaN.

Qualquer outra coisa é avaliado como true;
*/

// AND
// Retorna o último valor:
console.log('Luiz' && 'Maria');

// Retorna o valor falso:
console.log('Luiz' &&  '' && 'Maria');

// Avaliação de curto-circuito
function falaOi(){
    return 'Oi';
}

const vaiExecutar = false;

console.log(vaiExecutar && falaOi());

// OR

// Retorna o primeiro valor verdadeiro que encontrar:
console.log(0 || false || 'Érica' || true);

// Retorna o último valor:
 
console.log(0 || false || '' || NaN);

// Avaliação de curto-circuito
const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);
// ano, mês, dia, hora, minuto, segundo, milisegundo:
const data = new Date(2019, 3);

console.log(data.toString());

// Data no formato em String:
const dataString = new Date('2020-6-20 20:20:59');
console.log(dataString.toString());

//Obtendo dia:
console.log('Dia:', dataString.getDate());

//Obtendo mês:
console.log('Mês:', dataString.getMonth());

//Obtendo ano :
console.log('Ano:', dataString.getFullYear());

//Obtendo Hora:
console.log('Hora:', dataString.getHours());

//Obtendo Minuto:
console.log('Minuto:', dataString.getMinutes());

//Obtendo Segundo:
console.log('Segundo:', dataString.getSeconds());

//Obtendo Milisegundo:
console.log('Milisegundo:', dataString.getMilliseconds());

//Obtendo Dia da semana:
console.log('Dia da semana:', dataString.getDay());

// Formatando data
function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}


function formatarData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const sec = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${sec}`;
}

const data3 = new Date();
const dataBrasil = formatarData(data3);
console.log(dataBrasil);
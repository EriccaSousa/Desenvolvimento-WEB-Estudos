let a = 'A'; //B
let b = 'B'; //C 
let c = 'C'; //A

const valores = [b, c, a];

[a, b, c] = valores;

console.log(a, b, c);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const primeiroNum = numeros[0];

console.log(primeiroNum);

const [ , segundoNum, terceiroNum] = numeros;

console.log(segundoNum, terceiroNum);
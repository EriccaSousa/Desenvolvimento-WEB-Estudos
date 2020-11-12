// Capturar evento de submmit do form
const form = document.querySelector('#form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('Evento prevenido.');

    // Pegando o input inteiro
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    // Pegando o valor do input
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (validaEntradas(peso, altura)) {
        const imc = calculaImc(peso, altura);

        verificaImc(imc);
    }
});

function setResultado(msg) {
    const resultado = document.querySelector('#resultado');

    resultado.innerHTML = `<p>${msg}</p>`;
}

function validaEntradas(peso, altura) {
    // Se o peso não for falso
    if (!peso) {
        setResultado('Peso inválido.');

        return false;
    }
    // Se a altura não for falsa
    if (!altura) {
        setResultado('Altura inválida.');

        return false;
    }

    console.log('Entradas verificadas.');
    return true;
}

function verificaImc(imc) {
    if (imc < 18.5) {
        setResultado('Abaixo do peso.');
    } else if (imc >= 18.5 && imc <= 24.9) {
        setResultado('Peso normal.');
    } else if (imc >= 25 && imc <= 29.9) {
        setResultado('Sobrepeso.');
    } else if (imc >= 30 && imc <= 34.9) {
        setResultado('Obesidade grau 1.')
    } else if (imc >= 35 && imc <= 39.9) {
        setResultado('Obesidade grau 2.')
    } else if (imc >= 40) {
        setResultado('Obesidade grau 3.')
    } else {
        setResultado('Erro.');
    }
}

function calculaImc(peso, altura) {
    const imc = peso / (altura * altura);

    return imc.toFixed(2);
}
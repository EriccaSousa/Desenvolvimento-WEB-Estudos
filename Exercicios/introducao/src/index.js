import React from 'react'
import ReactDOM from 'react-dom'

import OlaMundo from './components/OlaMundo'
import Estudante from './components/Estudante'
import Professor from './components/Professor'
import {CapitaoAmerica,ViuvaNegra} from './components/Vingadores'
import Casa from './components/Casa'


//Aula 01:
//Exemplos:
const root = document.getElementById('root') //cod vindo do index.html

/*
ReactDOM.render('Olá mundo!', root)

//JSX
ReactDOM.render(<h1>Olá mundo</h1>, root); 

//Sem JSX
let h2 = document.createElement('h2')
let texto = document.createTextNode("Olá mundo!")
h2.appendChild(texto)

root.appendChild(h2)


//EXERCÍCIO:
ReactDOM.render(<h1>EXERCÍCIO</h1>, root);

//1) Sem JSX:
let ul = document.createElement('ul')
let li1 = document.createElement('li')
let texto1 = document.createTextNode('1-) Superman')

ul.appendChild(li1)
li1.appendChild(texto1)

let li2 = document.createElement('li')
let texto2 = document.createTextNode('2-) Batman')

ul.appendChild(li2)
li2.appendChild(texto2)

let li3 = document.createElement('li')
let texto3 = document.createTextNode('3-) Wonder Woman')

ul.appendChild(li3)
li3.appendChild(texto3)

root.appendChild(ul)

//2) Com JSX:

ReactDOM.render(
    <ul>
        <li>1-) Superman</li>
        <li>2-) Batman</li>
        <li>3-) Wonder Woman</li>
    </ul>, root)

//Aula 02:
//Exemplos:
//ReactDOM.render(<OlaMundo nome='Érica'/>, root)


//EXERCÍCIO:
ReactDOM.render(<Estudante nome='Érica Sousa' idade={21} curso='Sistemas de informação' cidadeNatal='Boa Viagem'/>, root)

*/
//AULA 03:
//RELEMBRANDO...
ReactDOM.render(
    <div>
        <h1>Aula 03</h1>

        <ul>
            <li><h2>Relembrando...</h2></li>
            <h4>Professor</h4>
            <Professor nome = 'Wladimir' area = 'Matemática' nivel = 'Doutorado' curso = 'Ciência da Computação'/>  
            <h4>Estudante</h4>
            <Estudante  nome='Érica Sousa' idade={21} curso='Sistemas de informação' cidadeNatal='Boa Viagem'/>  
        </ul>

        <ul>
            <li> <h2>Componentes - Múltiplos</h2> </li>
            <h3>Exemplo:</h3>
            <CapitaoAmerica nome = 'Érica'/>
            <ViuvaNegra nome = 'Érica'/>
        </ul>

        <ul>
            <li><h2>Componentes - Relação HardCoded</h2></li>
            <h3>Exemplo:</h3>
            <Casa/>
        </ul>
    </div>, root)



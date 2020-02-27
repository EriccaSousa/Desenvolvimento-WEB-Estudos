import React from 'react'
import ReactDOM from 'react-dom'

const root = document.getElementById('root') //cod vindo do index.html
/*
//ReactDOM.render('Olá mundo!', root)

//JSX
ReactDOM.render(<h1>Olá mundo</h1>, root); 

//Sem JSX
let h2 = document.createElement('h2')
let texto = document.createTextNode("Olá mundo!")
h2.appendChild(texto)

root.appendChild(h2)
*/

//EXERCÍCIO
ReactDOM.render(<h1>EXERCÍCIO</h1>, root);
/*
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
*/
//2) Com JSX:

ReactDOM.render(<ul>
                    <li>1-) Superman</li>
                    <li>2-) Batman</li>
                    <li>3-) Wonder Woman</li>
                </ul>, root)


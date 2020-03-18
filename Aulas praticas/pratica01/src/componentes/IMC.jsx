import React from 'react'
import IMCCalc from './IMCCalc';

let peso = 60, altura = 1.50;

export default(props)=>
    <div>
        <h1>O IMC para o peso {peso}kg e altura {altura} é:  </h1>
        <IMCCalc peso={peso} altura={altura}/>
    </div>
import React, { Component } from 'react';

import './Calculadora.css';
import Button from '../components/Button';
import Display from '../components/Display';

//Objeto que armazena o estado inicial da calculadora;
const estadoInicial={
    displayValor: 0,
    limparDisplay: false,
    operation: null,
    valores: [0, 0],
    atual: 0
}

export default class Calculadora extends Component{
    
    constructor(props){
        super(props)

        this.clearMemory = this.clearMemory.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.addDigit = this.addDigit.bind(this);
        this.state = {estadoInicial};
    }

    clearMemory(){
        console.log('limpar');
        this.setState({estadoInicial});
    }

    setOperation(operation){
        console.log('operação:' + operation);
    }

    addDigit(digit){
        console.log('digito:' + digit)
        if(digit === '.' && this.state.displayValor.includes('.')){
            return
        }

        let limparDisplay = false;
        if(this.state.displayValor === '0' || this.state.limparDisplay){
            limparDisplay = true;
        }

        let cu
    }

    render(){
        return(
            <div className="calculadora">
                <Display value={this.state.displayValor}/>
                <Button label='AC' click={this.clearMemory} triple/>
                <Button label='/' click={this.setOperation} operation/>
                <Button label='7' click={this.addDigit}/>
                <Button label='8' click={this.addDigit}/>
                <Button label='9' click={this.addDigit}/>
                <Button label='*' click={this.setOperation} operation/>
                <Button label='4' click={this.addDigit}/>
                <Button label='5' click={this.addDigit}/>
                <Button label='6' click={this.addDigit}/>
                <Button label='-' click={this.setOperation} operation/>
                <Button label='1' click={this.addDigit}/>
                <Button label='2' click={this.addDigit}/>
                <Button label='3' click={this.addDigit}/>
                <Button label='+' click={this.setOperation} operation/>
                <Button label='0' click={this.addDigit} double/>
                <Button label='.' click={this.addDigit}/>
                <Button label='=' click={this.setOperation} operation/>
            </div>
        );
    }
}
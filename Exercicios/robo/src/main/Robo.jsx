import React, { Component } from 'react';

import './Robo.css';
import Button from '../components/Button';
import Display from '../components/Display';

export default class Robo extends Component{
    constructor(props){
        super(props);
        this.state = {i:0, j:0}; //Posição inicial do Robô
        this.setPosition = this.setPosition.bind(this);
    }

    drawMatrix(){ //Preencher a matrix
        let out = '';
        
        for (let i = 0; i < 10; i++) {
            for(let j = 0; j < 10; j++){
                if(i === this.state.i && j === this.state.j){
                    out+='[O]'
                }else{
                    out+='[X]'
                }
            }
        }
        return out
    }

    setPosition(position){
        let i = this.state.i;
        let j = this.state.j;

        console.log(position);
        if(position === 'UP'){
            i = i - 1;
        }else if(position === 'DOWN'){
            i = i + 1;
        }else if(position === 'LEFT'){
            j = j - 1;
        }else if(position === 'RIGHT'){
            j = j + 1;
        }
        this.setState({i, j});
    }

    render(){
        return(
            <div className="robo">
                <Display value={this.drawMatrix()}/>
                <Button label='UP' click={this.setPosition} double/>
                <Button label='LEFT' click={this.setPosition}/>
                <Button label='RIGHT' click={this.setPosition}/>
                <Button label='DOWN' click={this.setPosition}double/>
            </div>
        );
    }
}
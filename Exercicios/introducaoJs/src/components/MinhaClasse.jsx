import React, {Component} from 'react';

export default class MinhaClasse extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.nome}</h1>
            </div>
        );
    }
}
import React, { Component } from 'react';
import api from '../../services/api';

export default class Main extends Component{
    componentDidMount(){//Executa assim que o componente é exibido em tela;
        this.loadProducts();
    }

    loadProducts = async() => {//Função minha;
        const response = await api.get('/products');

        console.log(response.data.docs);
    };

    render(){
        return <h1>Hello Word</h1>
    }
}
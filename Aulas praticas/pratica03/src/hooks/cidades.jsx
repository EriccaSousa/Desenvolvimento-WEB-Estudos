import React, { useState, useEffect } from 'react';

export default props =>{

    const [fortaleza, setFortaleza] = useState(0);
    const [quixada, setQuixada] = useState(0);
    const [quixeramobim, setQuixeramobim] = useState(0);
    const [boaViagem, setBoaViagem] = useState(0);
    const [maisVotada, setMaisVotada] = useState("");
    const [menosVotada, setMenosVotada] = useState("");
    const cidadesStr = ['Fortaleza','Quixadá','Quixeramobim','Boa Viagem']

    useEffect(
        ()=>{
            const cidades = [fortaleza, quixada, quixeramobim, boaViagem]

            let maior = maisVotada
            for (let i = 0; i < cidades.length; i++) {
                if(cidades[i] > maior)
                    maior = cidades[i]
            }
            setMaisVotada(maior)

            let menor = menosVotada
            for (let i = 0; i < cidades.length; i++) {
                if(cidades[i] < menor)
                    menor = cidades[i]
            }
            setMenosVotada(menor)
        }, 
        [fortaleza, quixeramobim, quixada, boaViagem]
    );

    function maisVotadas(){
        let saida = ''
        const cidades = [fortaleza, quixeramobim, quixada, boaViagem]

        for (let i = 0; i < cidades.length; i++) {
            if(cidades[i] === maisVotada) saida += cidadesStr[i]+' '
        }
        return saida
    };

    function menosVotadas(){
        let saida = ''
        const cidades = [fortaleza, quixeramobim, quixada, boaViagem]
        
        for (let i = 0; i < cidades.length; i++) {
            if(cidades[i] === menosVotada) saida += cidadesStr[i]+' '
        }
        return saida
    };

    return(
        <div>
            <h1>Prática03: Votação de Cidades</h1>
            <h1>Fortaleza: {fortaleza}</h1>
            <h1>Quixadá: {quixada}</h1>
            <h1>Quixeramobim: {quixeramobim}</h1>
            <h1>Boa Viagem: {boaViagem}</h1>
            <h1>Cidade mais votada: {maisVotada} : {maisVotadas()} </h1>
            <h1>Cidade menos votada: {menosVotada} : {menosVotadas()} </h1>

            <button onClick={ ()=> setFortaleza(fortaleza+1) }>
                Vote em Fortaleza!
            </button>

            <button onClick={ ()=> setQuixada(quixada+1) }>
                Vote em Quixadá!
            </button>

            <button onClick={ ()=> setQuixeramobim(quixeramobim+1) }>
                Vote em Quixeramobim!
            </button>

            <button onClick={ ()=> setBoaViagem(boaViagem+1) }>
                Vote em Boa Viagem!
            </button>
        </div>
    );
}
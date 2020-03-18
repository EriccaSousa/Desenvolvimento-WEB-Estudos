import React from 'react'

export default props=>{
    function calculaIMC(peso, altura){
        return peso/(altura*altura);
    }

    return <div>
        <button onClick={()=>props.notificarIMCPai(calculaIMC(props.peso, props.altura))}>
            Calcular IMC
        </button>
    </div>
}
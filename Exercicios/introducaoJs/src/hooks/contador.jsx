import React, { useState, useEffect} from 'react';

export default props =>{

    const [contador, setContador] = useState(0);
    const [status, setStatus] = useState("PAR");
    const [contador2, setContador2] = useState(0);

    useEffect(
        ()=>{
            if(contador%2 === 0){
                setStatus("PAR");
            }else{
                setStatus("IMPAR");
            }
        },
        [contador]
    );

    return(
        <div>
            <h1>Contador: {contador} </h1>
            <h2>Status do contador 1: {status} </h2>
            <h1>Contador 2: {contador2} </h1>
            <button onClick={()=> setContador(contador + 1)}>
                incrementar contador 1
            </button>

            <button onClick={()=> setContador2(contador2 - 1)}>
                decrementar contador 2
            </button>
        </div>
    );
}
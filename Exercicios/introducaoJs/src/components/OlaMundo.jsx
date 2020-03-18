import React from 'react'
/*
//Aula 02:
//Exemplos:
function olaMundo(){
    return <h1>Olá mundo!</h1>
}
 
export default olaMundo

//forma arrow
export default ()=>{
    return <h1>Olá Mundo!</h1>
}
*/
//forma arrow 2
export default (props)=> 
    <div>
        <h1>Olá Mundo!</h1>
        <h1>{props.nome}</h1>
    </div>
import React from 'react';

export default props=>{
    return(
        <div>
            <button onClick={
                ()=>{
                    props.notificarPai("Boa noite.")
                }
            }>
                Oi pai
            </button>
        </div>
    )
}
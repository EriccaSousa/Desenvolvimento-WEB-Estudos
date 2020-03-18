import React from 'react'

import Filho from './IMCFilho'
import IMCFilho from './IMCFilho';

export default props=>{
    const msgRecebida = msg => alert(`Recebi: ${msg}`);
    return(
        <div>
            <IMCFilho altura={1.64} peso={56} notificarIMCPai={msgRecebida}/>
        </div>
    )
}
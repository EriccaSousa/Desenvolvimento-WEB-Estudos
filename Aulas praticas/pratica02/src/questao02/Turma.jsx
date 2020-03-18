import React from 'react'

import Estudante2 from './Estudante2'

export default props=>
    <div>
        <h2>Turma: {props.turma}</h2>
        <Estudante2 nome='Fulano de Tal' curso='Sistemas de Informação'/>
    </div>
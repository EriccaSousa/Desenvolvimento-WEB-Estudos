import React from 'react'

import Turma2 from './Turma'

export default props=>
    <div>
        <h2>Curso: {props.curso}</h2>
        <Turma2 turma='Fundamentos de Programação'/>
    </div>
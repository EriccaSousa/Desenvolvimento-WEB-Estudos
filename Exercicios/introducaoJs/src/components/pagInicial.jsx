import React from 'react'

import Estudante from './Estudante'
import Professor from './Professor'
import Casa from './Casa'
import {CapitaoAmerica,ViuvaNegra} from './Vingadores'

export default ()=>
    <>
      <div class="cabecalho">
        <h1 class="titulo">Desenvolvimento de Software para WEB</h1>
      </div>

      <div class="grid1">
        <ul>
          <li><h1>Introdução ao React</h1></li>
            <ul>
                
                <ul>
                    <li><h3><a class="active">Aula 01: Uso do JSX</a></h3></li>
                    <ul>
                        <li>1-) Superman</li>
                        <li>2-) Batman</li>
                        <li>3-) Wonder Woman</li>
                    </ul>
                </ul>

                <ul>
                    <li><h3><a class="active">Aula 02: Props</a></h3></li>
                    <Estudante nome='Érica Sousa' idade={21} curso='Sistemas de informação' cidadeNatal='Boa Viagem'/>
                </ul>

                <ul>
                    <li><h3><a class="active">Aula 03: Componentes</a></h3></li>
                    <h4>Relembrando...</h4>
                    <ul>
                        <h4>Professor</h4>
                        <Professor nome = 'Wladimir' area = 'Matemática' nivel = 'Doutorado' curso = 'Ciência da Computação'/>  
                        <h4>Estudante</h4>
                        <Estudante  nome='Letícia Farias' idade={20} curso='Sistemas de informação' cidadeNatal='Quixeramobim'/>  
                    </ul>

                    <ul>
                        <li> <h3>Componentes - Múltiplos</h3> </li>
                        <ul>
                            <li><h4>Exemplo:</h4></li>
                            <CapitaoAmerica nome = 'Érica'/>
                            <ViuvaNegra nome = 'Érica'/>
                        </ul>
                    </ul>

                    <ul>
                        <li><h3>Componentes - Relação HardCoded</h3></li>
                        <ul>
                            <li><h4>Exemplo:</h4></li>
                            <Casa/>
                        </ul>
                    </ul>
                </ul>        
            </ul>
        </ul>
      </div>
    </>
    
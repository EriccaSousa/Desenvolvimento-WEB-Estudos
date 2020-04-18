import React from 'react';

import Estudante from './Estudante';
import Professor from './Professor';
import Casa from './Casa';
import {CapitaoAmerica,ViuvaNegra} from './Vingadores';
import Pai from './Pai';
import MinhaClasse from './MinhaClasse';
import CidadeSimples from './CidadeSimples';
import Contador from '../hooks/contador';

export default ()=>
    <>
        <div class="cabecalho">
            <h1 class="titulo">Desenvolvimento de Software para WEB - 2020.1</h1>
        </div>

        <div class="grid1">
            <h1>Introdução ao React</h1>
            
            <div class="aula01">
                <h3><li>Aula 01: Uso do JSX</li></h3>
                <ul class="ex01">
                    <li>1-) Superman</li>
                    <li>2-) Batman</li>
                    <li>3-) Wonder Woman</li>
                 </ul>
            </div>

            <div class="aula02">
                <h3><li>Aula 02: Props</li></h3>
                <ul class="ex02">
                    <Estudante nome='Érica Sousa' idade={21} curso='Sistemas de informação' cidadeNatal='Boa Viagem'/>
                </ul>
            </div>

            <div class="aula03">
                <h3><li>Aula 03: Componentes</li></h3>
                <h4>Relembrando...</h4>
                
                <div class="ex03-01">
                    <h5>Professor</h5>
                    <Professor nome = 'Wladimir' area = 'Matemática' nivel = 'Doutorado' curso = 'Ciência da Computação'/>  
                    <h5>Estudante</h5>
                    <Estudante  nome='Letícia Farias' idade={20} curso='Sistemas de informação' cidadeNatal='Quixeramobim'/>  
                </div>

                <div>
                    <h3><li>Componentes - Múltiplos</li></h3>
                    <div class="ex03-02">
                        <CapitaoAmerica nome = 'Érica'/>
                        <ViuvaNegra nome = 'Érica'/>
                    </div>
                </div>

                <div>
                    <h3><li>Componentes - Relação HardCoded</li></h3>
                    <div class="ex03-02">
                        <Casa/>
                    </div>
                </div>
            </div>

            <div class="cabecalho2">
                <h1 class="titulo">Desenvolvimento de Software para WEB - 2020.1 - EAD</h1>
            </div>

            <div class="aula01">
                <h3><li>Aula 01: Componentes: Filho -> Pai</li></h3>
                <Pai/>

                <h3><li>Componentes: Classes</li></h3>
                <ul class="ex02">
                    <MinhaClasse nome='Érica Sousa'/>
                </ul>
            </div>

            <div class="aula01">
                <h3><li>Aula 02: Componentes: State</li></h3>
                
                <CidadeSimples/>
            </div>

            <div class="aula01">
                <h3><li>Aula 03: React Hooks</li></h3>
                
                <Contador/>
            </div>

        </div>
    </>
    
import React from 'react';
import ReactDOM from 'react-dom';

import Curso from './questao01/Curso'
import Turma from './questao01/Turma'
import Estudante from  './questao01/Estudante'

import Curso2 from './questao02/Curso2'

import IMCFilho from './questao03/IMCFilho'
import IMCPai from './questao03/IMCPai'

const root = document.getElementById('root');

/*
QUESTÃO 01:
ReactDOM.render(
        <Curso curso='Sistemas de Informação'>
            <Turma turma='Fundamento de Programação'>
                <Estudante nome='Fulano de Tal' curso='Sistemas de Informação'/>
                <Estudante nome='Beltrano de Tal' curso='Desing Digital'/>
            </Turma>

            <Turma turma='Introdução a Banco de Dados'>
                <Estudante nome='Fulano de Tal' curso='Sistemas de Informação'/>
                <Estudante nome='Beltrano de Tal' curso='Desing Digital'/>
                <Estudante nome='Sicrano de Tal' curso='Ciência da Computação'/>
            </Turma>
        </Curso>
    
    , root);

QUESTÃO 02:
ReactDOM.render(
    <Curso2 curso='Sistemas de Informação'/>
,root)


QUESTÃO 03
ReactDOM.render(
    <IMCPai/>
, root)
*/


import React from 'react';

import '../../global.css';
import './styles.css';

import logoImg from '../../images/logo1.png';

export default function Logon(){
    return (
        <div class="container" id="container">
			<div class="overlay-container">
				<div class="overlay">
					<div class="overlay-panel overlay-right">
						<img src={logoImg} alt="Logo"/>
						<h1>Troque livros com leitores iguais a você!</h1>
						<p>Economize dinheiro, encontre pessoas interessantes e ajude a preservar a natureza.</p>
					</div>
				</div>
			</div>

			
			<div class="form-container register-container">
				<form action='#'>
					<h1>Faça seu cadastro</h1>

					<input type="email" placeholder="E-mail"/>
					<input type="password" placeholder="Senha"/>

					<button className="button" type="submit">Cadastrar</button>
				</form>
			</div>
		</div>
    );
}
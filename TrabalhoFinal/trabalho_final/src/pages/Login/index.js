import React from 'react';
import { FiLogIn } from "react-icons/fi";

import './styles.css';
import '../../global.css';

import logoImg from '../../images/logo1.png';

export default function Logon(){
    return (
        <div class="container" id="container">
			<div class="form-container log-in-container">
				<form action="#">
					<h2>Faça seu login</h2>

					<input type="text" placeholder="E-mail"/>
					<input type="password" placeholder="Senha"/>

					<a className="back-link">Esqueci minha senha</a>
					<button className="button" type="submit">Entrar</button>
						<a className="back-link">
							<FiLogIn size={16} color="#FFF" />
							Não tenho cadastro
						</a>
				</form>
			</div>

			<div class="overlay-container">
				<div class="overlay">
					<div class="overlay-panel overlay-right">
						<img src={logoImg} alt="Logo"/>
						<h1>Troque livros com leitores iguais a você!</h1>
						<p>Economize dinheiro, encontre pessoas interessantes e ajude a preservar a natureza.</p>
					</div>
				</div>
			</div>
		</div>
    );
}
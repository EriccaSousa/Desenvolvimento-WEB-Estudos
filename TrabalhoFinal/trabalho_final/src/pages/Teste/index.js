import React from 'react';

import '../../global.css';
import './styles.css';

import logoImg from '../../images/logo1.png';

export default function Logon(){
    return (
		<div class="main">
			<div class="menu">
				<ul>
					<li> <a href="#"> menu </a> </li>
					<li> <a href="#"> menu </a> </li>
				</ul>
			</div>

			<div class="content">
				<div class="content-inner">
					Conteúdo
				</div>
				
			</div>

			<div class="sidebar">
				Barra lateral
			</div>
			
			<div class="footer">
				Rodapé
			</div>
		</div>
    );
}
import React from 'react';
import { FiLogIn } from "react-icons/fi";

import './Login.css';
import logoImg from '../../images/oie_transparent.png';

export default props=>{
    return(
        <div className='containerLogin'>
            <form action="#">
                <div className="logo">
                    <img src={logoImg} alt="Coração de Tinta"/>
                </div>

                <input type="text" name="email" placeholder="Seu email"/>
                <input type="password" name="senha" placeholder="Sua senha"/>
            
                <a to="/" className="back-link1">
                    Esqueceu sua senha?
                </a>

                <button className="button" type="submit">
                    Entrar
                </button>

                <a to="/" className="back-link">
                    <FiLogIn size={16} color="#e02041" />
                    Ainda não possui uma conta? Cadastre-se!
                </a>
            </form>
        </div>
    );
}
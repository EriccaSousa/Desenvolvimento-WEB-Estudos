import React from 'react';
import { MdNotificationsNone, MdNotifications } from 'react-icons/md';
import { FaSearch, FaHome } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { GiConversation } from 'react-icons/gi';
import { AiOutlineProfile } from 'react-icons/ai';


import '../../global.css';
import './styles.css';

import ImgLogo from '../../images/oie_transparent (1).png';
import Perfil from '../../images/pp.jpeg';
import ft1 from '../../images/download.jpeg';
import ft2 from '../../images/download (1).jpeg';
import ft3 from '../../images/download (2).jpeg';
import Capa from '../../images/capa2.jpeg';

export default function Logon(){
    return (
        <div className="global-container">
            <div className="lateral">
                <div className="menu">    
                    <ul>					
                        <li><a href="#"><FaHome size="35" color="#fff"/></a></li>
                        <li ><a href="#"><AiOutlineProfile size="35" color="#fff"/></a></li>
                        <li ><a href="#"><GiConversation size="35" color="#fff"/></a></li>

                        <li ><a href="#"><FiSettings size="35" color="#fff"/></a></li>
                    </ul>
                </div> 
            </div>

            
            <header>
                <a href="/"><img src={ImgLogo} alt="Coração de Tinta"/></a>
                <nav>    
                    <ul>	
                        <li><a href="/"><MdNotificationsNone size="30" color="#FF0000"/></a></li>
                        <li><a href="/"><img src={Perfil} alt="Perfil"/></a></li>				
                    </ul>
                </nav> 
            </header>

            <div className="capa">
                <div className="perfil-info">
                    <img src={Perfil} alt="Perfil"/>
                    
                    
                    <h1>Érica Sousa</h1>
                    <h4>Quixeramobim, Ce - BR</h4>
                </div>
            </div>
        </div>
    );
}
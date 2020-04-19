import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Calculadora from './main/Calculadora';


const root = document.getElementById('root');

ReactDOM.render( 
  <div>
    <h1>Calculadora</h1>
    <Calculadora/>
  </div>, root);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Robo from './main/Robo.jsx';


const root = document.getElementById('root');

ReactDOM.render(
  <div>
    <h1>Robô Simples</h1>
    <Robo/>
  </div>, root
);

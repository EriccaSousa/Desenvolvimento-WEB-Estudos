import React, { Component } from 'react';

import './styles.css';

import Header from './components/Header/Index';
import Main from './pages/main';

const App = () => (
  <div className="App">
    <Header/>
    <Main />
  </div>
);

export default App;

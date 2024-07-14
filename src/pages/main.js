import React from 'react';
import ReactDOM from 'react-dom';
import MyApp from './pages/app';
import Home from './pages/index'; 

import './styles/globals.css';

ReactDOM.render(
  <MyApp>
    <Home />
  </MyApp>,
  document.getElementById('root')
);

/** 入口JS */
import React from './node_modules/react'
import ReactDOM from './node_modules/react-dom'
import { HashRouter } from "./node_modules/react-router-dom";

import App from './App';

import './App.css';

ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('root'))
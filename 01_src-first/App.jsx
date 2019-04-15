import React from 'react'

import logo from './logo.svg'
import './App.css'


/* 
应用根组件
*/

export default class App extends React.Component {
  render() {
    return (
      <div className="app-header">
          <img src={logo} alt="" className="logo" />
          <h2>Hello World! my first react demo</h2>
      </div>
    )
  }
}

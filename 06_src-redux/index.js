/** 入口JS */
import React from 'react'
import ReactDOM from 'react-dom'
import store from './redux/redux';
import App from './App'


ReactDOM.render( <App store={store} /> , document.getElementById('root'))

// 绑定状态更新的监听, 一旦状态数据变化了, 立即回调
store.subscribe(() => { 
  console.log('-------')
  // 移除div中原本组件标签
  ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  // 再次渲染
  ReactDOM.render(<App store={store}/>, document.getElementById('root'))
})
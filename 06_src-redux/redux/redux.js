/**
 * redux 核心管理对象
 * state
 * reducer
 */

 import { createStore } from 'redux';
 import reducer from './reducer'

 export default createStore(reducer)
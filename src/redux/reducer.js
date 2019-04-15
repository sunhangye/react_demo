import { INCREMENT, DECREMENT } from './action-type'

/** 
 * 管理count 状态数据的reducer函数
 * state: 本身要管理的数据
*/

function count(state=1, action) {
  console.log('count()', state, action)
  switch (action.type) {
    case INCREMENT:
      return state + action.number
    case DECREMENT:
      return state - action.number
    default:
      return state
  }
}

export default count
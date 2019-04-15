import { INCREMENT, DECREMENT } from './action-type'

/*
增加action
*/
export const increment = (number) => ({type: INCREMENT, number})
/*
增加action
*/
export const decrement = (number) => ({type: DECREMENT, number})
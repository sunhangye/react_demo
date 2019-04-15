import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import * as action from './redux/action'

export default class App extends PureComponent {

  static propTypes = {
    store: PropTypes.object.isRequired,
  }

  increment = () => {

    const number = this.refs.numberSelect.value * 1
    this.props.store.dispatch(action.increment(number))
  }

  decrement = () => {
    const number = this.refs.numberSelect.value * 1
    this.props.store.dispatch(action.decrement(number))
  }

  incrementIfOdd = () => {
    const number = this.refs.numberSelect.value * 1
    const count = this.props.story.getState()
    if (count%2 === 0) {
      this.props.store.dispatch(action.increment(number))
    }
  }

  render() {
    const count = this.props.store.getState()
    console.log('App render()', count)
    return (
      <div>
        <p>click： {count}</p>
        <select name="" id="" ref="numberSelect">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <button onClick={this.increment}>增加+1</button>
        <button onClick={this.decrement}>减-1</button>
      </div>
    )
  }
}

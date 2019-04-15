import React, { Component } from 'react'
import cx from 'classnames'
import {connect} from 'react-redux'
import { toggleTodo } from '../redux/action';
import PropTypes from 'prop-types';



class Todo extends Component {
  static proptype = {
    todo: PropTypes.object.isRequired,
  }


  render() {
    const todo = this.props.todo
    return (

        <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
          {todo &&  todo.complates ? '👌' : '👋'}{' '}
          <span className={cx(
            'todo-item_text', todo && todo.completed && "todo-item__text--completed"
          )}>
            {todo.content}
          </span>
        </li>

    )
  }
}

export default connect(
  null, {toggleTodo}
)(Todo)



import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from "react-redux"
import Todo from "./Todo"
import { getTodosByVisibilityFilter } from "../redux/selectors"

const mapStateToProps = state => {
  const {
    visibilityFilter
  } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  return {
    todos
  };
  //   const allTodos = getTodos(state);
  //   return {
  //     todos:
  //       visibilityFilter === VISIBILITY_FILTERS.ALL
  //         ? allTodos
  //         : visibilityFilter === VISIBILITY_FILTERS.COMPLETED
  //           ? allTodos.filter(todo => todo.completed)
  //           : allTodos.filter(todo => !todo.completed)
  //   };
};

class TodoList extends Component {
  static prpptype = {
    todos: PropTypes.object.isRequired,
  }
  render() {
    const todos = this.props.todos
    return (
      <ul>
        {todos && todos.length 
          ? todos.map((todo, index) => {
            return <Todo key={`todo-${todo.id}`} todo={todo} />
          }) : 'no todos yay!'}
      </ul>
    )
  }
}
export default connect(mapStateToProps)(TodoList)
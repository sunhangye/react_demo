import React, { Component } from 'react'
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <AddTodo />
        <TodoList />
        <VisibilityFilters />
      </div>
    )
  }
}
/**
 * https://codesandbox.io/s/qlxvnkvpmqhttps://codesandbox.io/s/qlxvnkvpmq
 */

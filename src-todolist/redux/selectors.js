import { VISIBILITY_FILTERS } from '../constants'

export const getTodoState = store => store.todos
/**
 * 获取列表
 */
export const getTodoList = store => (
  getTodoState(store) ? getTodoState(store).allIds : []
)
/**
 * 通过ID获取todo
 */
export const getTodoById = (store, id) => (
  getTodoState(store) ? {...getTodoState(store).byIds[id], id} : {}
)

export const getTodos = store => (
   getTodoState(store).map(id => getTodoById(store, id))
)

export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
  const allTodos = getTodoList(store)

  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.COMPLETED:
      return allTodos.filter(todo => todo.completed)
    case VISIBILITY_FILTERS.COMPLET:
      return allTodos.filter(todo => todo.complet)
    default:
      return allTodos
  }
}



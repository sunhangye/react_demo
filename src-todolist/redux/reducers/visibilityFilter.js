import { VISIBILITY_FILTERS } from '../../constants'
import { SET_FILTER } from '../action-types'

const initalState = VISIBILITY_FILTERS.ALL

const visibilityFilter = (state = initalState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filter
    }
    default: {
      return state
    }
  }
}

export default visibilityFilter

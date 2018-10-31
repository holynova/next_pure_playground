import { combineReducers } from 'redux'

const counter = (state = { cnt: 99 }, action) => {
  switch (action.type) {
    case 'foo':
      return { ...state, ...action.payload }
    case 'increment':
      return { ...state, cnt: state.cnt + parseInt(action.payload.step) }
    case 'decrement':
      return { ...state, cnt: state.cnt - action.payload.step }
    case 'recover':
      return { ...state, cnt: action.payload.target }
    default:
      return state;
  }
}

const foo = (state, action) => {
  switch (action.type) {
    case 'foo':
      return { ...state, ...action.payload }
    default:
      return state;
  }
}

const reducer = combineReducers({
  counter,
  foo,
})

export default counter

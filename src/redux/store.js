import { createStore } from 'redux'
import reducer from './reducer.js'

const makeStore = (initState) => {
  return createStore(reducer, initState)
}

export default makeStore
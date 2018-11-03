import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer.js'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import thunk from 'redux-thunk'
const makeStore = (initState) => {
  return createStore(rootReducer, initState)
}

const sagaMiddleware = createSagaMiddleware(rootSaga)

const configureStore = (preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, sagaMiddleware)
  )

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga)
  }

  store.runSagaTask()
  return store
}

export default configureStore
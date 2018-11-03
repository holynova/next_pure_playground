import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

// const requestUsers = () => {
//   const url = 'https://jsonplaceholder.typicode.com/users'
//   return axios.get(url)
//     .then(res => {
//       return res
//     })
//     .catch(err => err)
// }

function* getTodoList(action) {
  const url = 'https://jsonplaceholder.typicode.com/todos'
  yield put({ type: 'setLoading' })
  const res = yield axios({ url })
  yield put({ type: 'clearLoading' })
  yield put({
    type: 'save',
    payload: { todoList: res.data }
  })

}

export function* getUsers(action) {
  const url = 'https://jsonplaceholder.typicode.com/users'
  yield put({ type: 'setLoading' })
  const res = yield axios({ url })
  yield put({ type: 'clearLoading' })
  // const list = res.data
  // const list = [
  //   { id: 1, name: 'foo' + Math.random() },
  //   { id: 2, name: 'bar' + Math.random() },
  // ]
  yield put({
    type: 'save',
    payload: { userList: res.data }
  })
}

function* rootSaga() {
  yield takeLatest('getUsers', getUsers)
  yield takeLatest('getTodoList', getTodoList)
}

export default rootSaga
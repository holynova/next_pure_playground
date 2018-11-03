import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

const requestUsers = () => {
  const url = 'https://jsonplaceholder.typicode.com/users'
  return axios.get(url)
    .then(res => {
      return res
    })
    .catch(err => err)
}

export function* getUsers(action) {
  console.log('action', action)
  let { type, payload } = action
  yield put({ type: 'setLoading' })
  const res = yield axios({ url: payload.url })
  console.log('res.data ', res.data)
  yield put({ type: 'clearLoading' })
  const list = res.data
  // const list = [
  //   { id: 1, name: 'foo' + Math.random() },
  //   { id: 2, name: 'bar' + Math.random() },
  // ]
  yield put({ type: 'saveUsers', payload: { list } })
}

function* rootSaga() {
  yield takeEvery('getUsers', getUsers)
}

export default rootSaga
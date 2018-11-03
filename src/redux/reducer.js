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

const list = (state = { list: ['foo', 'bar'] }, action) => {
  switch (action.type) {
    case 'push':
      return { ...state, list: [...state.list, action.payload.item] }
    default:
      return state;
  }
}

// const requestPost = () => {

// }

// 发请求
const post = (state = { loading: false, list: [] }, action) => {
  switch (action.type) {
    case 'request_start':
      return { ...state, loading: true }

    case 'request_success':
      return {
        ...state,
        loading: false,
        list: action.payload.list
      }

    case 'request_fail':
      console.log(action.payload.err)
      return {
        ...state,
        loading: false,
      }
    default:
      return state

  }
}

// 用saga的方式来处理, 获取users数据
const user = (state = {}, action) => {
  const { type, payload } = action
  switch (type) {
    // case 'setLoading':
    //   return { ...state, userLoading: true }
    // case 'clearLoading':
    //   return { ...state, userLoading: false }
    case 'save':
      return { ...state, ...action.payload }
    // case 'getUsers':
    //   break;
    default:
      return state
  }
}

const common = (state = { loading: false }, action) => {
  switch (action.type) {
    case 'setLoading':
      return { ...state, loading: true }
    case 'clearLoading':
      return { ...state, loading: false }
    default:
      return state
  }
}

const reducer = combineReducers({
  counter,
  list,
  post,
  user,
  common,
})

// export default list
export default reducer


import axios from 'axios'

export const getPost = (url) => {
  return function (dispatch) {
    dispatch({ type: 'request_start' })
    axios({
      url,
      method: 'get',
    }).then(res => {
      const list = res.data
      dispatch({
        type: 'request_success',
        payload: {
          list
        }
      })
    }).catch(err => {
      dispatch({ type: 'request_fail', payload: err })
    })

  }
}
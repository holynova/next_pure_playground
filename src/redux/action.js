
import axios from 'axios'

export const getPost = (url) => {
  return function (dispatch) {
    // dispatch({ type: 'request_start' })
    dispatch({type:'setLoading'})
    axios({
      url,
      method: 'get',
    }).then(res => {
      dispatch({type:'clearLoading'})
      const list = res.data
      dispatch({
        type: 'request_success',
        payload: {
          list
        }
      })
    }).catch(err => {
      dispatch({type:'clearLoading'})
      dispatch({ type: 'request_fail', payload: err })
    })

  }
}
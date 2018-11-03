import React, { Component } from 'react';
import propTypes from 'prop-types';
// import { } from 'antd';
// import './Counter.scss';
import { connect } from 'react-redux'
import { } from 'redux-saga'
import { getPost } from './../../redux/action'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
    };
  }
  // componentDidMount() { }
  // componentWillReceiveProps(nextProps) { }

  onStepChange = (event) => {
    let value = event.target.value
    this.setState({
      step: value
    })
  }

  handleIncrement = () => {
    this.props.dispatch({
      type: 'increment',
      payload: {
        step: this.state.step,
      }
    })
  }

  handleDecrement = () => {
    this.props.dispatch({
      type: 'increment',
      payload: {
        step: -1 * parseInt(this.state.step),
      }
    })
  }
  handleRecover = () => {
    if (this.props.cnt <= 0) {
      this.props.dispatch({
        type: 'recover',
        payload: {
          target: 100,
        }
      })
    }
  }
  onListPush = (item) => {
    this.props.dispatch({
      type: 'push',
      payload: {
        item: Math.random()
      }
    })
  }

  genSimpleList = (list) => {
    let result = []
    if (Array.isArray(list) && list.length > 0) {
      result = list.map(item => (<li key={item}>{item}</li>))
    }
    return result
  }

  genPostList = (list) => {

    let result = []
    if (Array.isArray(list) && list.length > 0) {
      result = list.map(item => (<li key={item.id}>{item.title}</li>))
    }
    return result.slice(0, 10)
  }

  genUserList = (list) => {

    let result = []
    if (Array.isArray(list) && list.length > 0) {
      result = list.map(item => (<li key={item.id}>{item.name}</li>))
    }
    return result
    // return result.slice(0, 10)
  }

  genList = (list, nameKey = 'name', idKey = 'id', limit = 10, title = '数据') => {
    let result = []
    if (Array.isArray(list) && list.length > 0) {
      result = list.map(item => (<li key={item[idKey]}>{item[nameKey]}</li>))
    }
    return (
      <div>
        <h3>{title}列表</h3>
        {this.props.loading ? 'loading...' : null}
        <ul>
          {
            result.slice(0, limit)
          }
        </ul>
      </div>
    )
  }

  requestList = () => {
    let url = 'https://jsonplaceholder.typicode.com/posts'
    this.props.dispatch(getPost(url))
  }

  requestUserList = () => {
    const url = 'https://jsonplaceholder.typicode.com/users'

    this.props.dispatch({
      type: 'getUsers',
      payload: { url }
    })
  }
  requestTodoList = () => {
    // const url = 'https://jsonplaceholder.typicode.com/users'

    this.props.dispatch({
      type: 'getTodoList',
      // payload: { url }
    })
  }

  render() {
    return (
      <div>
        <h2>为长者续命程序</h2>
        <h2>{`长者寿命${this.props.cnt}S`}</h2>
        <input
          type='number'
          placeholder='输入续命秒数'
          value={this.state.step}
          onChange={this.onStepChange}
        >
        </input>
        <button onClick={this.handleIncrement} >续命</button>
        <button onClick={this.handleDecrement} >掉血</button>
        <button onClick={this.handleRecover} >满血复活</button>
        <hr />
        <button onClick={this.onListPush} > 另外一个reducer+1</button>

        <div>
          <h3>手动控制list</h3>
          {this.genSimpleList(this.props.list)}
        </div>

        <hr></hr>
        <div>
          <h3>thunk异步请求posts</h3>
          <button onClick={this.requestList} >异步请求</button>
          {this.props.loading ? '正在加载' : ''}
          {this.genList(this.props.posts, 'title')}
        </div>
        <hr></hr>
        <div>
          <h3>saga异步请求</h3>
          <button onClick={this.requestUserList} >请求users</button>
          <button onClick={this.requestTodoList} >请求todoList</button>
          {this.props.userLoading ? '正在加载' : ''}
          {this.genList(this.props.userList, 'name', 'id', 10, 'user')}
          <hr />
          {this.genList(this.props.todoList, 'title', 'id', 10, 'todo')}
        </div>
      </div>

    );
  }
}
Counter.propTypes = {};
Counter.defaultProps = {};

function mapStateToProps(state) {
  // console.log('state', state)
  return {
    cnt: state.counter.cnt,
    list: state.list.list,

    posts: state.post.list,
    loading: state.common.loading,
    // userLoading: state.user.userLoading,
    userList: state.user.userList,
    todoList: state.user.todoList,
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     handleIncrement: () => {
//       dispatch({
//         type: 'increment',
//         payload: {
//           step: +10,
//         }
//       })
//     },
//     handleDecrement: () => {
//       dispatch({
//         type: 'increment',
//         payload: {
//           step: -10,
//         }
//       })
//     },
//     handleRecover: () => {
//       dispatch({
//         type: 'recover',
//         payload: {
//           target: 99,
//         }
//       })
//     }
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default connect(mapStateToProps)(Counter);

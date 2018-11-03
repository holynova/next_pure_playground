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

  genList = (list) => {
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
          {this.genList(this.props.list)}
        </div>

        <hr></hr>
        <div>
          <button onClick={this.requestList} >异步请求</button>
          <h3>远程请求List</h3>
          {this.props.loading ? '正在加载' : ''}
          {this.genPostList(this.props.posts)}
        </div>
        <hr></hr>
        <div>
          <button onClick={this.requestUserList} >saga异步请求</button>
          <h3>远程请求UserList</h3>
          {this.props.userLoading ? '正在加载' : ''}
          {this.genUserList(this.props.userList)}
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
    loading: state.post.loading,

    userLoading: state.user.userLoading,
    userList: state.user.userList,

  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleIncrement: () => {
      dispatch({
        type: 'increment',
        payload: {
          step: +10,
        }
      })
    },
    handleDecrement: () => {
      dispatch({
        type: 'increment',
        payload: {
          step: -10,
        }
      })
    },
    handleRecover: () => {
      dispatch({
        type: 'recover',
        payload: {
          target: 99,
        }
      })
    }
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default connect(mapStateToProps)(Counter);

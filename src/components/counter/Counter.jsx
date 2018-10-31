import React, { Component } from 'react';
import propTypes from 'prop-types';
// import { } from 'antd';
// import './Counter.scss';
import { connect } from 'react-redux'

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

      </div>
    );
  }
}
Counter.propTypes = {};
Counter.defaultProps = {};

function mapStateToProps(state) {
  return {
    cnt: state.cnt,
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

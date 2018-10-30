import React, { Component } from 'react';
import propTypes from 'prop-types';
import Router from 'next/router'
import { Card, Row, Col, DatePicker } from 'antd';
import './Demo.scss';
import DemoSon from './DemoSon.jsx';
import { log } from './../../utils/debugTools'
import 'antd/dist/antd.css'
import van from './../../assets/van.jpg'

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('demo didmount')
  }
  componentWillReceiveProps(nextProps) { }
  onBtnClick = () => {
    log('clicked')
    // console.log('pathName: ' + JSON.stringify(Router, null, 2))
    console.log('pathName: ' + JSON.stringify(this.props.router, null, 2))
    Router.push({
      pathname: '/about', query: {
        name: 'sang',
        age: 31
      }
    })
  }
  render() {
    const color = 'blue';
    return (
      <div className="demo">
        <h1 className="title">
          Demo
        </h1>
        <ul className="list">

        </ul>
        <Card>
          <DatePicker></DatePicker>
        </Card>
        <div className='img' ></div>
        <div className='img van ' ></div>
        <img src='./../../../static/imgs/bag_logo.png' ></img>
        <img src='/static/imgs/bag_logo.png' ></img>
        <img width='200' src={require('./../../assets/van.jpg')} alt='van'></img>
        <img width='200' src={van} alt='van'></img>
        <button onClick={this.onBtnClick} >jump</button>
        <DemoSon />
      </div >
    );
  }
}
Demo.propTypes = {};
Demo.defaultProps = {};
Demo.getInitialProps = async function (props) {
  console.log('demo getInitialProps')
  return {}
}

export default Demo;

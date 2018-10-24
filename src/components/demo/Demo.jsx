import React, { Component } from 'react';
import propTypes from 'prop-types';
import Router from 'next/router'
import { Card, Row, Col, DatePicker } from 'antd';
import './Demo.scss';
import DemoSon from './DemoSon.jsx';
// import 'antd/dist/antd.less'
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  j
  componentDidMount() { }

  componentWillReceiveProps(nextProps) { }

  onBtnClick = () => {
    console.log('router' + this.props.router)
    Router.push('/about')
  }
  render() {
    const color = 'blue';
    return (
      <div className="demo">
        <h1 className="title">
          Demo
        </h1>
        <ul className="list">
          <li>01</li>
          <li>02</li>
          <li>03</li>
          <li>04</li>
          <li>05</li>
        </ul>
        <Card>
          <DatePicker></DatePicker>
        </Card>
        <div className='img' ></div>
        <img src='./../../../static/imgs/bag_logo.png' ></img>
        <img src='/static/imgs/bag_logo.png' ></img>
        <button onClick={this.onBtnClick} >jump</button>
        <DemoSon />
      </div>
    );
  }
}
Demo.propTypes = {};
Demo.defaultProps = {};
export default Demo;

import React, { Component } from 'react';
import propTypes from 'prop-types';
// import { } from 'antd';
// import './Demo.scss';
import DemoSon from './DemoSon.jsx';

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() { }

  componentWillReceiveProps(nextProps) { }

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
        <DemoSon />
        <style jsx>{`
        li{
          color:${color};
        }
         .demo{
            width: 50%;
            margin:0 auto;
            }
          
          .list{
            list-style-type:none;
          }

        `}
        </style>
      </div>
    );
  }
}
Demo.propTypes = {};
Demo.defaultProps = {};
export default Demo;

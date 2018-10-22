import React, { Component } from 'react';
import propTypes from 'prop-types';
// import { } from 'antd';
// import './DemoSon.scss';

class DemoSon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidMount() { }

  // componentWillReceiveProps(nextProps) { }

  render() {
    return (
      <div>
        <h1 className="title">DemoSon</h1>
        <ul className="list">
          <li>son1</li>
          <li>son2</li>
          <li>son3</li>
          <li>son4</li>
        </ul>
      </div>
    );
  }
}
DemoSon.propTypes = {};
DemoSon.defaultProps = {};
export default DemoSon;

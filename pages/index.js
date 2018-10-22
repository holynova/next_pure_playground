import React, { Component } from 'react';
import propTypes from 'prop-types';
// import { } from 'antd';
// import './Main.scss';
import Demo from './../src/components/demo/Demo.jsx'
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // componentDidMount() { }
  // componentWillReceiveProps(nextProps) { }
  render() {
    return (
      <Demo></Demo>
      // <div>Main</div>
    );
  }
}
Main.propTypes = {};
Main.defaultProps = {};
export default Main;

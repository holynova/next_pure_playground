import MainLayout from './../../src/components/common/MainLayout.jsx'
// export default function () {
//   return <MainLayout>
//     Page A
//   </MainLayout>
// }


import React, { Component } from 'react';
import propTypes from 'prop-types';
// import { } from 'antd';
// import './A.scss';

class A extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static async getInitialProps() {
    console.log('a getInitialProps')
    return {}
  }
  componentDidMount() { }
  componentWillReceiveProps(nextProps) { }
  render() {
    return (
      <MainLayout>
        <div>page A</div>
      </MainLayout>
    );
  }
}
A.propTypes = {};
A.defaultProps = {};
export default A;

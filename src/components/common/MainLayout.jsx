import React, { Component } from 'react';
import propTypes from 'prop-types';
import Head from 'next/head'
import TopNav from './TopNav';
// import { } from 'antd';
import './MainLayout.scss';

// import './../../style/common.scss'

class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() { }
  componentWillReceiveProps(nextProps) { }
  render() {
    return (
      <div className='MainLayout' >
        <TopNav></TopNav>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
MainLayout.propTypes = {};
MainLayout.defaultProps = {};
export default MainLayout;

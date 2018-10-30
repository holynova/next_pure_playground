import React, { Component } from 'react';
import propTypes from 'prop-types';
import Head from 'next/head'
import TopNav from './TopNav';
// import { } from 'antd';
import './MainLayout.scss';
import Router from 'next/router'
import log from './../../utils/debugTools'
// import './../../style/common.scss'
// import Head from 'next/head'


// Router.events.on('routeChangeComplete', url => {
//   console.log('router changed:', url)
// })


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
        {/* <Head>
          <title>next demo</title>
        </Head> */}
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

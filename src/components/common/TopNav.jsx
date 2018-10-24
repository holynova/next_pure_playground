import React, { Component } from 'react';
import propTypes from 'prop-types';
// import { } from 'antd';
import './TopNav.scss';
import Link from 'next/link'

class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() { }
  componentWillReceiveProps(nextProps) { }
  render() {
    return (
      <div className='TopNav'>
        {/* TopNav */}
        <ul>
          <li>
            <Link href='./' >home</Link>
          </li>
          <li>
            <Link href='./about'>about</Link>
          </li>
        </ul>
      </div>
    );
  }
}
TopNav.propTypes = {};
TopNav.defaultProps = {};
export default TopNav;

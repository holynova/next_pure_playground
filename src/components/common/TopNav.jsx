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
            <Link href='/' ><a>home</a></Link>
          </li>
          <li>
            <Link href='/about'><a>about</a></Link>
          </li>
          <li>
            <Link href='/sub/a'><a>A</a></Link>
          </li>
          <li>
            <Link href='/sub/b'><a>B</a></Link>
          </li>
          <li>
            <Link href='/sub/c/c'><a>C</a></Link>
          </li>
        </ul>
      </div>
    );
  }
}
TopNav.propTypes = {};
TopNav.defaultProps = {};
export default TopNav;

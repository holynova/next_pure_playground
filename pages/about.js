import React, { Component } from 'react';
import propTypes from 'prop-types';
import TopNav from '../src/components/common/TopNav';
import MainLayout from '../src/components/common/MainLayout';
import { ajax, ajaxAsync } from './../src/utils/request'
// import { } from 'antd';
// import './AboutPage.scss';
const name = 'about.js'
class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
    console.log(name + ' did mount')
  }

  genPostPart = (arr) => {
    let result = 'no data'
    if (Array.isArray(arr) && arr.length > 0) {
      let list = arr.map(u => {
        const { id, title, body } = u
        return (
          <li key={id} >
            <span>{title}</span>
            <span> | </span>
            {/* <span>{body}</span> */}
          </li>
        )
      })
      result = (
        <ul>
          {list}
        </ul>
      )
    }
    return result

  }
  static async getInitialProps(props) {
    console.log(name + ' getInitialProps')
    let config = {
      url: 'https://jsonplaceholder.typicode.com/posts',
    }
    let [error, res] = await ajaxAsync(config)
    let data
    if (!error) {
      data = res.data
    }
    return { data }
    return {}
  }

  render() {
    return (
      <MainLayout>
        AboutPage
        {/* <img></img> */}
        {this.genPostPart(this.props.data)}
      </MainLayout>

    );
  }
}
AboutPage.propTypes = {};
AboutPage.defaultProps = {};
export default AboutPage;

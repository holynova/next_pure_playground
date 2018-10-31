import React, { Component } from 'react';
import propTypes from 'prop-types';
// import { } from 'antd';
// import './Main.scss';
import Demo from './../src/components/demo/Demo.jsx'
import TopNav from './../src/components/common/TopNav.jsx'
import MainLayout from '../src/components/common/MainLayout.jsx';
import { ajax, ajaxAsync } from './../src/utils/request.js'
import { connect } from 'react-redux'
import Counter from '../src/components/counter/Counter.jsx';

const name = "index.js"
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    console.log(name + ' did mount')
    // this.requestData()
  }


  requestData = async () => {
    console.log('request data ')
    let config = {
      url: 'https://jsonplaceholder.typicode.com/users',
    }
    let [error, res] = await ajaxAsync(config)
    this.setState({
      data: res.data
    })
  }
  // static async getInitialProps(props) {
  //   console.log(name + ' getInitialProps')
  //   return {}

  // }
  // componentWillReceiveProps(nextProps) { }
  genUserPart = (users) => {
    let result = 'no data'
    if (Array.isArray(users) && users.length > 0) {
      let list = users.map(u => {
        const { id, name, email } = u
        return (
          <li key={id} >
            <span>{name}</span>
            <span> | </span>
            <span>{email}</span>
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
  render() {
    return (
      <MainLayout>
        {/* <Demo></Demo> */}
        <Counter></Counter>
        {/* {this.genUserPart(this.state.data)} */}
      </MainLayout>
      // <div>Main</div>
    );
  }
}



Main.getInitialProps = async function (props) {
  console.log(name + ' getInitialProps')
  return {};
  // let config = {
  //   url: 'https://jsonplaceholder.typicode.com/users',
  // }
  // let [error, res] = await ajaxAsync(config)
  // let data
  // if (!error) {
  //   data = res.data
  // }
  // return { data }
}

const mapStateToProps = (state) => {
  return state
}
Main.propTypes = {};
Main.defaultProps = {};
export default connect(mapStateToProps)(Main);

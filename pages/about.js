import React, { Component } from 'react';
import propTypes from 'prop-types';
import TopNav from '../src/components/common/TopNav';
import MainLayout from '../src/components/common/MainLayout';
// import { } from 'antd';
// import './AboutPage.scss';

class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  // componentDidMount() { }
  // componentWillReceiveProps(nextProps) { }
  render() {
    return (
      <MainLayout>
        AboutPage
      </MainLayout>

    );
  }
}
AboutPage.propTypes = {};
AboutPage.defaultProps = {};
export default AboutPage;

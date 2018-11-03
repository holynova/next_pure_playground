// import React, { Component } from 'react'
import App, { Container } from 'next/app'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
// import { createStore } from 'redux'
// import reducer from './../src/redux/reducer'
// import thunk from 'redux-thunk'
// import { applyMiddleware } from 'redux'
// import createSagaMiddleware from 'redux-saga'
// import sagas from './../src/redux/sagas'
import configureStore from './../src/redux/store'


// // 这是简化后的 redux-thunk
// const thunk1 = ({ dispatch, getState }) => next => action => {
//   if (typeof action === 'function') {
//     return action(dispatch, getState);
//   }
//   return next(action);
// };

// function thunk({ newDispatch, getState }) {
//   return function (originDispatch) {
//     const nextDispatch = function (action) {
//       if (typeof action === 'function') {
//         return action(newDispatch, getState);
//       }
//       return originDispatch(action);
//     }
//     return nextDispatch
//   }
// }



// const makeStore = (initialState, options) => {
//   return createStore(
//     reducer,
//     initialState,
//     applyMiddleware(thunk, createSagaMiddleware(sagas)))
// }

class MyApp extends App {
  // static async getInitialProps({ Component, ctx }) {
  //   const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  //   return { pageProps };
  // }
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps, store } = this.props
    return (
      <Container>
        <Provider store={store} >
          <Component {...pageProps} ></Component>
        </Provider>
      </Container>
    )
  }
}

export default withRedux(configureStore)(withReduxSaga({ async: true })(MyApp))
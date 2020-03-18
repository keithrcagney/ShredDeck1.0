import React from "react";
import render from "react-dom";
import Provider from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from 'redux-thunk'
// import {createLogger} from 'redux-logger'
// import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import * as App from "../App.jsx";
import reducers from "../reducers/index";

// const loggerMiddleware = createLogger();
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

//wrap provider in BrowserRouter tags if using React Router down the line
render(
    <Provider store={store}>
      <App/>
    </Provider>,
  document.querySelector('#contents')
);

export default store;
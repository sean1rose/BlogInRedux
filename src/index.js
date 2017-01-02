/* 
***WIRING UP REACT ROUTER so it's in charge of what components are disp;ayed based on the url***
Need to replace App component w/ an instance of react-router
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

// import App from './components/app';
// ^ going to render App component in diff location. Replacing it w/ instance of react-router

import { Router, browserHistory } from 'react-router';
// router obj decides what react components to render when url changes
// browserHistory is an obj that tells react-router how to interpret changes to the url
  // http://www.blog.com/posts/5
    // whenever anything after ".com/" changes
// hashistory -> then anything after "#" e.g. http://www.blog.com/#posts/5

// ***need to tell react router what url forms are valid and what components to show for each of them
  // config router to tell it what are the valid urls and what to show for each one
  

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
   {/*
      <App /> 
        ^ Replacing App Component w/ Router, which passes off control of rendering application to our router
  */}
    <Router history={browserHistory} />
  </Provider>
  , document.querySelector('.container'));

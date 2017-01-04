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

// ***React-router Config:
  // config router to tell it what are the valid urls and what components to show for each one
  // ---> ***DONE in routes.js, which is imported below***
import routes from './routes';
  // ^ feed routing mapping into the wrapper -> will be routes attribute on Router component...

import promise from 'redux-promise';
// ^ ensures that all of our actions flow thru promise middleware b4 hitting our reducers
  
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
   {/*
      <App /> 
        ^ Replacing App Component w/ Router, which passes off control of rendering application to our router
        Also pass in browserHistory object to use entire url to figure out where we are (could also use hashistory, which is similar)
  */}
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));

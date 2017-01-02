// *** This is ourrouter-config: our mapping - what component to show for each url
// basically mapping route --> component
// can nest routes to define more complex urls
// ***whenever we want a parent route to render a nested child route, parent needs to reference {this.props.children} in the render method

import React from 'react';
import { Route, IndexRoute } from 'react-router';
// ***Route object will be used to define a match b/w a url and a component
// *note that react-router gives user the IMPRESSION that they're naigating to diff web pages, but really just staying on 1 page and swapping out what's rendered to make it seem like user is navigating to diff pages

import App from './components/app';
// ^ our initial component that we were rendering before

import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';

// *** Greeting as child route EXAMPLE:

// const Greeting = () => {
//   return <div>Hey there!</div>;
// }

// MAPPING: 
// 1st route: Home directory
// path -> urls/routes in our app
// *note: want to make sure that single App component is the root container of our app (allows us to easily add header or footer component)
  // use IndexRoute -> helper that behaves liek a route, but it's shown whenever a url is matches a path defined by a parent but not 1 of the children
    // so now, if the path is "/" -> show both App component and PostsIndex component
/*
export default (
  <Route path="/" component={App} >
    <IndexRoute component={PostsIndex} />
    <Route path="greet" component={Greeting} />
    <Route path="greet2" component={Greeting} />
    <Route path="greet3" component={Greeting} />
  </Route >
)
*/
// ^ top level Route matches the path-url "/" to component "App"
  // need to make sure that react-router in index.js knows about the mapping, so export it

// note the NESTING of routes (greet component is nested w/in App -> parent/child r/s)
  // ***when we want a parent route to render a nested child route (want App to render greeting child component) -> need to reference {this.props.children} in parent's render method
  // e.g. nested children components are rendered by parent component route via {this.props.children}


// END OF EXAMPLE ^^^, no longer using faux greet component

export default (
  <Route path="/" component={App} >
    <IndexRoute component={PostsIndex} />
    <Route path="posts/new" component={PostsNew} />
  </Route>
)

// ***5 step process to implement creating new post feature (using a FORM) ... ('/posts/new'). This process goes for creating any new feature using react-router***
/*
  1. scaffold out component used to show the form (posts/new component)
    a) create new file in components directory
  2. add component to routes file as a new url that user can navigate to (cuz want user to be able to see component whenever naviate to 'posts/new')
    a) need to define a new route-mapping in our router
  3. implement a button in posts_index component that allows user to navigate to the create form (Add Post button on index page)
    a) use React-router's Link component in posts_index file
  4. add actual form to posts/new component (whenever user submits the form, calls an action creator that makes a POST request to save the blog post)
  5. create the action creator and update the reducer
*/
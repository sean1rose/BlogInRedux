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

import PostsShow from './components/posts_show';

// *** Greeting as child route EXAMPLE:

// const Greeting = () => {
//   return <div>Hey there!</div>;
// }

// MAPPING: 
// 1st route: Home directory
// path -> urls/routes in our app
// *note: want to make sure that single App component is the root container of our app (allows us to easily add header or footer component)
  // always showing App component (core container) -> its job was to show children/nested components
  // use IndexRoute -> helper that behaves like a route, but it's shown whenever a url is matches a path defined by a parent but not 1 of the children
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
    <Route path="posts/:id" component={PostsShow} />
  </Route>
)

// ***5 step process to implement creating new post feature (using a FORM) ... ('/posts/new'). This process goes for creating any new feature using react-router***
/*
  1. scaffold out component used to show the form (posts/new component)
    a) create new file in components directory
  2. add component to routes file as a new url that user can navigate to (cuz want user to be able to see component whenever naviate to 'posts/new')
    a) need to define a new route-mapping in our router
  3. implement a button in posts_index component that allows user to navigate to the create form (Add Post button on index page)
    a) use React-router's Link component in posts_index file. Route is set up in routes.js but button Link component is in posts_index component.
  4. add actual form to posts/new component (whenever user submits the form, calls an action creator that makes a POST request to save the blog post). Include form validation.
    STEPS TO IMPLEMENTING REDUX-FORM: - 1) hook formReducer as part of rootReducer. 2) config form in the form component using 'reduxForm' obj. 3) build out actual form user is working with
      4) wire up reduxForm config with individual inputs w/in our form using props-helpers (just like connect) -> this.props.handleSubmit
      5) create action creator in actions index file 6) pass in action creator into handleSubmit on onSubmit event handler (need an action creator that takes in form properties to pass onto the backend)
      6a. pass in action creator into handleSubmit func (redux-form will validate inputs and then call action creator w/ passed in data)
      6b. do 6a by using reduxForm rather than connect to inject action creator into component (both have same behavior - can be used to inject actionCreators into our component; diff is that reduxForm has 1 additional argument [the config obj])
        // connect: first arg is mapStateToProps, 2nd is mapDispatchToProps
        // reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
          // in our example below, no 2nd arg (it's null - mapStateToProps isn't necessary), 3rd arg is just the createPost actionCreator
          // 6c. insert this.props.createPost into handleSubmit
      // when the form is submitted, handleSubmit is called w/ the contents of the form. If form is valid -> it calls actionCreator w/ contents of the form. Object goes into actionCreator as props -> then posted to the backend
      7. validate form (add validate fun to reduxForm config obj; add property to errors object in validate func; use jsx to show error inside of render method - to show invalidation)
      8. want to navigate user back to index view after clicking submit (w/o using Link), we need react-router
        use react-router's push method
        gain access to react-router by defining contextTypes property on the class
        then extract out submission action into separate helper function called onSubmit, 
        we called action creator (createPost), then chain onto that (using then) the calling of our router w/ the path to push to (this.context.router.push('/'))
  5. create the action creator and update the reducer
*/


// ***Also want to create a new route for clicking on an listed item/blog entry on posts_index page
  // using PARAMS -> use :id to grab individual post
  // <Route path="posts/:id" component={PostsShow} />
  // ->  this.props.PARAMS.id
// also create the new posts_show component
// going to use params to make sure we fetch the correct post id
// add Link to post params in posts_index component
  // <Link to={"posts/" + post.id}></Link>
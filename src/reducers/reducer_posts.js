// When writing reducers -> want to make sure to have a good idea of the structure of your app state from day 1
  // look at mockup and determine what our states are gonna be (modify INITIAL_STATE accordingly)
    // our index page shows list of diff blog posts -> need either obj or ARRAY to hold all blog posts
    // single blog post -> only one that shows actual content so...
      // ***gonna need state for active single post vs state for all posts

import { FETCH_POSTS } from '../actions/index';
// need to import the action we just created

// all -> list of blog posts in array form
// post -> active individual post (show action)
const INITIAL_STATE = { all: [], post: null };

// reducer function w/ switch statement for all diff types of actions
export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_POSTS:

    default:
      return state;
  }
} 
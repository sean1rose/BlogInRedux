// When writing reducers -> want to make sure to have a good idea of the structure of your app state from day 1. Want to know when to call action creator to fetch data...
  // look at mockup and determine what our states are gonna be (modify INITIAL_STATE accordingly)
    // our index page shows list of diff blog posts -> need either obj or ARRAY to hold all blog posts
    // single blog post -> only one that shows actual content so...
      // ***gonna need state for active single post vs state for all posts

import { FETCH_POSTS } from '../actions/index';
// need to import the action we just created

// 2 pieces of APP STATE:
  // all -> list of blog posts in array form
  // post -> active individual post (show action)
const INITIAL_STATE = { all: [], post: null };

// reducer function w/ switch statement for all diff types of actions
// remember: via redux-promise, data will be available on action.payload.data
export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_POSTS:
      // return new obj, with current state + new payload (of fetched posts) tacked on...
      return { ...state, all: action.payload.data };
    default:
      return state;
  }
} 
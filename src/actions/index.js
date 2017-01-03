// define an action creator to grab our list of blog posts from our api
import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=sean';

// this will reach out to our API, make the request, return an action w/ the request as the payload, and redux-promise will unwrap the promise and data will flow to the reducers
export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  }
}
// ^ when and where will this action be called?? when do we want to fetch our data? want it in root route...
  // https://www.udemy.com/react-redux/learn/v4/t/lecture/4419866
  // w/ our weather app -> user would click search button (a very distinct event) to call the action creator of fetching app data
  // our current app -> want to fetch data soon as we navigate to PostsIndex component
    // need to fetch data whenever url changes...
      // ***so use the REACT LIFECYCLE METHOD -> COMPONENTWILLMOUNT***


// this action creator is for submitting our redux form (passed in arguments containing object-field-properties)
// want to eventually hand this action creator into handleSubmit function in posts_new redux-form 
export function createPost(props) {
  // pass props into post request as 2nd argument of axios.post()
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

  return {
    type: CREATE_POST,
    payload: request
  }
}

// action creator for ffetching a single post
export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
  
  return {
    type: FETCH_POST,
    payload: request
  }
}
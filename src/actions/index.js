// define an action creator to grab our list of blog posts from our api
import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

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
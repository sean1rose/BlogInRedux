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
// ^ when and where will this action be called?? when do we want to fetch our data? want it in root route...
  // https://www.udemy.com/react-redux/learn/v4/t/lecture/4419866
  // w/ our weather app -> user would click search button (a very distinct event) to call the action creator of fetching app data
  // our current app -> want to fetch data soon as we navigate to PostsIndex component
    // need to fetch data whenever url changes...
      // ***so use the REACT LIFECYCLE METHOD -> COMPONENTWILLMOUNT***
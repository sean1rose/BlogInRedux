import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';

// whenever a user wants to view this compoent -> want to do a get request and fetch this particular post w/ id
  // 1. need an action creator to fetch a single post in actions index
  // 2. then make sure to collect data for action creator in reducer
  // 3. make use of action creator upon render of this component (need to connect to store)
class PostsShow extends Component {
  componentWillMount() {
    // pull id out of url, pass it to fetchPost, which makes the backend request, reducer picks up resolved promise, then want to show it here
    this.props.fetchPost(this.props.params.id);
  }
  
  render() {
    return <div>Show post {this.props.params.id}</div>;
  }
}

export default connect(null, { fetchPost })(PostsShow);
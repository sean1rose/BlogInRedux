// the center of our index route of showing list of posts to user. This container will call action creator to fetch array of posts data
// ***will need to become a redux-container. Steps to do so:
  // import connect, import action creator, define mapDispatchToProps function, then connect to component

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';
// ^ is an actual react component that is an actual <a> tag, that will link to the new route...

class PostsIndex extends Component {
  // calls this lifecycle method whenever component is about to be rendered to the DOM (only called once) -> perfect place to call fetch data action creator
  componentWillMount() {
    // want to call fetchPosts action creator here to get all posts data, so need to promote this from a component to a redux container
    this.props.fetchPosts();
  }
  // need to render ^ these fetched posts via mapStateToProps
    // https://www.udemy.com/react-redux/learn/v4/t/lecture/4419898

  // helper func to help build our list
  renderPosts() {
    //list of posts is available as an array (this.props.posts)
    // available cuz of mapStateToProps, which makes posts available on this.props
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={"posts/" + post.id}>
            <div className="linkgroupitem">
              <strong className="post-title">{post.title}</strong>
              <span className="float-xs-right">{post.categories}</span>
            </div>
          </Link>
        </li>
      )
    })
  }


  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>

    )
  }
}

function mapStateToProps(state) {
  // posts are available on state
  return { posts: state.posts.all };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts }, dispatch);
// }
// ^ instead of binding action creators, use shortcut of obj w/ fetchPosts so don't need boilerplate of mapDispatchToProps...
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
// ^^ last 2 steps of connecting mapDispatchToProps to the component thus allows us to call fetchPosts action creator in the component
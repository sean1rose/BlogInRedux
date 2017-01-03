// Step 1 of implementing create new post form...
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
// ^ reduxForm obj is analogous to connect function from react-redux library -> use it to wrap PostsNew component

class PostsNew extends Component {
  render() {
    return (
      <form>
        <h3>Create A New Post</h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea type="text" className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

// pass in config to reduxForm
  // here's what the form is gonna be called
  // here's the fields that you're going to be in charge of
    // 1. name form; 2. decleare an array of fields for the form; 3. build actual html form that user is working with (3 inputs) (see render function above)
    // 4. wire up reduxForm config with individual inputs w/in our form
export default reduxForm({
  form: 'PostsNew',
  fields: ['title', 'categories', 'content']
})(PostsNew);

/*
***whenever user makes changes to form inputs, it's actually making changes to global app state object (not just compoent-level state) (it's affecting the form component of rootReducer)
Example:
state === {
  form: {
    PostsNewForm: {
      titel: '...',
      categories: '...',
      content: '...'
    }
  }
}
*/
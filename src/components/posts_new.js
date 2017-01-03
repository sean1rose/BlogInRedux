// Step 1 of implementing create new post form...
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
// ^ reduxForm obj is analogous to connect function from react-redux library -> use it to wrap PostsNew component
  // reduxForm injects props-helpers into our component (just like connect)
// we tell redux-form what fields we have, then redux-form gives us helpers/sets of rules for managing these inputs
  // these are also available as this.props.fields

class PostsNew extends Component {
  render() {
    // CONFIG OBJECTS (provide a bunch of handler functions): 
    const { fields: { title, categories, content }, handleSubmit } = this.props;
    // same as ^ -> const handleSubmit = this.props.handleSubmit; -> what we want to call when form is submitted
      // same as const title = this.props.fields.title
    // ****IMPORTANT STEP: pass entire config object into input tag as a property {...title} -> destructuring of object ensures that all properties on title object show up on input
    return (
      <form onSubmit={handleSubmit}>
        <h3>Create A New Post</h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
        </div>
        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea type="text" className="form-control" {...content}/>
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
    // 4. wire up reduxForm config with individual inputs w/in our form so that all form elements are now managed by redux-form (redux-form provides config options on this.props) (pass entire config object into input tag as a property using obj destructuring)
export default reduxForm({
  form: 'PostsNew',
  fields: ['title', 'categories', 'content']
})(PostsNew);
// reduxForm injects props-helpers into our component (just like connect) -> this.props.handleSubmit

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
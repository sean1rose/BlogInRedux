// Step 1 of implementing create new post form...
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
// ^ reduxForm obj is analogous to connect function from react-redux library -> use it to wrap PostsNew component
  // reduxForm injects props-helpers into our component (just like connect)
// we tell redux-form what fields we have, then redux-form gives us helpers/sets of rules for managing these inputs
  // these are also available as this.props.fields
  // so redux-form handles the inputs and the onSubmit 

import { createPost } from '../actions/index';
// post request action creator

class PostsNew extends Component {
  render() {
    // CONFIG OBJECTS (provide a bunch of handler functions): 
    const { fields: { title, categories, content }, handleSubmit } = this.props;
    // same as ^ -> const handleSubmit = this.props.handleSubmit; -> what we want to call when form is submitted
      // same as const title = this.props.fields.title
    // ****IMPORTANT STEP: pass entire config object into input tag as a property {...title} -> destructuring of object ensures that all properties on title object show up on input
    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create A New Post</h3>

        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">
          {title.touched ? title.error : ''}
          </div>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
          <div className="text-help">
          {categories.touched ? categories.error : ''}
          </div>
        </div>

        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label>Content</label>
          <textarea type="text" className="form-control" {...content}/>
          <div className="text-help">
          {content.touched ? content.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

// for step 7 - validating form...
function validate(values) {
  const errors = {};

  // add property to errors obj
  // if title doesn't exist -> add prop to errors object w/ key 'title'
  // error is now available in render method by using {title.error}
  // use '"property".touched' (aka title.touched, content.touched, etc) prop IN RENDER METHOD (using ternary operator) so validation error isn't activated til form input is touched by user
  // also use 'property.invalid' prop to add class to the div
  if (!values.title) {
    errors.title = 'Enter a username';
  }

  if (!values.categories) {
    errors.categories = 'Enter categories';
  }

  if (!values.content) {
    errors.content = 'Enter some content';
  }

  // if obj has a truthy key that matches 1 of our field names -> redux form will stop form submission
  return errors;
}


// pass in config to reduxForm
  // here's what the form is gonna be called
  // here's the fields that you're going to be in charge of
  // STEPS TO IMPLEMENTING REDUX-FORM:
    // 1. name form; 2. decleare an array of fields for the form; 3. build actual html form that user is working with (3 inputs) (see render function above)
    // 4. wire up reduxForm config with individual inputs w/in our form so that all form elements are now managed by redux-form (redux-form provides config options on this.props) (pass entire config object into input tag as a property using obj destructuring)
    // 5. create action creator that will make post request for us (to be used in this form); 6a. pass in action creator into handleSubmit func (redux-form will validate inputs and then call action creator w/ passed in data)
    // 6b. do 6a by using reduxForm rather than connect to inject action creator into component (both have same behavior - can be used to inject actionCreators into our component; diff is that reduxForm has 1 additional argument [the config obj])
      // connect: first arg is mapStateToProps, 2nd is mapDispatchToProps
      // reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
        // in our example below, no 2nd arg (it's null - mapStateToProps isn't necessary), 3rd arg is just the createPost actionCreator
      // source: https://www.udemy.com/react-redux/learn/v4/t/lecture/4419888
    // 6c. insert this.props.createPost into handleSubmit
      // when the form is submitted, handleSubmit is called w/ the contents of the form. If form is valid -> it calls actionCreator w/ contents of the form. Object goes into actionCreator as props -> then posted to the backend
    // 7. validate form (add validate fun to reduxForm config obj; add property to errors object in validate func; use jsx to show error inside of render method - to show invalidation)

export default reduxForm({
  form: 'PostsNew',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsNew);
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
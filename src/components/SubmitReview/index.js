import React, { Component } from 'react';
import 'src/stylesheets/SubmitReview.scss';

class SubmitReview extends Component {
  render () {
    return (
      <div className='submit_form'>
        <header>
          <div className='wrapper'>
            <h1>Submit Your Own</h1>
          </div>
        </header>
        <div className='container'>
          <section className='add-item'>
            <form>
              <input type="text" name="location_name" placeholder="What's the name of the place?" />
              <input type=:"text" name="geolocation" placeholder="Where is it located?" />
              <input type="text" name="stars" placeholder="How many stars?" />
              <input type="text" name="review_description" placeholder="Details! How was the broccoli cheddar soup? List things you liked about it, things you didn't like, what you would improve, etc." />
              <button>Add Review</button>
            </form>
          </section>
          <section className='display-item'>
            <div className='wrapper'>
            <ul>
            </ul>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default SubmitReview;

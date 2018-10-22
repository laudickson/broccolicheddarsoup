import React from 'react';
import PropTypes from 'prop-types';

const SubmitForm = props => (
  <form onSubmit={props.submitComment}>
    <input
      type="text"
      name="author"
      placeholder="Your name…"
      value={props.author}
      onChange={props.handleChangeText}
    />
    <input
      type="text"
      name="text"
      placeholder="Say something..."
      value={props.text}
      onChange={props.handleChangeText}
    />
    <button type="submit">Submit</button>
  </form>
);

SubmitForm.propTypes = {
  submitComment: PropTypes.func.isRequired,
  handleChangeText: PropTypes.func.isRequired,
  text: PropTypes.string,
  author: PropTypes.string,
};

SubmitForm.defaultProps = {
  text: '',
  author: '',
};

export default SubmitForm;

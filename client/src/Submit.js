import React, { Component } from 'react';
import 'whatwg-fetch';
import SubmitForm from './SubmitForm';
import './stylesheets/SubmitForm.scss';

class Submit extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      error: null,
      author: '',
      comment: '',
      updateId: null,
    };
    this.pollInterval = null;
  }

 onChangeText = (e) => {
    const newState = { ...this.state };
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  submitComment = (e) => {
    e.preventDefault();
    const { author, text, updateId } = this.state;
    if (!author || !text) return;
    if (updateId) {
      this.submitUpdatedComment();
    } else {
      this.submitNewComment();
    }
  }

  submitNewComment = () => {
    const { author, text } = this.state;
    const data = [...this.state.data, { author, text, _id: Date.now().toString() }];
    this.setState({ data });
    fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ author, text }),
    }).then(res => res.json()).then((res) => {
      if (!res.success) this.setState({ error: res.error.message || res.error });
      else this.setState({ author: '', text: '', error: null });
    });
  }

  submitUpdatedComment = () => {
    const { author, text, updateId } = this.state;
    fetch(`/api/comments/${updateId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ author, text }),
    }).then(res => res.json()).then((res) => {
      if (!res.success) this.setState({ error: res.error.message || res.error });
      else this.setState({ author: '', text: '', updateId: null });
    });
  }

  render() {
    return(
      <div>
        <h2>SUBMIT YO OWN!</h2>

        <div className='form'>
          <SubmitForm
            author={this.state.author}
            text={this.state.text}
            handleChangeText={this.onChangeText}
            submitComment={this.submitComment}
          />
        </div>
        {this.state.error && <p>{this.state.error}</p>}
      </div>
    )
  }
}

export default Submit;

import React, { Component } from 'react';
import Typed from 'typed.js';

class Home extends Component {
  componentDidMount(){
    const options = {
      strings: [
        '^1000 Hi there! ^1000 \n Welcome to a blog where I give my honest opinion about broccoli cheddar soups around the area!'
      ],
      typeSpeed: 20
    };

    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount(){
    this.typed.destroy();
  }

  render() {
    return (
      <div>
        <div className='greeting-container'>
          <span className='greeting' ref={(el) => { this.el = el; }}/>
        </div>
      </div>
    );
  }
}

export default Home;

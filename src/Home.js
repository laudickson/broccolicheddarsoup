import React, { Component } from 'react';
import Typed from 'typed.js';

class Home extends Component {
  componentDidMount(){
    const greeting = {
      strings: [
        '^1000 Hi there! ^1000 Welcome to a blog where I give my honest opinion about broccoli cheddar soups around the area!'
      ],
      typeSpeed: 20
    };

    this.typed = new Typed(this.el, greeting);
  }

  componentWillUnmount(){
    this.typed.destroy();
  }

  render() {
    return (
      <div>
        <div className='typed-container'>
          <span ref={(el) => { this.el = el; }}/>
        </div>
      </div>
    );
  }
}

export default Home;

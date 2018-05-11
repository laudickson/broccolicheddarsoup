import React, { Component } from 'react';
import Typed from 'typed.js';

class Home extends Component {
  componentDidMount(){
    const options = {
      strings: [
        '^1000 Hi there! ^1000 \n Welcome to a blog where I give my honest opinion about broccoli cheddar soups around the area ^300 (maybe around the world too)!'
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
        <span ref={(el) => { this.el = el; }}/>
      </div>
    );
  }
}

export default Home;

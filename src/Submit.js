import React, { Component } from 'react';
import Typed from 'typed.js';

class Submit extends Component {
  componentDidMount(){
    const syo_greeting = {
      strings: [
        "^1000 Recently had some broccoli cheddar? ^750 Was it good? ^1000 Snap a photo and submit your own review! ^2000 (yes I will be moderating so troll all you want.)"
      ],
      typeSpeed: 20
    };

    this.typed = new Typed(this.el, syo_greeting)
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

export default Submit;

import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';
import Home from './Home';
import Submit from './Submit';

class Navigation extends Component {
  render() {
    return(
      <HashRouter>
        <div>
          <div className='header'>
            <div className='navigation-button'>
              <NavLink exact to='/'>Home</NavLink>
            </div>
            <div className='navigation-button'>
              <NavLink to='/submit'>Submit Your Own</NavLink>
            </div>
          </div>
          <div className='content'>
            <Route exact path="/" component={Home}/>
            <Route path="/submit" component={Submit}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Navigation;

import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Reviews from "./Reviews";
import Submit from "./Submit";

class Main extends Component {
  render() {
    return(
      <HashRouter>
        <div>
          <ul className='header'>
            <li><NavLink exact to='/'>Home</NavLink></li>
            <li><NavLink to='/reviews'>Reviews</NavLink></li>
            <li><NavLink to='submit'>Submit Your Own</NavLink></li>
          </ul>
          <div className='content'>
            <Route exact path="/" component={Home}/>
            <Route path="/reviews" component={Reviews}/>
            <Route path="/submit" component={Submit}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;

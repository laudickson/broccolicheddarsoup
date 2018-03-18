import React, { Component } from "react";

class Main extends Component {
  render() {
    return(
      <div>
        <h1>Broccoli Cheddar Reviews</h1>
        <ul className="header">
          <li><a href="/">Home</a></li>
          <li><a href="/reviews">Reviews</a></li>
          <li><a href="/submit">Submit Your Own</a></li>
        </ul>
        <div className="content"></div>
      </div>
    );
  }
}

export default Main;

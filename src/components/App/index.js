import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withFirebase } from 'components/Firebase';

import Navigation from 'components/Navigation';
import { AuthUserContext } from 'components/Session';

import 'stylesheets/App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(
      authUser => {
        authUser ? this.setState({ authUser }) : this.setState({ authUser: null });
      }
    );
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    return(
      <AuthUserContext.Provider value={this.state.authUser}>
        <Router>
          <div>
            <Navigation authUser={this.state.authUser} />
          </div>
        </Router>
      </AuthUserContext.Provider>
    );
  }
} 

export default withFirebase(App);

import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
 } from 'react-router-dom';

import Navigation from 'components/Navigation';

const App = () => (
  <Router>
    <Navigation />
  </Router>
);

export default App;

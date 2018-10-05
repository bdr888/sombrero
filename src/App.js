import React, { Component } from 'react';
import { Router, Link } from '@reach/router';
import Home from './Home';
import Artist from './Artist';

class App extends Component {
  render() {
    return (
      <Router>
        <Home path="/" />
        <Artist path=":artistId" />
      </Router>
    );
  }
}

export default App;

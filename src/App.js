import React, { Component } from 'react';
import { Router, Link } from '@reach/router';
import Home from './Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router rel="noopener noreferrer">
        <Home path="/"/>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Router } from '@reach/router';
import { Wrapper } from './App.styled';
import Header from './Header';
import Home from './Home';
import Artist from './Artist';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Router>
          <Home path="/" />
          <Artist path=":artistId" />
        </Router>
      </Wrapper>
    );
  }
}

export default App;

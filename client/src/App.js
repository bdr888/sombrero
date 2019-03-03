import React, { Component } from 'react';
import { Router } from '@reach/router';
import { Wrapper } from './App.styled';
import Header from './Header';
import Artists from './Artists/Artists';
import Artist from './ArtistPage/Artist';
import About from './About/About';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Router>
          <Artists path="/" />
          <Artist path=":artistId" />
          <About path="/about" />
        </Router>
      </Wrapper>
    );
  }
}

export default App;

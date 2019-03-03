import React, { Component } from 'react';
import { Router } from '@reach/router';
import { Wrapper } from './App.styled';
import Header from './Header';
import Artists from './Artists/Artists';
import Artist from './ArtistPage/Artist';
import About from './About/About';
import Gallery from './Gallery/Gallery';
import Listen from './Listen/Listen';
import Home from './Home/Home';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Router>
          <Home path="/" />
          <About path="/about" />
          <Artists path="/artists" />
          <Artist path=":artistId" />
          <Gallery path="/gallery" />
          <Listen path="/listen" />
        </Router>
      </Wrapper>
    );
  }
}

export default App;

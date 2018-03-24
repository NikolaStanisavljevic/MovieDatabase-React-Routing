import React, { Component } from 'react';
import './App.css';
import MovieDatabase from './containers/MovieDatabase/MovieDatabase';


class App extends Component {
  render() {
    return (
      <div className="App">
        <MovieDatabase />
      </div>
    );
  }
}

export default App;

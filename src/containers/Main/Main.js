import React, { Component } from 'react';
import MovieDatabase from '../MovieDatabase/MovieDatabase';
import {Route} from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <Route path="/" exact component={MovieDatabase} />
      
    )
  }
}

export default Main;

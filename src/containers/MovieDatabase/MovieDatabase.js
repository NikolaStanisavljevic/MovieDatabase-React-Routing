import React, { Component } from 'react';
import Form from '../../components/Form/Form';

export class MovieDatabase extends Component {
  state = {
    movie : []
  }

  render() {
    return (
      <div>
        <Form />
      </div>
    )
  }
}

export default MovieDatabase

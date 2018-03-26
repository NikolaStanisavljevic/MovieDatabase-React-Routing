import React, { Component } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import Form from '../../components/Form/Form';



class MovieDatabase extends Component {

  state = {
    movies : ['movie-1','movie-2'],
    movieName : ''
  }

  addMovie = (movie) => {
    const newMovies = [...this.state.movies]
    newMovies.push(movie)
    this.state.movies.push(movie)
    this.setState({
      movies: newMovies
    })
    this.setState({
      movieName: ''
    })
  }

  setMovie = (event) => {
    this.setState({
      movieName: event.target.value
    })
   
  }

  render() {
    return (
      <div>
        <Form setMovie= {this.setMovie} value={this.state.movieName} addMovie={this.addMovie}/>
        <MovieList 
        movies={this.state.movies} />
      </div>
    )
  }
}

export default MovieDatabase;

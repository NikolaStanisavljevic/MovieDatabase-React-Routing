import React, { Component } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import Form from '../../components/Form/Form';



class MovieDatabase extends Component {

  state = {
    movies : [
      { name: 'Movie1', id: 'some date' }
    ],
    movieName : ''
  }

  addMovie = (movie) => {
    const newMovies = [...this.state.movies]
    if (movie.length > 0) {
        newMovies.push({ name: movie, id:  new Date() })
        this.setState({
          movies: newMovies
        })
        this.setState({
          movieName: ''
        })
    } else {
      this.setState({
        movies: newMovies
      })
    }   
  }

  setMovie = (event) => {
    this.setState({
      movieName: event.target.value
    })
  }

  deleteMovie = (id) => {
    const newMovies = [...this.state.movies]
    for(let i=0; i < newMovies.length; i++){
      if(newMovies[i].id === id) {
        newMovies.splice(i, 1)
      }
    }
    this.setState({
      movies: newMovies
    })
  }
   

  render () {
    
    return (
      <div>
        <Form setMovie= {this.setMovie} value={this.state.movieName} addMovie={this.addMovie}/>
        <MovieList 
            movies={this.state.movies}
            delete={this.deleteMovie} />
      </div>
    )
  }
}

export default MovieDatabase;

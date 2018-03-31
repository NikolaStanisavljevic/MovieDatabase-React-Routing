import React, { Component } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import Form from '../../components/Form/Form';
import axios from 'axios';



class MovieDatabase extends Component {

  state = {
    movies : [
      { name: 'Movie1', id: 'some date' }
    ],
    movie: [],
    movieName : ''
  }

  // addMovie = (movie) => {
  //   const newMovies = [...this.state.movies]
  //   if (movie.length > 0) {
  //       newMovies.push({ name: movie, id:  new Date() })
  //       this.setState({
  //         movies: newMovies
  //       })
  //       this.setState({
  //         movieName: ''
  //       })
  //   } else {
  //     this.setState({
  //       movies: newMovies
  //     })
  //   }   
  // }

  addMovie1 = (event) => {
    const newMovie = [...this.state.movie]
    axios.get(`https://api.themoviedb.org/3/movie/${this.state.movieName}?&api_key=c14f219f034f43147391971bf0c07ba4`)
    .then(response=> {
      newMovie.push(response.data)
      this.setState({
        movie: newMovie
      });
    })
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
        <Form setMovie= {this.setMovie} value={this.state.movieName} addMovie={this.addMovie1}/>
        <MovieList 
            movies={this.state.movies}
            delete={this.deleteMovie} />
      </div>
    )
  }
}

export default MovieDatabase;

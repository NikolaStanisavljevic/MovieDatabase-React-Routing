import React, { Component } from 'react';
import MovieDatabase from './MovieDatabase/MovieDatabase';
import Collection from './Collection/Collection';
import {Route} from 'react-router-dom';
import axios from 'axios';

class Main extends Component {

  state = {
    movies : [],
    movie: [],
    movieName : '',
    error : false
  }

  // Get starting screen point (movie)

  componentDidMount() {
    const newMovie = []
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c14f219f034f43147391971bf0c07ba4&language=en-US&query=Inferno&page=1&include_adult=false`)
    .then(response=>{
      newMovie.push(response.data.results[0])
      this.setState({
        movie:newMovie
      });
    })
    .catch(error => {
      this.setState({
        error: true
      });
    })
    
  }

  // Handling user input on search button

  addMovie = (movie) => {
    const newMovies =[...this.state.movies];
    newMovies.push(this.state.movie);
    this.setState({
      movies: newMovies
    });
  }

  searchMovie = (event) => {
    const newMovie = []
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c14f219f034f43147391971bf0c07ba4&language=en-US&query=${this.state.movieName}&page=1&include_adult=false`)
    .then(response=> {
      newMovie.splice(0,1,response.data.results[0])
      this.setState({
        movie: newMovie,
        movieName: ''
      });
    })
    .catch(error => {
      this.setState({
        error: true
      });
    }
    )
  }

  // Storing user value of input field

  setMovie = (event) => {
    this.setState({
      movieName: event.target.value
    })
  }

  render() {

    return (
      
        // Passing props via react router

        <div>
            <Route path="/" exact render={()=><MovieDatabase 
                      error={this.state.error} 
                      movies={this.state.movies}
                      movie={this.state.movie}
                      movieName={this.state.movieName}
                      setMovie={this.setMovie}
                      searchMovie={this.searchMovie}
                      addMovie={this.addMovie}/>} />

            <Route path="/collection" exact render={()=><Collection  
                      movies={this.state.movies}
                      delete={this.deleteMovie}/>} />
        </div>
    )
  }
}

export default Main;

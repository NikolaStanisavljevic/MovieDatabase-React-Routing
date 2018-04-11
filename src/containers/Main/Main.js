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

  componentDidMount() {
    const newMovie = []
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c14f219f034f43147391971bf0c07ba4&language=en-US&query=Matrix&page=1&include_adult=false`)
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

  eleteMovie = (id) => {
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


  setMovie = (event) => {
    this.setState({
      movieName: event.target.value
    })
  }

  render() {
    return (
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
                    movies={this.state.movies}/>} />
      </div>
    )
  }
}

export default Main;

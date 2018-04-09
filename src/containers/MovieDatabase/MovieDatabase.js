import React, { Component } from 'react';
import './MovieDatabase.css';
import MovieList from '../../components/MovieList/MovieList';
import Form from '../../components/Form/Form';
import Movie from '../../components/Movie/Movie';
import NavBar from '../../components/Navbar/Navbar';
import axios from 'axios';



class MovieDatabase extends Component {

  state = {
    movies : [],
    movie: [],
    movieName : '',
    collection: false
  }

  componentWillMount() {
    const newMovie = []
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c14f219f034f43147391971bf0c07ba4&language=en-US&query=Matrix&page=1&include_adult=false`)
    .then(response=>{
      newMovie.push(response.data.results[0])
      this.setState({
        movie:newMovie
      });
    });
    
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
      <div className="movieDatabase">
          <NavBar />
          <Form setMovie= {this.setMovie} value={this.state.movieName} searchMovie={this.searchMovie}/>
          <Movie value={this.state.movie} addMovie={this.addMovie}/>
          {/* <MovieList 
              movies={this.state.movies}
              delete={this.deleteMovie} /> */}
            
      </div>
     
    )
  }
}

export default MovieDatabase;

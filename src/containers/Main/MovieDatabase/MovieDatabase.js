import React, { Component } from 'react';
import './MovieDatabase.css';
import Form from '../../../components/Form/Form';
import Movie from '../../../components/Movie/Movie';
import NavBar from '../../../components/Navbar/Navbar';
import axios from 'axios';
import Collection from '../Collection/Collection';




class MovieDatabase extends Component {


  render () {

  // Handling bad get request and display error message

   if(this.props.error) {
     return (
      <div className="movieDatabase">
      <NavBar />
      <Form setMovie= {this.props.setMovie} value={this.props.movieName} searchMovie={this.props.searchMovie}/>
      <p>Something went wrong please try other movie name</p>
      <Collection state={this.props.movies}/>    
      </div>
     )
   } else {
    return (
      <div className="movieDatabase">
          <NavBar />
          <Form setMovie= {this.props.setMovie} value={this.props.movieName} searchMovie={this.props.searchMovie}/>
          <Movie value={this.props.movie} addMovie={this.props.addMovie} error={this.props.error}/> 
           
      </div>
     
    )
  }
}
}

export default MovieDatabase;

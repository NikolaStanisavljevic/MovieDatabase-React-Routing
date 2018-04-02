import React from 'react';
import './Movie.css';

const movie = (props) => {
  return (
    <div>
      {props.value.map( ({ title, overview, poster_path, backdrop_path})=>{
          return (
            <div>
                <div className="movie" key ={title}>
                    <h1>{title}</h1>
                    <p>{overview}</p>
                    <img src={'https://image.tmdb.org/t/p/w500' + poster_path} alt="poster"/>
                </div>

                <div className="backdrop">
                    <img src={'https://image.tmdb.org/t/p/original'+ backdrop_path} alt="backdrop"/>
                  </div>
            </div>
                  
                    
                
                
          )
      })}
    </div>
  )
}

export default movie;

import React from 'react';
import './Movie.css';

const movie = (props) => {
  return (
    <div>
      {props.value.map( ({ title, overview, poster_path, backdrop_path,release_date,vote_average})=>{
          return (
            <div key={title}>
                <div className="movie" >
                    <h1>{title}</h1>
                    <div className='stats'><p className='overveiw'><span>Overveiw:</span>{overview}</p>
                    <p className='date'><span>Relise Date:</span>{release_date}</p>
                    <p className='vote'><span>Rating:</span>{vote_average}</p>
                    </div>
                    <img src={'https://image.tmdb.org/t/p/w500' + poster_path} alt="poster"/>
                </div>

                <div className="backdrop" >
                    <img src={'https://image.tmdb.org/t/p/original'+ backdrop_path} alt="backdrop"/>
                  </div>
            </div>
                  
                    
                
                
          )
      })}
    </div>
  )
}

export default movie;

import React from 'react';
import './MovieList.css';

const movieList = (props) => {
    return (
        <div className= 'movieList'>
            {props.movies.map( ([{title,poster_path}]) => {
                return (
                    <div className='movies'>
                    <p>{title}</p>
                    <img src={'https://image.tmdb.org/t/p/w500' + poster_path} alt="poster"/>
                    </div> 
                    
                    
                )
            }
            )}
        </div>
    )
}

export default movieList

import React from 'react';
import './MovieList.css';

const movieList = (props) => {
    return (
        <div className= 'movieList'>
            {props.movies.map( (movie) => {
                return (
                    <li className='list' key={Math.floor(Math.random() * 1000000) + 1  }>{movie}</li>
                )
            }
            )}
        </div>
    )
}

export default movieList

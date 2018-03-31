import React from 'react';
import './MovieList.css';

const movieList = (props) => {
    return (
        <div className= 'movieList'>
            {props.movies.map( ({name,id,original_title}) => {
                return (
                    <li className='list' key={id} onClick={() => props.delete(id)}>{name}{original_title}</li>
                )
            }
            )}
        </div>
    )
}

export default movieList

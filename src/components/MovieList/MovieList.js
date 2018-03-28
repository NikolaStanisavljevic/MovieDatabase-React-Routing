import React from 'react';
import './MovieList.css';

const movieList = (props) => {
    return (
        <div className= 'movieList'>
            {props.movies.map( ({name,id}) => {
                return (
                    <li className='list' key={id} onClick={() => props.delete(id)}>{name}</li>
                )
            }
            )}
        </div>
    )
}

export default movieList

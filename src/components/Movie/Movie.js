import React from 'react'

const movie = (props) => {
  return (
    <div>
      {props.value.map( ({ title, overview, poster_path })=>{
          return (
                <div className="Movie" key ={title}>
                    <h1>{title}</h1>
                    <p>{overview}</p>
                    <img src={'https://image.tmdb.org/t/p/w500' + poster_path} alt="poster"/>
                </div>
                
          )
      })}
    </div>
  )
}

export default movie;

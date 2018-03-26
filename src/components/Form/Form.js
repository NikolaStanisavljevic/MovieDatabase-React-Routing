import React from 'react'
import './Form.css';


const form = (props) => {
  return (
    <div>
      <input type= 'text' placeholder = 'enter movie here' onChange={props.setMovie} value={props.value}/>
        <button onClick={()=> props.addMovie(props.value)}>add</button> 
    </div>
  )
}

export default form;

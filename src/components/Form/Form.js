import React from 'react';
import "./Form.css";

const form = () => {
  return (
    <form className="form">
      <input type="text" placeholder="Search Movie Name"/>
      <button>Add to collection</button>
    </form>
  )
}

export default form

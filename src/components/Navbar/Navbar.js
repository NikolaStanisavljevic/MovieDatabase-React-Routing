import React from 'react';
import './Navbar.css';

const navBar = (props) => {
  return (
    <div className='nav'>
      <nav>
        <ul>
            <li>Home</li>
            <li> My Collection</li>
        </ul>
      </nav>
    </div>
  )
}

export default navBar;

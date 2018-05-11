import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const navBar = (props) => {
  return (
    <nav class="navbar navbar-light navbar-toggleable-md">
  <div class="container">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav"><span class="navbar-toggler-icon"></span></button>
    <a class="navbar-brand" href="#">Nikola Stanisavljevic</a>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav ">
        <li class="nav-item mr-2">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item mr-2">
          <a class="nav-link" href="#">Skills</a>
        </li>
        <li class="nav-item mr-2">
          <a class="nav-link" href="#">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default navBar;

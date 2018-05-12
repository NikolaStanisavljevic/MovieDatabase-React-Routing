import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem } from 'reactstrap';

const navBar = (props) => {

  return (
    <Navbar color="trasparent" dark expand="lg">
    <NavbarBrand  className='logo'>MovieDB</NavbarBrand>
    <NavbarToggler onClick={props.toggle} />
    <Collapse isOpen={props.isOpen} navbar>
      <Nav className="ml-auto" navbar>
        <NavItem >
          <Link to='/'>Home</Link>
        </NavItem>
        <NavItem>
          <Link to='/collection'>Collection</Link>
        </NavItem>
        <NavItem>
          <Link to='/soon'>Comming Soon</Link>
        </NavItem>
      </Nav>
     </Collapse>
     </Navbar>
  )
}

export default navBar;

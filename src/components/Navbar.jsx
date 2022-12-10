import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { NavLink } from 'react-router-dom';


const NavBar= () => {
  return (
<Navbar collapseOnSelect expand="lg" bg="primary gradient" variant="dark">
      <Container>
        <Navbar.Brand href="/home">Rick And Morthy</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/home">Home</NavLink>
            <NavLink className="nav-link"  to="/contact">Contact Us</NavLink>
            <NavLink className="nav-link"  to="/about">About Us</NavLink>
            <NavLink className="nav-link"  to="/reserva">Recervations</NavLink>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
      
      </Navbar>
  )
}

export default NavBar
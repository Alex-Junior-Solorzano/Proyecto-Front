import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { NavLink, Link, useNavigate } from 'react-router-dom';


const NavBar = () => {
  const navigate = useNavigate();
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary gradient" variant="dark">
      <Container>
        <img className='logo'
          src={require(`../images/logo2.png`)}
          alt='Logo'
        />
        <Navbar.Brand href='/#/home'>
          Rick & Morthy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/home">Home</Link>
            <Link className="nav-link" to="/contact">Contact Us</Link>
            <Link className="nav-link" to="/about">About Us</Link>
            <Link className="nav-link" to="/cards">My Cards</Link>
          </Nav>

        </Navbar.Collapse>
      </Container>

    </Navbar>
  )
}

export default NavBar
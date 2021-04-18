import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavManu.css';

const NavManu = () => {
   return (
      <Navbar expand="lg" className="nav-manu fixed-top">
         <Container>
            <Link to="/" className="navbar-brand">
               FixTech
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="ml-auto">
                  <Link to="/" className="nav-link">
                     Home
                  </Link>
                  <Link to="/dashboard" className="nav-link">
                     Dashboard
                  </Link>
                  <Link to="/login" className="nav-link">
                     Login
                  </Link>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
};

export default NavManu;

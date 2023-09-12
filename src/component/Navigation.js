import React from 'react';
import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navigation.css';

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ backgroundColor: '#333', color: '#fff' }}>
      <Container>
        <Navbar.Brand href="#home">Quick Mart</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/Home.js">Home</Nav.Link>
          <Nav.Link href="#items">Items</Nav.Link>
          <Nav.Link href="/CartPage">My Cart</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Button variant="outline-light" href='/Login'>Login</Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;

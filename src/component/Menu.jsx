import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Menu = () => {
  return (
    <Navbar bg="light" expand="xl">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;

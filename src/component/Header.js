import React from 'react';
import { Navbar,Container,Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg"  variant="light">
  <Container>
  <Navbar.Brand className="fw-bold" href="#home">ATools<span className='text-danger'>.</span></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features"></Nav.Link>
      <Nav.Link href="#pricing"></Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link style={{backgroundColor: '#03203C'}} className='text-light fw-bold me-3 py-2 px-3' href="#freetrials">Start Free Trial</Nav.Link>
      <Nav.Link style={{backgroundColor: '#E07C24'}} className='text-light fw-bold py-2 px-3' eventKey={2} href="#login">
        Login
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;
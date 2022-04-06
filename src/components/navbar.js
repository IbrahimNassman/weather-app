import React from 'react'
import {Navbar, Container, Nav } from 'react-bootstrap';

const navbar = () => {
  return (
    <div>
     <Navbar bg="primary" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
            {/* <Nav.Link href="home">Home</Nav.Link> */}
            <Nav.Link href="weather">Weather</Nav.Link>
            <Nav.Link href="login">Login</Nav.Link>
        </Nav>
       </Container>
   </Navbar>
    </div>
  )
}

export default navbar
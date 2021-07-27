import React from 'react'
import { Navbar,Nav,NavDropdown,Container } from 'react-bootstrap';
import './Header.css';
export default function Header() {
    return (
        <>
        <div className='header'>
            <Navbar bg="white" expand="lg">
  <Container>
    <Navbar.Brand href="#home">
        <img src={require('./Group.png').default} style={{marginRight:'2px'}}/>
        <text style={{fontWeight:'700'}}>Pricely</text>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#">alert</Nav.Link>
        <Nav.Link href="#">pricing</Nav.Link>
        <Nav.Link href="#">privacy</Nav.Link>
        <Nav.Link href="#">contacts</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

   </div>
        <div className='headline'>
        <h2 style={{fontWeight:'600'}}>Price Alert</h2>
        </div>
    </>
    )
}

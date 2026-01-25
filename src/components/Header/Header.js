import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

import './Header.css'


const Header = () => {
  return (
    <header>
      <Navbar className='navbar-bg' variant='dark'>
        <Container>
          <Navbar.Brand href='/'>FC Market</Navbar.Brand>
          <Nav className='gap-3'>
            <Nav.Link href='/cart'>
              <i className='fa fa-shopping-cart fa-lg'></i>
            </Nav.Link>
            <Nav.Link href='/account'>
              <i className='fa fa-user fa-lg'></i>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
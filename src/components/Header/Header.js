import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Navbar, Nav } from 'react-bootstrap'

import './Header.css'


const Header = () => {
  return (
    <header>
      <Navbar className='navbar-bg' variant='dark'>
        <Container>

          <LinkContainer to='/'>
            <Navbar.Brand>FC Market</Navbar.Brand>
          </LinkContainer>

          <Nav className='gap-3'>
            <LinkContainer to='/cart'>
              <Nav.Link>
                <i className='fa fa-shopping-cart fa-lg'></i>
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to='/account'>
              <Nav.Link>
                <i className='fa fa-user fa-lg'></i>
              </Nav.Link>
            </LinkContainer>
          </Nav>

        </Container>
      </Navbar>
    </header >
  )
}

export default Header
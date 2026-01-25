import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './Footer.css'


const Footer = () => {
  return (
    <footer className='footer-bg text-light py-3'>
      <Container>
        <Row>
          <Col className='text-center'>
            Footer
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
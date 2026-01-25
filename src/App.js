import React from 'react'
import { Container } from 'react-bootstrap'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


const App = () => {
  return <div className='d-flex flex-column min-vh-100'>
    <Header />
    <main className='flex-grow-1 py-3'>
      <Container>
        <h3>Main</h3>
      </Container>
    </main>
    <Footer />
  </div>
}

export default App
import React from 'react'
import { Container } from 'react-bootstrap'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import './App.css'


const App = () => {
  return (
    <div>
      <Header />
      <main className='py-3'>
        <Container>
          <h3>Main</h3>
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default App
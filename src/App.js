import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import Home from './pages/Home'
import Product from './pages/Product'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'



const App = () => {
  return (
    <Router className='d-flex flex-column min-vh-100'>
      <Header />
      <main className='flex-grow-1 py-3 text-center'>
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<Product />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
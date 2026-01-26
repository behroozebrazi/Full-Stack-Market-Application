import React from 'react'
import { Row, Col } from 'react-bootstrap'

import Product from '../components/Product/Product'
import products from '../products'


const Home = () => {
  return (
    <div>
      <h2 className='my-4 fw-bold'>༺ Products ༻</h2>
      <Row>
        {products.map((item) => {
          return (
            <Col sm={12} md={6} lg={4} key={item._id}>
              <Product product={item} />
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default Home
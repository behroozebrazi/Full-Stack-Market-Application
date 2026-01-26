import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import products from '../products'


const Product = () => {
  const { id = '' } = useParams()
  const product = products.find((item) => {
    return item._id === id
  })

  if (!product) { return <div>Loading...</div> }

  console.log(product.image)

  return (
    <div>
      <div className="d-flex justify-content-start">
        <Link to='/' className='btn btn-light text-start my-3'>
          Return to home
        </Link>
      </div>

      <Row className='my-5'>
        <Col md={5}>
          <Image src={product.image} fluid className='rounded shadow' />
        </Col>

        <Col md={4}>
          <ListGroup variant='flush'>
            <ListGroup.Item as={'h4'}>{product.name}</ListGroup.Item>
            <ListGroup.Item as={'h5'}>${product.price}</ListGroup.Item>
            <ListGroup.Item as={'div'}>{product.description}</ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <Button className='btn-block' type='button'>
                Add to cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

    </div>
  )
}

export default Product
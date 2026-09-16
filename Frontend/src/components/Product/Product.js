import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'


const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded shadow-sm'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`} className="text-decoration-none text-dark">
          <Card.Title as='h5'>{product.name}</Card.Title>
        </Link>
      </Card.Body>
      <Card.Text as='h6'>Price: ${product.price}</Card.Text>
    </Card>
  )
}

export default Product
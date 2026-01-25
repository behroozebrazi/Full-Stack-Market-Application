import React from 'react'
import { Card } from 'react-bootstrap'


const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded shadow-sm'>
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </a>
      <Card.Body>
        <a href={`/product/${product._id}`} className="text-decoration-none text-dark">
          <Card.Title as='h5'>{product.name}</Card.Title>
        </a>
      </Card.Body>
      <Card.Text as='h6'>Price: ${product.price}</Card.Text>
    </Card>
  )
}

export default Product
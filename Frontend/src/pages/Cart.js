import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Button, Card } from 'react-bootstrap'

import { addToCart, removeFromCart } from '../action/cartAction'


const Cart = () => {

  const { id = '' } = useParams()

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id))
    }
  }, [dispatch, id])

  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId))
  }


  return (
    <Row>
      <Col md={8}>
        <h4>Cart</h4>
        {cartItems.length === 0 ? <p>Cart is empty</p> :
          <ListGroup variant='flush'>

            {cartItems.map((item) => (
              <ListGroup.Item key={item.productId}>
                <Row>

                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>

                  <Col md={3}>{item.name}</Col>

                  <Col md={2}>${item.price}</Col>

                  <Col md={2}>
                    <Button type='button' variant='light' onClick={() => removeFromCartHandler(item.productId)}>
                      <i className='fa fa-trash'></i>
                    </Button>
                  </Col>

                </Row>
              </ListGroup.Item>
            ))}

          </ListGroup>
        }
      </Col>

      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              Total price: ${cartItems.reduce((accumulator, currentItem) => accumulator + currentItem.price, 0)}
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  )
}

export default Cart
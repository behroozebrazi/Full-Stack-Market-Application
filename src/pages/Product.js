import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'
// import axios from 'axios'

// import products from '../products'
import { productDetailAction } from '../action/productAction'


const Product = () => {
  const { id = '' } = useParams()
  const navigate = useNavigate()

  // const product = products.find((item) => {
  //   return item._id === id
  // })


  // const [product, setProduct] = useState({})
  // useEffect(
  //   () => {
  //     const sendRequest = async () => {
  //       try {
  //         const response = await axios.get(`http://localhost:8000/api/products/${id}`)
  //         setProduct(response.data)
  //       } catch (error) {
  //         console.log(error)
  //       }
  //     }
  //     sendRequest()
  //   }, [id])


  // Redux
  const dispatch = useDispatch()
  const productDetail = useSelector((state) => state.productDetail)
  const { loading, product } = productDetail
  useEffect(() => {
    dispatch(productDetailAction(id))
  }, [dispatch, id])


  const addToCartHandler = () => {
    navigate(`/cart/${id}`)
  }


  if (loading || id === '' || JSON.stringify(product) === '{}') {
    return (
      <div className="text-center my-5">
        <p className="fs-4">The product not found!</p>
        <Link to='/' className='btn btn-light text-start my-3'>
          Go Home
        </Link>
      </div>
    )
  }


  return (
    <div>
      <div className="d-flex justify-content-start">
        <Link to='/' className='btn btn-light text-start my-3'>
          Go Home
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
              <Button
                onClick={addToCartHandler}
                className='btn-block'
                type='button'>
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
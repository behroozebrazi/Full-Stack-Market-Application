import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
// import axios from 'axios'

import Product from '../components/Product/Product'
// import products from '../products'
import { productListAction } from '../action/productAction'


const Home = () => {
  // const [products, setProducts] = useState([])
  // useEffect(() => {
  //   const sendRequest = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:8000/api/products/')
  //       setProducts(response.data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   sendRequest()
  // }, [])

  // Redux
  const dispatch = useDispatch()
  const productList = useSelector((state) => { return state.productList })

  console.log(productList)

  const { loading, products } = productList
  useEffect(() => {
    dispatch(productListAction())
  }, [dispatch])


  return (
    <div>
      <h2 className='my-4 fw-bold'>༺ Products ༻</h2>
      {loading ? <h4>Loading...</h4> :
        <Row>
          {products.map((item) => {
            return (
              <Col sm={12} md={6} lg={4} key={item._id}>
                <Product product={item} />
              </Col>
            )
          })}
        </Row>
      }
    </div>
  )
}

export default Home
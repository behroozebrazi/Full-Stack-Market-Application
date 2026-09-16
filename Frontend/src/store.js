import { createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'

import { productListReducer, productDetailReducer } from './reducer/productReducer'
import { cartReducer } from './reducer/cartReducer'


const cartItemsFromLocalStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const initialState = {
  cart: { cartItems: cartItemsFromLocalStorage }
}

const middleWare = [thunk]

const reducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
  cart: cartReducer
})

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleWare)
)


export default store
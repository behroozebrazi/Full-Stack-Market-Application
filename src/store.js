import { createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'

import { productListReducer } from './reducer/productReducer'


const initialState = {}

const middleWare = [thunk]

const reducer = combineReducers({
  productList: productListReducer
})

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleWare)
)


export default store
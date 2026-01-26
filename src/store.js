import { createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'


const initialState = {}

const middleWare = [thunk]

const reducer = combineReducers({})

const store = createStore(reducer, initialState, applyMiddleware(...middleWare))


export default store
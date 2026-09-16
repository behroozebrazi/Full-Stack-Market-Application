import axios from "axios"


// use at Cart page
export const addToCart = (id) => async (dispatch, getState) => {

  const { data } = await axios.get(`http://localhost:8000/api/products/${id}`)

  dispatch({
    type: 'CART_ADD_ITEM',
    payload: {
      productId: data._id,
      name: data.name,
      image: data.image,
      price: data.price
    }
  })

  console.log("aaaa", getState())
  
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}


export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: 'CART_REMOVE_ITEM',
    payload: id
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
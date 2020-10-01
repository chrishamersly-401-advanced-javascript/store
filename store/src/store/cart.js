//this style is called a dux  
//bundling together of concerns

// import { product } from "./products";

//define initial state

let initialState = {
  cartItems: [],
  totalPrice: 0,
 

}

export default (state=initialState, action) => {

  const { type, payload } = action;

  switch(type) {

    case 'ADDTOCART':
     let newCart = [...state.cartItems, payload];
     let price = state.totalPrice + payload.price


      return {
        cartItems : newCart,
        totalPrice : price,
      }

    // case 'REMOVE':
    //   return initialState;
    
    default: 
      return state;

    //   case 'SHOW_DETAILS':
    //     return [...state.cartItems, payload]

  }
}


//adding a product object to the cart
//before I was giving it a name which would reflect a string

export const addToCart = product => {
  return {
    type: 'ADDTOCART',
    payload: product,
  }
}

export const resetCart = name => {
  return {
    type:'RESET',
    payload: name,
  }
}

export const showDetails = product => {
  return {
    type:'SHOW_DETAILS',
    payload: product,
  }
}

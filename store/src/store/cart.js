//this style is called a dux  
//bundling together of concerns

import { product } from "./products";

//define initial state

let initialState = {
  cartItems: [],
  // initialPrice: '$9.99',
 

}

export default (state=initialState, action) => {

  const { type, payload } = action;

  switch(type) {

    //adding the entire product object
    case 'ADDTOCART':
      let cartItems = payload;
      console.log('clicking');
      console.log(payload)
      
      return cartItems;

    case 'RESET':
      return initialState;
    
    default: 
      return state;

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
    type:'SHOWDETAILS',
    payload: product,
  }
}

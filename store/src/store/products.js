//this style is called a dux  
//bundling together of concerns

import products from "../components/products/products";

//define initial state

let initialState = {
  activeProduct: 'here',
  activeProductDescription: 'From the products ',

  products : [
    {id: 233, name:'self folding washing machine', manufacturer:'Maytag', model:'selfffff', price: '$330.11', inStock:2, weight: 100.2,category:'electronics', description:'folds the clothes for you'},
    { id: 12345, name:'camera',  manufacturer:'Nikon', model:'xx435', price: '$99.99', instock: 2200, weight: 1.1, category:'electronics', description: 'takes great photos' },
    { id: 32112, name:'telescope', manufacturer: 'Hubble', model: 'HUBB22', price:'$122.00', inStock: 23, weight: 15, category:'electronics', description: 'see the moon'},
    
  ],

}



//TODO define reducer
//just a function
     //good to set an initial state
                                  //action that has a type and payload
export default (state=initialState, action) => {

  const { type, payload } = action;

  switch(type) {

    case 'PRODUCT':
      return{...state, activeProduct: payload}

    case 'DESCRIPTION':
      return{...state, activeCategoryDescription:payload}
    
    default: 
      return state;

  }
}


//TODO
//define action creators / action objects

export const product = name => {
  return {
    type: 'CATEGORY',
    payload: name,
  }
}

export const productDescription = name => {
  return {
    type:'DESCRIPTION',
    payload: name,
  }
}
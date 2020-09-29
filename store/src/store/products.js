//this style is called a dux  
//bundling together of concerns

//define initial state

let initialState = {
  activeCategory: 'electronics',
  activeCategoryDescription: 'the electronic description',
  activeProduct: 'self folding washing machine',
  activeProductDescription: 'Self explanatory',

  products : [
    { id: 12345, name:'camera',  manufacturer:'Nikon', model:'xx435', price: 99.99, inStock: 2200, weight: 1.1 },
    { id: 32112, name:'telescope', manufacturer: 'Hubble', model: 'HUBB22', price:122.00, inStock: 23, weight: 15},
  ],

  categories: [
    { name : 'bicycles', description: 'the most fun'},
    { name : 'clothes', description: 'so much work to keep clean'},
  ]
}



//TODO define reducer
//just a function
     //good to set an initial state
                                  //action that has a type and payload
export default (state=initialState, action) => {

  const { type, payload } = action;

  switch(type) {

    case 'CHANGE':
      let displayedProducts = state.products.filter(product => {
        return product.category === payload;
      })
      return {...state, displayedProducts}
    default: 
      return state;

  }
}


//TODO
//define action creators / action objects


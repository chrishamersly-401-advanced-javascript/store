//this style is called a dux  
//bundling together of concerns

//define initial state

let initialState = {
  activeCategory: 'electronics',
  activeCategoryDescription: 'the electronic description',
  // activeProduct: 'from the categories',
  // activeProductDescription: 'From the categories',

  
  categories: [
    {name: 'electronics', description: 'the electronic description'},
    { name : 'bicycles', description: 'the most fun'},
    { name : 'clothes', description: 'so much work to keep clean'},
  ]
}

export default (state=initialState, action) => {

  const { type, payload } = action;

  switch(type) {

    case 'CATEGORY':
      return{...state, activeCategory: payload}

    case 'DESCRIPTION':
      return{...state, activeCategoryDescription:payload}
    
    default: 
      return state;

  }
}



export const category = name => {
  return {
    type: 'CATEGORY',
    payload: name,
  }
}

export const categoryDescription = name => {
  return {
    type:'DESCRIPTION',
    payload: name,
  }
}

import axios from 'axios';


// let initialState = {
//   activeCategory: 'electronics',
//   activeCategoryDescription: 'the electronic description',
//   // activeProduct: 'from the categories',
//   // activeProductDescription: 'From the categories',

  
//   categories: [
//     {name: 'electronics', description: 'the electronic description'},
//     { name : 'bicycles', description: 'the most fun'},
//     { name : 'clothes', description: 'so much work to keep clean'},
//   ]
// }

                       //---------->    from lab demo   <----------//
const initialState = {categories: [], activeCategory:''};


function categoryReducer(state=initialState, action) {

  switch(action.type) {

    case 'CHANGE_CATEGORY':
    return {...state, activeCategory: action.payload}

    default: 
    return state;

    case 'UPDATE_CATEGORIES':
      return{...state, categories: action.payload}
  }

}

export function getCategories() {
 
  return async function (dispatch) {
    const response =  await axios.get('https://api')
    dispatch({
      type: 'UPDATE_CATEGORIES', 
      payload: response.data.results
    })
  }
}

                      //----------->        END      <--------------//
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

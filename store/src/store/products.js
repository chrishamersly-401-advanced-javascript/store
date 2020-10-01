//this style is called a dux  
//bundling together of concerns

// import products from "../components/products/products";

//define initial state

let initialState = {
  activeProduct: 'here',
  activeProductDescription: 'From the products ',

  products : [
    {id: 233, 
      name:'self folding washing machine', 
      manufacturer:'Maytag', 
      model:'selfffff', 
      price: '$330.11', 
      inStock:2, 
      weight: 100.2,
      category:'electronics', 
      description:'folds the clothes for you'
    },
    { id: 12345, 
      name:'camera',  
      manufacturer:'Nikon', 
      model:'xx435', 
      price: '$99.99', 
      instock: 2200, 
      weight: 1.1, 
      category:'electronics', 
      description: 'takes great photos' 
    },
    { id: 32112, 
      name:'telescope', 
      manufacturer: 'Hubble',
       model: 'HUBB22', 
       price:'$122.00', 
       inStock: 23, 
       weight: 15, 
       category:'electronics', 
       description: 'see the moon'},
    {
      id: '3',
      name: 'Mat Lam Tam', 
      manufacturer: 'Browseblab', 
      model: '36987-1013', 
      instock: 639,
      price:'$122.00',
      weight: 23,
      category: 'bikes',
      description: 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.'
    }, {
      id: '37198',
      name: 'Cookley',
      manufacturer: 'Shuffletag',
      model: '54868-0050',
      instock: 4,
      weight: 10,
      category: 'electronics',
      'description': "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt."
    }, {
      id: '9143',
      name: 'Bitwolf',
      manufacturer: 'Kazu',
      model: '0031-223',
      instock: 395,
      weight: 2,
      category: 'clothing',
      description: 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.'
    }, {
      id: '09010',
      name: 'Span',
      manufacturer: 'Snaptags',
      model: '59779-355',
      instock: 953,
      weight: 74,
      category: 'electronics',
      description: 'Donec semper sapien a libero. Nam dui.'
    }, {
      id: '80',
      name: 'Cookley',
      manufacturer: 'Brainbox',
      model: '14783-438',
      instock: 325,
      weight: 76,
      category: 'clothing',
      description: 'Duis bibendum. Morbi non quam nec dui luctus rutrum.'
    }, {
      "id": "19295",
      "name": "Konklab",
      "manufacturer": "Browsetype",
      "model": "63044-484",
      "instock": 370,
      "weight": 49,
      "category": "bikes",
      "description": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque."
    }, {
      "id": "5",
      "name": "Stim",
      "manufacturer": "Kimia",
      "model": "36987-2700",
      "instock": 636,
      "weight": 7,
      "category": "electronics",
      "description": "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat."
    }, {
      "id": "97414",
      "name": "Domainer",
      "manufacturer": "Pixope",
      "model": "68258-7163",
      "instock": 378,
      "weight": 73,
      "category": "bikes",
      "description": "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat."
    }, {
      "id": "40795",
      "name": "Holdlamis",
      "manufacturer": "Cogilith",
      "model": "0135-0544",
      "instock": 929,
      "weight": 73,
      "category": "electronics",
      "description": "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."
    }, {
      "id": "9963",
      "name": "Latlux",
      "manufacturer": "Zava",
      "model": "37000-083",
      "instock": 365,
      "weight": 3,
      "category": "bikes",
      "description": "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
    }, {
      "id": "6",
      "name": "Domainer",
      "manufacturer": "Abata",
      "model": "0781-1684",
      "instock": 718,
      "weight": 71,
      "category": "bikes",
      "description": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien."
    }, {
      "id": "4051",
      "name": "Quo Lux",
      "manufacturer": "Zoomzone",
      "model": "34666-001",
      "instock": 552,
      "weight": 42,
      "category": "clothing",
      "description": "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."
    }, {
      "id": "02",
      "name": "Tres-Zap",
      "manufacturer": "Dablist",
      "model": "53329-212",
      "instock": 557,
      "weight": 17,
      "category": "electronics",
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend."
    }, {
      "id": "82732",
      "name": "Flexidy",
      "manufacturer": "Geba",
      "model": "41163-441",
      "instock": 926,
      "weight": 18,
      "category": "clothing",
      "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet."
    }, {
      "id": "82",
      "name": "Flexidy",
      "manufacturer": "Meejo",
      "model": "65044-5235",
      "instock": 228,
      "weight": 79,
      "category": "electronics",
      "description": "Praesent blandit. Nam nulla."
    }, {
      "id": "4551",
      "name": "Namfix",
      "manufacturer": "Wikizz",
      "model": "60724-101",
      "instock": 818,
      "weight": 70,
      "category": "clothing",
      "description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla."
    }, {
      "id": "2565",
      "name": "Zontrax",
      "manufacturer": "Meezzy",
      "model": "10056-178",
      "instock": 395,
      "weight": 23,
      "category": "electronics",
      "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue."
    }, {
      "id": "8",
      "name": "Matsoft",
      "manufacturer": "Shuffledrive",
      "model": "65044-3380",
      "instock": 569,
      "weight": 32,
      "category": "bikes",
      "description": "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia."
    }, {
      "id": "853",
      "name": "Andalax",
      "manufacturer": "Linktype",
      "model": "36987-1419",
      "instock": 684,
      "weight": 41,
      "category": "clothing",
      "description": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum."
    }, {
      "id": "551",
      "name": "Voyatouch",
      "manufacturer": "Quinu",
      "model": "0121-0759",
      "instock": 55,
      "weight": 100,
      "category": "bikes",
      "description": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla."
    }, {
      "id": "29",
      "name": "Gembucket",
      "manufacturer": "Ooba",
      "model": "50988-181",
      "instock": 397,
      "weight": 96,
      "category": "electronics",
      "description": "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque."
    }, {
      "id": "400",
      "name": "Fixflex",
      "manufacturer": "Leexo",
      "model": "55315-530",
      "instock": 853,
      "weight": 59,
      "category": "clothing",
      "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat."
    }, {
      "id": "303",
      "name": "Voyatouch",
      "manufacturer": "Oloo",
      "model": "0781-5312",
      "instock": 955,
      "weight": 49,
      "category": "clothing",
      "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh."
    }, {
      "id": "355",
      "name": "Cookley",
      "manufacturer": "Skinix",
      "model": "36800-230",
      "instock": 702,
      "weight": 69,
      "category": "electronics",
      "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
    }, {
      "id": "75469",
      "name": "Biodex",
      "manufacturer": "Jabbersphere",
      "model": "65862-229",
      "instock": 51,
      "weight": 45,
      "category": "bikes",
      "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique."
    }, {
      "id": "3",
      "name": "Aerified",
      "manufacturer": "Realfire",
      "model": "50114-7110",
      "instock": 556,
      "weight": 14,
      "category": "clothing",
      "description": "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla."
    }, {
      "id": "89164",
      "name": "Wrapsafe",
      "manufacturer": "Quinu",
      "model": "49693-1604",
      "instock": 820,
      "weight": 7,
      "category": "clothing",
      "description": "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio."
    }
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
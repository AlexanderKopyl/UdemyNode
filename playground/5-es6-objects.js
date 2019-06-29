//Object property shortName


let name = 'Alexsander';
let userAge = 28;

const user = {
  name,
  age: userAge,
  location: 'Dnepr Ukrain'
};

console.log(user);

//Object destructuring

const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined
};


const {label:ProductLabel,stock,rating = 5} = product;

// console.log(ProductLabel);


const transaction = (type,{label,stock}) =>{
    console.log(type,label,stock);
};

transaction('order',product);


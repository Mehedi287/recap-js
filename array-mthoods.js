const products = [
    { naem: 'laptop', id: 085679, price: 98, brand: 'asus' },
    { naem: 'phone', id: 67889, price: 98, brand: 'asus' },
    { naem: 'car/top', id: 6489, price: 98, brand: 'asus' },
    { naem: 'bike', id: 64589, price: 98, brand: 'asus' },
    { naem: 'honda', id: 89890, price: 98, brand: 'asus' },
    { naem: 'cicyl', id: 897089, price: 98, brand: 'asus' },
    { naem: 'laptop', id: 789089, price: 98, brand: 'asus' },
    { naem: 'laptop', id: 8789, price: 98, brand: 'asus' },
]
// map =-----------------------
const id = products.map(product => product.id);
console.log(id);
// foreach ---------------------
products.forEach(prduct => console.log(prduct));
products.forEach(prduct => console.log(prduct.price));
// filter =-----------------------
const chep = products.filter(product => product.id < 100000);
console.log(chep);
const name = products.filter(product => product.naem.includes('l'))
console.log(name);
// find ------------------------

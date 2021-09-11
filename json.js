const student = {
    name: 'hasab',
    id: 9789,
    cls: 7
}
const studentJson = JSON.stringify(student);
console.log(studentJson);
const normalStudent = JSON.parse(studentJson);
console.log(normalStudent);
// fethch ----------------
// fetch(url)
//     .then(res => res.json())
//     .then(data => console.log(data))
// objact.keys objact.values -----------------
const value = Object.values(student);
console.log(value);
const keys = Object.keys(student);
console.log(keys);
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
const newProduct = { name: 'harikan', id: 98, pice: 998, brand: 'bangal' }
const newArry = { ...products, newProduct }
console.log(newArry);

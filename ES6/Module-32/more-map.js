// map in array number
const numbers = [45, 22, 64, 23, 64];
const half = numbers.map(n => n / 2);
const third = numbers.map(x => x % 5);
// console.log(half);
// console.log(third);

// map in array string
const friends = ['Ashraful Islam', 'Moni', 'Abdus Salam', 'Mahima Akter'];
const getFirstLetter = friends.map(friend => friend[0]);
console.log(getFirstLetter);
const nameLength = friends.map(friend => friend.length);
console.log(nameLength);


// map in array object

const products = [
    { id: 1, name: 'laptop', price: 34000 },
    { id: 2, name: 'mobile', price: 13000 },
    { id: 3, name: 'watch', price: 1000 },
    { id: 4, name: 'tablet', price: 15000 }
    
]

// const items = products.map(product => console.log(product.name))
const items = products.map(product => product.name);
const price = products.map(product => product.price);
// console.log(items);
// console.log(price);

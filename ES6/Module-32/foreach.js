/** 
 * ! Foreach
 * 
 * never return value
 * */

const friends = ["Ashraful Islam", "Moni", "Abdus Salam", "Mahima Akter"];
friends.forEach(friend => console.log(friend))

const products = [
  { id: 1, name: "laptop", price: 34000 },
  { id: 2, name: "mobile", price: 13000 },
  { id: 3, name: "watch", price: 1000 },
  { id: 4, name: "tablet", price: 15000 },
];

products.forEach(product => console.log(product))
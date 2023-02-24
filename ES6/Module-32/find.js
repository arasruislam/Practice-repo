/** 
 * ! find()
 * 
 * কোন একটা array  মধ্যে কিছু একটা করবে এবং যারা যারা এই সর্ত পূরণ করবে তাদেরকে প্রথম টা কে return করবে
*/

const numbers = [34, 53, 22, 53, 43, 32, 44, 66, 75];
const fives = numbers.find(num => num % 5 === 0);
console.log(fives);


const products = [
  { id: 1, name: "laptop", price: 34000 },
  { id: 2, name: "mobile", price: 13000 },
  { id: 3, name: "watch", price: 1000 },
  { id: 4, name: "tablet", price: 15000 },
];

const cheap = products.find(product => product.price < 15000);
console.log(cheap);

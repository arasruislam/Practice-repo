/**
 * ! filter()
 *
 * কোন একটা array  মধ্যে কিছু একটা করবে এবং যারা যারা এই সর্ত পূরণ করবে তাদেরকে সবাইকে return করবে
 */

const numbers = [34, 53, 22, 53, 43, 32, 44, 66, 75];

const bigNums = numbers.filter((number) => number > 40);

const tiny = numbers.filter((n) => n < 60);
console.log(bigNums);
console.log(tiny);

const products = [
  { id: 1, name: "laptop", price: 34000 },
  { id: 2, name: "mobile", price: 13000 },
  { id: 3, name: "watch", price: 1000 },
  { id: 4, name: "tablet", price: 15000 },
];

// const expensive = products.filter(product => product.price > 30000);
// const expensive = products.filter(product => product.price < 30000);
const expensive = products.filter(product => product.price > 50000);
console.log(expensive);
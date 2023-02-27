/* 
? Object Method
1. keys() -> শুধু property name গুলা দিবে 
2. values() -> শুধু property value গুলা দিবে 
3. entries() -> property গুলা (name, value) pair আকারে দিবে
4. delete -> property delete করতে ব্যাবহার হয়। 
5. seal() -> ব্যাবহার করলে কোন property delete or add করা যায় না কিন্তু modify করা যায়
6. freeze() -> ব্যাবহার করলে কোন property delete or add or modify করা যায় না.
*/

const bottle = {
    color: 'yellow',
    price: 50,
    isCleaned: true,
    capacity: 1
}
console.log(bottle);
Object.freeze(bottle)
// Object.seal(bottle) 
delete bottle.isCleaned;
console.log(bottle);

const keys = Object.keys(bottle)
// console.log(keys);
const values = Object.values(bottle)
// console.log(values);

const pair = Object.entries(bottle)
// console.log(pair);

const twoDimentonalArray = [
  ["color", "yellow"],
  ["price", 50],
  ["isCleaned", true],
  ["capacity", 1],
];

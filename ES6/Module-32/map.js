/**
 * ! Array map
 */
const numbers = [3, 42, 34, 22, 54, 62, 4, 6, 9];
const output = [];

for (const number of numbers) {
  const doubled = number * 2;
  output.push(doubled);
}
// console.log(output);

function getDoubles(numbers) {
  const output = [];

  for (const number of numbers) {
    // const doubled = number * 2;
    const doubled = doubleIt(number);
    output.push(doubled);
  }
  return output;
}

function doubleItOld(number) {
  return number * 2;
}
// Arrow Function
const doubleIt = (num) => num * 2;

// Map
const makeDouble = numbers.map(doubleIt);
const makeDoubledirect = numbers.map((num) => num * 2);

const fiveTimes = [3, 5, 2, 6].map((x) => x * 5);
console.log(fiveTimes);

console.log(makeDouble);
console.log(makeDoubledirect);

console.log(getDoubles(numbers));

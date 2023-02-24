/**
 * ! Reduce
 *
 * .reduce (accumulatorFunction, initial Value)
 * accumulatorFunction use two parameters
 */

const numbers = [1, 4, 5, 7, 3, 9];
// const total = numbers.reduce((previous, current) => previous + current, 0);
const total = numbers.reduce((previous, current) => {
//   console.log(previous, current);
  return previous + current;
}, 0);

console.log(total);

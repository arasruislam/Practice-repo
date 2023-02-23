/**
 * ! Spread Operator (... )
 * */

const max = Math.max(12, 85, 332, 343);
console.log(max);

const number = [12, 85, 332, 343];

const largest = Math.max(...number);
// console.log(...number);
// console.log(largest);


const numbersV1 = [...number];
number.push(55);
numbersV1.push(555);
console.log(number);
console.log(numbersV1);

const numberV2 = [...number];

const numberV3 = [33, 24, ...number, 32, 977];
console.log(numberV3);
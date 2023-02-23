/**
 * ! Arrow Function
 */

// Normal Function type 1
function add(first, second) {
  const total = first + second;
  return total;
}

// Normal Function type 2
// function expression
const addV1 = function addV1(first, second) {
  const total = first + second;
  return total;
};

// Normal Function type 2
// function expression with anonymous function
const addV2 = function (first, second) {
  const total = first + second;
  return total;
};

// const result = add(10, 2);
// console.log(result);

// Arrow Function
const arrow = (first, second) => first + second;

// const arrowFunc = arrow(10, 2);
// console.log(arrowFunc);

const getFullName = (a, b, c, d) => a + b + c + d;

// no parameter arrow function
const getPie = () => 3.14;

// multi line arrow function & if you want to the value must use return;
const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiResult = firstSum + secondSum;
    const result = multiResult / 2;
    return result;
};

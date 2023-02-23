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
}

// Normal Function type 2
// function expression with anonymous function
const addV2 = function (first, second) {
    const total = first + second;
    return total; 
}


const result = add(10, 2);
console.log(result);


// Arrow Function
const arrow = (first, second) => first + second;

const arrowFunc = arrow(10, 2);
console.log(arrowFunc);
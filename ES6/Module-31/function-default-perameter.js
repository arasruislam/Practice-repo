/**
 * ! Normal Function
function add(first, second) {
    const total = first + second;
    return total;
}

const result = add(5, 5);
console.log(result); 
*/

// Default parameter
function add(first, second = 0) {
    const total = first + second;
    return total;
}

const result = add(10);
console.log(result);

function fullName(first, last = 'chowdhury') {
    const name = first + " " + last;
    return name;
}

const name = fullName('aslam');
console.log(name);
/**
 * ! No more use (var) variable until extreme case
 *
 * * let => Allow to reassign
 * * const => Never allow to reassign
 */

// declare
let money = 25;
// reassign
money = 15;
console.log(money);

// declare
const number = 35;
// not allow reassign
number = 64; // error

const arr = [12, 26, 53, 22];
arr[1] = 50;
console.log(arr);

const student = {
  name: "asru",
  age: 52,
  address: "dhaka",
};
student.name = 'Ashraful'; // student = {name - 'ashraful'}



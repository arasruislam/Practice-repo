/* 
! Object Loop
1. for...of loop can't use on object. Best for Array
2. Best way to loop object through [for...in] loop

------------- 3 way to read object properties--------------
1. objectName.color
2. objectName['color']
3. objectName[key] -> by using variable[key]
*/

const bottle = {
  color: "yellow",
  price: 50,
  isCleaned: true,
  capacity: 1,
};
// for of loop can't use on object
// for (const key of bottle) {
//     console.log(key);
// }


// first option to loop through an object [optional]
// const keys = Object.keys(bottle);
// for (const key of keys) {
//   console.log(key, bottle[key]);
// }

// Best way to loop object through [for...in] loop

// for (const key in bottle) {
//     console.log(key, bottle[key]);
// }

// advanced
const pair = Object.entries(bottle);
// console.log(pair);
for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value);
}
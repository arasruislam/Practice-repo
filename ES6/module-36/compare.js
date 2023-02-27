/* 
! Compare object
*/

// const first = { a: 2 };
// const second = { a: 2 };
// if (first === second) {
//     console.log('same');
// } else {
//     console.log('not same');
// }

// do not use this method to compare object or array
// const first = { a: 2 };
// const second = { a: 2 };
// const first = { a: 2, b: 4, c: 4 };
// const second = { a: 2, c: 4, b: 4 };
// const firstString = JSON.stringify(first);
// const secondString = JSON.stringify(second);
// console.log(firstString, secondString);
 
// if (firstString === secondString) {
//   console.log("same");
// } else {
//   console.log("not same");
// }
const first = { a: 2, b: 4, c: 4 };
const second = { a: 2, c: 4, b: 4 };
function compareObject(first, second) {
  const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if (firstKeys.length === secondKeys.length) {
        for (const key of firstKeys) {
            if (first[key] !== second) {
                return false;
            }
        }
        return true
    } else {
        return false
    }
}
const isSame = compareObject(first, second);
console.log(isSame);
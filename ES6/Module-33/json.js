/* 
! JSON, JSON Structure, parse, stringify
* JavaScript Object Notation (JSON)
*/

const user = { id: 2, name: 'asru islam', job: 'instructor' }

const stringified = JSON.stringify(user)
// console.log(user);
// console.log(stringified);


const myobj = {
    name: 'Muhammad Ashraful Islam',
    job: 'Front-end Development',
    car: {
        name: 'BMW',
        price: 5600000,
        year: '2022'
    }
}

const strigi = JSON.stringify(myobj);
console.log(strigi);

const convetObj = JSON.parse(strigi);
console.log(convetObj);
// create object using object literals

const player = {};
(player.name = "Asru"), (player.specialty = "Code Lover");
player.bat = function () {
//   console.log("swing your bat");
};
// console.log(player);
// player.bat();

const student = {
    name: 'asru',
    job: 'seo',
    work: function () {
        // console.log('work from home');
    },
    salary: 25000
}
// console.log(student);

// object constructor
const person = new Object();
// console.log(person);

// object create method
const atel = Object.create(student);
// console.log(atel.name);

// class
class Person {
    name = 'abul';
    address = 'uttara';
    constructor(age) {
        this.age = age;
    };
}
const person1 = new Person(56);
console.log(person1);
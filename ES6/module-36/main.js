/**
 * ! Must knowing topic from this module
 *
 * অবজেক্ট এর মধ্যে মেথড যোগ করা যায়।
 * অবজেক্ট এর মধ্যে keys এবং values কিভাবে এপ্লাই করা যায়
 * কিভাবে অবজেক্ট এর সব প্রপার্টি এর মধ্যে লুপ করে সেই প্রপার্টি এর নাম এবং ভ্যালু আউটপুট হিসেবে দেখানো যায়।
 *
 *
 * ----------ইন্টারভিউ প্রশ্ন -----------
 * (এডভান্সড) জাভাস্ক্রিপ্ট এ দুইটা অবজেক্ট সেইম কিনা সেটা কিভাবে কম্পেয়ার করে
 * (এডভান্সড) bind, call, apply এর মধ্যে ডিফারেন্স কি
 * (এডভান্সড) জাভাস্ক্রিপ্ট এর মধ্যে this কীওয়ার্ড কিভাবে কাজ করে
 * arrow ফাংশন আর রেগুলার ফাংশন এর মধ্যে ডিফারেন্স কি
 */

// ?------------Code Note [Create Object]---------------?

// * Different way to Create Object
/* 
! create object using object literals
-----------Type 01--------------
const player = {};
(player.name = "Asru"), (player.specialty = "Code Lover");
player.bat = function () {
    * Method--->
  console.log("swing your bat");
};
console.log(player);
player.bat();

-----------Type 02--------------
const student = {
    name: 'asru',
    job: 'seo',
    work: function () {
        console.log('work from home');
    },
    salary: 25000;
}
console.log(student)

------------Type 03 [create object using class]--------
! class Person {
    name = 'abul';
    address = 'uttara';
    constructor(age) {
        this.age = age;
    };
}
const person1 = new Person(56);
console.log(person1);

-------------Type 04-----------
! object constructor
const person = new Object();
console.log(person);
*/
/* 
! object create method
const atel = Object.create(student);
console.log(atel.name);

*/

// ?------------Code Note [Create Method for object]---------------?
// * Create Method for object
/* 
const student = {
  name: "Ashraful Islam",
  money: 5000,
  study: "Math",
  subject: ["calculate", "algebra", "geometry"],

   ! method আর মধ্যে obejct  আর কোন property access  করতে হলে this.objectPropertyName দিয়ে object property কল করতে হবে। 
  exam: function () {
    return this.name + " is participating in an exam";
  },
    improveExam: function (subject) {
    ! call one method inside of another method
    this.exam();
    return `${this.name} is taking improvement exam on ${subject}`;
  },
  treatDay: function (amount) {
    this.money = this.money - amount;
    return this.money;
  },
};

const output = student.exam();
console.log(output);
const reExam = student.improveExam("Algebra");
console.log(reExam);
const remaining = student.treatDay(600);
console.log(remaining);
*/


// ?------------Code Note [Object Methods]---------------?
// ! Object Methods
/* 
? Object Method
1. keys() -> শুধু property name গুলা দিবে 
2. values() -> শুধু property value গুলা দিবে 
3. entries() -> property গুলা (name, value) pair আকারে দিবে
4. delete -> property delete করতে ব্যাবহার হয়। 
5. seal() -> ব্যাবহার করলে কোন property delete or add করা যায় না কিন্তু modify করা যায়
6. freeze() -> ব্যাবহার করলে কোন property delete or add or modify করা যায় না.
7. call()
8. apply()
9. bind()
*/
/* 
const bottle = {
    color: 'yellow',
    price: 50,
    isCleaned: true,
    capacity: 1
}
console.log(bottle);
Object.freeze(bottle);
Object.seal(bottle) ;
delete bottle.isCleaned;
console.log(bottle);

const keys = Object.keys(bottle)
console.log(keys);
const values = Object.values(bottle)
console.log(values);

const pair = Object.entries(bottle)
console.log(pair);

const twoDimentonalArray = [
  ["color", "yellow"],
  ["price", 50],
  ["isCleaned", true],
  ["capacity", 1],
];
*/


// ?------------Code Note [object loop]---------------?
/* 
! Object Loop
1. for...of loop can't use on object. Best for Array
2. Best way to loop object through [for...in] loop

------------- 3 way to read object properties--------------
1. objectName.color
2. objectName['color']
3. objectName[key] -> by using variable[key]
*/

/* 
! Best way to loop object through [for...in] loop
const bottle = {
  color: "yellow",
  price: 50,
  isCleaned: true,
  capacity: 1,
};

for (const key in bottle) {
    console.log(key, bottle[key]);
}

! advanced loop through
const pair = Object.entries(bottle);
console.log(pair);
for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value);
}

! first option to loop through an object [optional]
const keys = Object.keys(bottle);
for (const key of keys) {
  console.log(key, bottle[key]);
}
*/


// ?------------Code Note [Object Compare]---------------?
/* 
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

*/
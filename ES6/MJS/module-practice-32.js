/* 
You have an odd array (array with odd numbers). [1, 3, 5, 7, 9]. Now convert this array into an even array (array with even numbers). [2, 4, 6, 8, 10]. Do this using for...loop & array.map() method. 
Hints: add one to any odd number and it will become an even number
*/
const convertEvenArray = (arr) => {
  const even = [];
  for (const value of arr) {
    const plusOne = value + 1;
    even.push(plusOne);
  }
  return even;
};
const oddArr = [1, 3, 5, 7, 9];
// convertEvenArray(oddArr);
const getEvenResult = convertEvenArray(oddArr);
// console.log(getEvenResult);

// using map() method
const usingMap = oddArr.map((num) => num + 1);
// console.log(usingMap);

/* 
You are given an array say: [33, 50, 79, 78, 90, 101, 30]. now return/get all the elements which are divisible by 10 using array.filter() method.
*/

const arr1 = [33, 50, 79, 78, 90, 101, 30];
const getDivisible = arr1.filter((x) => x % 10 === 0);
// console.log(getDivisible);
/* 
Now do the same task of question 2. But do this using array.find(). Then compare the output of question 2 & question 3.
*/

const getDivisibleByFind = arr1.find((x) => x % 10 === 0);
// console.log(getDivisibleByFind);

/* 
const people =[
    {name: 'Meena', age:20},
    {name: 'Rina', age: 15},
    {name: 'Suchorita', age:22}
];
can you find out the total sum from here. the output will be 57.
do this using for...loop and array.reduce() method
*/
const people = [
  { name: "Meena", age: 20 },
  { name: "Rina", age: 15 },
  { name: "Suchorita", age: 22 },
];

const totalSum = (input) => {
  let arr = [];
  for (const item of input) {
    arr.push(item.age);
  }
  const total = arr.reduce((previous, current) => previous + current, 0);
  return total;
};
// console.log(totalSum(people));

/* 
const student ={
    name: 'Fredie',
    age: 26,
}
console the value of age.
*/
const student = {
  name: "Fredie",
  age: 26,
};
// console.log(student.age);
/* 
let data = {
    location: [
    {
        latitude: '34.2 , 37.8',
        longitude: '98.77, 58.7',
        city: 'Hyderabad',
        country: 'India'
    }
    ]
}
console the city
*/
let data = {
  location: [
    {
      latitude: "34.2 , 37.8",
      longitude: "98.77, 58.7",
      city: "Hyderabad",
      country: "India",
    },
  ],
};
// console.log(data.location[0].city);

/* 
API:
https://jsonplaceholder.typicode.com/users/1
*/

const leadApi = async () => {
  const url = `https://jsonplaceholder.typicode.com/users/1`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    displayData(data);
  } catch (error) {
    console.log(error);
  }
};

const displayData = (data) => {
    console.log("email:",data.email);
    console.log("address:",data.address);
    console.log("city:",data.address.city);
    console.log("lat:", data.address.geo.lat);
    console.log("company name:", data.company.name);
};

leadApi();

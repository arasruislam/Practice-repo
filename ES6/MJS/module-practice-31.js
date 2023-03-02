/**
 * * Must Knowing Topic from this Module
 * কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয়
 * টেম্পলেট স্ট্রিং এর মধ্যে ডাইনামিক ভাবে কিভাবে কোন একটা ভেরিয়েবলকে বসানো যায়
 * একটা প্যারামিটার ওয়ালা arrow ফাংশন কিভাবে ডিক্লেয়ার করতে হয়।
 *
 * কিভাবে থ্রি ডট দিয়ে (...) একটা এরে এর সব এলিমেন্ট বসিয়ে দেয়া যায়
 * কোন একটা ফাংশনে এর প্যারামিটার ভ্যালু না দিলে কিভাবে ডিফল্ট প্যারামিটার দিতে হয়
 * অনেক লাইন ওয়ালা arrow ফাংশন কিভাবে লিখতে হয়। আর কিভাবে সেটা থেকে রিটার্ন করতে হয়
 */

/**
 * Let Const
 * function default parameter
 * template string
 * arrow function
 * spread operator
 * array object Destructuring
 */

/* 
1. Write an arrow function that will take 3 parameters, will multiply the parameters and wil return the result.

2. Write the following sentence in the lines and print the result: I am a web developer. I love to code. I love to eat biryani.

3. Write an arrow function that will take 2 parameters: one parameter will come from you and the others parameter will be a default parameter. Add these two parameters and return the result.

4. Write an arrow function where it will do the following:
a. it will take an array where the array element will be the name of your friends.
b. check if the length of each element is even, push elements with even length to a new array and return the result.
print the result.

5. write an arrow function where it will do the following:
a. square each array element.
b. calculate the sum of the squared element.
c. return the average of the sum of the squared element.
print the result.

6. write an arrow function where it will be do following:
a. it will take to array inputs.
b. combine the two arrays and assign them in a new array
c. find the maximum number from the new array and return the result.
print the result
*/

//! 1. Write an arrow function that will take 3 parameters, will multiply the parameters and wil return the result.

const multiplyPara = (a, b, c) => {
  return a * b * c;
};
const getMultiplyResult = multiplyPara(3, 5, 2);
// console.log(getMultiplyResult);

//! 2. Write the following sentence in a three lines and print the result: I am a web developer. I love to code. I love to eat biryani.

const threeLine = `
I am a web developer.
I love to code.
I love to eat biryani.
`;

console.log(threeLine);

//! 3. Write an arrow function that will take 2 parameters: one parameter will come from you and the others parameter will be a default parameter. Add these two parameters and return the result.

const takeDefaultPara = (a, b = 5) => {
  const multiply = a * b;

  return multiply;
};
const getDafultValue = takeDefaultPara(2);
// console.log(getDafultValue);

/* 
! 4. Write an arrow function where it will do the following:
a. it will take an array where the array element will be the name of your friends.
b. check if the length of each element is even, push elements with even length to a new array and return the result.
print the result. 
*/

const takeArray = (arr) => {
  const evenArr = [];

  for (const friend of arr) {
    if (friend.length % 2 == 0) {
      evenArr.push(friend);
    }
  }
  return evenArr;
};
const arr = ["Tuhin", "Sahab", "Rabby", "asru", "Jannat"];

const getEvenArr = takeArray(arr);
// console.log(getEvenArr);

/* 
! 5. write an arrow function where it will do the following:
a. square each array element.
b. calculate the sum of the squared element.
c. return the average of the sum of the squared element.
print the result.
*/
const squareArr = (sArr) => {
  let sum = 0;
  sArr.forEach((num) => {
    const square = Math.pow(num, 2);
    sum += square;
  });
  return sum;
};
const sArr = [2, 4, 3, 6];
const arrAverage = squareArr(sArr);
// console.log(arrAverage);

/* 
! 6. write an arrow function where it will be do following:
a. it will take to array inputs.
b. combine the two arrays and assign them in a new array
c. find the maximum number from the new array and return the result.
print the result
*/

const newArr = (arr1, arr2) => {
  const newArr = [...arr1, ...arr2];
  const max = Math.max(...newArr);
//   const min = Math.min(...newArr);
    return max;
};

const arr1 = [1, 3, 5];
const arr2 = [7, 9, 11, 13];
const getArrResult = newArr(arr1, arr2);
// console.log(getArrResult);

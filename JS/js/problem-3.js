// !Problem 01
/**
 * @param Question_Summary:- একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে। 
 * */



// !Problem 02
/**
 * @param Question_Summary:- একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।
 * */

function getNamota(value) {
   for (let i = 1; i <= 10; i++) {
      let result = value * i;
      console.log(`${value} x ${i} = ${result}`);
   }
   return "Here is 13 namota"
}

const result = getNamota(13);
console.log(result);

console.log("----------------------------------------");

// !Problem 03
/**
 * @param Question_Summary:- fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে। 
 * */

function fullName(fName, lName) {
   let getFullName = fName + " " + lName;
   return getFullName
}

console.log('Welcome to coding world', fullName('Asru', 'Islam'));
console.log("----------------------------------------");


// !Problem
/**
 * @param Question_Summary:- একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।
 * */

function getSquare(rootNum) {
   return rootNum * rootNum;
}

console.log(getSquare(5));
console.log("----------------------------------------");


// !Problem
/**
 * @param Question_Summary:-  pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা :
 * const pizza = {
    toppings: ['cheese', 'sauce', 'pepperoni'],
    crust: 'deep dish',
    serves: 2
    }
 * এবং pepperoni প্রিন্ট করবা। 
*/

function getPizza() {
   const pizza = {
   toppings: ['cheese', 'sauce', 'pepperoni'],
   crust: 'deep dish',
      serves: 2
   }
   console.log(pizza.toppings[2]);
}
getPizza();
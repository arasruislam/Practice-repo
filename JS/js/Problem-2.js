// !Problem 01
/**
 * @param Question_Summary:- given array, var fruits = ['Apple', 'Banana', 'Orange']
 * Step-1:- Find the index of 'Banana' and replace 'Banana' with 'Mango'
 * Step-2:- Remove 'Orange' and add 'Watermelon'
 * */ 

var fruits = ['Apple', 'Banana', 'Orange'];
// Step 1
var bananaIndex = fruits.indexOf('Banana');
fruits[bananaIndex] = 'Mango';
console.log(fruits);
// Step 2
var removeFruit = fruits.pop();
var addFruit = fruits.push('Watermelon')
console.log(fruits);

console.log("---------------Done--------------");
// !Problem 02
/**
 * @param Question_Summary:- You and Your Friends Tom, Jane, Peter and John got their final exam results. Your total score is 85, Tom's total score is 66, Jane's total score is 95, Peter's total score is 56 and John's total score is 40. The grading chart is
 * 80 or above A grade, 
 * 60 or above B grade, 
 * 50 or above C grade, 
 * 40 or above D grade, 
 * 39 or less => F grade
 * 
 * Write a program to find your and your friends grades using if-else
 * */

function totalScore(score) {
    if (score >= 80) {
    return 'You got A grade';
    } else if(score < 80 && score >= 60) {
    return 'You got B grade';
    } else if (score < 60 && score >= 50) {
    return 'You got C grade';
    } else if (score < 50 && score >= 40) {
    return 'You got D grade';
    } else if (score < 40) {
        return 'You are fail in the examination';
    }
}

console.log(totalScore(90));

console.log("---------------Done--------------");

// !Problem 03
/**
 * @param Question_Summary:- You are given three numbers 13, 79 and 45
 * 
 * Step:-  Write a program that will print the largest number using if-else
 * */

var num1 = 13;
var num2 = 79;
var num3 = 45;

if (num1 > num2) {
    if (num1 > num3) {
        console.log(num1);
    } else {
        console.log(num3);
    }
} else {
    if (num2 > num3) {
        console.log(num2);
    } else {
        console.log(num3);
    }
}

console.log("----------------Done-------------");


// !Problem 04
/**
 * @param Question_Summary:- you are given a triangle with the sides 9, 8, 9.
 * 
 * Step:-  Write a program to check whether a triangle is Isosceles or not using if-else
 * */

var side1 = 8;
var side2 = 9;
var side3 = 9;

if (side1 === side2 || side1 === side3 || side2 === side3) {
    console.log('Triangle is Isosceles');
} else {
    console.log('Triangle is not Isosceles');
}

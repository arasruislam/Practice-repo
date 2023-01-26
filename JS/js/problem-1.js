// !Problem 01
/**
 * @param Question_Summary:- Harry's mom gave him money and asked him to buy some oranges and  apples. Write a program to help Harry calculate how much money the shopkeeper will return.
 * * Input:- The first line of the input is the taka Harry's mom give him. The second line is the cost of 1 kg of oranges and 1 kg of apples.
 * * Input Values:- 1000, 700
 * * Output Value:- 300 
 * */

var totalMoney = 1000;
var orangesPrice = 400;
var applePrice = 300

var totalCostOfFruits = orangesPrice + applePrice;

var shopkeeperReturnMoney = totalMoney - totalCostOfFruits;

console.log(shopkeeperReturnMoney); // result 300


// !Problem 02
/**
 * @param Question_Summary:- Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.
 * * Input:- The First line of the input is the marks of the fve subjects mentioned above, respectively.
 * * Input Values:- 75.25, 65, 80, 35.45, 99.50
 * * Output Value:- 71.05
*/

var mathematicsMark = 75.25;
var biologyMark = 65;
var chemistryMark = 80;
var physicsMark = 35.45;
var banglaMark = 99.50;

var totalMark = mathematicsMark + biologyMark + chemistryMark + physicsMark + banglaMark;

var averageMark = totalMark / 5;

console.log(averageMark.toFixed(2)); // result 71.04


// !Problem 03
/**
 * @param Question_Summary:- John's teacher gave him two variables. Each variable contains a string. John's teacher asked him to combine these two strings to print them in one line. Help John write the program.
 * * Input:- The first and the second lines of the input contain the strings.
 * * Input Values:- firstLine: I am going to be, secondLine: an awesome web developer
 * * Output Value:- I am going to be an awesome web developer
*/

var firstLine = "I am going to be";
var secondLine = "an awesome web developer"

var combineLine = firstLine + " " + secondLine;

console.log(combineLine);

// !Problem 03
/**
 * @param Question_Summary:- Sarah's mother is teaching her mathematics. She gave Sarah a number and asked her what the remainder would be if she divided the number by 5. Help Sarah write the program.
 * * Input Value:- 119
 * * Output Value:- 4
*/

var givenNumber = 119;

var remainderValue = givenNumber % 5;

console.log(remainderValue); // result 4
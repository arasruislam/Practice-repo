// !Problem 01
/**
 * @param Question_Summary:- leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে।
*/

function leapYear(year) {
    if (((year % 4 === 0) && (year % 100 !== 0)) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}
const checkYear = leapYear(2021);
console.log(checkYear);
console.log("---------------------------------------------");

// !Problem 02
/**
 * @param Question_Summary:- তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে।
*/

function ageEvenOrOdd(age) {
    if (age % 2 === 0) {
        return true;        
    } else {
        return false;
    }
}
console.log(ageEvenOrOdd(22));
console.log("---------------------------------------------");

// !Problem 03
/**
 * @param Question_Summary:- এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে। 
 * */

function getHourIntoMinute(hour) {
    let minute = 60 * hour;
    return minute;
}

console.log("Your input value is equal to",getHourIntoMinute(3), "minute");

console.log("---------------------------------------------");

// !Problem 04
/**
 * @param Question_Summary:- Unit Convert Inch to Feet, miles to kilometer
 * */

function incheToFeet(inches) {
    let feet = inches / 12;
    return feet;
}
console.log("Your input value is equal to",incheToFeet(80), "ft");
console.log("---------------------------------------------");

function milesToKm(miles) {
    let km = miles * 1.6;
    return km;
}

console.log("Your input value is equal to", milesToKm(3), "km");
console.log("---------------------------------------------");

// !Problem 07
/**
 * @param Question_Summary:- Calculate Sum of all numbers of an array
 * */
let arr = [3, 53, 23, 64, 84, 32, 57, 42];

function getAllNumberSum(numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result = result + numbers[i];
    }
    return result;
}
const sumValue = getAllNumberSum(arr);

console.log(sumValue);


console.log("---------------------------------------------");

// !Problem 08
/**
 * @param Question_Summary:- Get Odd Numbers of an array and get odd Sum of an array
 * */

let oddNum = [4, 23, 64, 62, 86, 41, 74, 11, 38, 17, 36];

function getOddNumber(getValue) {
    let oddValues = [];
    for (let i = 1; i < getValue.length; i+=2) {
        const oddValue = getValue[i];
        console.log(oddValue);
        oddValues.push(oddValue);
    }
    return oddValues;
}
const oddValue = getOddNumber(oddNum);
const oddSum = getAllNumberSum(oddValue);
console.log("Total sum value is",oddSum);

console.log("---------------------------------------------");

// !Problem 09
/**
 * @param Question_Summary:- Calculate Factorial of a number using for loop
 * */

function getFactorialNumber(calculateValue) {
    let result = 1;
    for (let i = calculateValue; i >=1; i--) {
        result *= i;
    }
    return result;
}

console.log(getFactorialNumber(5));
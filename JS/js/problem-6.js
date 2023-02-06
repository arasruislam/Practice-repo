/**
 * ? String
 * * includes() , toLowerCase(), toUpperCase(), indexOf(), startsWith(), endsWith()
 * 
 * * split(), slice(), subString(), subStr(), join(), trim()
 */

/** 
 * ? Math
 * * pow(), abs(), round(), ceil(), floor(), random()
 * 
*/

/** 
 * ? Array
 * * Array.inArray(), includes(), slice(), splice()
 * 
*/




// ! Problem 01
/**
 *  একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে। 
 * */

function getMinvalue(arr) {
    let minValue = arr[0];
    for (let i = 0; i < arr.length; i++) {
        const index = i;
        const element = arr[index];
        if (element < minValue) {
            minValue = element;
        }
    }
    return minValue;
}
// let arra = [3, 1, 54, 23, 63, 64, -52];
// console.log("Minimum value of the array was:",getMinvalue(arra));


// ! Problem 02
/**
 *  একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।  
 * */

function getSmallNumber(num1, num2, num3) {
    let minimumValue = Math.min(num1, num2, num3);
    return minimumValue;
}

// console.log(getSmallNumber(-8, 1, 1));


// ! Problem 03
/**
 *  একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা। 
 * */

function getAverageValue(numbers) {
    let totalValue = 0;
    for (let i = 0; i < numbers.length; i++) {
        totalValue += numbers[i];
        
    }
    let averageValue = totalValue / numbers.length;
    return averageValue;
}
// const arr = [32, 43, 46, 37, 90, 23, 24];
// const averageValue = getAverageValue(arr);
// console.log(averageValue);



// ! Problem 04
/**
 *  একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে। 
 * */

function areaOfRectangular(len, height) {
    let value = len * height;
    return value;
}
// console.log(areaOfRectangular(12, 4));

// ! Problem 05
/**
 *   (ট্রিকি) কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো। 
 * */

function secondLargestNumber(secondLarge) {
    let largestNum = secondLarge[0];
    let secondLargeNum = secondLarge[0];
    for (let i = 0; i < secondLarge.length; i++) {
        const element = secondLarge[i];
        // console.log(element);

        if (element > largestNum) {
            secondLargeNum = largestNum;
            largestNum = element;
        } else if (element > secondLargeNum) {
            secondLargeNum = element; 
        }
    }
    return secondLargeNum;
}
// console.log(secondLargestNumber([3, 4,25,23,64, 78, 96]));
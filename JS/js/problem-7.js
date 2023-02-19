// !Problem 01

/** 
 * একটা ফাংশন লিখো। সেটার মধ্যে তিনটা প্যারামিটার নিবে। এই তিনটা প্যারামিটার হবে কোন একটা ত্রিভুজের তিনটা বাহু এর দৈর্য্য। এখন তোমার কাজ হচ্ছে ফাংশনের ভিতরে কিছু হিসাব নিকাশ করে ত্রিভুজের area (আয়তন) বের করা। কোন একটা ত্রিভুজের তিনটা বাহুর দৈর্য্য দেয়া থাকলে সেটা থেকে কিভাবে আয়তন বের করতে হয় সেই ফর্মুলা গুগল থেকে খুঁজে বের করো। 
*/

function getTriangleArea(a, b, c) {
    let range = (a + b + c) / 2;
    let triangleArea = Math.sqrt(range * (range - a) * (range - b) * (range - c));
    return triangleArea;
}
// console.log(getTriangleArea(3, 4, 5));
// !Problem 02
/** 
 * কোন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কিনা। সেটা চেক করার একটা ফাংশন লিখো। 
*/

function primeNumber(prime) {
    if (prime === 1) {
        return "Not a prime Number";
    } else if (prime === 2) {
        return "It's a prime number";
    } else {
        for (let i = 2; i < prime; i++) {
            if (prime % i === 0) {
                return "Not a prime Number";
            } else {
                return "It's a prime number";
            }
            
        }
    }
}

console.log(primeNumber(3));


// !Problem 03
/** 
 * Remove duplicate items from an array
*/

function removeDuplicate(duplicate) {
    
}


// !Problem 04
/** 
 * Write foo, bar, foobar if divisible by 3 or 5 or both
*/



// !Problem 05
/** 
 * Use add and multiplication to calculate wood requirements
*/
// !Problem 06
/** 
 * Find the cheapest phone from an array of phone objects
*/
// !Problem 07
/** 
 * Calculate the total cost of the products in a shopping cart
*/

// ! Problem 01
/**
 * এমন  একটা  লুপ  লেখো  যে  তোমার  হয়ে  ১০ বার  sorry  লেখা  টা  প্রিন্ট  করবে 
 *  */
/**
 * এমন  একটা  ফাঙ্কশন  লিখতে  হবে  যাকে ডাক  দিলেই  সে sorry লেখা টাকে ১০ বার  কনসোল লগ  করবে 
 *  */

function getSorry() {
    let i = 1;
    while (i <= 10) {
        console.log(i,'Sorry');
        i++;
    }
}
getSorry()

console.log('--------------------------------------');

// ! Problem 03
/**
 * ধরো  তুমি  হটাৎ  একদিন  দোকান এ গিয়ে  চাল,ডাল ,তেল   কিনলা  এখন  এমন  একটা  ফাঙ্কশন  লিখতে  হবে  যাকে এই  তিনটা জিনিসের  ক্রয়  মূল্য  বলে  দিলেই  টোটাল  কত  টাকা কিনছো এইটা  বলে  দিবে ।
 *  */

function getTotalCost(rice, dal, oil) {
    return rice + dal + oil;
}
console.log('Total Cost',getTotalCost(82, 98, 256), 'Tk');

console.log('--------------------------------------');


// ! Problem 04
/**
 * এমন  একটা  ফাঙ্কশন  লিখবে  যাকে  তুমি কিলোমিটার  দিলে  সে  তোমাকে এ মাইল এ কনভার্ট  করে  দিবে 
 *  */

function getKmToMiles(km) {
    const miles = 0.6 * km;
    return miles;
}
console.log("Total walk",getKmToMiles(23), "miles");
console.log('--------------------------------------');


// ! Problem 05
/**
 * এখন  একটা  রি-ইউজেবল  ফাঙ্কশন  লিখো   যাকে  তুমি  শুধু  (চেস্ট ,বাইসেপ ,ট্রাইসেপ ) এইগুলা  দিয়ে  ডাক  দিলে  সে  তোমাকে  ডিটেলস  ওয়ার্কআউট দিয়ে  দিবে ।

 *  */

function reUse(getname) {
    const chest = {
        name: "Chest",
        age: 29,
        profession: "Front-end Developer",
        experiences: 2,
    }
    const bicep = {
        name: "Bicep",
        age: 26,
        profession: "Back-end Developer",
        experiences: 1,
    }
    const tricep = {
        name: "Tricep",
        age: 30,
        profession: "Full Stack Developer",
        experiences: 5,
    }

    if (getname === "chest") {
        return chest;
    } else if (getname === "bicep"){
        return bicep;
    } else if (getname === "tricep") {
        return tricep;
    } else {
        return "please pick the name chest, bicep or tricep";
    }
}
let workoutPlan = reUse("he");
console.log(workoutPlan);
console.log('--------------------------------------');


// ! Problem 08
/**
 * তোমার  ফ্রিয়ান্ডলিস্ট  এর  মধ্যে  সবথেকে বড় নামওয়ালা ফ্রেন্ড কে  খুঁজে  বের  করো ?
 *  */

function longNameFriend(name) {
    let getLongestName = "";
    for (i = 0; i < name.length; i++) {
        const index = i;
        const element = name[index];
        // console.log(element);

        if (element.length > getLongestName.length) {
            getLongestName = element;
        }
    }
    return getLongestName;
}
const friendName = ["Tuhin", "Sagor", "Abdus Salam", "Golam Rabby"];
const getLongestName = longNameFriend(friendName);
console.log(getLongestName);
console.log('--------------------------------------');

// ! Problem 09
/**
 * ধরো  তুমি  থাইল্যান্ড  বা  অন্য  কোথাও  একটা  হোটেল এ থাকতে  গেলা এখন  হোটেল  কর্তৃপক্ষ  কে  ভাড়া  জানতে  চাইলে  সে  বললো 
 * যদি  আমাদের  হোটেল এ আপনি ১-১০ দিন  থাকেন  তাহলে  ভাড়া ৫০০ টাকা/ডে
 * যদি ২০ দিন  থাকেন তাহলে ১০ দিনের পরে দিন  থেকে ২০ দিন  পর্যন্ত ৩০০ টাকা/ডে 
 * আপনি  যদি  এক  মাস  থাকেন  তাহলে  ২০ দিনের  পরের যত দিন  থাকবেন  ভাড়া ১০০টাকা /ডে 
 * 
 * এখন  তুমি  যদি ২৫ দিন  থাকো  তাহলে  ভাড়া  কত  টাকা  আসবে ?
 *  */

function dayCost(day) {
    const firstTenDaysCost = 500;
    const secondTenDaysCost = 300;
    const aboveTweentyDaysCost = 100;

    let totalCost = "";
    if (day <= 10) {
        let tenDaysCost = firstTenDaysCost * day;
        totalCost = tenDaysCost;
    } else if (day > 10 && day <= 20) {
        let startingTenDaysCost = firstTenDaysCost * 10;
        let costOfSecondTenDays = (day - 10) * secondTenDaysCost;
        let tweentyDaysCost = startingTenDaysCost + costOfSecondTenDays;
        totalCost = tweentyDaysCost;
    } else {
        let costOfFirstTenDays = firstTenDaysCost * 10;
        let costOfSecondTenDays = secondTenDaysCost * 10;
        let leftDaysCost = (day - 20) * aboveTweentyDaysCost;

        let aboveDaysCost = costOfFirstTenDays + costOfSecondTenDays + leftDaysCost;
        totalCost = aboveDaysCost;
    }
    return totalCost;
}

const day = dayCost(36);
console.log(day);
console.log('--------------------------------------');


// ! Problem 10
/**
 * তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে 
 *  */

function getFahrenheit (celsius) {
    const farhanheit = ((9 / 5) * celsius) + 32;
    return farhanheit;
}

const sendCelsius = getFahrenheit(36);
console.log("the temperature in fahrenheit scale: ",sendCelsius,"F");
console.log('--------------------------------------');

// ! Problem 11
/**
 * একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে। 
 *  */

function getCelsius(farhanheit) {
    const celsius = (5 * (farhanheit - 32)) / 9;
    return celsius;
}
const sendFarhanheit = getCelsius(96.8);
console.log("the temperature in celsius scale: ", sendFarhanheit,"C");
console.log('--------------------------------------');

// ! Problem 12
/**
 * কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে। 
 *  */

function gradeMarks(mark) {
    switch (mark) {
        case (mark >= 100):
            console.log("Your got A+");
            break;
        case (mark < 80 && mark >= 70):
            console.log("Your got A");
            break;
        case (mark < 70 && mark >= 60):
            console.log("Your got A-")
            break;
        case (mark < 60 && mark >= 50):
            console.log("Your got B");
            break;
        case (mark < 50 && mark >= 40):
            console.log("Your got C");
            break;
        case (mark < 40 && mark >= 33):
            console.log("Your got D");
            break;
        case (mark < 33):
            console.log("Your fail in the exam");
            break;
        default:
            return "you are fail";
    }
}

const myMarks = gradeMarks(18);
console.log(myMarks);
console.log('--------------------------------------');
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

function reUse(params) {
    
}

// ! Problem 06
/**
 * উপরের  এই  অবজেক্ট  থেকে  তোমার  প্রিয় মানুষটির ফ্রিয়ান্ডলিস্ট চেক  করে  দেখো । কত  জন ফ্রেন্ড  আছে ?
 *  */


// ! Problem 07
/**
 * এখন  দেখো ফ্রিয়ান্ডলিস্ট এ   কতজন ছেলে  ফ্রেন্ড  আছে ?
 *  */


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


// ! Problem 13
/**
 * সুদের হিসাব করবে। জাস্ট হিসাব কেমনে করতে হয়। সেই চিন্তায় করবে। সুদ ভালো না খারাপ সেটা এখন চিন্তা করার দরকার নাই। জাস্ট একটা ফর্মুলা থাকলে সেটা কিভাবে কোড এ লিখতে হয় সেই এঙ্গেল থেকে করার চেষ্টা করো। 
 *  */
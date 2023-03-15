/* 
? setInterval(function, millisecond)
* The setInterval() method, offered on the Window and Worker interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.

? clearInterval(intervalID)
* The global clearInterval() method cancels a timed, repeating action which was previously established by a call to setInterval(). If the parameter provided does not identify a previously established action, this method does nothing.
*/

/* 
? setTimeout(function, millisecond)
* The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.

? clearTimeout(timeoutID)
* The global clearTimeout() method cancels a timeout previously established by calling setTimeout(). If the parameter provided does not identify a previously established action, this method does nothing.
*/

/* 
? try, catch, finally, throw
try {
    code ..
    throw 'error'
}catch {
    code ...
}finally {
    code ...
}

*/

/* 
? Task - ১

১. জাভাস্ক্রিপ্ট নিয়ে প্রথম মডিউল এর এক নাম্বার ভিডিওতে এ যে আলোচনা করা হয়েছে সেগুলো 

 একটু এক্সপ্লোর করো।

২. V8 Engine এর mechanism সম্পর্কে একটু জানো।

৩. Single-threaded কি এবং জাভাস্ক্রিপ্ট এর কোন কোন জিনিস asynchronous সেটার একটা লিষ্ট  

   গুগলে সার্চ দিয়ে বের করে ফেলো। 

৪. setTimeout এর ভিতরে একটা কিছু কনসোল লগ করবে যেটা সাড়ে তিন সেকেন্ড পরে আউটপুট 

   দেখাবে।

৫. event loop লুপ কি জিনিস। এই রিলেটেড পুরা জিনিসটা আজকে অনেকেই বুঝবে না। তাও 

  আরেকবার দেখে রাখবে।

৬. Call Stack , event queue কিভাবে কাজ করে সে সম্পর্কে একটু গুগল করে দেখো।

৭. Try, catch, finally এবং throw নিয়ে একটু গুগল এ সার্চ দাও।

৮ গত দুই মডিউল যে interview questions গুলো দেওয়া হয়েছে সেগুলো অব্বশই এক্সপ্লোর করে  

*/

/* 
? Task - ২

১. “Common types of errors in JS” লিখে গুগল সার্চ দাও এবং যে যে এরর নিয়ে মডিউল এ আলোচনা করা হয়েছে সেগুলো নিয়ে ব্লগ গুলো থেকে পড়ো। এরর মেসেজ গুলো বুঝার চেষ্টা করো।


২. আমাদের গিটহাব এ যাও। সেখানে nosto-bank নামে একটা রিপোজটিরি আছে। সেটা ক্লোন করো। 


৩. সেখানেও কী কী বাগ আছে। তুমি নিজে নিজে খুঁজে বের করার চেষ্টা করো। মিনিমাম তিনটা বাগ খুঁজে বের করে সেগুলা ফিক্স করার চেষ্টা করো। আরো বেশি বাগ আছে কিনা খুঁজে বের করো। 


৪. আর এর পাশাপাশি যদি shopping-list এবং money master প্রাকটিস করতে চাও তাহলে করতে  পারো।

*/

/* 
? Debug Steps: 
1. Error check (error reproduce)
2. Check others stuffs on the website
3. Check Console for error
4. click on the link of the error (it will take you to the code)
5. If needed add a breakpoint and try to stop the code over there and see the values
6. if needed console log output
7. search full code base (Ctrl + Shift + F) > don't forget about partial match
8. look around for typo
*/

/* 
১. prompt দিয়ে ইউজারের কাছ থেকে একটা সংখ্যা নাও। সেটার সাথে ২০০যোগ করো। যোগ করতে গেলে parse করা লাগলে সেটা করো। তারপর সেই রেজাল্টকে alert দিয়ে আউটপুট দেখাও 

২. ব্রাউজারে একটা confirm করে জিজ্ঞেস করো তুমি কি তোমার ওয়েবসাইট এর লোকেশন দেখতে চাও। যদি বলে দেখতে চাই তাহলে সেই ওয়েবসাইট এর লোকেশন এর href জিনিসটা কনসোল লগ করে দেখাও 

৩. Cookies কি জিনিস। এইটা দিয়ে কি করা হয়। সেটা ইংরেজিতে ৫ থেকে ৭ লাইনের মধ্যে লিখে ফেলো। 

৪. local storage আর session storage এর মধ্যে তিনটা পার্থক্য লিখে ফেলো। ইংরেজিতে। (নিজের মতো করে লিখবে )

৫. ভিডিওতে চারটা লেভেল এর লোকাল স্টোরেজ রিলেটেড কাজ দেয়া হয়েছে। সেগুলা একটু ভালো করে করো। 

৬. আমাদের গিটহাব এ issue-tracker নামে একটা রিপোজিটরি আছে।সেখানে কোন একটা issue যোগ করার পর সেটাকে close করা যায়না। আবার ডিলিট ও করা যায় না। তো তোমার কাজ হচ্ছে সেই সাইটের বাগ ফিক্স করা। এই ছাড়া আরো ইস্যু আছে কি নাই। সেটা আমি বলে দিচ্ছি না। তোমার কাজ হচ্ছে ওয়েবসাইট ঘেঁটেঘুটে দেখা। কি কি কাজ করার কথা সেটা ঠিক মতো কাজ করতেছে কিনা। এতে অপরিচিত ওয়েবসাইট ঘাটতে তোমার কিছু অভিজ্ঞতা হবে। তারপর দেখো সেখানে কোন ইস্যু থাকতে পারে কিনা। থাকলে সেগুলা ফিক্স করার চেষ্টা করো। 
*/


/* 
    ? Need to know about Browser DevToolj
*/
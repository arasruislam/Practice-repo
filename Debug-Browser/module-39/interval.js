console.log(1);
const setTimeoutId = setTimeout(() => {
    console.log(3);
}, 1000)
console.log(4);

function doSomething() {
    console.log(3);
}

let num = 0;
const setIntervalId = setInterval(() => {
    // num++
    console.log(++num);
    if (num === 10) {
        clearInterval(setIntervalId);
    }
}, 1000)
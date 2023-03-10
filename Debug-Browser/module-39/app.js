/* 
fetch(), setTimeout(arrow-function, time), setInterval(arrow-function, time)
*/

// Promise
const getData = new Promise((resolve, reject) => {
    // resolve(5656)
    reject('no data found');
})
getData
    .then(data => console.log(data))
    .catch(err => console.error('ERR:', err))

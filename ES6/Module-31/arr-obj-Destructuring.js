/**
 * ! Array Object Destructuring
 */


// Object Destructuring
const fish = {
  name: "Hilsa",
  address: "chadpur",
  color: "silver",
  phone: "01800000000",
  price: 4000,
};
// const phn = fist.phone;
// const color = fist.color;
// const price = fish.price;

const { phone } = fish;

const { age, name } = {
  name: "almas",
  age: 24,
  profession: "makeup artist",
};
console.log(age);

const { address } = fish;
console.log(address);

// array Destructuring
const [first, second] = [32, 43, 54, 22, 54];
console.log(first, second);

const nayoks = ['asru', 'sahab', 'tuhin'];
const [king, lost, notun] = nayoks;
console.log(notun);

function getNames() {
    return ['alim' + ' halim']
}

const [baba, chacha] = getNames();
console.log(chacha, baba);
// access object value from an array
const users = [{ id: 1, name: "Asru", job: "web designer" }];
// console.log(users[0].name);

// access array value from an object
const data = {
  count: 5000,
  data: [
    { id: 1, name: "abul", job: "Leader" },
    { id: 2, name: "babul", job: "Doctor" },
  ],
};
// console.log(data.data[0].job);


// access object property value from an object
const user = {
  id: 5001,
  name: "asru islam",
  address: {
    street: {
      first: "uttara dhaka 1230",
      second: "2nd floor",
      third: "right side",
    },
    postOffice: "Uttara",
    city: "Dhaka",
  },
};

// const userFloor = user.address.street.first;
const userFloor = user.address.stret?.first;
console.log(userFloor);
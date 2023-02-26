/* 
Load data from ramdomuser.api 
*/

const loadUser = () => {
  fetch("https://randomuser.me/api/?gender=female")
    .then((res) => res.json())
    .then((data) => displayUser(data));
};

const displayUser = (user) => {
  // console.log(user);
  console.log(user.results[0].picture.large);

  const gender = document.getElementById("gender");
  gender.innerText = user.results[0].gender;

  const fullName = user.results[0].name;
  const name = document.getElementById("name");
  name.innerHTML = `
        ${fullName.title} ${fullName.first} ${fullName.last}
    `;

  const address = user.results[0].location;
  const location = document.getElementById("location");
  location.innerHTML = `
        ${address.street.number} ${address.street.name}, ${address.city}, ${address.state} ${address.postcode}, ${address.country}
    `;

  const setImg = user.results[0].picture.large;
  const img = document.getElementById("img");
  const src = document.createAttribute("src");
  src.value = setImg;
  img.setAttributeNode(src);
};

loadUser();

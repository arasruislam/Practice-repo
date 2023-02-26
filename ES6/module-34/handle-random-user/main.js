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
  //   console.log(user.results[0].name);

  const gender = document.getElementById("gender");
  gender.innerText = user.results[0].gender;

  const name = document.getElementById("name");
  const fullName = user.results[0].name;
  name.innerHTML = `
        ${fullName.title} ${fullName.first} ${fullName.last}
    `;
};

loadUser();

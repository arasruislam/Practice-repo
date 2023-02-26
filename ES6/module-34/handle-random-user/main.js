/* 
Load data from ramdomuser.api 
*/

const loadUser = () => {
  fetch("https://randomuser.me/api/?gender=female")
    .then((res) => res.json())
    .then((data) => displayUser(data));
};

const displayUser = (user) => {
    console.log(user);
}


loadUser();

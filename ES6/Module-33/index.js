/**
 * Load Data dynamically to the website
 */

function loadUsers2() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUsers(data));
}

function displayUsers(data) {
  // for (const user of data) {
  //     console.log(user.name);
  //     console.log(user.username);
  //     console.log(user.email);
  //     console.log("----------------------");
  // }

  const ul = document.getElementById("user-list");

  for (const user of data) {
    // console.log(user.name);
    const li = document.createElement("li");
    li.innerText = user.name;
    ul.appendChild(li);
  }
}

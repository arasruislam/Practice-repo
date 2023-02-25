/* 
API Data Load
*/

function loadData2() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
}

function loadUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => console.log(data))
}

function loadPost() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
    .then(data => console.log(data))
}


// -------another version of load API Data--------
function loadCommentData() {
    fetch("https://jsonplaceholder.typicode.com/comments")
        .then(res => res.json())
    .then(data => doConsole(data))
}
function doConsole(data) {
    console.log(data);
}
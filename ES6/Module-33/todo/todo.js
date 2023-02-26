function loadTodos() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => displayTodos(data));
}

function displayTodos(todos) {
    const todoContainer = document.getElementById("todo-container");

    for (const todo of todos) {
        const createDiv = document.createElement('div')
        createDiv.innerHTML = `
            <h4>title: ${todo.title}</h4>
            <p>title: ${todo.userId}</p>
        `
        todoContainer.appendChild(createDiv);
    }
}
loadTodos()
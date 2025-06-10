//Fetch ToDos
//slice - how many dataset to be displayed in the output

fetch('https://jsonplaceholder.typicode.com/todos')
.then(res=>res.json())
.then(todos => console.log(todos.slice(0,4)))
/*
 * Set everything up
 */

const todoListEl = document.querySelector("#todoList");
const newTodoEl = document.querySelector("#newTodo");

newTodoEl.addEventListener("new-todo", (e) => {
	todoListEl.addTodo(e.detail);
});

window.addEventListener("delete-todo", (e) => {
	todoListEl.deleteTodo(e.detail);
});

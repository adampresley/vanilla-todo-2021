/*
 * Set everything up
 */

import { listenForDeleteTodo } from "./static/js/Events.js";

document.querySelector("#newTodo").addEventListener("new-todo", (e) => {
	const todoListEl = document.querySelector("#todoList");
	todoListEl.addTodo(e.detail);
});

listenForDeleteTodo((e) => {
	const todoListEl = document.querySelector("#todoList");
	todoListEl.deleteTodo(e.detail);
});

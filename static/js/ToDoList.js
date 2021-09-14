import { ToDoItem } from "./ToDoItem.js";

export class ToDoList extends HTMLElement {
	constructor() {
		super();

		this._list = [
			{ id: 1, text: "clean the house" },
			{ id: 2, text: "buy milk" },
		];
	}

	connectedCallback() {
		this.classList.add("ToDo-Content");

		this._list.forEach((l) => {
			const newItem = new ToDoItem(l.id, l.text);
			this.insertAdjacentElement("beforeend", newItem);
		});
	}

	/******************************************************************************
	 * Public methods
	 *****************************************************************************/

	addTodo(text) {
		const newID = this._generateID();
		const newToDo = { id: newID, text: text };
		this._list.push(newToDo);

		const newTodo = new ToDoItem(newID, text);
		this.insertAdjacentElement("beforeend", newTodo);
	}

	deleteTodo(id) {
		this._list = this._list.filter((item) => item.id !== id);
	}

	/******************************************************************************
	 * Private methods
	 *****************************************************************************/

	_generateID() {
		if (this._list && this._list.length) {
			return Math.max(...this._list.map((t) => t.id)) + 1;
		} else {
			return 1;
		}
	}
}

customElements.define("todo-list", ToDoList);

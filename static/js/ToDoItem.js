import { dispatchDeleteTodo } from "./Events.js";

export class ToDoItem extends HTMLElement {
	constructor(id, text) {
		super();

		this._id = id;
		this._text = text;
	}

	connectedCallback() {
		/*
		 * Add the main class and set a data attribute
		 * so we can know which list item this element
		 * belongs to
		 */
		this.classList.add("ToDoItem");
		this.setAttribute("data-id", this._id);

		/*
		 * Add the todo text
		 */
		let p = document.createElement("p");
		p.classList.add("ToDoItem-Text");
		p.innerText = this._text;

		this.insertAdjacentElement("beforeend", p);

		/*
		 * Add the button
		 */
		let b = document.createElement("button");
		b.classList.add("ToDoItem-Delete");
		b.innerText = "-";
		b.addEventListener("click", (e) => {
			e.preventDefault();
			dispatchDeleteTodo(this._id);
			this.remove();
		});

		this.insertAdjacentElement("beforeend", b);
	}
}

customElements.define("todo-item", ToDoItem);

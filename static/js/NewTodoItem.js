import { dispatchDisplayErrorMessage } from "./Events.js";

export class NewTodoItem extends HTMLElement {
	constructor() {
		super();

		this._textEl = null;
		this._buttonEl = null;
	}

	connectedCallback() {
		this.classList.add("ToDoInput");

		this._textEl = document.createElement("input");
		this._textEl.type = "text";
		this._textEl.placeholder = "I need to...";
		this._textEl.addEventListener("keyup", (e) => {
			if (e.key === "Enter") {
				this._createNewToDoItem();
			}
		});

		this._buttonEl = document.createElement("button");
		this._buttonEl.classList.add("ToDo-Add");
		this._buttonEl.innerText = "+";
		this._buttonEl.addEventListener("click", (e) => {
			e.preventDefault();
			this._createNewToDoItem();
		});

		this.insertAdjacentElement("beforeend", this._textEl);
		this.insertAdjacentElement("beforeend", this._buttonEl);
	}

	/******************************************************************************
	 * Private methods
	 *****************************************************************************/

	_createNewToDoItem() {
		const text = this._textEl.value;

		//validate todo
		if (!text) {
			this._displayError("Please enter a todo!");
			return;
		}

		this.dispatchEvent(
			new CustomEvent("new-todo", {
				detail: text,
			})
		);

		this._textEl.value = "";
		this._textEl.focus();
	}

	_displayError(message) {
		dispatchDisplayErrorMessage(message);
	}
}

customElements.define("new-todo-item", NewTodoItem);

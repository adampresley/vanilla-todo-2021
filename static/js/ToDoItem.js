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

			window.dispatchEvent(
				new CustomEvent("delete-todo", {
					detail: this._id,
				})
			);

			this.remove();
		});

		this.insertAdjacentElement("beforeend", b);
	}

	/******************************************************************************
	 * Properties
	 *****************************************************************************/

	get id() {
		return this._id;
	}

	set id(value) {
		this._id = value;
		this.setAttribute("data-id", value);
	}

	get text() {
		return this._text;
	}

	set text(value) {
		this._text = value;
	}
}

customElements.define("todo-item", ToDoItem);

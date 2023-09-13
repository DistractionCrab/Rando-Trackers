class BingoBoard extends HTMLTableElement {
	constructor() {
		super()
	}

	connectedCallback() {

	}
}


class BinaryState extends HTMLImageElement {
	constructor() {
		super()
		this.activeImage = null;
		this.inactiveImage = null;
		this.active = false;
	}

	connectedCallback() {
		//this.attachShadow({ mode: "open" }); // sets and returns 

		if (this.hasAttribute("active")) {
			this.activeImage = this.getAttribute("active")	;
		}

		if (this.hasAttribute("inactive")) {
			this.inactiveImage = this.getAttribute("inactive")	;
		}

		this.onclick = e => {
			if (this.active) {
				this.setAttribute('src', this.inactiveImage);
				this.classList.toggle("track-state-inactive", true);
				this.classList.toggle("track-state-active", false);
			} else {
				this.setAttribute('src', this.activeImage);
				this.classList.toggle("track-state-inactive", false);
				this.classList.toggle("track-state-active", true);
			}
			this.active = !this.active;
		}

		this.setAttribute("src", this.inactiveImage);
		this.classList.add("track-state-inactive");
	}
}

customElements.define("track-state", BinaryState, { extends: "img" });
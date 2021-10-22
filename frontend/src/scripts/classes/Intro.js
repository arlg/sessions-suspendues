class Intro {
	constructor() {
		this.dom = {
			intro: document.querySelector(".intro"),
			overlay: document.querySelector(".overlay"),
		};

		if (!this.dom.intro) return;

		this.init();
	}

	init() {
		console.log(document.cookie);
		// document.cookie = "intro_seen=true";

		this.dom.intro.classList.add("is-active");
		this.dom.overlay.classList.add("is-active");

		this.initEvents();
	}

	initEvents() {
		document.querySelector("body").addEventListener("click", () => {
			this.onClose();
		});
	}

	onClose() {
		this.dom.intro.classList.remove("is-active");
		this.dom.overlay.classList.remove("is-active");
	}
}

export { Intro };

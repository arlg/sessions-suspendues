class Intro {
	constructor() {
		this.dom = {
			intro: document.querySelector(".intro"),
			overlay: document.querySelector(".overlay"),
		};

		if (!this.dom.intro) return;

		console.log(document.cookie);
		console.log(this.getCookieValue("intro_seen"));

		const cookies = document.cookie;

		if (this.getCookieValue("intro_seen") === "") this.init();
	}

	init() {
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

		document.cookie = "intro_seen=true";
	}

	// Get cookie by value
	// https://stackoverflow.com/questions/5639346/what-is-the-shortest-function-for-reading-a-cookie-by-name-in-javascript
	getCookieValue(name) {
		return (
			document.cookie
				.match("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)")
				?.pop() || ""
		);
	}
}

export { Intro };

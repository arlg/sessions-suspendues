class FullPopup {
	constructor() {
		this.dom = {
			fullPopup: document.querySelector(".js-full-popup"),
			close: document.querySelector(".js-full-popup-close"),
			overlay: document.querySelector(".js-overlay"),
		};

		if (!this.dom.fullPopup) return;

		this.init();
	}

	init() {
		this.initEvents();
	}

	initEvents() {
		window.ee.addListener("onFullPopupChange", (_props) => {
			this.changeContent(_props);
		});

		this.dom.close.addEventListener("click", (e) => {
			this.close();
		});
	}

	changeContent(_props) {
		this.dom.fullPopup.querySelector("h2").innerHTML = _props.band;
		this.dom.fullPopup.querySelector("p").innerHTML = _props.place;
		this.dom.fullPopup.querySelector(".full-popup__embed").innerHTML =
			_props.url;

		this.open();
	}

	open() {
		this.dom.fullPopup.classList.add("is-active");
		this.dom.overlay.classList.add("is-active");
	}

	close() {
		this.dom.fullPopup.classList.remove("is-active");
		this.dom.overlay.classList.remove("is-active");
	}
}

export { FullPopup };

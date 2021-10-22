class FullPopup {
	constructor() {
		this.dom = {
			fullPopup: document.querySelector(".js-full-popup"),
		};

		this.init();
	}

	init() {
		this.initEvents();
	}

	initEvents() {}

	changeContent(_props) {
		this.dom.fullPopup.querySelector("h2").innerHTML = _props.band;
		this.dom.fullPopup.querySelector("p").innerHTML = _props.place;
		this.dom.fullPopup.querySelector(".full-popup__embed").innerHTML =
			_props.url;
	}

	open() {}

	close() {}
}

export { FullPopup };

class Modal {
	constructor() {
		this.dom = {
			trigger: document.querySelectorAll(".js-modal-trigger"),
			modal: document.querySelectorAll(".js-modal"),
			close: document.querySelectorAll(".js-modal-close"),
			overlay: document.querySelector(".js-overlay"),
		};

		if (!this.dom.trigger.length) return;

		this.init();
		this.onCloseEvents();
	}

	init() {
		[...this.dom.trigger].forEach((_el) => {
			_el.addEventListener(
				"click",
				(_e) => {
					const index = parseInt(_e.currentTarget.dataset.index);
					this.onOpen(index);
				},
				false
			);
		});
	}

	onOpen(_index) {
		this.currentModal = document.querySelector(
			`.js-modal[data-index="${_index}"]`
		);

		this.currentModal.classList.add("is-active");
		this.dom.overlay.classList.add("is-active");
	}

	onCloseEvents() {
		// Close button
		[...this.dom.close].forEach((_el) => {
			_el.addEventListener("click", (_e) => {
				this.onClose();
			});
		});

		// Close on Overlay click
		this.dom.overlay.addEventListener("click", (_e) => {
			this.onClose();
		});

		// Close on Esc Key press
		document.addEventListener("keydown", (evt) => {
			evt = evt || window.event;
			var isEscape = false;
			if ("key" in evt) {
				isEscape = evt.key === "Escape" || evt.key === "Esc";
			} else {
				isEscape = evt.keyCode === 27;
			}
			if (isEscape) {
				this.onClose();
			}
		});
	}

	onClose() {
		this.currentModal.classList.remove("is-active");
		this.dom.overlay.classList.remove("is-active");
	}
}

export { Modal };

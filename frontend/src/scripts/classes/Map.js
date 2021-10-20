import Leaflet from "Leaflet";

window.markers = window.markers || [];

class Map {
	constructor() {
		this.dom = {
			fullPopup: document.querySelector(".js-full-popup"),
		};

		/*
		Ko Ko Mo au marché couvert de Talensac
		Simo Cell & Abdullah Miniawy à l'usine Beghin-Say
		Inuït aux Fonderies
		Terrier à l'école de la Cité Radieuse
		Zaho de Sagazan au café Le Landru
		Miët à la chapelle de l'Immaculée
		Cabadzi au bar Le Floride
		Clelia Vega dans un manoir abandonné (Rue du Petit Portric – 44240 La Chapelle-sur-Erdre pour la géoloc)
		Mad Foxes à l'usine Guillouard
		Soja Triani au musée d'Histoire Naturelle
		Molto Morbidi au Jardin des Plantes
		Odor au vélodrome du Petit Breton*/

		this.geoJSON = [
			{
				type: "FeatureCollection",
				features: [
					{
						type: "Feature",
						geometry: {
							type: "Point",
							coordinates: [-1.557468, 47.221592],
						},
						properties: {
							band: "Ko Ko Mo",
							place: "Marché couvert de Talensac",
							title: "",
							thumb: "assets/img/1.jpg",
							url: "https://embed.embed.com",
						},
					},
					{
						type: "Feature",
						geometry: {
							type: "Point",
							coordinates: [-1.5532477325779, 47.20044581235221],
						},
						properties: {
							band: "Simo Cell & Abdullah Miniawy",
							place: "Usine Beghin-Say",
							title: "",
							thumb: "assets/img/1.jpg",
							url: null,
						},
					},
					{
						type: "Feature",
						geometry: {
							type: "Point",
							coordinates: [-1.545692, 47.205669],
						},
						properties: {
							band: "Inuït",
							place: "Fonderies",
							title: "",
							thumb: "assets/img/1.jpg",
							url: null,
						},
					},
				],
			},
		];

		this.geojsonMarkerOptions = {
			radius: 8,
			fillColor: "#ff7800",
			color: "#000",
			weight: 1,
			opacity: 1,
			fillOpacity: 0.8,
		};
		this.markers = [];
		this.init();
	}

	init() {
		this.map = L.map("map").setView([47.218637, -1.554136], 13);

		this.LMap = L.tileLayer(
			"https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png",
			{
				attribution:
					'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
				maxZoom: 18,
				// tileSize: 512,
				// zoomOffset: 1,
			}
		).addTo(this.map);

		this.createMarkers();

		this.initEvents();
	}

	initEvents() {}

	createMarkers() {
		// L.geoJSON(this.geoJSON).addTo(this.map);

		// L.geoJSON(this.geoJSON, {
		// 	pointToLayer: (feature, latlng) => {
		// 		return L.circleMarker(latlng, this.geojsonMarkerOptions);
		// 	},
		// }).addTo(this.map);

		L.geoJSON(this.geoJSON, {
			onEachFeature: this.onEachFeature,
		}).addTo(this.map);

		// this.map.on("click", function (ev) {
		// 	console.log(ev);
		// 	console.log(ev.target);
		// });

		// EVENTS
		// document.addEventListener("click", (e) => {
		// 	const { target } = e;
		// 	// console.log(target);
		// 	if (target.closest(".leaflet-popup")) {
		// 		//   callback(); // If target is an li, run callback
		// 		// console.log(e);
		// 		// console.log(L.popup().isOpen());
		// 		window.markers.forEach((_marker) => {
		// 			if (_marker.getPopup().isOpen()) {
		// 				_marker
		// 					.getPopup()
		// 					.setContent(
		// 						"<p>Hello world!<br />This is a nice popup.</p>"
		// 					);
		// 			}
		// 			console.log(_marker.getPopup().isOpen());
		// 		});
		// 	}
		// });

		// Passer les données de la feature au marker
		// Au clic, utiliser ces données pour recréer un template
	}

	onEachFeature(feature, layer) {
		// does this feature have a property named popupContent?

		const _props = feature.properties;

		const tpl = `
				<div class="custom-popup__img">
					<img src="${_props.thumb}" width="255" height="128" />
					<button></button>
				</div>
				<h2>${_props.band}</h2>
				<p class="custom-popup__place">${_props.place}</p>`;

		const content = L.DomUtil.create("div", "custom-popup");
		content.innerHTML = tpl;

		if (feature.properties) {
			layer.bindPopup(content);
			// .on("popupclose", () => {
			// 	layer.getPopup().setContent(content);
			// });

			// console.log(layer.getPopup().getContent());

			L.DomEvent.on(content, "click", function (e) {
				this.onPopupClick(_props);
			});

			// Open / Close
			// layer.on("mouseover", function (e) {
			// 	this.openPopup();
			// });
			// layer.on("mouseout", function (e) {
			// 	this.closePopup();
			// });

			//https://gis.stackexchange.com/questions/141548/how-to-update-a-popup-content-from-its-marker
		}
	}

	onPopupClick(_props) {
		this.dom.fullPopup.querySelector("h2").innerHTML = _props.band;
		this.dom.fullPopup.querySelector("p").innerHTML = _props.place;
		this.dom.fullPopup.querySelector(".full-popup__embed").innerHTML =
			_props.url;
	}

	offPopupClick() {}
}

export { Map };

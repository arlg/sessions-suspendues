import Leaflet from "Leaflet";

class Map {
	constructor() {
		this.dom = {};

		this.geoJSON = [
			{
				type: "FeatureCollection",
				features: [
					{
						type: "Feature",
						geometry: {
							type: "Point",
							coordinates: [
								-1.329975099999956, 46.98040429999999,
							],
						},
						properties: {
							band: "Groupe 1",
							place: "Ile de Nantes",
							title: "",
							thumb: "assets/img/1.jpg",
							url: "https://embed.embed.com",
						},
					},
					{
						type: "Feature",
						geometry: {
							type: "Point",
							coordinates: [-1.6284865999999738, 46.5564467],
						},
						properties: {
							band: "Groupe 2",
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

		this.init();
	}

	init() {
		this.map = L.map("map").setView([47.218637, -1.554136], 10);

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

		L.geoJSON(this.geoJSON, {
			pointToLayer: (feature, latlng) => {
				return L.circleMarker(latlng, this.geojsonMarkerOptions);
			},
		}).addTo(this.map);

		L.geoJSON(this.geoJSON, {
			onEachFeature: this.onEachFeature,
		}).addTo(this.map);

		// this.map.on("click", function (ev) {
		// 	console.log(ev);
		// 	console.log(ev.target);
		// });
	}

	onEachFeature(feature, layer) {
		// does this feature have a property named popupContent?

		const _props = feature.properties;

		const tpl = `<div class="custom-popup">
				<div class="custom-popup__img">
					<img src="${_props.thumb}" width="255" height="128" />
					<button></button>
				</div>
				<h2>${_props.band}</h2>
				<p class="custom-popup__place">${_props.place}</p>
			</div>`;

		//https://stackoverflow.com/questions/13698975/click-link-inside-leaflet-popup-and-do-javascript
		var _bindPopupClickHandler = (e) => {
			console.log(e.currentTarget.param); // get popup
			e.currentTarget.param.setContent("<h3>dd</h3>");
		};

		var _bindPopupClick = function (e) {
			console.log(e);
			if (e.popup) {
				e.popup._wrapper.param = e.popup; // Passer la popup a l'event
				e.popup._wrapper
					// .querySelector("button")
					.addEventListener("click", _bindPopupClickHandler);
			}
		};
		var _unbindPopupClick = function (e) {
			if (e.popup) {
				e.popup._wrapper
					// .querySelector("button")
					.removeEventListener("click", _bindPopupClickHandler);
			}
		};

		if (feature.properties) {
			layer.bindPopup(tpl).on("popupopen", _bindPopupClick);
			// .on("popupclose", _unbindPopupClick);

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

	onPopupClick() {}

	offPopupClick() {}
}

export { Map };

import Leaflet from "Leaflet";
import { FullPopup } from "./FullPopup";
import EventEmitter from "wolfy87-eventemitter";

window.markers = window.markers || [];
window.ee = new EventEmitter();

class Map {
	constructor() {
		this.dom = { map: document.querySelector("#map") };

		if (!this.dom.map) return;

		this.fullPopup = new FullPopup();
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

		this.geoJSON = [];
		this.markers = [];
		this.init();
	}

	init() {
		// Init Map
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

		fetch("../data/map.json")
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				// Work with JSON data here
				console.log(data);
				this.geoJSON = data.map;
				this.createMarkers();
			})
			.catch((err) => {
				// Do something for an error here
				console.log(err);
			});

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

		var baseIcon = L.icon({
			iconUrl: "assets/img/marker.svg",
			iconSize: [59, 59],
			iconAnchor: [16, 37],
			popupAnchor: [0, -28],
		});

		var myIcon = L.divIcon({
			className: "custom-div-icon",
			iconSize: [40, 40],
			iconAnchor: [20, 18],
			html: "<span class='custom-div-icon__outer'><span class='custom-div-icon__inner'></span></span>",
		});

		L.geoJSON(this.geoJSON, {
			pointToLayer: (feature, latlng) => {
				return L.marker(latlng, { icon: myIcon });
			},
			onEachFeature: (feature, layer) => {
				this.onEachFeature(feature, layer);
			},
		}).addTo(this.map);

		this.setMapBounds();
	}

	onEachFeature(feature, layer) {
		const _props = feature.properties;

		const tpl = `
				<div class="custom-popup__img">
					<img src="${_props.thumb}" width="255" height="128" />
					<button></button>
				</div>
				<h2 ${_props.is_long_band === true ? "class='--is-long'" : ""} >
					${_props.band}</h2>
				<p class="custom-popup__place">${_props.place}</p>`;

		const content = L.DomUtil.create("div", "custom-popup");
		content.innerHTML = tpl;

		// const activeIcon = L.icon({
		// 	iconUrl: "assets/img/marker-open.svg",
		// 	iconSize: [60, 60],
		// 	iconAnchor: [30, 30],
		// 	popupAnchor: [0, 0],
		// });

		// const baseIcon = L.icon({
		// 	iconUrl: "assets/img/marker.svg",
		// 	iconSize: [60, 60],
		// 	iconAnchor: [30, 30],
		// 	popupAnchor: [0, 0],
		// });

		if (feature.properties) {
			layer.bindPopup(content);

			layer.on("popupopen", () => {
				L.DomUtil.addClass(layer._icon, "is-active");
			});

			layer.on("popupclose", () => {
				L.DomUtil.removeClass(layer._icon, "is-active");
			});

			this.markers.push(layer);

			// console.log(layer.getPopup().getContent());

			L.DomEvent.on(content, "click", (e) => {
				// this.onPopupClick(_props);
				window.ee.emitEvent("onFullPopupChange", [_props]);
			});

			// Open / Close
			// layer.on("mouseover", function (e) {
			// 	this.openPopup();
			// });
			// layer.on("mouseout", function (e) {
			// 	this.closePopup();
			// });
		}
	}

	// Once markers are created, we set map bounds to those markers
	setMapBounds() {
		const group = new L.featureGroup(this.markers);
		this.map.fitBounds(group.getBounds().pad(0.5));
	}
}

export { Map };

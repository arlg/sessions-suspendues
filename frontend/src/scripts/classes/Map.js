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

		this.geoJSON = [];
		this.markers = [];
		this.init();
	}

	init() {
		this.initMap();
		this.getData();

		this.initEvents();
	}

	initMap() {
		// Init Map
		this.map = L.map("map").setView([47.218637, -1.554136], 10);

		this.LMap = L.tileLayer(
			"https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png",
			{
				attribution:
					'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
				maxZoom: 18,
			}
		).addTo(this.map);
	}

	getData() {
		fetch("../data/map.json")
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				// Work with JSON data here
				this.geoJSON = data.map;
				this.createMarkers();
			})
			.catch((err) => {
				// Do something for an error here
				console.log(err);
			});
	}

	initEvents() {}

	createMarkers() {
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

		this.checkUrlParameters();
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

		if (feature.properties) {
			layer.bindPopup(content);

			layer.on("popupopen", (_e) => {
				L.DomUtil.addClass(layer._icon, "is-active");
				this.panToPopup(_e.target._popup);
			});

			layer.on("popupclose", () => {
				L.DomUtil.removeClass(layer._icon, "is-active");
			});

			layer.options.title = _props.id;

			this.markers.push(layer);

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
		this.map.fitBounds(group.getBounds().pad(0.1));
	}

	// Check if we have a parameter with an id to trigger open popup
	checkUrlParameters() {
		// Check if we have url parameters
		var url = new URL(window.location);
		var id = parseInt(url.searchParams.get("id"), 10);

		this.markers.forEach((_marker) => {
			if (_marker.options.title === id) {
				_marker.openPopup();
				this.panToPopup(_marker._popup);
			}
		});
	}

	//https://stackoverflow.com/questions/22538473/leaflet-center-popup-and-marker-to-the-map
	// Pan to opened popup
	panToPopup(_popup) {
		var px = this.map.project(_popup._latlng); // find the pixel location on the map where the popup anchor is
		px.y -= _popup._container.clientHeight / 2; // find the height of the popup container, divide by 2, subtract from the Y axis of marker location
		this.map.panTo(this.map.unproject(px), { animate: true }); // pan to new center
	}
}

export { Map };

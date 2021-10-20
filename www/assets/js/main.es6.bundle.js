/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/js/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/scripts/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/classes/Map.js":
/*!************************************!*\
  !*** ./src/scripts/classes/Map.js ***!
  \************************************/
/*! exports provided: Map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return Map; });
/* harmony import */ var Leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Leaflet */ "./node_modules/Leaflet/dist/leaflet-src.js");
/* harmony import */ var Leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(Leaflet__WEBPACK_IMPORTED_MODULE_0__);

window.markers = window.markers || [];

class Map {
  constructor() {
    this.dom = {
      fullPopup: document.querySelector(".js-full-popup")
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

    this.geoJSON = [{
      type: "FeatureCollection",
      features: [{
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-1.557468, 47.221592]
        },
        properties: {
          band: "Ko Ko Mo",
          place: "Marché couvert de Talensac",
          title: "",
          thumb: "assets/img/1.jpg",
          url: "https://embed.embed.com"
        }
      }, {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-1.5532477325779, 47.20044581235221]
        },
        properties: {
          band: "Simo Cell & Abdullah Miniawy",
          place: "Usine Beghin-Say",
          title: "",
          thumb: "assets/img/1.jpg",
          url: null
        }
      }, {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-1.545692, 47.205669]
        },
        properties: {
          band: "Inuït",
          place: "Fonderies",
          title: "",
          thumb: "assets/img/1.jpg",
          url: null
        }
      }]
    }];
    this.geojsonMarkerOptions = {
      radius: 8,
      fillColor: "#ff7800",
      color: "#000",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8
    };
    this.markers = [];
    this.init();
  }

  init() {
    this.map = L.map("map").setView([47.218637, -1.554136], 13);
    this.LMap = L.tileLayer("https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png", {
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
      maxZoom: 18 // tileSize: 512,
      // zoomOffset: 1,

    }).addTo(this.map);
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
      onEachFeature: this.onEachFeature
    }).addTo(this.map); // this.map.on("click", function (ev) {
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
    var _props = feature.properties;
    var tpl = "\n\t\t\t\t<div class=\"custom-popup__img\">\n\t\t\t\t\t<img src=\"".concat(_props.thumb, "\" width=\"255\" height=\"128\" />\n\t\t\t\t\t<button></button>\n\t\t\t\t</div>\n\t\t\t\t<h2>").concat(_props.band, "</h2>\n\t\t\t\t<p class=\"custom-popup__place\">").concat(_props.place, "</p>");
    var content = L.DomUtil.create("div", "custom-popup");
    content.innerHTML = tpl;

    if (feature.properties) {
      layer.bindPopup(content); // .on("popupclose", () => {
      // 	layer.getPopup().setContent(content);
      // });
      // console.log(layer.getPopup().getContent());

      L.DomEvent.on(content, "click", function (e) {
        this.onPopupClick(_props);
      }); // Open / Close
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
    this.dom.fullPopup.querySelector(".full-popup__embed").innerHTML = _props.url;
  }

  offPopupClick() {}

}



/***/ }),

/***/ "./src/scripts/classes/_myClass.js":
/*!*****************************************!*\
  !*** ./src/scripts/classes/_myClass.js ***!
  \*****************************************/
/*! exports provided: MyClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyClass", function() { return MyClass; });
class MyClass {
  constructor() {
    this.dom = {};
    this.init();
  }

  init() {
    this.initEvents();
  }

  initEvents() {}

}



/***/ }),

/***/ "./src/scripts/components/_component.js":
/*!**********************************************!*\
  !*** ./src/scripts/components/_component.js ***!
  \**********************************************/
/*! exports provided: component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "component", function() { return component; });
function component() {
  console.log('Je suis un composant 🔧');
  makeThings();

  function makeThings() {}
}

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/_component */ "./src/scripts/components/_component.js");
/* harmony import */ var _classes_myClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/_myClass */ "./src/scripts/classes/_myClass.js");
/* harmony import */ var _classes_Map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Map */ "./src/scripts/classes/Map.js");
/***
	main.js
	Entrée principale des scripts
***/

/**
	IMPORTS
**/
// Import local
// Exemple d'import de librairies npm
// node_modules
// import baguetteBox from "baguettebox.js";

/**
	Components
**/

/**
	Classes
**/



/** DOM ready **/

document.addEventListener("DOMContentLoaded", event => {
  // Executer les components
  Object(_components_component__WEBPACK_IMPORTED_MODULE_0__["component"])(); // Instancier les classes

  var a = new _classes_myClass__WEBPACK_IMPORTED_MODULE_1__["MyClass"]();
  var b = new _classes_Map__WEBPACK_IMPORTED_MODULE_2__["Map"]();
});

/***/ })

/******/ });
//# sourceMappingURL=main.es6.bundle.js.map
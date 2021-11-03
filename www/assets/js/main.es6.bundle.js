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

/***/ "./src/scripts/classes/FullPopup.js":
/*!******************************************!*\
  !*** ./src/scripts/classes/FullPopup.js ***!
  \******************************************/
/*! exports provided: FullPopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullPopup", function() { return FullPopup; });
class FullPopup {
  constructor() {
    this.dom = {
      fullPopup: document.querySelector(".js-full-popup"),
      close: document.querySelector(".js-full-popup-close"),
      overlay: document.querySelector(".js-overlay")
    };
    if (!this.dom.fullPopup) return;
    this.init();
  }

  init() {
    this.initEvents();
  }

  initEvents() {
    window.ee.addListener("onFullPopupChange", _props => {
      this.changeContent(_props);
    });
    this.dom.close.addEventListener("click", e => {
      this.close();
    });
  }

  changeContent(_props) {
    this.dom.fullPopup.querySelector("h2").innerHTML = _props.band;
    this.dom.fullPopup.querySelector("p").innerHTML = _props.place;
    this.dom.fullPopup.querySelector(".full-popup__embed").innerHTML = _props.url;
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



/***/ }),

/***/ "./src/scripts/classes/Intro.js":
/*!**************************************!*\
  !*** ./src/scripts/classes/Intro.js ***!
  \**************************************/
/*! exports provided: Intro */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Intro", function() { return Intro; });
class Intro {
  constructor() {
    this.dom = {
      intro: document.querySelector(".intro"),
      overlay: document.querySelector(".overlay")
    };
    if (!this.dom.intro) return;
    var cookies = document.cookie;
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
    this.dom.intro.classList.add("is-anim-out");
    this.dom.overlay.classList.remove("is-active");
    document.cookie = "intro_seen=true";
  } // Get cookie by value
  // https://stackoverflow.com/questions/5639346/what-is-the-shortest-function-for-reading-a-cookie-by-name-in-javascript


  getCookieValue(name) {
    var _document$cookie$matc;

    return ((_document$cookie$matc = document.cookie.match("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)")) === null || _document$cookie$matc === void 0 ? void 0 : _document$cookie$matc.pop()) || "";
  }

}



/***/ }),

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
/* harmony import */ var _FullPopup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FullPopup */ "./src/scripts/classes/FullPopup.js");
/* harmony import */ var wolfy87_eventemitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wolfy87-eventemitter */ "./node_modules/wolfy87-eventemitter/EventEmitter.js");
/* harmony import */ var wolfy87_eventemitter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wolfy87_eventemitter__WEBPACK_IMPORTED_MODULE_2__);



window.markers = window.markers || [];
window.ee = new wolfy87_eventemitter__WEBPACK_IMPORTED_MODULE_2___default.a();

class Map {
  constructor() {
    this.dom = {
      map: document.querySelector("#map")
    };
    if (!this.dom.map) return;
    this.fullPopup = new _FullPopup__WEBPACK_IMPORTED_MODULE_1__["FullPopup"]();
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
    this.LMap = L.tileLayer("https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png", {
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
      maxZoom: 18
    }).addTo(this.map);
  }

  getData() {
    fetch("../data/map.json").then(response => {
      return response.json();
    }).then(data => {
      // Work with JSON data here
      this.geoJSON = data.map;
      this.createMarkers();
    }).catch(err => {
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
      html: "<span class='custom-div-icon__outer'><span class='custom-div-icon__inner'></span></span>"
    });
    L.geoJSON(this.geoJSON, {
      pointToLayer: (feature, latlng) => {
        return L.marker(latlng, {
          icon: myIcon
        });
      },
      onEachFeature: (feature, layer) => {
        this.onEachFeature(feature, layer);
      }
    }).addTo(this.map);
    this.setMapBounds();
    this.checkUrlParameters();
  }

  onEachFeature(feature, layer) {
    var _props = feature.properties;
    var tpl = "\n\t\t\t\t<div class=\"custom-popup__img\">\n\t\t\t\t\t<img src=\"".concat(_props.thumb, "\" width=\"255\" height=\"128\" />\n\t\t\t\t\t<button></button>\n\t\t\t\t</div>\n\t\t\t\t<h2 ").concat(_props.is_long_band === true ? "class='--is-long'" : "", " >\n\t\t\t\t\t").concat(_props.band, "</h2>\n\t\t\t\t<p class=\"custom-popup__place\">").concat(_props.place, "</p>");
    var content = L.DomUtil.create("div", "custom-popup");
    content.innerHTML = tpl;

    if (feature.properties) {
      layer.bindPopup(content);
      layer.on("popupopen", _e => {
        L.DomUtil.addClass(layer._icon, "is-active");
        this.panToPopup(_e.target._popup);
      });
      layer.on("popupclose", () => {
        L.DomUtil.removeClass(layer._icon, "is-active");
      });
      layer.options.title = _props.id;
      this.markers.push(layer);
      L.DomEvent.on(content, "click", e => {
        // this.onPopupClick(_props);
        window.ee.emitEvent("onFullPopupChange", [_props]);
      }); // Open / Close
      // layer.on("mouseover", function (e) {
      // 	this.openPopup();
      // });
      // layer.on("mouseout", function (e) {
      // 	this.closePopup();
      // });
    }
  } // Once markers are created, we set map bounds to those markers


  setMapBounds() {
    var group = new L.featureGroup(this.markers);
    this.map.fitBounds(group.getBounds().pad(0.1));
  } // Check if we have a parameter with an id to trigger open popup


  checkUrlParameters() {
    // Check if we have url parameters
    var url = new URL(window.location);
    var id = parseInt(url.searchParams.get("id"), 10);
    this.markers.forEach(_marker => {
      if (_marker.options.title === id) {
        _marker.openPopup();

        this.panToPopup(_marker._popup);
      }
    });
  } //https://stackoverflow.com/questions/22538473/leaflet-center-popup-and-marker-to-the-map
  // Pan to opened popup


  panToPopup(_popup) {
    var px = this.map.project(_popup._latlng); // find the pixel location on the map where the popup anchor is

    px.y -= _popup._container.clientHeight / 2; // find the height of the popup container, divide by 2, subtract from the Y axis of marker location

    this.map.panTo(this.map.unproject(px), {
      animate: true
    }); // pan to new center
  }

}



/***/ }),

/***/ "./src/scripts/classes/Modal.js":
/*!**************************************!*\
  !*** ./src/scripts/classes/Modal.js ***!
  \**************************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
class Modal {
  constructor() {
    this.dom = {
      trigger: document.querySelectorAll(".js-modal-trigger"),
      modal: document.querySelectorAll(".js-modal"),
      close: document.querySelectorAll(".js-modal-close"),
      overlay: document.querySelector(".js-overlay")
    };
    if (!this.dom.trigger.length) return;
    this.init();
    this.onCloseEvents();
  }

  init() {
    [...this.dom.trigger].forEach(_el => {
      _el.addEventListener("click", _e => {
        var index = parseInt(_e.currentTarget.dataset.index);
        this.onOpen(index);
      }, false);
    });
  }

  onOpen(_index) {
    this.currentModal = document.querySelector(".js-modal[data-index=\"".concat(_index, "\"]"));
    this.currentModal.classList.add("is-active");
    this.dom.overlay.classList.add("is-active");
  }

  onCloseEvents() {
    // Close button
    [...this.dom.close].forEach(_el => {
      _el.addEventListener("click", _e => {
        this.onClose();
      });
    }); // Close on Overlay click

    this.dom.overlay.addEventListener("click", _e => {
      this.onClose();
    }); // Close on Esc Key press

    document.addEventListener("keydown", evt => {
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
/* harmony import */ var _classes_Intro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/Intro */ "./src/scripts/classes/Intro.js");
/* harmony import */ var _classes_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./classes/Modal */ "./src/scripts/classes/Modal.js");
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
  var c = new _classes_Intro__WEBPACK_IMPORTED_MODULE_3__["Intro"]();
  var d = new _classes_Modal__WEBPACK_IMPORTED_MODULE_4__["Modal"]();
});

/***/ })

/******/ });
//# sourceMappingURL=main.es6.bundle.js.map
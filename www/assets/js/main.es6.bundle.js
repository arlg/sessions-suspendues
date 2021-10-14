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
/* harmony import */ var _plugins_twentytwenty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugins/twentytwenty.js */ "./src/scripts/plugins/twentytwenty.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/_component */ "./src/scripts/components/_component.js");
/* harmony import */ var _classes_myClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/_myClass */ "./src/scripts/classes/_myClass.js");
/***
	main.js
	Entrée principale des scripts
***/

/**
	IMPORTS
**/
// Local
 // node_modules

 // import "lazysizes/plugins/unveilhooks/ls.unveilhooks.js";
// import baguetteBox from "baguettebox.js";

/**
	Components
**/


/**
	Classes
**/


/** DOM ready **/

document.addEventListener("DOMContentLoaded", function (event) {
  // Executer les components
  Object(_components_component__WEBPACK_IMPORTED_MODULE_2__["component"])();
  Object(_plugins_twentytwenty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Instancier les classes

  var a = new _classes_myClass__WEBPACK_IMPORTED_MODULE_3__["MyClass"](); // Init Common elements

  if (typeof baguetteBox !== 'undefined') baguetteBox.run(".wp-block-gallery");
});

/***/ }),

/***/ "./src/scripts/plugins/twentytwenty.js":
/*!*********************************************!*\
  !*** ./src/scripts/plugins/twentytwenty.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*	-----------------------------------------------------------------------------------------------
	Namespace
--------------------------------------------------------------------------------------------------- */
/* harmony default export */ __webpack_exports__["default"] = (function (ctx) {
  var twentytwenty = twentytwenty || {}; // Set a default value for scrolled.

  twentytwenty.scrolled = 0; // polyfill closest
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill

  if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
      var el = this;

      do {
        if (el.matches(s)) {
          return el;
        }

        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);

      return null;
    };
  } // polyfill forEach
  // https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Polyfill


  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      var i;
      thisArg = thisArg || window;

      for (i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  } // event "polyfill"


  twentytwenty.createEvent = function (eventName) {
    var event;

    if (typeof window.Event === "function") {
      event = new Event(eventName);
    } else {
      event = document.createEvent("Event");
      event.initEvent(eventName, true, false);
    }

    return event;
  }; // matches "polyfill"
  // https://developer.mozilla.org/es/docs/Web/API/Element/matches


  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
      var matches = (this.document || this.ownerDocument).querySelectorAll(s),
          i = matches.length;

      while (--i >= 0 && matches.item(i) !== this) {}

      return i > -1;
    };
  }
  /*	-----------------------------------------------------------------------------------------------
  Cover Modals
  --------------------------------------------------------------------------------------------------- */


  twentytwenty.coverModals = {
    init: function init() {
      if (document.querySelector(".cover-modal")) {
        // Handle cover modals when they're toggled
        this.onToggle(); // When toggled, untoggle if visitor clicks on the wrapping element of the modal

        this.outsideUntoggle(); // Close on escape key press

        this.closeOnEscape(); // Hide and show modals before and after their animations have played out

        this.hideAndShowModals();
      }
    },
    // Handle cover modals when they're toggled
    onToggle: function onToggle() {
      document.querySelectorAll(".cover-modal").forEach(function (element) {
        element.addEventListener("toggled", function (event) {
          var modal = event.target,
              body = document.body;

          if (modal.classList.contains("active")) {
            body.classList.add("showing-modal");
          } else {
            body.classList.remove("showing-modal");
            body.classList.add("hiding-modal"); // Remove the hiding class after a delay, when animations have been run

            setTimeout(function () {
              body.classList.remove("hiding-modal");
            }, 500);
          }
        });
      });
    },
    // Close modal on outside click
    outsideUntoggle: function outsideUntoggle() {
      document.addEventListener("click", function (event) {
        var target = event.target;
        var modal = document.querySelector(".cover-modal.active");

        if (target === modal) {
          this.untoggleModal(target);
        }
      }.bind(this));
    },
    // Close modal on escape key press
    closeOnEscape: function closeOnEscape() {
      document.addEventListener("keydown", function (event) {
        if (event.keyCode === 27) {
          event.preventDefault();
          document.querySelectorAll(".cover-modal.active").forEach(function (element) {
            this.untoggleModal(element);
          }.bind(this));
        }
      }.bind(this));
    },
    // Hide and show modals before and after their animations have played out
    hideAndShowModals: function hideAndShowModals() {
      var _doc = document,
          _win = window,
          modals = _doc.querySelectorAll(".cover-modal"),
          htmlStyle = _doc.documentElement.style;

      function htmlStyles() {
        var overflow = _win.innerHeight > _doc.documentElement.getBoundingClientRect().height;

        return {
          "overflow-y": overflow ? "hidden" : "scroll",
          position: "fixed",
          width: "100%",
          top: 0,
          left: 0
        };
      } // Show the modal


      modals.forEach(function (modal) {
        modal.addEventListener("toggle-target-before-inactive", function (event) {
          var styles = htmlStyles(),
              offsetY = _win.pageYOffset,
              paddingTop = 0 - offsetY + "px",
              mQuery = _win.matchMedia("(max-width: 600px)");

          if (event.target !== modal) {
            return;
          }

          Object.keys(styles).forEach(function (styleKey) {
            htmlStyle.setProperty(styleKey, styles[styleKey]);
          });
          twentytwenty.scrolled = parseInt(styles.top, 10);
          modal.classList.add("show-modal");
        }); // Hide the modal after a delay, so animations have time to play out

        modal.addEventListener("toggle-target-after-inactive", function (event) {
          if (event.target !== modal) {
            return;
          }

          setTimeout(function () {
            var clickedEl = twentytwenty.toggles.clickedEl;
            modal.classList.remove("show-modal");
            Object.keys(htmlStyles()).forEach(function (styleKey) {
              htmlStyle.removeProperty(styleKey);
            });

            if (clickedEl !== false) {
              clickedEl.focus();
              clickedEl = false;
            }

            _win.scrollTo(0, Math.abs(twentytwenty.scrolled));

            twentytwenty.scrolled = 0;
          }, 500);
        });
      });
    },
    // Untoggle a modal
    untoggleModal: function untoggleModal(modal) {
      var modalTargetClass,
          modalToggle = false; // If the modal has specified the string (ID or class) used by toggles to target it, untoggle the toggles with that target string
      // The modal-target-string must match the string toggles use to target the modal

      if (modal.dataset.modalTargetString) {
        modalTargetClass = modal.dataset.modalTargetString;
        modalToggle = document.querySelector('*[data-toggle-target="' + modalTargetClass + '"]');
      } // If a modal toggle exists, trigger it so all of the toggle options are included


      if (modalToggle) {
        modalToggle.click(); // If one doesn't exist, just hide the modal
      } else {
        modal.classList.remove("active");
      }
    }
  }; // twentytwenty.coverModals

  /*	-----------------------------------------------------------------------------------------------
  Modal Menu
  --------------------------------------------------------------------------------------------------- */

  twentytwenty.modalMenu = {
    init: function init() {
      // If the current menu item is in a sub level, expand all the levels higher up on load
      // this.expandLevel();
      this.keepFocusInModal();
    },
    expandLevel: function expandLevel() {
      var modalMenus = document.querySelectorAll(".modal-menu");
      modalMenus.forEach(function (modalMenu) {
        var activeMenuItem = modalMenu.querySelector(".current-menu-item");

        if (activeMenuItem) {
          twentytwentyFindParents(activeMenuItem, "li").forEach(function (element) {
            console.log("ll");
            var subMenuToggle = element.querySelector(".sub-menu-toggle");

            if (subMenuToggle) {
              twentytwenty.toggles.performToggle(subMenuToggle, true);
            }
          });
        }
      });
    },
    keepFocusInModal: function keepFocusInModal() {
      var _doc = document;

      _doc.addEventListener("keydown", function (event) {
        var toggleTarget,
            modal,
            selectors,
            elements,
            menuType,
            bottomMenu,
            activeEl,
            lastEl,
            firstEl,
            tabKey,
            shiftKey,
            clickedEl = twentytwenty.toggles.clickedEl;

        if (clickedEl && _doc.body.classList.contains("showing-modal")) {
          toggleTarget = clickedEl.dataset.toggleTarget;
          selectors = "input, a, button";
          modal = _doc.querySelector(toggleTarget);
          elements = modal.querySelectorAll(selectors);
          elements = Array.prototype.slice.call(elements);

          if (".menu-modal" === toggleTarget) {
            menuType = window.matchMedia("(min-width: 1000px)").matches;
            menuType = menuType ? ".expanded-menu" : ".mobile-menu";
            elements = elements.filter(function (element) {
              return null !== element.closest(menuType) && null !== element.offsetParent;
            });
            elements.unshift(_doc.querySelector(".close-nav-toggle"));
            bottomMenu = _doc.querySelector(".menu-bottom > nav");

            if (bottomMenu) {
              bottomMenu.querySelectorAll(selectors).forEach(function (element) {
                elements.push(element);
              });
            }
          }

          lastEl = elements[elements.length - 1];
          firstEl = elements[0];
          activeEl = _doc.activeElement;
          tabKey = event.keyCode === 9;
          shiftKey = event.shiftKey;

          if (!shiftKey && tabKey && lastEl === activeEl) {
            event.preventDefault();
            firstEl.focus();
          }

          if (shiftKey && tabKey && firstEl === activeEl) {
            event.preventDefault();
            lastEl.focus();
          }
        }
      });
    }
  }; // twentytwenty.modalMenu

  /*	-----------------------------------------------------------------------------------------------
  Primary Menu
  --------------------------------------------------------------------------------------------------- */

  twentytwenty.primaryMenu = {
    init: function init() {
      this.focusMenuWithChildren();
    },
    // The focusMenuWithChildren() function implements Keyboard Navigation in the Primary Menu
    // by adding the '.focus' class to all 'li.menu-item-has-children' when the focus is on the 'a' element.
    focusMenuWithChildren: function focusMenuWithChildren() {
      // Get all the link elements within the primary menu.
      var links,
          i,
          len,
          menu = document.querySelector(".js-primary-menu-wrapper");

      if (!menu) {
        return false;
      }

      links = menu.getElementsByTagName("a"); // Each time a menu link is focused or blurred, toggle focus.

      for (i = 0, len = links.length; i < len; i++) {
        links[i].addEventListener("focus", toggleFocus, true);
        links[i].addEventListener("blur", toggleFocus, true);
      } //Sets or removes the .focus class on an element.


      function toggleFocus() {
        var self = this; // Move up through the ancestors of the current link until we hit .primary-menu.

        while (-1 === self.className.indexOf("primary-menu")) {
          // On li elements toggle the class .focus.
          if ("li" === self.tagName.toLowerCase()) {
            if (-1 !== self.className.indexOf("focus")) {
              self.className = self.className.replace(" focus", "");
            } else {
              self.className += " focus";
            }
          }

          self = self.parentElement;
        }
      }
    }
  }; // twentytwenty.primaryMenu

  /*	-----------------------------------------------------------------------------------------------
  Toggles
  --------------------------------------------------------------------------------------------------- */

  twentytwenty.toggles = {
    clickedEl: false,
    init: function init() {
      // Do the toggle
      this.toggle(); // Check for toggle/untoggle on resize

      this.resizeCheck(); // Check for untoggle on escape key press

      this.untoggleOnEscapeKeyPress();
    },
    performToggle: function performToggle(element, instantly) {
      var target,
          timeOutTime,
          classToToggle,
          self = this,
          _doc = document,
          // Get our targets
      toggle = element,
          targetString = toggle.dataset.toggleTarget,
          activeClass = "active"; // Elements to focus after modals are closed

      if (!_doc.querySelectorAll(".show-modal").length) {
        self.clickedEl = _doc.activeElement;
      }

      if (targetString === "next") {
        target = toggle.nextSibling;
      } else {
        target = _doc.querySelector(targetString);
      } // Trigger events on the toggle targets before they are toggled


      if (target.classList.contains(activeClass)) {
        target.dispatchEvent(twentytwenty.createEvent("toggle-target-before-active"));
      } else {
        target.dispatchEvent(twentytwenty.createEvent("toggle-target-before-inactive"));
      } // Get the class to toggle, if specified


      classToToggle = toggle.dataset.classToToggle ? toggle.dataset.classToToggle : activeClass; // For cover modals, set a short timeout duration so the class animations have time to play out

      timeOutTime = 0;

      if (target.classList.contains("cover-modal")) {
        timeOutTime = 10;
      }

      setTimeout(function () {
        var focusElement,
            subMenued = target.classList.contains("sub-menu"),
            newTarget = subMenued ? toggle.closest(".menu-item").querySelector(".sub-menu") : target,
            duration = toggle.dataset.toggleDuration; // Toggle the target of the clicked toggle

        if (toggle.dataset.toggleType === "slidetoggle" && !instantly && duration !== "0") {
          twentytwentyMenuToggle(newTarget, duration);
        } else {
          newTarget.classList.toggle(classToToggle);
        } // If the toggle target is 'next', only give the clicked toggle the active class


        if (targetString === "next") {
          toggle.classList.toggle(activeClass);
        } else if (target.classList.contains("sub-menu")) {
          toggle.classList.toggle(activeClass);
        } else {
          // If not, toggle all toggles with this toggle target
          _doc.querySelector('*[data-toggle-target="' + targetString + '"]').classList.toggle(activeClass);
        } // Toggle aria-expanded on the toggle


        twentytwentyToggleAttribute(toggle, "aria-expanded", "true", "false");

        if (self.clickedEl && -1 !== toggle.getAttribute("class").indexOf("close-")) {
          twentytwentyToggleAttribute(self.clickedEl, "aria-expanded", "true", "false");
        } // Toggle body class


        if (toggle.dataset.toggleBodyClass) {
          _doc.body.classList.toggle(toggle.dataset.toggleBodyClass);
        } // Check whether to set focus


        if (toggle.dataset.setFocus) {
          focusElement = _doc.querySelector(toggle.dataset.setFocus);

          if (focusElement) {
            if (target.classList.contains(activeClass)) {
              focusElement.focus();
            } else {
              focusElement.blur();
            }
          }
        } // Trigger the toggled event on the toggle target


        target.dispatchEvent(twentytwenty.createEvent("toggled")); // Trigger events on the toggle targets after they are toggled

        if (target.classList.contains(activeClass)) {
          target.dispatchEvent(twentytwenty.createEvent("toggle-target-after-active"));
        } else {
          target.dispatchEvent(twentytwenty.createEvent("toggle-target-after-inactive"));
        }
      }, timeOutTime);
    },
    // Do the toggle
    toggle: function toggle() {
      var self = this;
      document.querySelectorAll("*[data-toggle-target]").forEach(function (element) {
        element.addEventListener("click", function (event) {
          event.preventDefault();
          self.performToggle(element);
        });
      });
    },
    // Check for toggle/untoggle on screen resize
    resizeCheck: function resizeCheck() {
      if (document.querySelectorAll("*[data-untoggle-above], *[data-untoggle-below], *[data-toggle-above], *[data-toggle-below]").length) {
        window.addEventListener("resize", function () {
          var winWidth = window.innerWidth,
              toggles = document.querySelectorAll(".toggle");
          toggles.forEach(function (toggle) {
            var unToggleAbove = toggle.dataset.untoggleAbove,
                unToggleBelow = toggle.dataset.untoggleBelow,
                toggleAbove = toggle.dataset.toggleAbove,
                toggleBelow = toggle.dataset.toggleBelow; // If no width comparison is set, continue

            if (!unToggleAbove && !unToggleBelow && !toggleAbove && !toggleBelow) {
              return;
            } // If the toggle width comparison is true, toggle the toggle


            if ((unToggleAbove && winWidth > unToggleAbove || unToggleBelow && winWidth < unToggleBelow) && toggle.classList.contains("active") || (toggleAbove && winWidth > toggleAbove || toggleBelow && winWidth < toggleBelow) && !toggle.classList.contains("active")) {
              toggle.click();
            }
          });
        });
      }
    },
    // Close toggle on escape key press
    untoggleOnEscapeKeyPress: function untoggleOnEscapeKeyPress() {
      document.addEventListener("keyup", function (event) {
        if (event.key === "Escape") {
          document.querySelectorAll("*[data-untoggle-on-escape].active").forEach(function (element) {
            if (element.classList.contains("active")) {
              element.click();
            }
          });
        }
      });
    }
  }; // twentytwenty.toggles

  /**
   * Is the DOM ready
   *
   * this implementation is coming from https://gomakethings.com/a-native-javascript-equivalent-of-jquerys-ready-method/
   *
   * @param {Function} fn Callback function to run.
   */

  function twentytwentyDomReady(fn) {
    if (typeof fn !== "function") {
      return;
    }

    if (document.readyState === "interactive" || document.readyState === "complete") {
      return fn();
    }

    document.addEventListener("DOMContentLoaded", fn, false);
  }

  twentytwentyDomReady(function () {
    twentytwenty.toggles.init(); // Handle toggles

    twentytwenty.coverModals.init(); // Handle cover modals

    twentytwenty.modalMenu.init(); // Modal Menu

    twentytwenty.primaryMenu.init(); // Primary Menu
  });
  /*	-----------------------------------------------------------------------------------------------
  Helper functions
  --------------------------------------------------------------------------------------------------- */

  /* Toggle an attribute ----------------------- */

  function twentytwentyToggleAttribute(element, attribute, trueVal, falseVal) {
    if (trueVal === undefined) {
      trueVal = true;
    }

    if (falseVal === undefined) {
      falseVal = false;
    }

    if (element.getAttribute(attribute) !== trueVal) {
      element.setAttribute(attribute, trueVal);
    } else {
      element.setAttribute(attribute, falseVal);
    }
  }
  /**
   * Toggle a menu item on or off.
   *
   * @param {HTMLElement} target
   * @param {number} duration
   */


  function twentytwentyMenuToggle(target, duration) {
    var initialParentHeight,
        finalParentHeight,
        menu,
        menuItems,
        _transitionListener,
        initialPositions = [],
        finalPositions = [];

    if (!target) {
      return;
    }

    menu = target.closest(".menu-wrapper"); // Step 1: look at the initial positions of every menu item.

    menuItems = menu.querySelectorAll(".menu-item");
    menuItems.forEach(function (menuItem, index) {
      initialPositions[index] = {
        x: menuItem.offsetLeft,
        y: menuItem.offsetTop
      };
    });
    initialParentHeight = target.parentElement.offsetHeight;
    target.classList.add("toggling-target"); // Step 2: toggle target menu item and look at the final positions of every menu item.

    target.classList.toggle("active");
    menuItems.forEach(function (menuItem, index) {
      finalPositions[index] = {
        x: menuItem.offsetLeft,
        y: menuItem.offsetTop
      };
    });
    finalParentHeight = target.parentElement.offsetHeight; // Step 3: close target menu item again.
    // The whole process happens without giving the browser a chance to render, so it's invisible.

    target.classList.toggle("active"); // Step 4: prepare animation.
    // Position all the items with absolute offsets, at the same starting position.
    // Shouldn't result in any visual changes if done right.

    menu.classList.add("is-toggling");
    target.classList.toggle("active");
    menuItems.forEach(function (menuItem, index) {
      var initialPosition = initialPositions[index];

      if (initialPosition.y === 0 && menuItem.parentElement === target) {
        initialPosition.y = initialParentHeight;
      }

      menuItem.style.transform = "translate(" + initialPosition.x + "px, " + initialPosition.y + "px)";
    }); // The double rAF is unfortunately needed, since we're toggling CSS classes, and
    // the only way to ensure layout completion here across browsers is to wait twice.
    // This just delays the start of the animation by 2 frames and is thus not an issue.

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        // Step 5: start animation by moving everything to final position.
        // All the layout work has already happened, while we were preparing for the animation.
        // The animation now runs entirely in CSS, using cheap CSS properties (opacity and transform)
        // that don't trigger the layout or paint stages.
        menu.classList.add("is-animating");
        menuItems.forEach(function (menuItem, index) {
          var finalPosition = finalPositions[index];

          if (finalPosition.y === 0 && menuItem.parentElement === target) {
            finalPosition.y = finalParentHeight;
          }

          if (duration !== undefined) {
            menuItem.style.transitionDuration = duration + "ms";
          }

          menuItem.style.transform = "translate(" + finalPosition.x + "px, " + finalPosition.y + "px)";
        });

        if (duration !== undefined) {
          target.style.transitionDuration = duration + "ms";
        }
      }); // Step 6: finish toggling.
      // Remove all transient classes when the animation ends.

      _transitionListener = function transitionListener() {
        menu.classList.remove("is-animating");
        menu.classList.remove("is-toggling");
        target.classList.remove("toggling-target");
        menuItems.forEach(function (menuItem) {
          menuItem.style.transform = "";
          menuItem.style.transitionDuration = "";
        });
        target.style.transitionDuration = "";
        target.removeEventListener("transitionend", _transitionListener);
      };

      target.addEventListener("transitionend", _transitionListener);
    });
  }
  /**
   * traverses the DOM up to find elements matching the query
   *
   * @param {HTMLElement} target
   * @param {string} query
   * @return {NodeList} parents matching query
   */


  function twentytwentyFindParents(target, query) {
    var parents = []; // recursively go up the DOM adding matches to the parents array

    function traverse(item) {
      var parent = item.parentNode;

      if (parent instanceof HTMLElement) {
        if (parent.matches(query)) {
          parents.push(parent);
        }

        traverse(parent);
      }
    }

    traverse(target);
    return parents;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=main.es6.bundle.js.map
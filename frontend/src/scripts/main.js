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
import { component } from "./components/_component";

/**
	Classes
**/
import { MyClass } from "./classes/_myClass";
import { Map } from "./classes/Map";
import { Intro } from "./classes/Intro";
import { Modal } from "./classes/Modal";

/** DOM ready **/
document.addEventListener("DOMContentLoaded", (event) => {
	// Executer les components
	component();

	// Instancier les classes
	const a = new MyClass();
	const b = new Map();
	const c = new Intro();
	const d = new Modal();
});

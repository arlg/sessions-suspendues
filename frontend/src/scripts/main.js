/***
	main.js
	Entrée principale des scripts
***/


/**
	IMPORTS
**/
// Import local
import twentytwenty from "./plugins/twentytwenty.js";

// Exemple d'import de librairies npm
// node_modules
// import baguetteBox from "baguettebox.js";


/**
	Components
**/
import {component} from "./components/_component"


/**
	Classes
**/
import {MyClass} from "./classes/_myClass"


/** DOM ready **/
document.addEventListener("DOMContentLoaded", (event) => {

	// Executer les components
	component();
	twentytwenty();

	// Instancier les classes
	const a = new MyClass();

	// Init Common elements
	if( typeof baguetteBox !== 'undefined' )
		baguetteBox.run(".wp-block-gallery");

});

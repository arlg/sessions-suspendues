"use strict";

/* ------------------------------------------------
 * Gulpfile du StarterKit, toujours en cours d'amélioration et suivant des bonnes pratiques :
 * https://github.com/alsacreations/bretzel/blob/master/gulpfile.js
 * ------------------------------------------------
 */

/* ------------------------------------------------
 * Usage général :
 *
 * ----> L'argument --prod est à ajouter à ces commandes pour minifier le code
 *
 * La tache 'gulp' lance le serveur browsersync et watch les dossiers pour lancer les taches automatiquement.
 * gulp all --prod pour lancer toutes les taches avant mise en prod
 * ------------------------------------------------
 */

/**
 * Chargement et initialisation des composants utilisés
 **/
require("dotenv").config();

const gulp = require("gulp"),
	$ = require("gulp-load-plugins")(),
	argv = require("yargs").argv;

/**
	Webpack
	La config de webpack est située dans webpack.config.js
	On surcharge ses options plus bas.
**/
const webpackCompiler = require("webpack");
const webpackStream = require("webpack-stream");
let webpackConfigEs5 = require("./webpack.config.js");
let webpackConfigEs6 = require("./webpack.config.es6.js");

/**
 * Tâche (et packages) de production si ajout de l'argument '--prod'
 */
const isProduction = argv.prod;
const isHttps = process.env.HTTPS_KEY && process.env.HTTPS_CRT;

if (isProduction) {
	console.log("-- 🏎️  --");
	console.log("-- Attache ta ceinture, ça compile en prod  ! --");
	console.log("-- 🏎️  --");
} else {
	console.log("-- 🏎  En voiture simone ! --");
}

// On crée BrowserSync seulement si on est pas en prod
const browserSync = require("browser-sync").create();

/**
 * CONFIG
 * Configuration générale du projet et des composants utilisés
 **/

const SITETYPE = "STATIC"; // Soit "STATIC", soit "WORDPRESS". En mode STATIC, Browsersync crée une adresse localhost
const SITEURL = "[XXXX].lpg"; // url du projet (vhost), utilisée par BrowserSync en mode proxy, elle est nécessaire si le projet est WORDPRESS

const CONFIG = {
	URL: SITEURL,
	DIR: {
		DEST: SITETYPE === "WORDPRESS" ? "../assets" : "../www/assets",
		SRC_STYLES: "src/styles",
		SRC_SCRIPTS: "src/scripts",
	},
};

// Configuration de PostCss
const POSTCSS_CONFIG = [
	require("postcss-preset-env")({
		features: {
			// Pour les css variables à transformer
			"custom-properties": {
				preserve: true,
				warnings: false,
			},
		},
		autoprefixer: {
			/**
			 * Si on supporte IE11 et qu'on utilise des grilles
			 * https://www.alsacreations.com/tuto/lire/1771-css-grid-layout-en-production.html
			 * https://css-tricks.com/css-grid-in-ie-css-grid-and-the-new-autoprefixer/
			 */
			grid: false,
		},
	}),
	...(isProduction
		? [
				require("cssnano")({
					autoprefixer: false,
					zindex: false,
				}),
		  ]
		: []), // On ajoute cssnano en --prod
	require("postcss-reporter")(),
];

// Webpack : Configuration
// Surcharge des configs webpack par gulp
// -> Sourcemaps en developpement
// -> mode: production en --prod
webpackConfigEs5.devtool = webpackConfigEs6.devtool =
	isProduction === true ? false : "source-map";
webpackConfigEs5.mode = webpackConfigEs6.mode =
	isProduction === true ? "production" : "development";

/**
 * Gestion et notification des erreurs à la volée
 */
var onError = function (err) {
	$.notify.onError({
		title: "Gulp",
		subtitle: "Failure!",
		message: "\nError: <%= error.message %>",
		sound: "Basso",
	})(err);
	this.emit("end");
};

/* ------------------------------------------------
 * Tâches de Build
 * ------------------------------------------------
 */

/**
 *  Tache CSS
 *  SourceMaps + Sass + PostCSS (Autoprefixer) + minify (si prod)
 **/
function styles() {
	return gulp
		.src("src/styles/main.scss")
		.pipe($.plumber({ errorHandler: onError }))
		.pipe($.sourcemaps.init())
		.pipe($.sass())
		.pipe($.postcss(POSTCSS_CONFIG))
		.pipe($.if(!isProduction, $.sourcemaps.write(".")))
		.pipe(gulp.dest(`${CONFIG.DIR.DEST}/css`))
		.pipe($.if(!isProduction, browserSync.stream()));
}

/**
 *  Tache JS -> App
 *  SourceMaps + Concat + Babel + uglify (si prod)
 **/
// function scriptsMain() {
// 	return gulp
// 		.src(`${CONFIG.DIR.SRC_SCRIPTS}/app/**/*.js`)
// 		.pipe($.plumber(onError))
// 		.pipe($.sourcemaps.init())
// 		.pipe($.concat("main.js"))
// 		.pipe($.babel())
// 		.pipe(
// 			$.if(
// 				isProduction,
// 				$.uglify({
// 					compress: {
// 						drop_console: true
// 					}
// 				})
// 			)
// 		)
// 		.pipe(
// 			$.if(
// 				isProduction,
// 				$.insert.append(
// 					"console.log('%c Mécanisé par Le Petit Garage :: https://petitgarage.fr','color: #da0a39; font-family: monospace; text-transform:uppercase; font-weight: bold;');"
// 				)
// 			)
// 		)
// 		.pipe($.if(!isProduction, $.sourcemaps.write(".")))
// 		.pipe(gulp.dest(`${CONFIG.DIR.DEST}/js/app`))
// 		.pipe($.if(!isProduction, browserSync.stream()));
// };

/**
 *  Tache JS -> Plugins
 *  Concat + uglify (si prod)
 **/
// function scriptsPlugins() {
// 	return gulp
// 		.src(`${CONFIG.DIR.SRC_SCRIPTS}/plugins/**/*.js`)
// 		.pipe($.concat("plugins.js"))
// 		.pipe($.if(isProduction, $.uglify()))
// 		.pipe(gulp.dest(`${CONFIG.DIR.DEST}/js/plugins`))
// 		.pipe(browserSync.stream());
// };

/**
 * 	Taches webpack
 * ES5 et ES6
 */
function webpackTaskEs5() {
	return gulp
		.src(`${CONFIG.DIR.SRC_SCRIPTS}/main.js`)
		.pipe($.plumber(onError))
		.pipe(webpackStream(webpackConfigEs5, webpackCompiler)) // compiler permet de specifier la version de webpack
		.pipe(gulp.dest(`${CONFIG.DIR.DEST}/js/`))
		.pipe(browserSync.stream());
}

function webpackTaskEs6() {
	return gulp
		.src(`${CONFIG.DIR.SRC_SCRIPTS}/main.js`)
		.pipe($.plumber(onError))
		.pipe(webpackStream(webpackConfigEs6, webpackCompiler)) // compiler permet de specifier la version de webpack
		.pipe(gulp.dest(`${CONFIG.DIR.DEST}/js/`))
		.pipe(browserSync.stream());
}

/**
 *  Tache JSHint
 * En environnement de prod, passe les scripts dans jshit et loggue les erreurs
 **/
function jsHint() {
	return gulp
		.src(`${CONFIG.DIR.SRC_SCRIPTS}/**/*.js`)
		.pipe($.jshint(".jshintrc"))
		.pipe($.jshint.reporter("default"));
}

/* ------------------------------------------------
 * Tâches de traitement d'images
 * ------------------------------------------------
 */

/**
 * PNG Sprite
 * Crée un sprite PNG depuis un dossier de fichiers PNG
 * !! Les chemins peuvent varier selon le project si c'est un static ou un WordPress
 * Configuration : https://www.npmjs.com/package/gulp.spritesmith
 * Il crée un fichier retina si besoin
 *
 * Utilisation:
 * Input:
 * 		Placer ses PNG dans /src/img/png/
 * 	    Option: On peut y mettre ses PNG retina en terminant le nom du fichier par @2x
 *
 *  Output:
 * 		- les sprite images dans /assets/img/sprite
 * 	    - Un fichier .sass dans les src/styles
 **/
function pngSprite() {
	var spriteData = gulp
		.src(`**/*.png`, {
			cwd: "src/img/png",
		})
		.pipe(
			$.spritesmith({
				retinaSrcFilter: ["*@2x.png"],
				imgName: "sprite.png",
				retinaImgName: "sprite@2x.png",
				imgPath: "../img/sprite.png",
				retinaImgPath: "../img/sprite@2x.png",
				cssName: "_sprite.sass",
			})
		);

	spriteData.img.pipe(gulp.dest(`${CONFIG.DIR.DEST}/img/sprite/`));
	spriteData.css.pipe(gulp.dest(`${CONFIG.DIR.SRC_STYLES}/`));
}

/**
 * SVG Sprite
 * Crée un sprite PNG depuis un dossier de fichiers SVG
 * Input:
 *     - Liste de svg dans le dossier /frontend/src/img/svg
 * Output:
 *	   - Un fichier "sprite.scss" dans "src/styles/project/_sprite.scss" avec la liste des positions
 *      - Le fichier de sprite dans '../assets/img/svg/sprite.svg'
 * On peut utiliser les classes dans le dom directement ou bien avec l'@extend de SASS
 *
 * Exemple  :@extend .svg-place-salmon;
 * @extend .svg-place-salmon-dims;
 *
 */
function svgSprite() {
	return gulp
		.src("**/*.svg", {
			cwd: "src/img/svg",
		})
		.pipe($.plumber())
		.pipe(
			$.svgSprite({
				dest: ".",
				log: "info",
				shape: {
					spacing: {
						padding: 2,
					},
				},
				mode: {
					view: {
						// scss: {
						bust: false, // écrase l'image précédente
						dest: ".",
						sprite: "../assets/img/svg/sprite.svg",
						render: {
							scss: {
								dest: "src/styles/project/_sprite.scss",
							},
							// scss: false
						},
						// }
					},
				},
			})
		)
		.on("error", function (error) {
			console.log(error);
		})
		.pipe(
			$.replace("../assets/img/svg/sprite.svg", "../img/svg/sprite.svg")
		) // Changer le chemin dans le path
		.pipe(gulp.dest("."));
}

/* ------------------------------------------------
 * Tâches principales
 * ------------------------------------------------
 */
function watch() {
	// On lance les taches de compilation au lancement du watch
	styles();
	// scriptsMain();
	// scriptsPlugins();
	// webpackTaskEs5();
	webpackTaskEs6();

	/** Config BrowserSync **/
	let browserSyncConfig = {
		open: "external",
		ghostMode: {
			clicks: false,
			forms: false,
			scroll: false,
		},
	};

	// Si on est sur Wordpress, on se base sur le VHOST
	if (SITETYPE === "WORDPRESS") {
		browserSyncConfig.host = CONFIG.URL;
		browserSyncConfig.proxy = CONFIG.URL;
		browserSyncConfig.snippetOptions = {
			whitelist: ["/wp-admin/admin-ajax.php"],
			blacklist: ["/wp-admin/**"],
		};

		// Si on est sur un site statique, juste besoin de refresh localement le /www
	} else {
		browserSyncConfig.server = {
			baseDir: "../www/",
		};
	}

	if (isHttps) {
		browserSyncConfig.proxy = "https://" + CONFIG.URL;
		browserSyncConfig.https = {
			key: process.env.HTTPS_KEY,
			cert: process.env.HTTPS_CRT,
		};
	}

	browserSync.init(browserSyncConfig);

	gulp.watch(
		`${CONFIG.DIR.SRC_STYLES}/**/*.{pcss,css,sass,scss}`,
		{
			cwd: "./",
		},
		styles
	);
	// gulp.watch(
	// 	`${CONFIG.DIR.SRC_SCRIPTS}/plugins/**/*.js`,
	// 	{
	// 		cwd: "./"
	// 	},
	// 	scriptsPlugins
	// );
	// gulp.watch(
	// 	`${CONFIG.DIR.SRC_SCRIPTS}/app/**/*.js`,
	// 	{
	// 		cwd: "./"
	// 	},
	// 	gulp.series(scriptsMain, jsHint)
	// );

	gulp.watch(
		`${CONFIG.DIR.SRC_SCRIPTS}/**/*.js`,
		{
			cwd: "./",
		},
		webpackTaskEs6
	);

	gulp.watch("../**/*.{php,html,twig}").on("change", browserSync.reload);
}

function clean() {
	return gulp
		.src(`${CONFIG.DIR.DEST}/js/*`, { read: false })
		.pipe($.clean({ force: true }));
}

/**
 * Export des taches pour les exposer dans le terminal
 * Ex : `gulp styles`
 * La tache par défaut est le watch
 **/
exports.styles = styles;
// exports.scriptsMain = scriptsMain;
// exports.scriptsPlugins = scriptsPlugins;
exports.jsHint = jsHint;
exports.pngSprite = pngSprite;
exports.svgSprite = svgSprite;
exports.default = watch;
exports.clean = clean;
exports.webpackTaskEs5 = webpackTaskEs5;
exports.webpackTaskEs6 = webpackTaskEs6;

// exports.all = gulp.series(styles, scriptsPlugins, scriptsMain, jsHint);
exports.all = gulp.series(
	styles,
	jsHint,
	clean,
	webpackTaskEs5,
	webpackTaskEs6
);

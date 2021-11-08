<?php

include 'php-header.php';

?>

<!doctype html>
<html lang="fr">

<head>
	<meta charset="utf-8">
	<meta http-equiv="x-ua-compatible" content="ie=edge">

	<title>Les Sessions Suspendues | Sourdoreille</title>
	<meta name="description" content="Une série portée par de courtes saynètes de fiction légères et décalées, tournées à Nantes.">

	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- META SHARE -->
	<meta property="og:url" content="https://sourdoreille.net/sessions-suspendues/" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="Les Sessions Suspendues | Sourdoreille" />
	<meta property="og:description" content="Une série portée par de courtes saynètes de fiction légères et décalées, tournées à Nantes." />
	<meta property="og:image" content="https://sourdoreille.net/sessions-suspendues/assets/img/sessions_suspendues_share_img.jpg" />

	<!-- FAVICON -->
	<link rel="shortcut icon" href="https://sourdoreille.net/2016/wp-content/themes/sourdoreille/img/favicon.png">
	<link rel="icon" type="image/png" href="https://sourdoreille.net/2016/wp-content/themes/sourdoreille/img/favicon.png" sizes="16x16">
	<link rel="icon" type="image/png" href="https://sourdoreille.net/2016/wp-content/themes/sourdoreille/img/favicon2x.png" sizes="32x32">

	<!-- Canonical -->
	<link rel="canonical" href="https://sourdoreille.net/sessions-suspendues/" />

	<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin="" />

	<!-- <link rel="stylesheet" href="assets/css/leaflet.css"> -->
	<link rel="stylesheet" href="assets/css/main.css?v=<?php echo $VERSION; ?>">

	<meta name="theme-color" content="#fafafa">
</head>

<body>

	<header class="header">

		<div class="container">
			<div class="header__row">
				<div class="header__logo">
					<h1>
						<span><span>Les</span> Sessions</span>
						<span>Suspendues</span>
					</h1>
				</div>
				<nav>
					<ul class="list-unstyled">
						<li>
							<a href="<?php echo $BASE_URL; ?>/" class="is-active">Les Sessions</a>
						</li>
						<li>
							<a href="<?php echo $BASE_URL; ?>/a-propos">À Propos</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>

	</header>

	<main class="map" id="map">

		<!-- Template Full Popup -->
		<div class="full-popup js-full-popup">
			<div class="full-popup__header">
				<h2></h2>
				<p></p>
			</div>
			<div class="full-popup__embed"></div>
			<button class="js-full-popup-close full-popup__close"></button>
		</div>

		<div class="intro">
			<div class="intro__background"></div>
			<div class="intro__content">
				<span><span>Les</span> Sessions</span>
				<span>Suspendues</span>
			</div>
		</div>

		<div class="overlay js-overlay"></div>

	</main>
	<script>
		var SOURDO = window.SOURDO || {};
		SOURDO.BASE_URL = '<?php echo $BASE_URL; ?>';
	</script>

	<!-- https://philipwalton.com/articles/deploying-es2015-code-in-production-today/#is-this-really-worth-the-extra-effort%3F -->
	<!-- Vendors -->
	<script defer src="assets/js/vendors.bundle.js?v=<?php echo $VERSION; ?>"></script>

	<!-- Browsers with ES module support load this file. -->
	<script type="module" src="assets/js/main.es6.bundle.js?v=<?php echo $VERSION; ?>"></script>

	<!-- Older browsers load this file (and module-supporting -->
	<!-- browsers know *not* to load this file). -->
	<script defer nomodule src="assets/js/main.es5.bundle.js?v=<?php echo $VERSION; ?>"></script>

</body>

</html>

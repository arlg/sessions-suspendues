<?php

include 'php-header.php';

?>
<!doctype html>
<html lang="fr">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">

    <title>Sessions suspendues - à Propos</title>
    <meta name="description" content="">

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="manifest" href="site.webmanifest">
    <link rel="apple-touch-icon" href="icon.png">
    <!-- Place favicon.ico in the root directory -->

    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin="" />

    <!-- <link rel="stylesheet" href="assets/css/leaflet.css"> -->
    <link rel="stylesheet" href="assets/css/main.css?v=<?php echo $VERSION; ?>">

    <meta name="theme-color" content="#fafafa">
</head>

<body class="template-a-propos">

    <header class="header">

        <div class="container">
            <div class="header__row">
                <div class="header__logo">
                    <p class="h1">
                        <span><span>Les</span> Sessions</span>
                        <span>Suspendues</span>
                    </p>
                </div>
                <nav>
                    <ul class="list-unstyled">
                        <li>
                            <a href="<?php echo $BASE_URL; ?>/">Les Sessions</a>
                        </li>
                        <li>
                            <a href="<?php echo $BASE_URL; ?>/a-propos" class="is-active">À Propos</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

    </header>

    <main>
        <section class="pp__intro">

            <div class="header__logo">
                <h1>
                    <span><span>Les</span> Sessions</span>
                    <span>Suspendues</span>
                </h1>
            </div>

            <p>un film de Thomas Grandrémy</p>

        </section>

        <section class="pp__l-r">
            <div class="pp__l-r__row">
                <div class="pp__l-r__content">
                    <h2>Douze sessions musicales</h2>
                    <p>Une série portée par de courtes saynètes de fiction légères et décalées, tournées à Nantes. Elle met en scène autant d’artistes issus de la Région des Pays de la Loire, émergents ou confirmés. Chacun prend possession d’un lieu de l’agglomération pour y jouer un titre de son répertoire. D’une session à l’autre, la fiction prend forme, faisant intervenir une vingtaine de comédien.nes de la Région.</p>
                </div>
                <div class="pp__l-r__pic">
                    <img src="assets/img/a-propos/l-r-1.jpg" alt="" width="400" height="300">
                </div>
            </div>
            <div class="pp__l-r__row">
                <div class="pp__l-r__pic">
                    <img src="assets/img/a-propos/l-r-2.jpg" alt="" width="400" height="300">
                </div>
                <div class="pp__l-r__content">
                    <h2>Un road movie Nantais</h2>
                    <p>Les artistes et personnages nous invitent dans des décors nantais peu connus du grand public ou tout simplement oubliés. De l’emblématique usine Beghin Say au vélodrome Petit Breton en passant par la discothèque Le Floride, les rencontres entre comédien.ne.s et artistes réveillent l’âme de ces lieux créant une atmosphère singulière à chaque épisode.</p>
                </div>
            </div>
        </section>

        <section class="pp__artists">

            <h2>Avec la participation de :</h2>

            <ul>
                <li>
                    <p>Ko Ko Mo</p>
                    <p>Rock garage - Loire-Atlantique</p>
                </li>
            </ul>

            <a href="" class="button">Voir les sessions</a>

        </section>

        <section class="pp__pics">
            <div class="container">
                <img src="assets/img/a-propos/pics/Suspendues-Stills_1.43.jpg" alt="" width="325" height="163">
                <img src="assets/img/a-propos/pics/Suspendues-Stills_1.218.jpg" alt="" width="323" height="163">
                <img src="assets/img/a-propos/pics/Suspendues-Stills_1.320.jpg" alt="" width="325" height="163">
                <img src="assets/img/a-propos/pics/Suspendues-Stills_1.414.jpg" alt="" width="323" height="163">
                <img src="assets/img/a-propos/pics/Suspendues-Stills_1.547.jpg" alt="" width="325" height="163">
            </div>
        </section>

        <section class="pp__logos-1">
            <div class="container">
                <img src="assets/img/a-propos/logos-1/Logo_sourdo.png" alt="" width="234" height="166">
                <img src="assets/img/a-propos/logos-1/Logo_stereolux.png" alt="" width="235" height="166">
                <img src="assets/img/a-propos/logos-1/Logo_fr3.png" alt="" width="234" height="166">
            </div>
        </section>

        <section class="pp__outro">
            <div class="container">
                <p>Ce projet a été imaginé par Sourdoreille et Stereolux, en partenariat avec six autres SMAC de la Région : La Soufflerie (Rezé), Fuzz'Yon (La Roche-sur-Yon), Superforma (Le Mans), Le Chabada (Angers), 6PAR4 (Laval) et Le VIP (Saint-Nazaire). Chacun des lieux a participé à la programmation de la série, propulsant ainsi devant les caméras les groupes accompagnés toute l’année dans leurs murs. France 3 Pays de la Loire s’est associé au projet et diffusera la série sur le web et à l’antenne à partir du 12 novembre 2021.</p>
            </div>
        </section>

        <section class="pp__logos-2">
            <div class="container">
                <img src="assets/img/a-propos/logos-2/Logo_soufflerie.png" alt="" width="183" height="130">
                <img src="assets/img/a-propos/logos-2/Logo_6par4.png" alt="" width="183" height="130">
                <img src="assets/img/a-propos/logos-2/Logo_fuzzyon.png" alt="" width="183" height="130">
                <img src="assets/img/a-propos/logos-2/Logo_vip.png" alt="" width="183" height="130">
                <img src="assets/img/a-propos/logos-2/Logo_chabada.png" alt="" width="184" height="130">
                <img src="assets/img/a-propos/logos-2/Logo_superforma.png" alt="" width="184" height="130">
            </div>
        </section>

    </main>

    <footer>
        <p>Avec le soutien du Centre national de la musique</p>
        <img src="assets/img/a-propos/logos-3/Logo_cnm.png" alt="" width="184" height="130">
        <img src="assets/img/marker.svg" alt="" width="60" height="60">
        <p>Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL.
        </p>
    </footer>

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
import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/galerie", "La galerie", "/pages/galerie.html", []),
    new Route("/la-carte", "La carte", "/pages/la-carte.html", []),
    new Route("/signin", "Se connecter", "/pages/auth/signin.html", ["disconnected"], "/js/auth/signin.js"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html", ["disconnected"], "/js/auth/signup.js"),
    new Route("/account", "Mon compte", "/pages/auth/account.html", ["Client", "admin"]),
    new Route("/editPassword", "Changer de mot de passe", "/pages/auth/editPassword.html", ["Client", "admin"]),
    new Route("/allResa", "Vos reservations", "/pages/reservations/allResa.html", ["Client"]),
    new Route("/reserver", "Réserver", "/pages/reservations/reserver.html", ["Client"]),
];
    

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";
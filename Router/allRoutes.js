import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "La galerie", "/pages/galerie.html"),
    new Route("/la-carte", "La carte", "/pages/la-carte.html"),
    new Route("/signin", "Se connecter", "/pages/signin.html"),
    new Route("/signup", "Inscription", "/pages/signup.html"),];
    

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";
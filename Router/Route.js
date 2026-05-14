export default class Route {
    constructor(url, title, pathHtml, authorized, pathJS = "") {
      this.url = url;
      this.title = title;
      this.pathHtml = pathHtml;
      this.pathJS = pathJS;
      this.authorized = authorized;
    }
}

/*
[] -> Tout le monde peut accéder
["disconnected"] -> Reserver aux utilisateurs non connectés
["Client"] -> Seul les clients peuvent accéder
["admin"] -> Seul les administrateurs peuvent accéder
["Client", "admin"] -> Seul les clients et les administrateurs peuvent accéder

*/
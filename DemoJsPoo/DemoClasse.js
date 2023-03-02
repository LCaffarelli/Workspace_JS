//Créer une classe par la définition de son constructeur
let Sport = function (nom, description) {

    //définition des attributs
    this.nom = nom || "pas de nom";
    this.description = description || "";
//Si nom et description pas initialisé dans les parametre on determnine une valeur par defaut avec les ||

    //définition des fonctions
    this.afficher = function () {
        console.log(`${this.nom} ${this.description}`); // on utilise this. afin de faire reference aux attributs de la classe
    }
}

//Déclaration et création d'objets de type Sport:
let sport = new Sport("squash", "un jeu de raquettes");
let sport2 = new Sport("football", "un jeu de ballon");

sport.afficher();
sport2.afficher();

console.log(sport);
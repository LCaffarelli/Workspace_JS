const Attaque = function (nomAttaque, degats) {

    this.nomAttaque = nomAttaque;
    this.degats = degats;

}

const Pokemon = function (nom, numPokedex, taille, poids, type, pv, attaques) {
    this.nom = nom;
    this.numPokedex = numPokedex;
    this.taille = taille;
    this.poids = poids;
    this.type = type;
    this.pv = pv;
    this.pvMoins20Pc = this.pv * 0.2;
    if (attaques[0] > attaques[1]) {
        this.attaqueForte = attaques[0];
        this.attaqueFaible = attaques[1];
    } else {
        this.attaqueForte = attaques[1];
        this.attaqueFaible = attaques[0];
    }

    this.afficher = function () {
        console.log(`
        nom : ${nom};
        numéro : ${numPokedex};
        taille : ${taille};
        poids : ${poids};
        type : ${type};
        pv : ${pv};
        `)
    }

    this.attaquer = function (adversaire) {
        let strike = this.attaqueFaible;
        if (this.pv <= this.pvMoins20Pc) {
            strike = this.attaqueForte;
        }
        adversaire.pv -= strike.pointAttaque;
        console.log(this.nom + " attaque avec " + attaques.nomAttaque + "(" + attaques.degats + " de dégats)")
    }

}

const combat = function (pokemon1, pokemon2) {
    let attaquant;
    let defenseur;
    // permet d'intervertir l'attaquant et le defenseur
    let tmp;

    //On determine qui va attaquer math random va choisir un nombre aléatoire en 0 et 1 . Donc si sup à 0.5 pok1 commence
    if (Math.random() > 0.5) {
        attaquant = pokemon1;
        defenseur = pokemon2;
    } else {
        attaquant = pokemon2;
        defenseur = pokemon1;
    }

    while (pokemon1.pv > 0 && pokemon2.pv > 0) {
        attaquant.attaquer(defenseur);
        console.log("il reste " + defenseur.pv + " à " + defenseur.nom);
        tmp = attaquant;
        attaquant = defenseur;
        defenseur = tmp;
    }
    console.log(defenseur.nom + " a vaincu " + attaquant.nom)

}


const STATIK = new Attaque("Statik", 10);
const PARATONNERRE = new Attaque("Paratonnerre", 25);
const ADAPTABILITE = new Attaque("Adaptabilité", 9);
const ANTICIPATION = new Attaque("Anticipation", 15);

let pikachu = new Pokemon("Pikachu", 25, 40, 6, "elctrique", 82, [STATIK, PARATONNERRE]);
let evoli = new Pokemon("Evoli", 133, 30, 6.5, "normal", 70, [ADAPTABILITE, ANTICIPATION])

pikachu.afficher()
evoli.afficher()

// pikachu.attaquer(evoli)
// console.log(evoli)
//
// evoli.attaquer(pikachu)
// console.log(pikachu)
//
// pikachu.attaquer(evoli)
// console.log(evoli)
//
// evoli.attaquer(pikachu)
// console.log(pikachu)

let combat = new combat(pikachu, evoli)


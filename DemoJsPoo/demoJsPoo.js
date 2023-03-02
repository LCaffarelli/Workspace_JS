//Créer un objet
const sport = {nom:"squash", description:"un jeu de raquettes"};
sport.nom ="SQUASH";
 //sport={nom:autreSport} PAS POSSIBLE CAR CONSTANTE ON PEUT CHANGER LES VALEURS MAIS PAS LES ATTRIBUTS

/*
* On aurait pu aussi le créer ainsi:
* const sport={}
* sport.nom="squash"
* sport.description="c'est une raquette"
* */

//Pour supprimer dynamiquement :
//delete sport.description


const autreSport=sport;
autreSport.description="C'EST UN JEU DE RAQUETTES";

//Manipuler un objet
console.log(sport);
console.log(sport.nom);
sport.nom="Squash";
console.log(sport["nom"]);

//Un objet est une structure dynamique
sport.nombreJoueurs = 2;
console.log(sport);

// let autreFct = fucntion (param1){
//     console.log(param1)
// }
// let autreFct = (param1)=>console.log(param1); VERSION LAMBDA DE LA FONCTION ANONYME DU DESSUS
autreFct ="coucou";

function fct3(monParam){
    monParam="ah que coucou"
}

fct3(autreFct);


//Un objet peut contenir des fonctions

//Une nouvelle instance, avec des attributs à laquelle on peut ajouter une methode directement dans un attribut des l'initialisation
let sport2 = {
    nom:"Badminton",
    description:"ça vole",
    afficher:function()
    {
        console.log(`${this.nom.toUpperCase()} ${this.description}`)
    }// on utilise this comme pour les getter et setter. pour qu'il fasse reference aux attributs passés
}

sport2.afficher();


//Il est possiblie de créer des tableaux d'objets

//Dans le tableau on ajoute les deux sports deja fait, puis on instancie un troisieme
let sports = [sport, sport2, {nom:"PADEL", description:"un autre jeu de raquettes"}];

//On en ajoute un 4eme avec le push
sports.push({nom:"TENNIS", description:"ça claque"});

console.log(sports);



//Un objet peut référencer un tableau

//on rajoute un attribut à l'objet sport qui est un tableau
sport.qualificatifs=["Rapide", "Fatigant", "..."];

//On peut aussi rajouter un attribut qui est un nouvel objet
sport.inventeur={nom:"bob"};
console.log(sport);
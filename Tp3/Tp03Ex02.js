let phrase = "";
phrase1 = "Pour quelqu'un qui n'avait jamais ete fait pour ce monde, je dois avouer que j'ai soudain du mal a le quitter. Bien sur on dit que chaque atome de notre corps faisait autrefois partie d'une etoile… peut-etre que je ne pars pas, peut-etre que je rentre chez moi.";
phrase2 = "JavaScript est un langage formidable"

function motLePlusGrand(phrase) {
    let resultatTemp = phrase.split(" ");

    let motMax = 0;
    let autreMot = "";
    for (let mot of resultatTemp) {
        if (mot.length > motMax) {
            motMax = mot;

        }

    }
    let resultat = motMax;

    return "Le(s) mot(s) le(s) plus grand(s) est/sont : '" +resultat + "', d'une taille de " +resultat.length + " lettres.";
}


console.log(motLePlusGrand(phrase1));
console.log(motLePlusGrand(phrase2));

//CORRECTION//

/*

    2 - Faire un programme qui trouve le(s) mot(s) le(s) plus long(s) dans une phrase

    Exemple: "Javascript est un langage formidable"  doit afficher :
    Mot(s) le(s) plus long(s) : Javascript, formidable

 */
let phrase3 = "Javascript est un langage formidable";
let tabMots = phrase3.split(" ");
let mots=[], max=0;
for(let mot of tabMots){
    if(mot.length == max){
        mots.push(mot) ;
    }else if(mot.length > max){
        mots = [mot];
        max = mot.length;
    }
}
console.log("Mot(s) le(s) plus long(s) : " + mots.join(", "));
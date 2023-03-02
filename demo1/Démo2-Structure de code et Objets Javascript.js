//EXEMPLE 1
//PROGRAMME PRINCIPAL
try {
    let phrase = "une phrase avec des consonnes et des voyelles";
    let compteurVoyelles = 0;
    let nombreA = 0;
    let nombreE = 0;

    for (let lettre of phrase) {
        if (estVoyelle(lettre)) {
            console.log("la voyelle '%s' est présente", lettre);
            compteurVoyelles++;
            switch (lettre) {
                case 'a' :
                    nombreA++;
                    break;
                case 'e' :
                    nombreE++
                    break;
            }
        }
    }

    console.log("Il y a %i voyelles", compteurVoyelles);
    console.log("il y a %i a", nombreA);
    console.log("il y a %i e", nombreE);
    console.log("il y a %i consonnes", phrase.replace(/ /g, '').length - compteurVoyelles);
    //le phrase replace sert à chercher les espaces, le g signifie plusieurs, donc chercher tous les espaces,puis de les remplacer par rien ''
    console.log(uneErreurGrossiere);
}
catch(e)
{
    console.log("une erreur est survenue : " + e);
}

function estVoyelle(lettre)
{
    if(lettre!=undefined && "aeiouy".indexOf(lettre)>=0)
    {
        return true;
    }
    return false;
}

//EXEMPLE 2
console.log(`
Exemple 2
`);

//PROGRAMME PRINCIPAL
let nombreReel = Math.random()*100;
console.log("nombre aléatoire = " + nombreReel);

//Avoir une valeur entière
let nombreEntier = parseInt(nombreReel);
console.log("nombre aléatoire arrondi à l'entier = " +nombreEntier);

//EXEMPLE 3
console.log(`
Exemple 3
`);
//PROGRAMME PRINCIPAL
console.log("Differentes manières d'afficher la date de Noel")
let noel2018 = new Date(2018,11,25);
console.log(noel2018);
console.log(noel2018.toLocaleDateString());
console.log(noel2018.getDate());
console.log(noel2018.getMonth()+1);
console.log(noel2018.getFullYear());
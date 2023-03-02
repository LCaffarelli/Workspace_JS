let nombreA = 0;
let nombreE = 0;
let nombreI = 0;
let nombreO = 0;
let nombreU = 0;
let nombreY = 0;
let phrase = "Dieu cree les dinosaures. Dieu detruit les dinosaures. Dieu cree l'homme. L'homme détruit Dieu. L'homme cree les dinosaures. Les dinosaures mangent l'homme. Et la femme herite de la Terre.".toLowerCase();
//On met le toLowerCase pour qu'il compte aussi les les voyelles en majuscules.

function calculVoyelles(phrase) {
    for (let lettre of phrase) {
        switch (lettre) {
            case'a':
                nombreA++;
                break;
            case'e':
                nombreE++;
                break;
            case'i':
                nombreI++;
                break;
            case'o':
                nombreO++;
                break;
            case'u':
                nombreU++;
                break;
            case'y':
                nombreY++;
                break;

        }
    }
    return "il y a " + nombreA + " 'a'. \n" +
        "il y a " + nombreE + " 'e'. \n" +
        "il y a " + nombreI + " 'i'. \n" +
        "il y a " + nombreO + " 'o'. \n" +
        "il y a " + nombreU + " 'u'. \n" +
        "il y a " + nombreY + " 'y'. " ;
}

console.log(calculVoyelles(phrase));


//Correction//

/*
1 - Faire un programme qui compte le nombre d'occurences de chaque voyelle dans une phrase

Exemple : Ceci est une PHRASE !
    doit afficher :
    a : 1
e : 4
i : 1
u : 1
*/
var phrase = "Ceci est une PHRASE !";
var alphabet = "aeiouy";
var tabLettres = Array.from(phrase.toLowerCase());
var nbLettres;
var i=0;
var  tabComptageLettres = [];
for(i = 0; i < alphabet.length; i++){
    nbLettres=0;
    for(j = 0; j < tabLettres.length; j++){
        if(alphabet[i]===tabLettres[j]){
            nbLettres++;
        }
    }
    tabComptageLettres[i]=nbLettres;
}
//Affichage du résultat
for(i=0;i < tabComptageLettres.length; i++){
    if(tabComptageLettres[i]>0){
        console.log(alphabet[i] + " : " + tabComptageLettres[i]);
    }
}


//EXERCICE 1
function getNombreAleatoire(min, max){
    min=Math.ceil(0);
    max=Math.floor(100);
    return Math.floor(Math.random()*(max-min+1)+min);
}
//console.log(getNombreAleatoire());
let tableau = new Array(10);

for(let i=0;i<tableau.length;i++){
    i=getNombreAleatoire();
    tableau.push(i);
    console.log(i);

}
/////CORRECTION/////

const NB_CASES = 100;
let nbTirages = 0;
let nbCasesRemplies = 0;
let tirage;
let tab = [];

//initialisation du tableau
for(let i=0;i<NB_CASES;i++){
    tab[i] = false;
}

//tirages au sort
while(nbCasesRemplies<NB_CASES){
    tirage = Math.floor(Math.random() * NB_CASES);
    if(!tab[tirage]){
        tab[tirage]=true;
        nbCasesRemplies++;
    }
    nbTirages ++;
}
//Affichage du nombre de tirages nécessaire
console.log("nbTirages = " + nbTirages);





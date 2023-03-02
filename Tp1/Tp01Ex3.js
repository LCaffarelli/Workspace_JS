//EXERCICE 3 corrigé

const phrase ="une phrase sans majuscule";

let tab=phrase.split(" ");
console.log(tab);

for(let i=0; i<tab.length;i++){
    //Traiter le mot. On vient recuperer la premiere lettre du mot qu'on met en majuscule. On lui ajoute ensuite le reste du mot a partir du deuxieme caractere
    tab[i]= tab[i].charAt(0).toUpperCase() + tab[i].substring(1);
}

let resultat = tab.join(" ");
console.log(resultat);
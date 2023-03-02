//EXERCICE 2 (corrigé)
let phrase="une chaine avec des lettres dans un certain ordre pour donner du sens"

function avecSplitJoin(phrase){
    let tempTab=phrase.replace(/ /g,"");
    let tabChaine=tempTab.split("");
    let resultat =tabChaine.sort().join("");
    return resultat;
}


console.log(avecSplitJoin(phrase));
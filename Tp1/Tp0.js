let phrase ="ceci-est-une-phrase";

function  avecSplitJoin(phrase){
    //On vient supprimer tous les caracteres "-" de la phrase.Transforme en tableau de 4 mots.
    let tab=phrase.split("-");

    console.log(tab);

    //Joint les quatres mots du tableau avec des " ".
    let resultat = tab.join(" ");

    return resultat;
}

function avecReplaceAll(phrase){
    //Remplace les "-" par des " ".
    return phrase.replaceAll("-"," ");
}

function avecReplace(phrase){
    // Change toutes les occurences "g" de tirets /-/, et les remplace par " "
    return phrase.replace(/-/g," ");
}

console.log(avecSplitJoin(phrase));
console.log(avecReplaceAll(phrase));
console.log(avecReplace(phrase));
function factorielle(num){
    let resultat =1;
    for(let i=1;i<=num;i++){
        resultat*=i;
    }
    return resultat;
}
console.log(factorielle(5))

//CORRECTION//

/*
* avec Recursivité
* */

function  factiorielleBis(nb){
    if(nb==2){
        return 2;
    }
    return nb * factorielle(nb-1);
}
function maxDesDeuxNombres( number1  ,  number2 ){
    if(number1>number2){
        return number1;
    }else{
        return number2;
    }
}

resultat1 = maxDesDeuxNombres(15,24);
resultat2 = maxDesDeuxNombres(3,1);

console.log("Le resultat le plus grand est "+resultat1);
console.log("Le resultat le plus grand est "+resultat2);

/////CORRECTION/////
/*
Fonction créée avec une ternaire :
* function maxDesDeuxNombres(nb1,nb2){
* return nb1>nb2 ? nb1 :nb2;
* }
* */
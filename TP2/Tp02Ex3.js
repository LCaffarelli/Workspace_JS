function maxDesTroisNombresBis(num1, num2, num3) {
    if( num1>maxDesDeuxNombres(num2,num3)){
        return num1;
    }else if(num2>maxDesDeuxNombres(num1,num3)){
        return num2
    }else{
        return num3;
    }
}
function maxDesDeuxNombres( number1  ,  number2 ){
    if(number1>number2){
        return number1;
    }else{
        return number2;
    }
}

let resultat1 = maxDesTroisNombresBis(54, 2, 17);
let resultat2 = maxDesTroisNombresBis(12, 1, 42);
let resultat3 = maxDesTroisNombresBis(16, 69, 36);

console.log("Le resultat le plus grand est "+resultat1);
console.log("Le resultat le plus grand est "+resultat2);
console.log("Le resultat le plus grand est "+resultat3);

//CORRECTION//

/*function  maxDesTroisNombresBis(nb1,nb2,nb3){
    return maxDesDeuxNombres(nb1, maxDesDeuxNombres(nb2,nb3))

    Dans le return on compare nb1 au nombre le plus grand entre nb2 et nb3. On peut appeler
    dans la fonction une autre fonction. D'ou le deuxieme maxDesDeuxNombres dans le premier.
}*/
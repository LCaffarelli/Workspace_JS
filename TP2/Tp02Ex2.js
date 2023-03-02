function maxDesTroisNombres(num1, num2, num3) {
    if (num1 > num2 & num1 > num3) {
        return num1;
    } else if (num2 > num3) { // Pas besoin de reverifier num2 > num1 car déja vérifié dans la premiere condition
        return num2;
    } else {
        return num3;
    }
}

let resultat1 = maxDesTroisNombres(5, 21, 7);
let resultat2 = maxDesTroisNombres(10, 14, 2);
let resultat3 = maxDesTroisNombres(10, 69, 78);

console.log("Le resultat le plus grand est "+resultat1);
console.log("Le resultat le plus grand est "+resultat2);
console.log("Le resultat le plus grand est "+resultat3);
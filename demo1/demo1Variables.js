
/* 1 - Les commentaires */
console.log("1 - Les commentaires");

// commentaires de fin de ligne

/*
    commentaires sur plusieurs lignes
 */

/* 2 - Déclarer des variables avec le mot clé var */
console.log("");
console.log("2 - Déclarer des variables avec le mot clé var");
/* Avant EcmaScript 2015 ( utilisé sur les versions anciennes des navigateurs ) */

//2.1 La portée est globale ou fonction
    {
        var z = 1;
    }
    z += 1;
    console.log("z = " + z) //affiche 2
    function maFonction(){
        var z = 3;
        console.log("z dans ma fonction="+z)
    }
    maFonction();

    var z=12;
    console.log("z = " + z) //affiche 12
/*Affiche 12 car la portée de la variable z=3 n'est que dans la fonction contrairement à var en haut qui est globale.
Attention car on a pu declarer de nouveau une var z sans erreur. Le deuxieme z ecrase le premier var.
* pour plus de precision et moins d'ambiguite utiliser let
* */


//2.2 possibilité de redéfinir la même variable
var x = 1;
if (x === 1) {
    var x = 2;  //Redéfinition de la même fonction
    console.log("x=" + x); //affiche 2
}
console.log("x=" + x);  //affiche 2


//3 Déclarer des variables avec let
console.log("");
console.log("3 Déclarer des variables avec let");
// 3.1 une même variable ne peut être redéfini avec let
let y=1;
//let y=2;  //pas possible déjà défini dans la même portée

if(y === 1){
    let y = 2;   //possible car la portée est différente
    console.log("y=" + y); //affiche 2
    let a = 3;
}
console.log("y=" + y); //affiche 1
//console.log("a="+a); //ReferenceError - a n'est pas défini dans cette portée


//4 déclarer des constantes avec const
const b=2; //On est obligé de donner une valeur
console.log("b="+b); //affiche 2
//b=3; //TypeError: Assignment to constant variable

//4.1 const a une portée locale
const c=1;
{
    const c=2;
}
console.log("c="+c); //affiche 1 car la valeur 2 n'est que dans la portée des crochets

//5 - Notion de typage dynamique
console.log("");
console.log("5 - Notion de typage dynamique");

let d ;
console.log(typeof d);//undefined

d= 1;
console.log(typeof d);//number

d = "une chaine de caractère";
console.log(typeof d);//string

d = false;
console.log(typeof d);//boolean

d = null;// ou d={}
console.log(typeof d);//object quand la variable est vide (null) son type est Object

d = {nom: "bob", age:12};
console.log(typeof d);//object

/*On peut voir que Javascript est faiblement typé car la variable d change de type aisement = typage dynamique */


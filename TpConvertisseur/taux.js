const EURO = 0;
const DOLLAR = 1;
const LIVRE = 2;
const YEN = 3;
const NB_DEVISES = 4;

let tabLibDevises = [];
tabLibDevises[EURO] = "EURO";
tabLibDevises[DOLLAR] = "DOLLAR";
tabLibDevises[LIVRE] = "LIVRE";
tabLibDevises[YEN] = "YEN";



let tabChange = init_devises();

let selDevise1 = document.getElementById("selDevise1");
let selDevise2 = document.getElementById("selDevise2");
let inpMontant= document.getElementById("inpMontant");
let pTauxDeChange= document.getElementById("pTauxDeChange");
let btnCalculer= document.getElementById("btnCalculer");




for(let i=0; i<4; i++){
    let newOption1 = document.createElement("option");
    newOption1.value = ""+i;
    newOption1.innerHTML = tabLibDevises[i];
    console.log(newOption1);
    selDevise1.appendChild(newOption1);

    let newOption2 = document.createElement("option");
    newOption2.value = ""+i;
    newOption2.innerHTML = tabLibDevises[i];
    selDevise2.appendChild(newOption2);

}

/*
    Description : Méthode qui permet d'afficher le résultat de la conversion sur la page
*/
function afficherTauxDeChange(){
    console.log("Dans afficherTauxDeChange");
    console.log("devise1 : " + selDevise1.options[selDevise1.selectedIndex].value);
    console.log("devise2 : " + selDevise2.options[selDevise2.selectedIndex].value);

    let montant = inpMontant.value;

    console.log("afficherTauxDeChange() - montant = " + montant);

    let txChange = convertir( montant,
        selDevise1.value, //selDevise1.options[selDevise1.selectedIndex].value ECRITURE TROP LONGUE
        selDevise2.value //selDevise2.options[selDevise2.selectedIndex].value
        );

    let libDevise1 =tabLibDevises[selDevise1.value]; //tabLibDevises[selDevise1.options[selDevise1.selectedIndex].value] ECRITURE TROP LONGUE
    let libDevise2 = tabLibDevises[selDevise2.value]; //tabLibDevises[selDevise2.options[selDevise2.selectedIndex].value]

    pTauxDeChange.innerHTML=`${montant} ${libDevise1}(s) est égal à ${txChange.toFixed(2)} ${libDevise2}(s)`;

}
//quand y a une changement ("change") sur une devise, ça doit declancher un recalcul du montant
selDevise1.addEventListener("change", afficherTauxDeChange);
selDevise2.addEventListener("change", afficherTauxDeChange);
btnCalculer.addEventListener("click", afficherTauxDeChange);
inpMontant.addEventListener("blur", afficherTauxDeChange);

/*
    Description : Méthode qui convertit le montant donné dans la devise1 en un montant dans la devise2 (devise1 et 2 etant celle que l'utilisateur a choisi
 */
function convertir(montant, devise1, devise2){
    return  montant * tabChange[devise1][devise2];
}

/*Permet de connaitre le bon taux de change par index de tableau*/
function init_devises(){
    let tabChange = [];
    for(i=0; i<NB_DEVISES; i++){
        tabChange[i] = new Array(NB_DEVISES);
    }

    tabChange[EURO][DOLLAR] = 1.12121;
    tabChange[EURO][LIVRE] = 0.902951;
    tabChange[EURO][YEN] = 120.071;
    tabChange[EURO][EURO] = 1;

    tabChange[DOLLAR][DOLLAR] = 1;
    tabChange[DOLLAR][LIVRE] = 0.805348;
    tabChange[DOLLAR][YEN] = 107.082;
    tabChange[DOLLAR][EURO] = 1/tabChange[EURO][DOLLAR];

    tabChange[LIVRE][DOLLAR] = 1/tabChange[DOLLAR][LIVRE];
    tabChange[LIVRE][LIVRE] = 1;
    tabChange[LIVRE][YEN] = 132.966;
    tabChange[LIVRE][EURO] = 1/tabChange[EURO][LIVRE];

    tabChange[YEN][DOLLAR] = 1/tabChange[DOLLAR][YEN];
    tabChange[YEN][LIVRE] = 1/tabChange[LIVRE][YEN];
    tabChange[YEN][YEN] = 1;
    tabChange[YEN][EURO] = 1/tabChange[EURO][YEN];

    return tabChange;
}

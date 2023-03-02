const calculerBtn = document.getElementById("btnCalcul");
const convEuroDollar =1.12121;
const convEuroLivre =0.902951;
const convEuroYen =120.071;
const convDollarLivre=0.805348;
const convDollarYen=107.082;
const convLivreYen =132.966;
const premDevise=document.getElementById("deviseEntree");
const deuxDevise=document.getElementById("deviseSortie");
const montant=document.getElementById("montant");
const resultat= document.getElementById("Resultat");

function convertir(){
    let deviseA=premDevise.value;
    let deviseB=deuxDevise.value;
    let montantEntre =montant.value;
    let resultatCalcul=0;

    if(deviseA=="euro"){

        switch (deviseB) {
            case "euro" :
                resultatCalcul=montantEntre *1;
                break;
            case "dollar" :
                resultatCalcul = montantEntre * convEuroDollar;
                break;
            case "yen" :
                resultatCalcul=montantEntre * convEuroYen;
                break;
            case "livre" :
                resultatCalcul=montantEntre *= convEuroLivre;
                break;
        }
    }

    if(deviseA=="dollar"){

        switch (deviseB) {
            case "euro" :
                resultatCalcul=montantEntre *1/convEuroDollar;
                break;
            case "dollar" :
                resultatCalcul = montantEntre * 1;
                break;
            case "yen" :
                resultatCalcul=montantEntre * convDollarYen;
                break;
            case "livre" :
                resultatCalcul=montantEntre * convDollarLivre;
                break;
        }
    }

    if(deviseA=="yen"){

        switch (deviseB) {
            case "euro" :
                resultatCalcul=montantEntre *1/convEuroYen;
                break;
            case "dollar" :
                resultatCalcul = montantEntre * 1/convDollarYen;
                break;
            case "yen" :
                resultatCalcul=montantEntre * 1;
                break;
            case "livre" :
                resultatCalcul=montantEntre * 1/convLivreYen;
                break;
        }
    }

    if(deviseA=="livre"){

        switch (deviseB) {
            case "euro" :
                resultatCalcul=montantEntre *1/convEuroLivre;
                break;
            case "dollar" :
                resultatCalcul = montantEntre * 1/convDollarLivre;
                break;
            case "yen" :
                resultatCalcul=montantEntre * convLivreYen;
                break;
            case "livre" :
                resultatCalcul=montantEntre * 1;
                break;
        }
    }
    let affichage=document.createElement("div")
    affichage.innerHTML="<p>"+resultatCalcul+"</p>";
    resultat.appendChild(affichage);

}

calculerBtn.addEventListener("click", convertir);


//MARCHE MAIS MOCHE//
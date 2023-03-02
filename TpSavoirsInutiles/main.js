const btnValider = document.getElementById("ajouterBtn");
const listeSavoir = document.getElementById("listeSavoirs");
const savoirInput = document.getElementById("savoirInput");
const auteurInput = document.getElementById("auteurInput");
const dateInput = document.getElementById("dateInput");

function ajouterSavoir() {
    //On fait une condition pour que tous les champs soient saisis
    if (savoirInput.value.trim() == "" || auteurInput.value.trim() == "" || dateInput.value.trim() == "") {
        alert("Tous les champs sont obligatoires");
        return;
    }
    //On créé l'element li qui remplira la liste
    let maLi = document.createElement("li");

    //On récupere la saisie utilisateur afin de pouvoir l'ajouter dans la liste
    //On donne la valeur de ce qui est rentré dans la liste. On ajoute du HTML dans le Js
    maLi.innerHTML = "<span class='big'>" + savoirInput.value + "</span><br>"
        + "Par " + auteurInput.value + ", le " + dateInput.valueAsDate.toLocaleDateString();

    //Ma version marche a peu près
    //maLi.innerHTML = savoir.fontsize(15) + " " + auteur + " " + date

    //Pour supprimer quand on appuie sur l'élement de la liste
    maLi.addEventListener("click", supprimer);

    //on le met dans la liste, et on fait en sorte que ça s'afiche à la suite
    listeSavoir.appendChild(maLi);

}

function supprimer(event) {
    /*
    * On va cherche l'element visé (target), soit maLi. On va chercher le premier span, prendre son InnerText
    * en cliquant dessus on affiche une boite de dialogue qui demande la confirmation de suppression
    * Si oui on remonte jusqu'au parent et on le supprime de la liste
    * */
    let savoir = event.currentTarget.getElementsByTagName("span")[0].innerText
    if (confirm(`Voulez-vous supprimer le savoir "${savoir}"?`)) {
        //event.currentTarget.parentNode.removeChild(event.currentTarget);
        //en plus simple :
        this.remove();
    }
}

btnValider.addEventListener("click", ajouterSavoir);

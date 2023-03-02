const savoirInput = document.getElementById("savoirInput");
const auteurInput = document.getElementById("auteurInput");
const dateInput = document.getElementById("dateInput");
const ajouterBtn = document.getElementById("ajouterBtn");
const listeSavoirs = document.getElementById("listeSavoirs");

function ajouterSavoir(){

    if(savoirInput.value.trim()=="" || auteurInput.value.trim()=="" || dateInput.value.trim()==""){
        alert("Tous les champs sont obligatoires");
        return;
    }
    let newLi = document.createElement('li');
    newLi.innerHTML = "<span class='big'>" + savoirInput.value + "</span><br>"
        + "Par " + auteurInput.value + ", le " + dateInput.valueAsDate.toLocaleDateString() ;

    newLi.addEventListener("click", supprimer);

    listeSavoirs.appendChild(newLi);

}

function supprimer(event)
{
    var savoir = event.currentTarget.getElementsByTagName("span")[0].innerText
    if(confirm(`Voulez-vous supprimer le savoir "${savoir}"?`))
    {
        event.currentTarget.parentNode.removeChild(event.currentTarget);
    }
}

ajouterBtn.addEventListener("click", ajouterSavoir);

function chargerContenu() {
    //afiche dans la console
    console.log("coucou, la fonction chargerContenu() est exécutée");

    //titre de l'onglet
    document.title = "Mon titre sur l'onglet";

    //autre maniere d'acceder à l'ID
    //document.getElementsByTagName("h1")[0].innerText = "Ceci est mon vrai titre";

    //Utilisation de l'innerText mais mieux d'utiliser innerHtml car il prend en compte toutes les specifications html qu'on aurait pu mettre.
    document.getElementById("titre").innerText = "Ceci est vraiment le bon titre";

    //On ajoute un element qui n'existait pas dans la page, ici un input
    let elInput = document.createElement("input");

    //Permet de mettre un id sur l'imput :
    //elInput.setAttribute("id","idInput"); ecriture longue
    elInput.id="idInput";

    /*let attValue = document.createAttribute("value");
    attValue.value = "une zone de saisie";
    elInput.setAttributeNode(attValue);*/

    //On determnine la value de l'input
    //elInput.setAttribute("value", "une zone de saisie");  Une autre maniere d'ecrire. Celle de dessous est mieux, c'est la version programmatique
    elInput.value ="blablabla"


    //afterend, beforebegin, afterbegin, beforerend
    //Permet d'inserer l'élément
    document.getElementById("titre").insertAdjacentElement("afterend", elInput); // afterend apres le titre en l'occurence. beforebegin si on veut le mettre avant
}
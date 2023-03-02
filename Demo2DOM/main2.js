let monCanvas = document.getElementById("monCanvas");

//determine la taille de l'image
monCanvas.width = 800;
monCanvas.height = 550;

//Pour dessiner dessus
const ctx = monCanvas.getContext('2d');

////////// POUR DU TEXTE //////////
//On lui donne une taille et un style de police
ctx.font = "30px Arial";

//On lui donne une couleur
ctx.fillStyle = "white";

//On signifie notre texte et ses coordonnées.
ctx.fillText("ENI", 150, 200);


////////// POUR CREER UNE FORME RECTANGULAIRE //////////
//Permet de créer un rectangle bleu
ctx.fillStyle = "blue";
ctx.fillRect(50, 50, 100, 80);


////////// INSERER UNE IMAGE //////////
//On créé une image
const heightShip = 32;
const widthShip = 32;
let vaisseau = new Image(widthShip, heightShip);

//On récupere l'image
vaisseau.src = "./images/spaceship32x32.png";

//On va charger l'image. On utilise un lambda pour le faire. Les accolades ne sont pas obligatoires quand il y a un seul objet
//onload permet d'afficher l'image quand la page est chargée.
let positionInitX = monCanvas.width / 2 - 16; // Pour le mettre au milieu on divise la largeur par 2 et on enleve la moitié de la taille de l'image, soit 16 pixels car il fait 32
let positionInitY = monCanvas.height / 2 - vaisseau.height / 2; // on aurait pu l'ecrire comme ça aussi

vaisseau.onload = () => {
    ctx.drawImage(vaisseau, positionInitX, positionInitY)
};

////////// DEPLACER VAISSEAU //////////
const step = 20;
const buttonRight = document.getElementById("idBtnDroite");
const buttonLeft = document.getElementById("idBtnGauche");
const buttonDown = document.getElementById("idBtnBas");
const buttonUp = document.getElementById("idBtnHaut");
const buttonDiagUR = document.getElementById("idBtnDiagHD");
const buttonDiagUL = document.getElementById("idBtnDiagHG");
const buttonDiagDR = document.getElementById("idBtnDiagBD");
const buttonDiagDL = document.getElementById("idBtnDiagBG");

buttonRight.addEventListener("click", move); // callback, le fait de mettre une fonction sans les parentheses pour qu'elle fonctionne seulement quand on clique dessus.
buttonLeft.addEventListener("click", move);
buttonDown.addEventListener("click", move);
buttonUp.addEventListener("click", move);
buttonDiagUR.addEventListener("click", move);
buttonDiagUL.addEventListener("click", move);
buttonDiagDR.addEventListener("click", move);
buttonDiagDL.addEventListener("click", move);

document.addEventListener("keydown", moveByKeyPress);

function moveByKeyPress(evt) {
    let direction;
    switch(evt.key){
        case 'ArrowUp':direction='haut'; break;
        case 'ArrowRight':direction='droite'; break;
        case 'ArrowDown':direction='bas'; break;
        case 'ArrowLeft':direction='gauche'; break;
    }
    move(direction);
}

/*On fait une seule fonction pour tous les mouvements. On utilise l'evenment "evt", auquel on signal qu'il doit cibler un id target.id pour que l'evenement
* que l'on souhaite faire réagisse*/
function moveBtn(evt){
    let direction;
    switch (evt.target.id) {
        case "idBtnHaut" : direction ="haut"; break;
        case "idBtnBas" : direction ="bas"; break;
        case "idBtnGauche" : direction ="droite"; break;
        case "idBtnDroite" : direction ="gauche"; break;

    }
}

function move(direction) {
    ctx.clearRect(positionInitX, positionInitY, widthShip, heightShip); //Permet d'effacer la position actuelle du vaisseau pour aller sur sa nouvelle position
    switch (direction) {
        case "Droite" :
            positionInitX += step;
            break;
        case "Gauche" :
            positionInitX -= step;
            break;
        case "Bas" :
            positionInitY += step;
            break;
        case "Haut" :
            positionInitY -= step;
            break;
        case "DiagHD" :
            positionInitY -= step;
            positionInitX += step;
            break;
        case "DiagHG" :
            positionInitY -= step;
            positionInitX -= step;
            break;
        case "DiagBD" :
            positionInitY += step;
            positionInitX += step;
            break;
        case "DiagBG" :
            positionInitY += step;
            positionInitX -= step;
            break;

    }
    ctx.drawImage(vaisseau, positionInitX, positionInitY);

}




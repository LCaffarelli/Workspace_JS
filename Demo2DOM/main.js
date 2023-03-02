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
const heightShip=32;
const widthShip=32;
let vaisseau = new Image(widthShip, heightShip);

//On récupere l'image
vaisseau.src = "./images/spaceship32x32.png";

//On va charger l'image. On utilise un lambda pour le faire. Les accolades ne sont pas obligatoires quand il y a un seul objet
//onload permet d'afficher l'image quand la page est chargée.
let positionInitX =monCanvas.width/2 -16; // Pour le mettre au milieu on divise la largeur par 2 et on enleve la moitié de la taille de l'image, soit 16 pixels car il fait 32
let positionInitY=monCanvas.height/2-vaisseau.height/2; // on aurait pu l'ecrire comme ça aussi

vaisseau.onload = () => { ctx.drawImage(vaisseau, positionInitX, positionInitY)};

////////// DEPLACER VAISSEAU //////////
const step=20;

function deplacerDroite(){
    alert("Dans deplacerDroit"); //Affiche une boite de dialogue quand on clique sur le bouton concerné.
    ctx.clearRect(positionInitX, positionInitY, widthShip, heightShip); //Permet d'effacer la position actuelle du vaisseau pour aller sur sa nouvelle position
    positionInitX+=step;
    ctx.drawImage(vaisseau,positionInitX,positionInitY);
}
const buttonRight=document.getElementById("idBtnDroite");
buttonRight.addEventListener("click",deplacerDroite); // callback, le fait de mettre une fonction sans les parentheses pour qu'elle fonctionne seulement quand on clique dessus.

function deplacerGauche(){
    ctx.clearRect(positionInitX, positionInitY, widthShip, heightShip);
    positionInitX-=step;
    ctx.drawImage(vaisseau,positionInitX,positionInitY);
}
const buttonLeft=document.getElementById("idBtnGauche");
buttonLeft.addEventListener("click",deplacerGauche);

function deplacerBas(){
    ctx.clearRect(positionInitX, positionInitY, widthShip, heightShip);
    positionInitY+=step;
    ctx.drawImage(vaisseau,positionInitX,positionInitY);
}
const buttonDown=document.getElementById("idBtnBas");
buttonDown.addEventListener("click",deplacerBas);

function deplacerHaut(){
    ctx.clearRect(positionInitX, positionInitY, widthShip, heightShip);
    positionInitY-=step;
    ctx.drawImage(vaisseau,positionInitX,positionInitY);
}
const buttonUp=document.getElementById("idBtnHaut");
buttonUp.addEventListener("click",deplacerHaut);

function deplacerDiagHautDroite(){
    ctx.clearRect(positionInitX, positionInitY, widthShip, heightShip);
    positionInitY-=step;
    positionInitX+=step;
    ctx.drawImage(vaisseau,positionInitX,positionInitY);
}
const buttonDiagUR=document.getElementById("idBtnDiagHD");
buttonDiagUR.addEventListener("click",deplacerDiagHautDroite);

function deplacerDiagHautGauche(){
    ctx.clearRect(positionInitX, positionInitY, widthShip, heightShip);
    positionInitY-=step;
    positionInitX-=step;
    ctx.drawImage(vaisseau,positionInitX,positionInitY);
}
const buttonDiagUL=document.getElementById("idBtnDiagHG");
buttonDiagUL.addEventListener("click",deplacerDiagHautGauche);

function deplacerDiagBasDroite(){
    ctx.clearRect(positionInitX, positionInitY, widthShip, heightShip);
    positionInitY+=step;
    positionInitX+=step;
    ctx.drawImage(vaisseau,positionInitX,positionInitY);
}
const buttonDiagDR=document.getElementById("idBtnDiagBD");
buttonDiagDR.addEventListener("click",deplacerDiagBasDroite);

function deplacerDiagBasGauche(){
    ctx.clearRect(positionInitX, positionInitY, widthShip, heightShip);
    positionInitY+=step;
    positionInitX-=step;
    ctx.drawImage(vaisseau,positionInitX,positionInitY);
}
const buttonDiagDL=document.getElementById("idBtnDiagBG");
buttonDiagDL.addEventListener("click",deplacerDiagBasGauche);


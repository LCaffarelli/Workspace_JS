import { Component } from '@angular/core';

@Component({
  //le selector est le nom de la balise que l'on va utiliser
  //doit commencer par app- (fait partie de la convention)
  selector: 'app-en-tete',
  templateUrl: './en-tete.component.html',
  styleUrls: ['./en-tete.component.css']
})
export class EnTeteComponent {
  titre: string="mon titre";
  valeurInput: string="Ma valeur";

  onClickButton(){
   console.log("coucou")
   this.titre="Autre titre";
  }

}

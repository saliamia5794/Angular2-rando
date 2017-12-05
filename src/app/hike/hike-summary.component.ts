import {Component,Input,Output,EventEmitter} from '@angular/core';
import {Hike} from './hike';


@Component({
moduleId:module.id,
selector:"hike-summary",
templateUrl:'hike-summary.component.html',
//styles:['a {text-decoration:none} a:hover {color:#999}']
styleUrls:['hike-summary.component.css']
})
export class HikeSummaryComponent{
// input permet d'importer les donnes hikes du composent parent
    @Input() hike:Hike;

    @Output() addhikeasfavorite=new EventEmitter<Hike>();

    toggleAsToDoHike(isAdded:any){
        console.log(isAdded);
          // test si la checkbox est coché en 
          // recuperant la valeur quand l'evenement
          // est checké en recupere la valeur true 
          // ou false a l'aide du target
           if (isAdded){
            this.addhikeasfavorite.emit(this.hike)
           }

    }
  //  

}
//  passage des données d'un component enfant vers un component parent
// 1. declaration de output en utilisant l'evventemetteur
// le but c de rajouter une case a coché ajouter randonnée
//en tant que favorite c pour ça notre variable on la appelé comme
//ca l'eventemetteur a une methode emit
//les génériques c avec les crochet
// le $ dans le template permet de 

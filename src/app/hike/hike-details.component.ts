import {Component,OnInit} from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';




@Component({
    moduleId:module.id,
    templateUrl:'hike-details.component.html'
})
//l'interface OnInit qui implements HikeDetails 
//doit contenir une methode ecrit exactement de cette 
//façon "ngOnInit" (meme syntaxe )
// si on rajout pas implements OnInit on nomme la methode
// comme on veut

export class HikeDetailsComponent implements OnInit  {
//injection du service ActivatedRoute
   title:string; // faire du string interpolation {{title}}

    constructor( private route: ActivatedRoute, private router:Router) {
//jamais d'opération couteuse dans le constructeur
    }

   ngOnInit(){
//snapshot a une propriété params qui nous demande quelle propriété on veut recuperer
//dans lurl nous on decide d'appeler la propriété id c notre choix
       let id =this.route.snapshot.params['id'];// recuperation du param à l'aide de l'id 
       this.title=`Détails de la randonnée ${id}`; // nouvelle syntaxe d'es2015 les backtild permettent d'afficher un string avec une variable  
       console.log('hello');
   }
    
   goBack(){
      this.router.navigate(['/hikes']);//methode navigate appelé depuis l'injection du service Router dans le constructeur
       // creation d'un event dans le template hike-details en faisant de l'event binding

    }
    

// un pipe c'est une barre verticale | altgr 6 
// uppercase un pipe fournie par angular 
// ng model n'est pas un attribut classique a Html 
// communication typescript vers template c'est à l'aide des crochet ex :comme la directive routerlink
//communication template vers typescript c'est à l'aide des parenthèses ex :(click) l'event click
// la communication bi directionnelle se fait en utilisant le ngModel
}
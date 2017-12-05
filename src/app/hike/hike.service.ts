import {Injectable} from '@angular/core';
import {Http} from '@angular/http';


import {Hike } from  './hike';
import  'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class HikeService {

    constructor(private http:Http){}


  //getHikes(){ return this.hikes; }

      getHikesFromAPI(){
       return   this.http.get('app/api/hikes.json') // get sur notre fichier json 
                         .do(x=>console.log(x)) // je veux voir le resultat (response on aurai pu l'appeler res) et je l'affiche dans la console
                         .map(hikes=>hikes.json()) ; // hikes correspond au propriété envoyés    // si on veut pas jouer avec une reponse http on la transforme on utilise map il prend les données renvoyées et il les transforme en json
      
                      }
   // note importante Http Response  est affiché grace à un opérateur do 
   // important quand on modifie le chemin d'accès app/api/hikes.json en apjodijdjp/api/hikes.json c'est notre methode subscribe qui déclanche notre le 2 eme callback qui correspond à console.error
   // map retourne un observable aussi
   // c'est tellement vrai que map(),utilisé sur un array ou un observable
   //..Il ne modifie pas l'array ou l'observable source;
   // une nouvelle modification de la premiere  est retournée 
   // sans modification de la collection source


  // important dans un api ou fichier.json jamais il ne faut rajouter des commentaire avec des / ça bloque
  // l'affichage 

}
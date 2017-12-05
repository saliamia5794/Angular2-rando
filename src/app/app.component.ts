import { Component } from '@angular/core';
import { Hike } from './hike/hike';
import { HikeService } from './hike/hike.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls:['app.component.css']
})
export class AppComponent {

  hikes: Hike[];



  constructor(private hikeService: HikeService) {

    
  }

  /*
  ngOnInit() {
     // la methode ngOninit est utilisé pour tester une fonctionnalité dans le app général
     
    //this.hikes=this.hikeService.getHikes();
    // methode subscribe prend 3 callback le premier rentre en action quand l'observeble nous envoie des données et ça se passe bien le 2 eme rentre en action quand une erreur se produit le 3 eme callback rentre en action quand l'observable lui dis qu'il a fini c interessant c'est pas mal de savoir si l'observble n'envoie rien
    return this.hikeService.getHikesFromAPI()
//un observebale peut nous envoie des donnees en asynchrone mais a partir du moment ou on s'abonne
      .subscribe(res => this.hikes = res, //envoie des donnes depuis l'observable si c ok c ça qu'on va voir
                 err => console.error(err.status) // error de l'observable lors de l'envoies


                );
  
  }
  */





}

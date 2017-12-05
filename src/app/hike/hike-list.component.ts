import {Component} from '@angular/core';
import {Hike} from './hike';
import {HikeService} from './hike.service';




@Component({
    moduleId: module.id,
    selector: 'hike-list',
    templateUrl:'hike-list.component.html',

})
export class HikeListComponent{

 hikes:Hike[];
 searchTerm:string;

    constructor(private hikeService:HikeService){

    }

    ngOnInit(){

      this.hikeService.getHikesFromAPI()
      .subscribe(
        res=>this.hikes=res,
        err=>console.error(err.status)
       );

    }


    addToMyTodoHike(hikeToAdd:Hike){

    console.log(`rando  ${hikeToAdd.name} ajoutée`);

    }


}
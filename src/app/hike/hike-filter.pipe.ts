import {Pipe,PipeTransform} from '@angular/core';
import {Hike} from './hike';

@Pipe({
    name:'hikeFilter' //correspond au nom du filtre utilisé dans le template

})
export class HikeFilterPipe implements PipeTransform {

// trandfor prend deux paramètre le premier value c'est un tableau qui correspond à la liste de nos randonnée qui va etre passé
// le paramètre search term
    transform(value:Hike[],searchTerm:string=''){
        // si le searchTerm n'est pas une chaine vide
        if(searchTerm !==''){
           let result =value.filter((hike:Hike)=>hike.description.toLocaleLowerCase().includes(searchTerm)
                                              ||hike.name.toLowerCase().includes(searchTerm));
           return result
        } else{
            return value; //retourner le tableau de randonnée initiale

        }

    }

}
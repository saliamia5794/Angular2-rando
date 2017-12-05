
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule}  from '@angular/forms';

import {HikeListComponent} from './hike-list.component';
import {HikeService} from './hike.service';
import {HikeDetailsComponent} from './hike-details.component'; //nous permet de corriger l'erreur du twobinding et relier un input de type texte avec ngModel
import {HikeFilterPipe} from './hike-filter.pipe';
import {HikeSummaryComponent} from './hike-summary.component';






@NgModule({
    imports: [CommonModule,RouterModule,FormsModule], //Router module est déclaré afin qu'on puisse utiliser la directive [routerLink]="['',]"
    declarations:[HikeListComponent,HikeDetailsComponent,HikeFilterPipe,HikeSummaryComponent],//déclaration des component
    exports:[HikeListComponent],
    providers:[HikeService]
})
export class HikeModule{






}
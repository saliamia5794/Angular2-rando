
import {NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {CommonModule} from '@angular/common';
//import { AgmCoreModule } from '@agm/core';


import {AgmCoreModule} from 'angular2-google-maps/core';
import {MapComponent} from './map.component';








@NgModule({
imports:[CommonModule,
          AgmCoreModule.forRoot({
          apiKey:'AIzaSyATrSMIrUbvN3VjnlgRGG6w5xLlAt3CYjU'

    })




],
declarations:[MapComponent],
exports:[],
providers:[],
schemas:[CUSTOM_ELEMENTS_SCHEMA ]

})
export class MapModule { 

}
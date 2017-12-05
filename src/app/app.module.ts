import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {MapModule} from './maps/map.module' ;
import { AppComponent }  from './app.component';
import { HikeModule }  from './hike/hike.module';
import {HomeModule} from './home/home.module';
import {HomeComponent} from './home/home.component';
import {HikeListComponent} from './hike/hike-list.component';
import {PageNotFoundComponent} from './page-not-found.component';
import {HikeDetailsComponent} from './hike/hike-details.component';
import {ContactUsComponent} from './contact/contact-us.component';
import {ContactModule} from './contact/contact.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import  {MapComponent} from './maps/map.component' ;

@NgModule({
  imports:      [ BrowserModule,
                  BrowserAnimationsModule,
                  ContactModule,
                  MapModule,
                  FormsModule,
                  HikeModule,
                  HttpModule,
                  HomeModule,
                  RouterModule.forRoot([
                    {path:'home', component:HomeComponent},
                    {path:'hikes',component:HikeListComponent},
                    {path:'hikes/:id', component:HikeDetailsComponent},
                    {path:'map', component:MapComponent},
                    {path:'contact', component:ContactUsComponent}, 
                    {path:'',redirectTo:'home',pathMatch:'full'},
                    {path:'**',component:PageNotFoundComponent}
                  ])
     ],
  declarations: [ AppComponent,PageNotFoundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

//dans app module nous pouvons utiliser un chemin qui peut 
//avoir un parametre et ce parametre on le recupère grace a Activated
//route en injectant le service dans le constructeur afin qu'on puiss
//acceder à la propriété snapshot ensuite la propriété params
//qu'on a appelé id si on la appelé :toto faut faire params['toto']
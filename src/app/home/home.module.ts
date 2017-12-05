import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
     imports: [CommonModule,BrowserAnimationsModule],
     declarations:[HomeComponent],
     exports:[HomeComponent],})
export class HomeModule {




}
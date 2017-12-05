import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ContactService} from './contact.service';
 






@Component({
    moduleId:module.id,
    templateUrl:'contact-us.component.html'
})
export class ContactUsComponent{
  subject:string;
  isVisible:boolean=true;


  constructor(private contactService:ContactService){

  }

  sendMessage(form:NgForm){

    this.contactService.postContactForm(form.value);
  


  }


}
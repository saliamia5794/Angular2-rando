import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactUsComponent} from './contact-us.component';
import {FormsModule} from '@angular/forms';
import {ContactService} from './contact.service';


@NgModule({
    imports:[CommonModule,FormsModule],
    declarations:[ContactUsComponent],
    exports: [ContactUsComponent],
    providers:[ContactService]
})
export class ContactModule {

}
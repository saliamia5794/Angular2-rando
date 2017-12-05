
import {Component,trigger,state,animate,style,transition,keyframes} from '@angular/core';





@Component({
    moduleId:module.id,
    selector: 'home',
    templateUrl:'home.component.html',
    animations:[

        trigger('toggleElement',[
             state('open',style({"height":"*"})),
             state('closed',style({"height":"0px", "font-size":'0px'})),
             transition('closed <=> open',
             [
            animate("1000ms cubic-bezier(0.77, 0, 0.175, 1)") // durée d'animation et ensuite durée d'attente
             ]),
         ]),
         /*
         trigger('animateCitation', [
             animate(600,keyframes([
                 style({opacity: .5, offset:0}),
                 style({opacity:  1, color:'#fcb514', offset:.5}),
                 style({opacity: .7, offset:.7}),
                 style({opacity: .5, offset:0}),
                 style({opacity: 1, offset:1})

             ]))


         ]),
          */
             trigger('animateCitation',[
                 transition('stateA<=>stateB',[
                    animate(600,keyframes([

                     style({opacity: .5, offset:0}) ,  
                     style({opacity: 1, color:'#FCB514', offset:.5}), 
                     style({opacity: .7, offset:.7}) , 
                     style({opacity: 1, offset:1}) 
                    ]))


                 ])
             ])
    ],
    styles:[
        `
        .frame { marging-botton: 10px; padding: 10px; border: 5px solid #eeeee; height: 170px }
        .citation {font-size: 20px; color:#3268ba }
        
        
        
        
        
        `
    ]
    


})
export class HomeComponent {

    open:boolean=false;
    toggleElement:string='closed'; // mettre un etat initial de lanimation


    animateCitation:string= "stateB";


    index:number=0;
     quotes:quote[]=[

        {
            id:0,
            text:"en vérité,je ne voyage pas, moi pour atteindre un endroit précis,",
            author:"Robert Louis Stevenson"
        },
        {
            id:1,
            text:"mon pied droit est jaloux de mon pied gauche,quand l'un avance l'autre recule",
            author:"Raymond Devos"
        },
        {
            id:2,
            text:"le plus long de tous les voyages commence par un tout petit pas",
            author:"proverbe chinois"
        }
     ]
     quote:quote =this.quotes[0];

     log(event:any){
         console.log(event);
     }

    toggle(){

        this.open=!this.open;
        console.log(this.open);
        if (this.open){
            this.toggleElement='open';
        }
        else {
            this.toggleElement='closed';
        }
       
    }

    getPreviousQuote(){
    this.animateCitation=this.animateCitation==='stateA'?'stateB':'stateA';// si la valeur actuel est stateA on veut il prend stateB sinon on veut statA comme valeur
   this.getSomeQuote(-1);
    }

    getNextQuote(){
        this.animateCitation=this.animateCitation==='stateA'?'stateB':'stateA';
        this.getSomeQuote(-1);
        
        


    }

    getSomeQuote(increment:number){
        this.index=this.index+increment;
        console.log(this.index);
         if(this.index>=this.quotes.length&&increment===1){

            this.index=0;
         }
         if(this.index<0 && increment=== -1){
             this.index=this.quotes.length -1;
         }


    }






}
interface quote {
id:number;
text:string;
author:string

}
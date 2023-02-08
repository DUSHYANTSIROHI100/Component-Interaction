import { EventEmitter } from "@angular/core"

export class UserService {
    users=[
        {name:'john',job:'Teacher',gender:'Male',country:'United States',age:35,avatar:'assets/'},
        {name:'johnop',job:'Teajcher',gender:'Mhgale',country:'Unithjhed States',age:37,avatar:'assets/'},
        {name:'phn',job:'Teojcher',gender:'Mahle',country:'Unitnjkhed States',age:37,avatar:'assets/'},
        {name:'bohn',job:'lcher',gender:'Male',country:'Unijhted States',age:38,avatar:'assets/'}
    
    
    
    
    ]


    OnShowDetailsClicked= new EventEmitter<{name:string,job:string,gender:string,country:string,age:number,avatar:string}>();


    ShowUserDetails(user:{name:string,job:string,gender:string,country:string,age:number,avatar:string}){
       this.OnShowDetailsClicked.emit(user); 
    }
}
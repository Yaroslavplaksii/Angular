import { Component } from '@angular/core';

@Component({
    selector:'my-app',
    template:`<child-comp [userName]="name" [userAge]="age"></child-comp>        
    <input [(ngModel)]="name" placeholder="name">`

})
export class AppComponent {
    name:string = 'UserTest';
    age:number = 265;
}
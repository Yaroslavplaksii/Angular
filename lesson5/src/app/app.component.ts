import { Component } from '@angular/core';

@Component({
    selector:'my-app',
    template:`<child-comp>
        <label>Введіть імя</label>
    <input [(ngModel)]="name" placeholder="name">
    <h1>Привіт {{name}}!</h1></child-comp>`

})
export class AppComponent {
    name='';
}
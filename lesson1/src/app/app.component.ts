import { Component } from '@angular/core';

@Component({
    selector:'my-app',
    template:`<label>Введіть імя</label>
    <input [(ngModel)]="name" placeholder="name">
    <h1>Привіт {{name}}!</h1>`

})
export class AppComponent {
    name='';
}
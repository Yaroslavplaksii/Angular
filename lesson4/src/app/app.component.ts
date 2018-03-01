import { Component } from '@angular/core';

@Component({
    selector:'my-app',
    // template:`<label>Введіть імя</label>
    // <input [(ngModel)]="name" placeholder="name">
    // <h1>Привіт {{name}}!</h1>`,
    // styles: [`
    //         h1, h2{color:navy;}
    //         p{font-size:13px; font-family:Verdana;}
    // `]

    // template:`<label>Імя {{name}}</label>
    //           <p>Age {{age}}</p>`

    // template:`<input type="text" [value]="name">`

    // template: `<p>Count {{count}}</p>
    // <button (click)="increase()">Click</button>`
    //************************
    // template: `<p>Count {{count}}</p>
    //             <button on-click="increase()">Click</button>`
    //***************
    // template: `<p>Count {{count}}</p>
    //             <button (click)="increase($event)">Click</button>`

    template: `<p>Hello {{name}}</p>
            <input type="text" [(ngModel)]="name"><br>
            <input type="text" [(ngModel)]="name">`

})
// export class AppComponent {
//     name='';
// }


// export class AppComponent {
//     name='User name';
//     age = 24;
// }

// export class AppComponent {
//     name='User name';
// }

// export class AppComponent {
//     count: number=0;
//     increase():void{
//         this.count++;
//     }
// }
//************
// export class AppComponent {
//     count: number=0;
//     increase($event):void{
//         this.count++;
//     }
// }
export class AppComponent {
   name:string = "User tom";
}
import {Input, Component } from '@angular/core';


@Component({
    selector: 'child-comp',
    template: `<h2>Добро пожаловать {{userName}}!</h2>
                <h3>Age:{{userAge}}</h3>`,
    styles: [`h2, p {color:red;}`]
})

// export class ChildComponent {
//    @Input() userName: string;
//    @Input() userAge: number;
// }
export class ChildComponent {
    @Input() userName: string;
    _userAge: number;

    @Input()
    set userAge(age: number){
        if(age<0)
            this._userAge=0;
        else if(age>100)
            this._userAge=100;
        else
            this._userAge = age;
    }
    get userAge(){
        return this._userAge;
    }
}
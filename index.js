"use strict";
// Декораторы - специальная возможность typescript по добавлению метадаты в классы или функции
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Функция декоратор
// function logger(constrFn: Function) {
//     console.log(constrFn);
// }
// function shouldLog(flag: boolean): any {
//     return flag ? logger : null;
// }
// @shouldLog(true) // Что-бы закрепить декоратор за классом - нужно перед классом поставить @<name-decorator>
// class User {
//     constructor(
//         public name: string,
//         public age: number,
//     ) {
//         console.log('Hello world');
//     }
// }
// ===============================================================================
// Функция декоратор
function addShowAbility(constructorFn) {
    // функция для добавления метода в класс
    constructorFn.prototype.showHtml = function () {
        const pre = document.createElement('pre'); // переменная pre - в которую запишется созданный html элемент
        pre.innerHTML = JSON.stringify(this); // установление html разметки и запись в нее объекта user в формате JSON
        document.body.appendChild(pre); // добавление дочернего элемента на страницу
    };
}
// Привязка к классу функции декоратора
let User = /** @class */ (() => {
    let User = class User {
        constructor(name, age, job) {
            this.name = name;
            this.age = age;
            this.job = job;
        }
    };
    User = __decorate([
        addShowAbility
    ], User);
    return User;
})();
let user = new User('PPS', 20, 'FE');
console.log(user);
user.showHtml(); // что-бы получить доступ к добавленному методу  нужно указать <any> перед объектом
//# sourceMappingURL=index.js.map
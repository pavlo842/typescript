"use strict";
// interfaces
// Наследоваться можно более чем от одного интрфейса.
// После наследования необходимо реализовать в классе минимальное коичество полей и методов, предусмотренных интерфейсом
// const user: IUser = {
//     name: 'PPS',
//     age: 35,
//     logInfo(info) {
//         console.log('Info ', info);
//     }
// }
// Создание класса по интерфейсу
class User {
    constructor() {
        this.name = 'pallo';
    }
    logInfo(info) {
        console.log(info);
    }
    getYear() {
        return 200;
    }
}
//# sourceMappingURL=index.js.map
"use strict";
// inheritance Classes
class User {
    constructor(name, job) {
        this.name = name;
        this.job = job;
        this.age = 35; // protected - доступны внутри класса и у наследников класса (class -> extends, super())
        // this.name = name;
        // this.job = job; // второй вариант в ()
    }
    getAge() {
        // меняется тип возвращаемых данных, то тут тоже надо менять тип
        return this.age + '';
    }
}
class PPS extends User {
    constructor(job) {
        super('PPS', job); // вызов родительского конструтора
        this.age = 100; // после вызова родительского конструтора через super - есть доступ ко всем полям в родителе, кроме private
    }
    getAge() {
        return 'Hello ' + this.age;
    }
}
const user = new User('PPS', 'FE');
const pps = new PPS('Frontend'); // создание экземпляра класса PPS
// console.log(pps);
// console.log(pps.getAge());
// Создание Абстрактных классов - от которых нельзя делать экземпляры (объекты). Только наследование
class Car {
    constructor() {
        this.year = 2010;
    }
    getCarYear() {
        return this.year;
    }
}
class Audi extends Car {
    logInfo(info) {
        console.log(info);
    }
}
const audi = new Audi();
console.log(audi);
audi.logInfo('info');
console.log(audi.getCarYear());
//# sourceMappingURL=index.js.map
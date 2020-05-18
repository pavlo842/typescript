// inheritance Classes

class User {
    private isTeacher: boolean | undefined; // private - доступна внутри класса
    protected age: number = 35; // protected - доступны внутри класса и у наследников класса (class -> extends, super())

    constructor(
            public name: string,
            public job: string
        ) {
        // this.name = name;
        // this.job = job; // второй вариант в ()
    }

    public getAge(): string { // public - default - доступно везде. Если в наследнике при переопределении метода
                              // меняется тип возвращаемых данных, то тут тоже надо менять тип
        return this.age + '';
    }
}

class PPS extends User { // наследование от класса User
    constructor(job: string) {
        super('PPS', job); // вызов родительского конструтора
        this.age = 100; // после вызова родительского конструтора через super - есть доступ ко всем полям в родителе, кроме private
    }

    getAge(): string { // переопределение метода в родителе. String тут и д.б. в родителе string
        return 'Hello ' + this.age;
    }

}

const user = new User('PPS', 'FE');
const pps = new PPS('Frontend'); // создание экземпляра класса PPS
// console.log(pps);
// console.log(pps.getAge());



// Создание Абстрактных классов - от которых нельзя делать экземпляры (объекты). Только наследование
abstract class Car {

    model!: string;
    year: number = 2010;

    // создание абстрактного метода внутри абстрактного класса
    abstract logInfo(info: string): void;

    getCarYear(): number {
        return this.year;
    }
}

class Audi extends Car {
    logInfo(info: string): void {
        console.log(info);        
    }
}

const audi = new Audi();
console.log(audi);
audi.logInfo('info');
console.log(audi.getCarYear());

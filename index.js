"use strict";
// Classes
class User {
    // public job: string; // второй вариант в constructor -> ()
    constructor(name, job) {
        this.job = job;
        this.age = 35; // protected - доступны внутри класса и у наследников класса (class -> extends, super())
        this.name = name;
        // this.job = job; // второй вариант в ()
    }
    getAge() {
        return this.age;
    }
    setTitle(title) {
        console.log(this.isTeacher);
        this.isTeacher = title;
        console.log(this.isTeacher);
    }
}
const user = new User('PPS', 'FE');
console.log(user);
user.setTitle(true); // Таким образом получили доступ к переменной private isTeacher
//# sourceMappingURL=index.js.map
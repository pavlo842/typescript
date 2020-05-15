// Classes

class User {

    name: string; // public - default - доступно везде
    private isTeacher: boolean | undefined; // private - доступна внутри класса
    protected age: number = 35; // protected - доступны внутри класса и у наследников класса (class -> extends, super())
    // public job: string; // второй вариант в constructor -> ()

    constructor(
            name: string,
            public job: string
        ) {
        this.name = name;
        // this.job = job; // второй вариант в ()
    }

    public getAge(): number { // public - default - доступно везде
        return this.age;
    }

    public setTitle(title: boolean) {
        console.log(this.isTeacher);
        this.isTeacher = title;
        console.log(this.isTeacher);
    }

}

const user = new User('PPS', 'FE');
console.log(user);
user.setTitle(true); // Таким образом получили доступ к переменной private isTeacher

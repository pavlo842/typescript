// interfaces
// Наследоваться можно более чем от одного интрфейса.
// После наследования необходимо реализовать в классе минимальное коичество полей и методов, предусмотренных интерфейсом

// interface Ilength {
//     length: number;
// }

// function getLength(variable: Ilength): void {
//     console.log(variable.length);
// }

// const box = {
//     name: 'PPS',
//     length: 20
// }

// getLength(box);


interface IUser {
    name: string;
    age?: number;
    logInfo(info: string): void;
}

interface IGetYear {
    getYear(): number;
}

// const user: IUser = {
//     name: 'PPS',
//     age: 35,
//     logInfo(info) {
//         console.log('Info ', info);
//     }
// }

// Создание класса по интерфейсу

class User implements IUser, IGetYear { // Наследование от двух интерфейсов
    name: string = 'pallo';
    logInfo(info: string): void {
        console.log(info);
    }

    getYear(): number {
        return 200;
    }
}

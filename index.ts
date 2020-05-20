// Декораторы - специальная возможность typescript по добавлению метадаты в классы или функции

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
function addShowAbility(constructorFn: Function) {
    // функция для добавления метода в класс
    constructorFn.prototype.showHtml = function() {
        const pre = document.createElement('pre'); // переменная pre - в которую запишется созданный html элемент
        pre.innerHTML = JSON.stringify(this); // установление html разметки и запись в нее объекта user в формате JSON
        document.body.appendChild(pre); // добавление дочернего элемента на страницу
    }
}

// Привязка к классу функции декоратора
@addShowAbility
class User {
    constructor(
        public name: string,
        public age: number,
        public job: string,
    ) {}
}

let user = new User('PPS', 20, 'FE');
console.log(user);

(<any>user).showHtml(); // что-бы получить доступ к добавленному методу  нужно указать <any> перед объектом

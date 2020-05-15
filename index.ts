// Functions

const myName: string = 'PPS';
const myAge: number = 35;

function getMyName(): string { // : string - тип который будет возвращать функция
    return myName;
}
console.log(getMyName());

function getMyAge(): number {
    return myAge;
}
console.log(getMyAge());



function getMyAge1(age: number, prefix: string = 'PPS-'): string { // если параметр не передается, то надо задать по умолчанию и написать его в конце
    return prefix + age;
}
console.log(getMyAge1(36));


// Тип функции которая ничего не возвращает
function consoleLog(str: string): void { // если функция без return то надо указать void
    console.log(str);
}
consoleLog('Test string');


// Синтаксис функций ES6
const testFunc = () => 1 + 1;
const testFunc2 = function() { // идентична testFunc
    return 1 + 1;
}
// Синтаксис функций ES6

let mySum: (a: number, b: number) => number; // если в последствии mySum станет функцией, то надо писать такой синтаксис

function sum(num1: number, num2: number): number {
    return num1 + num2;
}

mySum = sum; // функция sum присваивается переменной mySum

console.log(sum(5, 10));
console.log(mySum(10, 15));


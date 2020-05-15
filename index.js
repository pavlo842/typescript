// Functions
var myName = 'PPS';
var myAge = 35;
function getMyName() {
    return myName;
}
console.log(getMyName());
function getMyAge() {
    return myAge;
}
console.log(getMyAge());
function getMyAge1(age, prefix) {
    if (prefix === void 0) { prefix = 'PPS-'; }
    return prefix + age;
}
console.log(getMyAge1(36));
// Тип функции которая ничего не возвращает
function consoleLog(str) {
    console.log(str);
}
consoleLog('Test string');
// Синтаксис функций ES6
var testFunc = function () { return 1 + 1; };
var testFunc2 = function () {
    return 1 + 1;
};
// Синтаксис функций ES6
var mySum; // если в последствии mySum станет функцией, то надо писать такой синтаксис
function sum(num1, num2) {
    return num1 + num2;
}
mySum = sum; // функция sum присваивается переменной mySum
console.log(sum(5, 10));
console.log(mySum(10, 15));

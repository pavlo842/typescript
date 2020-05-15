// ENUM

enum Job {
    Frontend, // 0
    BackEnd = 50,  // по умолчанию - 1. 50 - самостоятельное задание константы
    Desiner   // 2. Если BackEnd = 50, то Desiner = 51
}

const job: Job = Job.BackEnd; // Job.BackEnd = 1. После задания константы на 50 - Job.BackEnd = 50 
console.log(job); // по умолчанию - 1. После задания константы на 50 - Job.BackEnd = 50 

// never - функции которые ничего не возвращают - выкидывают ошибку и дальше код работает
function throwNewError(err: string): never {
    throw new Error(err);
}

// null
let newVar;
newVar = null;

let myNumber: number | null = 20;
myNumber = null;

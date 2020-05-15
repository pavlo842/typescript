"use strict";
// ENUM
var Job;
(function (Job) {
    Job[Job["Frontend"] = 0] = "Frontend";
    Job[Job["BackEnd"] = 50] = "BackEnd";
    Job[Job["Desiner"] = 51] = "Desiner"; // 2. Если BackEnd = 50, то Desiner = 51
})(Job || (Job = {}));
var job = Job.BackEnd; // Job.BackEnd = 1. После задания константы на 50 - Job.BackEnd = 50 
console.log(job); // по умолчанию - 1. После задания константы на 50 - Job.BackEnd = 50 
// never - функции которые ничего не возвращают - выкидывают ошибку и дальше код работает
function throwNewError(err) {
    throw new Error(err);
}
// null
var newVar;
newVar = null;
var myNumber = 20;
myNumber = null;
//# sourceMappingURL=index.js.map
"use strict";
// Namespace
// function isEmpty(d: any): boolean {
//     return !d;
// }
// function isUndefined(d: any): boolean {
//     return typeof d === 'undefined';
// }
// console.log(isEmpty(''));
// console.log(isEmpty('emp'));
// console.log(isUndefined(20));
// console.log(isUndefined(undefined));
// console.log(isUndefined(null));
// const PI = Math.PI;
// const EXP = Math.E;
// ================================================
// синтаксис
var Util;
(function (Util) {
    // что-бы воспользоваться методами нужно заэкспортить каждый метод. По умолчанию private
    function isEmpty(d) {
        return !d;
    }
    Util.isEmpty = isEmpty;
    function isUndefined(d) {
        return typeof d === 'undefined';
    }
    Util.isUndefined = isUndefined;
    Util.PI = Math.PI;
    Util.EXP = Math.E;
})(Util || (Util = {}));
const EXP = 'TEST';
console.log(Util.isEmpty(''));
console.log(Util.isEmpty('sss'));
console.log(EXP);
console.log(Util.EXP);
//# sourceMappingURL=index.js.map
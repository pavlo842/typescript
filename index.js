"use strict";
// Generic
// function getter(data: any) {
//     return data;
// }
// console.log(getter(100));
// console.log(getter('PPS'));
// ======================================================================
// function on generic
function genericGetter(data /*тип который передается в параметр*/) {
    return data;
}
console.log(genericGetter('PPS').length);
console.log(genericGetter(100));
let newGenericFunction /*переменная*/ = genericGetter /*функция которая записывается в переменную newGenericFunction*/;
console.log(newGenericFunction('PPS').length);
console.log(newGenericFunction(100));
// =======================================================================
// Generic with class
class Multiply {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    getResult() {
        return +this.a * Number(this.b);
    }
}
const mStr = new Multiply('10', '10');
console.log(mStr.getResult());
const mNum = new Multiply(10, 10);
console.log(mNum.getResult());
//# sourceMappingURL=index.js.map
// Generic
// function getter(data: any) {
//     return data;
// }

// console.log(getter(100));
// console.log(getter('PPS'));


// ======================================================================
// function on generic
function genericGetter<T>/*тип который придет в функцию*/(data: T/*тип который передается в параметр*/): T/*тип который вернется из функции*/ {
    return data;
}

console.log(genericGetter('PPS').length);
console.log(genericGetter(100));

let newGenericFunction/*переменная*/: <T>/*тип generic*/(data: T) => T/*функция возвращает тип Т*/ = genericGetter /*функция которая записывается в переменную newGenericFunction*/;

console.log(newGenericFunction('PPS').length);
console.log(newGenericFunction(100));


// =======================================================================
// Generic with class
class Multiply<T extends number | string /*передаваемый тип наследуется от number | string*/> {
    constructor(
        private a: T,
        private b: T,
    ) {}

    public getResult(): number {
        return +this.a * Number(this.b);
    }
}

const mStr = new Multiply<string>('10', '10');
console.log(mStr.getResult());

const mNum = new Multiply<number>(10, 10);
console.log(mNum.getResult());

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
namespace Util {
    // что-бы воспользоваться методами нужно заэкспортить каждый метод. По умолчанию private
    export function isEmpty(d: any): boolean {
        return !d;
    }
    
    export function isUndefined(d: any): boolean {
        return typeof d === 'undefined';
    }
    
    export const PI = Math.PI;
    export const EXP = Math.E;
}

const EXP = 'TEST';

console.log(Util.isEmpty(''));
console.log(Util.isEmpty('sss'));
console.log(EXP);
console.log(Util.EXP);


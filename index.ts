// Array
// 1-й способ
let numArray1: number[] = [1, 2, 3]; // numArray: number[] - массив с типом number - лучше указать []

let strArray1: string[] = ['1', '2', '3'];

let boolArray1: boolean[] = [true, false];


// 2-й способ
let numArray2: Array<number> = [1, 2, 3];

let strArray2: Array<string> = ['1', '2', '3'];

let boolArray2: Array<boolean> = [true, false];

// Смешанные типы
// tuples
let array: [number, number, string] = [1, 2, '3'];
console.log(array);

let array2: Array<any> = [true, 'str', 22];
console.log(array2);

let array3: any[] = [true, 'str', 22];
console.log(array3);

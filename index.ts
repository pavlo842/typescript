// const Q = 1;

// string
let str: string = 'string!'; // : string - указание типа переменной

// number
let num: number = 10;

// boolean
let isTrue: boolean = true;
let isFalse: boolean = false;

isTrue = false; // 0 указывать нельзя
isFalse = true; // 1 указывать нельзя

// other
// 1-й способ
let unknown: any = '1'; // any - в переменную можно записать любой тип данных

unknown = 1;
unknown = true;

// 2-й способ
let some: string | number | boolean = '1'; // | - перечисление конкретных типов которые будут записаны в переменную

some = 1;
some = false;

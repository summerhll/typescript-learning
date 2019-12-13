/**
 * 基本类型
 */

//布尔值
let isDone: boolean = false;

//数字
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

//字符串
let strName: string = `Gene`;
let sentence: string = `Hello, my name is ${strName}`;

//数组
let list: number[] = [1, 2, 3];
let list1: Array<number> = [4, 2, 3];
//let list2: Array<number> = [4, '2', 3]; //报错

//元组
let tuple: [string, number];
tuple = ['hello', 10]; //成功
//tuple = [10, 'hello']; //报错 类型不对
//tuple[0] = "word"; //成功
//tuple[1] = "word"  //报错 类型不对
//tuple[0] = 13; //报错 类型不对
//tuple[1] = 13  //成功
//console.log(tuple[0].substr(1)); //成功
//console.log(tuple[1].substr(1)); //报错 number没有substr方法
//tuple[2] = 'word'; //越界， 报错

//枚举
enum Color { Red, Green, Blue }
let c: Color = Color.Green; //c 为1

enum Color1 { Red = 1, Green, Blue }
let c1: Color1 = Color1.Green; //c 为2

enum Color2 { Red = 4, Green = 5, Blue = 6 }
let c2: Color2 = Color2.Green; //c 为5
let cname: string = Color2[5]; //cname 为‘Green’
let cname1: string = Color2[2]; //cname1 为undefined

//如果某个属性的值是计算出来的，那么它后面一位的成员必须要初始化值。
const getValue = () => {
    return 0
}

enum List {
    A = getValue(),
    B = 2,  // 此处必须要初始化值，不然编译不通过
    C
}
console.log(List.A) // 0
console.log(List.B) // 2
console.log(List.C) // 3

//any
let notSure: any = 4;
notSure = "maybe a string instead";
//notSure.toFixed(); // 成功

let prettySure: Object = 4; //输出4
//prettySure.toFixed(); // 报错: Property 'toFixed' doesn't exist on type 'Object'.

// void、null、undefined
let unusable: void = undefined; //输出： undefined
let u: undefined = undefined;  //输出： undefined
let n: null = null;  //不报错 但是innerHTML无输出
console.log("n: " + n) //console null
let n1: null = undefined; //输出： undefined
let u1: undefined = null;   //不报错 但是innerHTML无输出
console.log("u1: " + u1) //console null

//never 类型
let x: never;
let y: number;

// 运行错误，数字类型不能转为 never 类型
//x = 123;

// 运行正确，never 类型可以赋值给 never类型
//x = (() => { throw new Error('exception') })();

// 运行正确，never 类型可以赋值给 数字类型
//y = (() => { throw new Error('exception') })();

// 返回值为 never 的函数可以是抛出异常的情况
function error(message: string): never {
    throw new Error(message);
}

// 返回值为 never 的函数可以是无法被执行到的终止点的情况
function loop(): never {
    while (true) { }
}


//Object

//declare function create(o: object | null): void;

//create({ prop: 0 }); // OK
//create(null); // OK

//create(42); // Error
//create("string"); // Error
//create(false); // Error
//create(undefined); // Error 指定了--strictNullChecks标记

//类型断言
//尖括号语法
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

// as语法
let someValue1: any = "this is a string";
let strLength1: number = (someValue1 as string).length;


function greeter(param: any) {
    return param;
}
document.body.innerHTML = greeter(strLength1);



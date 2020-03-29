/** 
 * 接口
 * TypeScript里，只在两个类型内部的结构兼容那么这两个类型就是兼容的。 这就允许我们在实现接口时候只要保证包含了接口要求的结构就可以，而不必明确地使用 implements语句。
 * 属性顺序不重要，只要相应的属性存在且类型是对的就可以。
 */
interface Person {
    firstName?: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
//let user = { firstName: "Jane", lastName: "User" }; //成功
let user = { firstName: "Jane", lastName: "User", add: "1" }; //成功
//let user = { firstName: "Jane" }; //报错
document.body.innerHTML = greeter(user);

//只读属性
interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
//p1.x = 5; // 报错

//ReadonlyArray<T>
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // 报错
// ro.push(5); // 报错
// ro.length = 100; // 报错
// a = ro;// 报错
a = ro as number[];

//额外的属性检查
interface SquareConfig {
    color?: string;
    width?: number
}

// interface SquareConfig {
//     color?: string;
//     width?: number;
//     [propName: string]: any;
// }

function createSquare(config: SquareConfig) {
    console.log(config.width);

}
//let mySquare = createSquare({ colour: "red", width: 100 }); //报错
//let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig); //成功
//成功
let squareOptions = { colour: "red", width: 100 };
let mySquare = createSquare(squareOptions);

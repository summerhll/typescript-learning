/**
 * 基本类型
 */
//布尔值
var isDone = false;
//数字
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
//字符串
var strName = "Gene";
var sentence = "Hello, my name is " + strName;
//数组
var list = [1, 2, 3];
var list1 = [4, 2, 3];
//let list2: Array<number> = [4, '2', 3]; //报错
//元组
var tuple;
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
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green; //c 为1
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {}));
var c1 = Color1.Green; //c 为2
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 4] = "Red";
    Color2[Color2["Green"] = 5] = "Green";
    Color2[Color2["Blue"] = 6] = "Blue";
})(Color2 || (Color2 = {}));
var c2 = Color2.Green; //c 为5
var cname = Color2[5]; //cname 为‘Green’
var cname1 = Color2[2]; //cname1 为undefined
//如果某个属性的值是计算出来的，那么它后面一位的成员必须要初始化值。
var getValue = function () {
    return 0;
};
var List;
(function (List) {
    List[List["A"] = getValue()] = "A";
    List[List["B"] = 2] = "B";
    List[List["C"] = 3] = "C";
})(List || (List = {}));
console.log(List.A); // 0
console.log(List.B); // 2
console.log(List.C); // 3
//any
var notSure = 4;
notSure = "maybe a string instead";
//notSure.toFixed(); // 成功
var prettySure = 4; //输出4
//prettySure.toFixed(); // 报错: Property 'toFixed' doesn't exist on type 'Object'.
// void、null、undefined
var unusable = undefined; //输出： undefined
var u = undefined; //输出： undefined
var n = null; //不报错 但是innerHTML无输出
console.log("n: " + n); //console null
var n1 = undefined; //输出： undefined
var u1 = null; //不报错 但是innerHTML无输出
console.log("u1: " + u1); //console null
//never 类型
var x;
var y;
// 运行错误，数字类型不能转为 never 类型
//x = 123;
// 运行正确，never 类型可以赋值给 never类型
//x = (() => { throw new Error('exception') })();
// 运行正确，never 类型可以赋值给 数字类型
//y = (() => { throw new Error('exception') })();
// 返回值为 never 的函数可以是抛出异常的情况
function error(message) {
    throw new Error(message);
}
// 返回值为 never 的函数可以是无法被执行到的终止点的情况
function loop() {
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
var someValue = "this is a string";
var strLength = someValue.length;
// as语法
var someValue1 = "this is a string";
var strLength1 = someValue1.length;
function greeter(param) {
    return param;
}
document.body.innerHTML = greeter(strLength1);

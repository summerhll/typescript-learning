function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
//let user = { firstName: "Jane", lastName: "User" }; //成功
var user = { firstName: "Jane", lastName: "User", add: "1" }; //成功
//let user = { firstName: "Jane" }; //报错
document.body.innerHTML = greeter(user);
var p1 = { x: 10, y: 20 };
//p1.x = 5; // 报错
//ReadonlyArray<T>
var a = [1, 2, 3, 4];
var ro = a;
// ro[0] = 12; // 报错
// ro.push(5); // 报错
// ro.length = 100; // 报错
// a = ro;// 报错
a = ro;
function createSquare(config) {
    console.log(config.width);
}
var mySquare = createSquare({ colour: "red", width: 100 }); //报错
//let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig); //成功
//成功
// let squareOptions = { colour: "red", width: 100 };
// let mySquare = createSquare(squareOptions);

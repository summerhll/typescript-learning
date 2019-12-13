function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
//let user = { firstName: "Jane", lastName: "User" }; //成功
var user = { firstName: "Jane", lastName: "User", add: "1" }; //成功
//let user = { firstName: "Jane" }; //报错
document.body.innerHTML = greeter(user);

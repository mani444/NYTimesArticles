var numbers = 10;
// let strings: string = "Hello World";
function addNumbers(num) {
    // return num.num1 + num.num2;
    var result = num.num1 + num.num2;
    // const result ="num.num1" + "num.num2";
    return result;
}
function subtractNumbers(num) {
    return num.num1 - num.num2;
}
var strings = function (str1, str2) {
    return str1 + str2;
};
strings("Hello", "World");
var addition = addNumbers({ num1: 20, num2: 10 });
var subtract = subtractNumbers({ num1: 20, num2: 10 });
console.log(addition);
console.log(subtract);
var tuples = ["Hello", 1];
tuples.push("World", 2);
console.log(tuples);
var test = 0;
console.log(test);
userid(1);
userid("1");
function userid(id) {
    console.log(id);
    if (typeof id === "number") {
        id.valueOf();
    }
    return id;
}
var arr = ["Hello", 1, "World", 2];
var user = {
    id: 1,
    name: "John",
    age: 30,
    phone: 1234567890,
    email: "dsdnsjh@cbdj",
};
function identity(val) {
    return val;
}
var e = {
    id: 1,
    name: "John",
    age: 30,
    phone: 1234567890,
    email: "dsdnsjh@cbdj",
};
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
console.log(add('Hello', ' World'));
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
console.log(loggingIdentity({ length: 10, value: 3 }));

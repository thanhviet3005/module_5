// B1. Cài đặt nodejs
// https://nodejs.org/en/
// B2. Tạo Project ở WebStorm
// B3. Install thư viện typescript vào Project
// npm install -g typescript
// B4. Compile file .ts
// tsc helloworld.ts
// B5. Run file .js
// node helloworld.js
function greeter(person) {
    return "hello " + person;
}
let user = "Thanh Tam";
console.log(greeter(user));
//____ + ____ + variable & parameter type + ____ + ____
function printVariable() {
    console.log("____ + ____ + ____ + ____ +\n" +
        "START");
    var lang;
    var target;
    if (true) {
        lang = "vi";
        target = "en-us";
        console.log("INside block");
        console.log(target);
    }
    console.log("OUTside block");
    console.log(lang);
}
printVariable();
//____ + ____ + variable & parameter type + ____ + ____
console.log("____ + ____ + ____ + ____ +\n" +
    "START");
function reDeclareVariable() {
    var x = 5;
    var x = 12;
    let y = 10;
    console.log("x = " + x + ", y = " + y);
}
reDeclareVariable();
//____ + ____ + variable & parameter type + ____ + ____
console.log("____ + ____ + ____ + ____ +\n" +
    "START");
function printUnderfine() {
    console.log(x);
    var x = 10;
    let y = 3;
    console.log(y);
}
printUnderfine();
//____ + ____ + variable & parameter type + ____ + ____
console.log("____ + ____ + ____ + ____ +\n" +
    "START");
let count = 50;
if (count > 0) {
    count--;
}
else {
    count = 0;
}
console.log("vi du ve if else: " + count);
//____ + ____ + variable & parameter type + ____ + ____
console.log("____ + ____ + ____ + ____ +\n" +
    "START");
const keys = "abcdef";
for (let idx = 0; idx < keys.length; ++idx) {
    console.log(keys[idx]);
}
//____ + ____ + variable & parameter type + ____ + ____
console.log("____ + ____ + ____ + ____ +\n" +
    "START");
let idx = 0;
while (idx < keys.length) {
    console.log(keys[idx]);
    ++idx;
}
//____ + ____ + variable & parameter type + ____ + ____
console.log("____ + ____ + ____ + ____ +\n" +
    "START");
let index = 0;
do {
    console.log(keys[index]);
    ++index;
} while (index < keys.length);
//____ + ____ + variable & parameter type + ____ + ____
console.log("____ + ____ + ____ + ____ +\n" +
    "START FOR OF");
for (let item of keys) { // dung tu khoa let chu khong dung const, vi dung co ecma 5 tro len moi co
    console.log(item);
}
//____ + ____ + variable & parameter type + ____ + ____
console.log("____ + ____ + ____ + ____ +\n" +
    "START FOR IN");
let users = {
    name: "Bob",
    age: 26
};
for (let key in users) {
    console.log(`${key}: ${users[key]}`);
}
//____ + ____ + variable & parameter type + ____ + ____
console.log("____ + ____ + ____ + ____ +\n" +
    "START ARRAY");
var listNumber = [1, 2, 3, 4, 5];
var categories = ["sport", "it", "car"];
listNumber.forEach(num => console.log(num.toFixed(2))); //num.toFixed la so lam tron 2 so 0 dang sau
categories.forEach(str => console.log(str.includes("t"))); // str.includes la chi co trong ecma5 tro len, la tra ve
// ket qua la phan tu dang xet co chua ky tu t hay khong, ket qua tra ve dang boolean
//____ + ____ + variable & parameter type + ____ + ____
console.log("____ + ____ + ____ + ____ +\n" +
    "START List map");
let listSquare = listNumber.map(num => num * num);
console.log(listSquare);
let result = categories.filter(str => str.length > 2);
console.log(result);
//____ + ____ + variable & parameter type + ____ + ____
console.log("____ + ____ + ____ + ____ +\n" +
    "START tupled");
let x;
x = ["hello", 10];
console.log(x);
//____ + ____ + variable & parameter type + ____ + ____
console.log("____ + ____ + ____ + ____ +\n" +
    "START function");
function square(num) {
    return num * num;
}
console.log(square(5));
//____ + ____ + variable & parameter type + ____ + ____
console.log("____ + ____ + ____ + ____ +\n" +
    "START high order function");
function add(a) {
    return function (b) {
        return a + b;
    };
}
let addWith5 = add(5);
console.log(addWith5(3));
console.log(addWith5(10));
//____ + ____ + variable & parameter type + ____ + ____
console.log("____ + ____ + ____ + ____ +\n" +
    "START object");
let customer = {
    name: "Bob",
    age: 22
};
console.log(customer);
//____ + ____ + variable & parameter type + ____ + ____
console.log("____ + ____ + ____ + ____ +\n" +
    "START class");
class shape {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return `x: ${this.x}, y:${this.y}`;
    }
}
class Rect extends shape {
    constructor(x, y, width, height) {
        super(x, y);
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}
let rect = new Rect(5, 5, 10, 20);
console.log(rect.toString());
console.log(rect.area());

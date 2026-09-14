// normal function in js

// function greet(name){
//     console.log("Hello "+ name);
// }

// greet("Alice");  // Hello Alice


/// default parameter 
// function greet(name = "Guest"){
//     console.log("Hello " + name)
// }
// greet();
// greet("Alice");


// return statement 
// function add(a, b){
//     return a + b;
// }
// let result = add(5,8);
// console.log(result);   //13


// types of function in js

// Named function
// function greet(){
//     return "Hello";
// }
// console.log(greet());   // Hello

// anonymous function
// const greet = function (){
//     return "Hi there";
// }
// console.log(greet());  // Hi there

// function expression
// const add = function(a, b){
//     return a + b;
// }
// console.log(add(6,8))  // 14


// Arrow function (ES6)
// const square = n => n*n;
// console.log(square(9));  // 81

// Immediately invoked function expression
// (function() {
//     console.log("This runs immediately");
// })();

// callback function
// function num(n, callback){
//     return callback(n);
// }
// const double = (n) => n*2;
// console.log(num(5, double)); // 10


// constructor function
// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }
// const user = new Person("Neha", 22);
// console.log(user.name); // Neha


// Async function
// async function fetchData(){
//     return "Data fetched";
// }
// fetchData().then(console.log);  // Data fetched

// Generator function
// function* numbers(){
//     yield 1;
//     yield 2;
//     yield 3;
// }

// const gen = numbers();
// console.log(gen.next().value)  // 1
// console.log(gen.next().value)  // 2
// console.log(gen.next().value)  // 3

// Recursive function
// function factorial(n){
//     if(n == 1) return 1;
//     return n * factorial(n-1);
// }
// console.log(factorial(4));  // 24
// console.log(factorial(5));  // 120

// higher oeder function
// function applyOperetion(a, b, operation){
//     return operation(a, b);
// }
// function add(x, y){
//     return x + y;
// }
// console.log(applyOperetion(8, 6, add));  /// 14


// nested function 
// function outerFun(a) {
//     function innerFun(b) {
//         return a + b;
//     }
//     return innerFun;
// }

// pure function
// const addTen = outerFun(10);
// console.log(addTen(5));  // 15

// function pureAdd(a, b) {
//     return a + b;
// }

// console.log(pureAdd(2, 3));


// rest parameter function
function sum(...num){
    return num.reduce((a, b) => a + b, 0);
}

console.log(sum(1,2,4,6,3,5,3,563,39,53))
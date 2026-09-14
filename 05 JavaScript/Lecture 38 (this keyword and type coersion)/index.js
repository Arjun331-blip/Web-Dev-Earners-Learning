// "use strict";

// name2 = "Hii";
// console.log(name2);  // reference error with use strict 
// console.log(name2);  // without use strict Hii

// let name1 = "Hello";
// console.log(name1);

// let student = {
//     name: "Aman",
//     printName: function(){
//         console.log("Hii,", this.name);
//     }
// }
// student.printName();  /// Aman
// let result = student.printName;
// result();  // with use strict reference error
// result();  // without use strict undefined

// let student2 = {
//     name: "Arjun",
//     printName: student.printName,
// }
// student2.printName();

// let name = "something";
// let product = {
//     name: "Iphone",
//     printName: () => {
//         console.log(this.name);
//     }
// }
// product.printName();


// let nestesFunction = {
//     name : "something",
//     fun: function() {
//         let product = {
//         name: "Iphone",
//         printName: () => {
//             console.log(this.name);
//             }
//         }
//         product.printName();
//     },
    
// }
// nestesFunction.fun();  // something

// function fun4() {
//     let name = "something"
//     let product = {
//         name: "Iphone",
//         printName: function () {
//             const print = () => {
//                 console.log(this.name);
//             }
//             print();
//         }
//     }
//     product.printName()
// }

// fun4()  // Iphone


// function fun1() {

//     let name = "Fariha"

//     function fun2() {
//         console.log(name);
//     }

//     name = "Iqra"
//     return fun2;
// }

// let result2 = fun1()
// result2();  // Iqra

// console.log(this);   // empty object

// function fun1(){
//     console.log(this)
// }
// fun1();

// console.log(global);
// console.log(globalThis);
// console.log(global == globalThis);  /// true
// console.log(global === globalThis);  /// true

// var a = 9;
// console.log(this.a)// undefined
// console.log(window.a)// Reference error

console.log(window === this)  // reference error 

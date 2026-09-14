

// console.log(a)
// var a = 6;

// console.log(b)
// let b = 9;

// fun();
// function fun(){
//     console.log("Hii");
// }

// fun1();   // TypeError: fun1 is not a function
// var fun1 = function(){
//     console.log("Hii");
// }

// fun2();  // ReferenceError: Cannot access 'fun2' before initialization
// let fun2 = function (){
//     console.log("hello")
// }


// fun3();  // ReferenceError: Cannot access 'fun3' before initialization
// const fun3 = function (){
//     console.log("hello")
// } 


// var a = 9;
// let b = 10;
// const c = 20;
// console.log(a + b + c);

// function outer(){
//     let num1 = 30;
//     let num2 = 40;
//     function inner(){
//         let num1 = 20;
//         const num2 = 10;
//         return num1 + num2;
//     }
//     return inner() + num1 + num2;

// }
// let result = outer();
// console.log(result)


function recursive(){
    recursive();
}
recursive();
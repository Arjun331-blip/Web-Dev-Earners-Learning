
// ReferenceError: Cannot access 'a' before initialization
// function outer(){
//     let a = 10;
//     function inner(){
//         console.log(a);
//         let a = 9;
//     }
//     inner();
// }
// outer();


// function outer(){
//     let a = 10;
//     function inner(){
//         console.log(a);  // 10
//     }
//     inner();
// }
// outer();

// function outer(){
//     let a = 10;
//     function inner(){
//         console.log(a);  // 20
//     }
//      a = 20;
//     inner();
// }
// outer();


// function outer(){
//     let a = 10;
//     function inner(){
//         console.log(a);  // 20
//     }
//     a = 20;
//     return inner;
// }
// let inner = outer();
// inner();


// closures
function outer(){
    let count = 0;
    function inner(){
        count += 1;
        console.log(count);  
    }
    return inner;
}
let inner = outer();
let inner1 = outer();

inner1();  // 1
inner1();  // 2
inner1();  // 3
inner1();  // 4
inner();  // 1
inner();  // 2
inner();  // 3
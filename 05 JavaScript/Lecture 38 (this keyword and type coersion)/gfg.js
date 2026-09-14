// console.log(this);  // empty object

// "use strict";
// function a(){
//     console.log(this)
// }
// a();  // undefined with use strict


// function a(){
//     console.log(this)
// }
// a();  // global object

// "use strict";
// let a = () => {
//     console.log(this);
// }
// a();   // empty object with use strict and without use strict


// "use strict";
// let a = function(){
//     console.log(this);
// }
// a();   // undefined with use strict
// and without use strict give global object

// let obj = {
//     a : 10,
//     b : function(){
//         console.log(this);
//     }
// }
// obj.b();  // {a: 10}


// let obj = {
//     a : 10,
//     b : () => {
//         console.log(this);
//     }
// }
// obj.b();  // {} empty object

// let obj = {
//     name: "pranjal",
//     a : function () {
//         let b = () => {
//         console.log(this.name);
//         }
//         b();
//     }
// }
// obj.a();  // pranjal


// let obj = {
//     name: "Pranjal",
//     a: () => {
//         let b = () => {
//             console.log(this);
//         };
//         b();
//     },
// };
// obj.a();  // empty object


let obj = {
    name: "Pranjal",
    a: function () {
        let b = function () {
            console.log(this);
        };
        b();
    },
};
obj.a();  // global object

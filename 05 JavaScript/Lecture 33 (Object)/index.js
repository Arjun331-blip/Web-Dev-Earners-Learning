// let arr = ["Arjun", "Ravi", "Devendra"];
// console.log(arr[0][2]);
// let product = ["iphone", 5689, 4.5, 75];
// console.log(product["0"])  // iphone 
// console.log(product["1"])  // 5689
// console.log(product["2"])  // 4.5
// console.log(product["3"])  // 75
// console.log(typeof product)  // object

// object 
// let product2 = {
//     name: "iphone",
//     price: 5999,
//     aveRating: 4.5,
//     totalReview: 75,
//     discount: 10,
//     222: "random",
//     "first-name": "Honey",
// }
// console.log(typeof product2)  // object
// product[0];
// product2.name;

// console.log(product2)  // key value and pair of an object
// console.log(product2.222)  // error


// dot(.) notation using access value an object
// console.log(product2.name)  // iphone
// console.log(product2.price)  // 5999
// console.log(product2.aveRating)  // 4.5,
// console.log(product2.totalReview)  // 75


// bracket notation[""] using access value of an object
// console.log(product2["name"]) // iphone
// console.log(product2["price"]) // 5689
// console.log(product2["aveRating"]) // 4.5
// console.log(product2["discount"]) // 10
// console.log(product2["totalReview"]) // 75
// console.log(product2["222"]) // random
// console.log(product2["first-name"]) // Honey

// console.log(product2["2"]);  // undefined


// method(function) in an object
// let product2 = {
//     name: "iphone",
//     price: 5999,
//     aveRating: 4.5,
//     totalReview: 75,
//     discount: 10,
//     222: "random",
//     "first-name": "Honey",
//     // method(function)
//     printHello: function(name){
//         console.log(`Hii ${name} How are you`);
//     },
//     printHii(name){
//         console.log(`Hii ${name} How are you`);
//     }
// }
// product2.printHello("Lovely");
// product2.printHii("Harshita");

// Object.keys and Object.value hume ek new array return karke deta hai
// console.log(Object.keys(product2)) // ['222','name','price','aveRating','totalReview','discount','first-name','printHello','printHii'] ]
// console.log(Object.values(product2))  // ['random','iphone',5999,4.5,75,10,'Honey',[Function: printHello],[Function: printHii] ]

// Object.entries return arrays of arrays
// console.log(Object.entries(product2))
// [
//   [ '222', 'random' ],
//   [ 'name', 'iphone' ],
//   [ 'price', 5999 ],
//   [ 'aveRating', 4.5 ],
//   [ 'totalReview', 75 ],
//   [ 'discount', 10 ],
//   [ 'first-name', 'Honey' ],
//   [ 'printHello', [Function: printHello] ],
//   [ 'printHii', [Function: printHii] ]
// ]

// for of loop iterate on array
// for(let value of product){
//     console.log(value)
// }

// for loop iterate on array
// for(let i = 0; i < product.length; i++){
//     console.log(product[i])
// }


// forEach loop method of object an array;
// first syntax
// forEach loop iterate on array
// product.forEach(function(value, index){
//     console.log(value, index)
// })

// second syntax
// product.forEach((value, index) => {
//     console.log(value, index)
// })

// for in loop using iterate on object
// for(let value in product2){
//     console.log(value)  // print the key of an object
// }

// forEach loop iterate on object
// product2.forEach(function(value, index) {
//     console.log(value, index);
// })

// for in loop on an object 
// for(value in product2){
//     console.log(`${value} : ${product2[value]}`)
// }

// callback function
// function b(num){
//     console.log(num) // [Function: a]
//     num();
//     console.log("b");
// }
//  let a = function(){
//     console.log("a");
// }

// b(a);


// Destructuring in javascript
// let product = ["iphone", 5689, 4.5, 75];
// // const [name, price, c, d] = product;


// for in loop on an array
// let product = ["iphone", 5689, 4.5, 75];
// for(value in product)
//     console.log(value)  // array ka index lakar deta hai for in loop

// let product2 = {
//     name: "iphone",
//     price: 5999,
//     aveRating: 4.5,
//     totalReview: 75,
//     discount: 10,
//     222: "random",
//     "first-name": "Honey",
//     // method(function)
//     printHello: function(name){
//         console.log(`Hii ${name} How are you`);
//     },
//     printHii(name){
//         console.log(`Hii ${name} How are you`);
//     }
// }


// let {price, printHello, aveRating} = product2;
// console.log(price, aveRating);

// use for of loop on an object convert in an array then print object key and value
// for([key , value] of Object.entries(product2))
//     console.log(key, value)

// spread and rest operator
let arr = [53, 15, 626, 7, 43, 57, 23, 54, 752, 43]
// console.log(arr)  // as it array
// console.log(...arr)  // spread of array element

// console.log(Math.min(...arr))  // 7

let a = [1, 2];
let b = [3, 4];
// let c = a + ", " + b;
let c = [...a, ...b];  // array merging by spread operator
// console.log(...c)   // 1 2 3 4


let product1 = [56835, 4.5, 75, 10, "iphone"]
const [n, p, ...hello] = product1;
// console.log(hello);

// rest operator
function add(...num){
    let total = 0;
    for(value of num){
        total += value;
    }
    return total;
}

console.log(add(1,2,3,43,5,336,363,673,33))
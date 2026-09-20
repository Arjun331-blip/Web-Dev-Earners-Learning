// Promise(executer)

// promises by default ek premise ka object return karta hai
// console.log("a")
// const p = new Promise(function(resolve, reject){
    // return "Hello";
    // console.log(resolve, reject)
    // resolve("Hello");
    // reject("Hii")
    // reject("Server down hai Beta")
    // console.log("b")
// });
// console.log(typeof p);  // object 
// console.log(p)
// console.log("c")

// p.then(function onFulfiled(value){
//     console.log(value)
// }, function onRejected(value){
//     console.log(value)
// })

// const res = p.then(function (value){
//     console.log(value)
// }, function (value){
//     console.log(value)
// })

// res.then(()=>{}, ()=> {})
// .then(()=> {}, ()=> {}) // promises chaining

// const res = p.then(function (value){
//     console.log(value)
// });
// res.then(()=> {})
// .then()
// .then()
// .catch(function (value){
//     console.log(value);
// })

// p.then(function onFulfiled(value){
//     console.log(value)
// })
// .then(function onFulfiled(value){
//     console.log(value)
// })
// .then(function onFulfiled(value){
//     console.log(value)
// })
// .catch(function (value){
//     console.log(value);
// })
// .finally(function (){
//     console.log("Ye to hamesha chalega")
// })


// console.log("a");

// const p2 = new Promise(function f1(resolve, reject) {
//     console.log("b");
//     resolve("Hello");
// })
// p2.then(function f2(value){
//     console.log("then")
//     console.log(value)
// })
// .catch(function f3(value){
//     console.log(value);
// })
// .finally(function f4(){
//     console.log("Ye to hamesha chalega beta");
// })

// console.log("c");

// const p3 = new Promise(function f1(resolve, reject){
//     resolve();
// })

// Promise.resolve("Hii").then(function f2(value){
//     console.log("Inside resolve Promise");
//     console.log(value);
// })

// p3.then(function f1(){
//     console.log("f3 function")
// })

function searchPizza(){
    console.log("Pizza Searching...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Here is the Pizza's Menu.");
            let price = 500;
            resolve(price);
        }, 2000);
    })
}

function addToCart(price){
    console.log("Pizza adding to cart...");
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("Pizza added to cart...");
            resolve(price);
        }, 3000);
    })
}

function payment(price){
    console.log(`Payment Initiated, Amount : ${price}`);
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log(`payment completed, Amount : ${price}`);
            resolve();
        }, 2000);
    })
}

searchPizza()
.then(function(price) {
    return addToCart(price);
})
.then(function (price){
    return payment(price);
})
.then(()=>{
    console.log("Bas aa hi gaya Pizza");
})
.catch(function (err){
    console.log(err);
})
.finally(function(){
    console.log("All steps has done");
})


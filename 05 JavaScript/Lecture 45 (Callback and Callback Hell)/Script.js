// function hii(greet){
//     console.log("Hii Arjun");
//     greet();
// }

// function greet(){
//     console.log("Hello Harshita");
// }

// hii(greet);  // first method
// hii(function greet(){
//     console.log("Hello Harshita");
// });  // second method


// you thought i build web app like order restaurent

// function search(callback){
//     console.log("I am searching pizza....");
//     setTimeout(() =>{
//         callback();
//     }, 2000)
// }

// function loded(callback){
//     console.log("i meet pizza")
//     callback();
// }

// function order(){
//     console.log("i has completed order");
// }

// search(function (loded) {
    
// });

// function fun1(callback){
//     console.log("Hii");
//     callback();
// }

// function cb(){
//     console.log("This is callback function");
// }

// fun1(cb);

// let arr = ["a","b","c","d"];

// function a(){
//     function b(){

//     }
//     return b;
// }


function searchPizza(a){
    console.log("Pizza Searching...");
    setTimeout(() => {
        console.log("Here is the Pizza's Menu.");
        let price = 500;
        a(price);
    }, 2000);
}

function addToCart(cb2){
    console.log("Pizza adding to cart...");
    setTimeout(() => {
        console.log("Pizza added to cart...");
        cb2();
    }, 3000);
}

function payment(price){
    console.log(`Payment Initiated, Amount : ${price}`);
    setTimeout(() => {
        console.log(`payment completed, Amount : ${price}`);
        console.log("Bas aa hi gaya");
    }, 2000);
}

searchPizza(function a(price){
    addToCart(function b(){
        payment(price);
    })
});

// async function fun2(){
//     return 10;
// }

// function fun1(){
//     // return 11;
//     return Promise.resolve(10);
// }

// // console.log(fun2());
// fun2().then((data) => {
//     console.log(data);
// })
// console.log(fun1());

// console.log("a");

// async function fun3(){
//     console.log("b")
// }

// console.log("c");
// fun3();
// console.log(fun3())

// async function fun4(){a
//     return "Hii";
// }

// async function fun1(){
// console.log("fun1");
// return 11;
// }

// function fun2(){
// console.log("fun2");
// return 10;
// return Promise.resolve("Hii")
// }
// fun2();
// fun1();
// console.log(fun2())
// console.log(fun1())
// fun1().then((data)=>{
//     console.log(data)
// })
// console.log(fun2());

// console.log("a");
// async function fun3(){
//     console.log("b");
// }
// fun3();
// console.log("c");

// function fun3() {
//   return Promise.resolve("Hii"); 
// }
// async function fun4() {
//   return "Hello";
// }
// fun4().then((data)=>{
//     console.log(data);
// })

// async function fun5(){/
    // fun4().then((data)=>{
    //     console.log(data);
    // })

//     console.log("1")
//     let data = await fun4();
//     console.log("2")
//     let data1 = await fun3();
//     console.log("3")
//     console.log(data, data1);
// }
// fun5();

// let data = await fun4();
// let data1 = await fun3();
// console.log(data, data1);
// console.log("how are you");

// console.log("a");

// async function random(){
//     console.log("b");
//     await 1;
//     console.log("c");
// }
// random();
// console.log("d");


// let data;
// async function userData(){
//     return {Name: "Arjun"};
// }
// function fun6(){
//     return Promise.resolve("Hii");
// }
// async function fun7(){
//     data = await userData();
//     let data2 = await fun6();
//     console.log(data2, data.Name);
// }
// fun7();

// handle error
// let data;
// async function userData(){
//     return {Name: "Arjun"};
// }
// function fun6(){
//     // return Promise.resolve("Hii");
//     return Promise.reject("Hii");
// }
// async function fun7(){
//     try{
//         data = await userData();
//         let data2 = await fun6();
//         console.log(data2, data.Name);
//     } catch(err){
//         console.log(err);
//     } finally {
//         console.log("main to hamesha chalunga beta");
//     }
// }
// fun7();



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

function addToCart(){
    console.log("Pizza adding to cart...");
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("Pizza added to cart...");
            resolve();
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

async function orderFood(){
    try{
        let price = await searchPizza();
        await addToCart();
        await payment(price);
        console.log("Bas aa hi gaya pizza");
    } catch (err){
        console.log(err);
    }
}
orderFood();

// searchPizza()
// .then(function(price) {
//     return addToCart(price);
// })
// .then(function (price){
//     return payment(price);
// })
// .then(()=>{
//     console.log("Bas aa hi gaya Pizza");
// })
// .catch(function (err){
//     console.log(err);
// })
// .finally(function(){
//     console.log("All steps has done");
// })

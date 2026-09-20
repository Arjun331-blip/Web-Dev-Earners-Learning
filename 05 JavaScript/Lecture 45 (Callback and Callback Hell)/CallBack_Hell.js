// let's to build zomato application

// function greet (name, callback){
//     console.log("Hello, " + name);
//     callback();
// }

// function sayBye(){
//     console.log("Good Bye");
// }

// greet("Ajay", sayBye);

// console.log("Start");

// // asyn function to handle web API
// // DOM API, setTimeout, setInterval, console.log, local storage, session storage cookies
// setTimeout(function(){
//     console.log("Executed SetTimeout function");
// }, 2000)

// console.log("End");

// function calculate(a, b, callback){
//     callback(a,b);
// }

// function add(a, b){
//     console.log(`Addition : `, a+b);
// }

// function mul(a, b){
//     console.log("Multiply : ", a*b);
// }

// calculate(5, 4, add);
// calculate(5, 4, mul);

// console.log("first Task");
// let data = fetch("https://api.github.com/users")
// .then(Response => Response.json())
// .then(data => {
//     console.log(data)
// })
// console.log("Second Task");

// function fetch(callback) {
//     fetch("https://api.github.com/users")
//         .then(response => response.json())
//         .then(data => callback(data))
//         .catch(error => console.error("Error:", error));
// }

// function handle(data) {
//     console.log("Fetched Data:", data);
// }

// fetch(handle);

// now i have five Task my task has completed five steps
function step1(){
    console.log("Task1 is in remaining...");
    let t1 = new Promise(resolve => {
        setTimeout(function(){
            console.log("I have completed Task1");
            resolve();
        }, 1000);
    })
    return t1;
}

function step2(){
    console.log("Task2 is in remaining...");
    return new Promise(resolve => {
        setTimeout(() => {
        console.log("I have completed Task2")
        resolve();
    }, 1000);
    })
}

function step3(){
    console.log("Task3 is in remaining...");
    return new Promise(resolve => {
        setTimeout(function(){
        console.log("I have completed Task3");
        resolve();
    })
    })
}

function step4(){
    console.log("Task4 is in remaining...");
    return new Promise(resolve => {
        setTimeout(function(){
        console.log("I have completed Task4");
        resolve();
    })
    })
}

function step5(){
    console.log("Task5 is in remaining...");
    return new Promise(resolve => {
        setTimeout(function(){
        console.log("I have completed Task5");
        resolve();
    })
    })
}

// promises
step1()
.then(step2)
.then(step3)
.then(step4)
.then(step5)
.then(()=> {
    console.log("All Task has completed");
})

// step1(function(){
//     step2(function(){
//         step3(function(){
//             step4(function(){
//                 step5();
//             });
//         });
//     });
// });

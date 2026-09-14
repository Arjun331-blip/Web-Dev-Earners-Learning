// console.log("Task 1");
// console.log("Task 2");
// for (let i = 0; i < 10000000; i++) {}
// let start = Date.now();
// while(Date.now() - start < 10000){}
// console.log("Task 3");/
// console.log(document);


// console.log("Task 1")
// setTimeout(() => {
//     console.log("Task 3")
//     let start = Date.now();
//     while(Date.now() - start < 10000){
//     }
// }, 0);
// console.log("Task 2")

// console.log("a")
// setTimeout(() => {
//     console.log("Hii");
// })
// console.log("b")

// setTimeout(() => {
//     console.log("Hii");
// })



// console.log("Task 1");
// setTimeout(() => {
//     console.log("Task 2")
// }, 4000)
// setTimeout(() => {
//     console.log("Task 5")
// }, 1000)
// setTimeout(() => {
//     console.log("Task 4")
// }, 2000)
// console.log("Task 3");


// console.log("Task 1");

// setTimeout(() => {
//     console.log("Task 2")
// }, 0)

// let start = Date.now();
// while(Date.now() - start < 2000){}

// setTimeout(() => {
//     console.log("Task 5")
// }, 0)

// setTimeout(() => {
//     console.log("Task 4")
// }, 0)
// console.log("Task 3");


// console.log("A");
// setInterval(() => {
//     console.log("Hii")
// }, 1000);
// console.log("B");


// let count = 0;
// console.log("A");
// let id = setInterval(() => {
//     console.log("Hii")
//     if(count > 5){
//         clearInterval(id);
//     } 
//     count++;
// }, 1000);
// console.log("B");
// console.log(id);


// let colorSet = "0123456789abcdef";
// setInterval(() => {
//     let color = "";
//     for(let i = 0; i < 6; i++){
//         let randomValue = Math.floor(Math.random() * colorSet.length);
//         color = color + colorSet[randomValue];
//     }
//     document.querySelector("body").style.backgroundColor = `#${color}`;
// }, 1000);
// console.log(color)

let id = setTimeout(() => {
    console.log("Hii");
}, 1000)
clearTimeout(id)
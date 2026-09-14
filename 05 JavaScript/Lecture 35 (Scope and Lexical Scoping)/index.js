

// global scope variable
let userName = "Arjun";

// this is not a block scope 
// if(true){

// }

// if(true){
//     console.log("Hii");
//     console.log("Hii guys");
// }


// block scope
// {
//     let city = "bhadohi";
//     console.log(city)
// }
// console.log(city)  // no access


// function scope
// function hello(){
//     let state = "Uttar Pradesh";
//     console.log(state)
// }
// console.log(state)


{
    // var city = "bahdohi";  // outside accessible
    // let city = "bahdohi";  // inside accessible
    //const city = "bahdohi";  // inside accessible
    // console.log(city)
}
// console.log(city)

// let count = 0;
// function counter(){
//     count += 1;
//     console.log(count)
// }

// counter();  // 1
// counter();  // 2


let count = 2;
function counter(){
    let count = 0;
    count += 2;
    console.log(count)
}

counter();  // 2  
counter();  // 2
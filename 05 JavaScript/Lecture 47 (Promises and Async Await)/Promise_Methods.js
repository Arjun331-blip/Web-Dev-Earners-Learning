function fun1(){
    return new Promise((resolve,  reject) => {
        setTimeout(()=>{
            // resolve("fun1");
            reject("fun1");
        }, 3000)
    })
}
function fun2(){
    return new Promise((resolve,  reject) => {
        setTimeout(()=>{
            // resolve("fun2");
            reject("fun2");
        }, 1000)
    })
}
function fun3(){
    return new Promise((resolve,  reject) => {
        setTimeout(()=>{
            // resolve("fun3");
            reject("fun3");
        }, 7000)
    })
}

// let result = Promise.all([fun1(), fun3(), fun2()]);
// let result = Promise.allSettled([fun1(), fun3(), fun2()]);
// let result = Promise.race([fun1(), fun3(), fun2()]);
let result = Promise.any([fun1(), fun3(), fun2()]);
result.then((data) => {
    console.log(data);
})
.catch((err)=>{
    console.log(err)
})
// function 
// let alokMarks = 45 + 56 + 23;
// let addiMarks = 25 + 56 + 29;
// let karanMarks = 49 + 76 + 30;
// let anuMarks = 50 + 96 + 93;

// console.log(alokMarks, anuMarks, addiMarks, karanMarks);

// let productPrice = 3000;
// let dicountAmount = productPrice*50/100;
// let deliveryCharge = 50;
// let totalAmount = productPrice - dicountAmount + deliveryCharge;
// console.log(totalAmount);


// function definition
// function expression
// function greet(){
//     console.log("Hii");
// }
// greet();

// parameterised function
// function totalMarks(name, physics, chemistry, math){
//     console.log(`${name} total marks : `,physics + chemistry + math);
    
// }

// totalMarks("alok",45, 56, 23);
// totalMarks("addi", 25, 56, 29);
// totalMarks("karan", 49, 76, 30);
// totalMarks("anu", 50, 96, 93);


// parameterised function
// function greeting(name, greet){
//     console.log(`${greet} ${name}`);
// }
// greeting("anu", "Hii")
// greeting("harshita", "Hello")
// greeting("lovely", "Namaste")
// greeting("Tanu", "Kemcho")
// greeting("Ayushi", "Hey")

// function calculator(num1, num2, operator){
//     switch(operator){
//         case "+" : console.log(`${num1} ${operator} ${num2} = ` , num1 + num2); break;
//         case "*" : console.log(`${num1} ${operator} ${num2} = ` , num1 * num2); break;
//         case "-" : console.log(`${num1} ${operator} ${num2} = ` , num1 - num2); break;
//         case "/" : console.log(`${num1} ${operator} ${num2} = ` , num1 / num2); break;
//         case "%" : console.log(`${num1} ${operator} ${num2} = ` , num1 % num2); break;
//     }
    
// }
// calculator(6, 7, "+");
// calculator(10, 7, "-");
// calculator(8, 7, "*");
// calculator(14, 7, "/");
// calculator(8, 7, "%");

// default parameter in function
// function defaultParameter(name, guest = "Hii") {
//     console.log(guest, name);
// }

// defaultParameter("anu", "ki haal hai")
// defaultParameter("harshita")
// defaultParameter("lovely")
// defaultParameter("Tanu")
// defaultParameter("Ayushi")

// function expression
// let addNum = function(a, b){
//     return a+b;
// }

// console.log(addNum(5,8));

// Arrow function
// let multipy = (a, b) => {
//     return a * b;
// }

// console.log(multipy(5,7))  // 35

// Arrow function in one variable
// let multipy = num2 => num2 + 4;

// console.log(multipy(5))  // 9


// Arrow function in two variable

 s
// console.log(multipy(8,4))  // 32


// Arrow function in two variable syntax 3
// let multipy = (num2 ,num1) => {
//     return num2 * num1;
// }

// console.log(multipy(8,4))  // 32
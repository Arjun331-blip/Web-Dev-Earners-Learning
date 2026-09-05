let student = {
    name: "Arjun",
    rollNo: 44,
    subject: ["physics", "Chemistry", "Math"],
}

// let {name, subject, rollNo} = student;
// console.log(name + subject + student);

// let {subject, ...variable} = student;
// console.log(variable);

// how to raname key
let {subject: vishay, totalMarks = 500 , ...variable} = student;
//let vishay = subject;  // you make extra var
// console.log(totalMarks);

// let obj1 = {
//     name: "arjun",
//     phone: "redmi 12 5g",
// }

// let obj2 = {
//     address: "India",
//     adharCard : 28778567568,
//     name: "Harshita",
// }

// let obj3 = obj1;
// let obj3 = {...obj1, ...obj2}; // here we are doing merge two object in a single object
// console.log(obj3);


// arrray and object update

// const arr = [1,2,3,4]; // no change
// let arr = [1,2,3,4]; // change allowed
// arr = ["arjun", "harshita"]
// console.log(arr);


const obj1 = {
    name: "arjun",
    phone: "redmi 12 5g",
    address: null
}

// const obj2 = {
//     address: "India",
//     adharCard : 28778567568,
//     name: "Harshita",
// }

// obj2["name"]  = "kasturi";
// obj2.name  = "Anu";
// delete obj1.name
// console.log(obj1);

//console.log(obj1.address?.street);  // ? optional chaining

let arr = ["charlie", "bob", "man"];
console.log(arr);
console.log(arr.pop());


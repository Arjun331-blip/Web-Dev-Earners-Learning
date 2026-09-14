// let originalPrice = [659, 6554, 9764, 2447];
// let discountPrice = [];
// for(let value of originalPrice){
//     discountPrice.push(value*0.9);  // 10% discount
// }


// originalPrice.forEach((value) => {
//     discountPrice.push(value*0.9);
// })

// console.log(originalPrice);
// console.log(discountPrice);

// const discount = originalPrice.map((value) => {
//     return value*0.9;
// })
// const discount = originalPrice.map((value) =>  (value*0.9))

// console.log(originalPrice);
// console.log(discount);


// array of object 


// student.forEach((value) => {
    
// })


let originalPrice = [3535, 45768,343243,53547];
let discountPrice = [];

// for(value of originalPrice){
//     let discount = value *10 / 100;
//     // discountPrice.push(value - discount); // 10% discount
//     discountPrice.push(value * 0.9); // 10% discount

//     console.log(value)
// }
// console.log(discountPrice)

// let i = 0;
// originalPrice.forEach( (value) => {
//     discountPrice.push(value * 0.9);  // 10% discount
//     console.log(discountPrice[i++]);
// });

// console.log(originalPrice)
// console.log(discountPrice)

// const discountPrice2 = originalPrice.map((value) => value * 0.9);
// console.log(discountPrice2);

// const discountPrice2 = originalPrice.map((value) => value + "Hii")
// console.log(discountPrice2)
// console.log(originalPrice)

// const name = ["Arjun", "Karan", "Devendra", "Harshita", "Lovely", "Aayushi"];
// const hii = name.map((value) => {
//     return "Hii, " + value;
// })
// console.log(...hii);


let students = [
    {
        name: "Arjun",
        marks: 25,
    },
    {
        name: "Harshita",
        marks: 97,
    },
    {
        name: "Anu",
        marks: 90,
    },
    {
        name: "Aayushi",
        marks: 32,
    },{
        name: "Lovely",
        marks: 70,
    },
]

// let studentNames = [];
// students.forEach((value) => {
//     studentNames.push(value.name);
// })

// console.log(...studentNames)

// let studentNames = students.map((student) => student.name);
// let studentMarks = students.map((student) => student.marks);
// console.log(studentNames)
// console.log(studentMarks)

// let boostedMarks = students.map((student) => (
//     {...student,
//     marks: student.marks + 10,}
// ))

// console.log(boostedMarks)

// let failedStudent = [];

// students.forEach((value) => {
//     if(value.marks < 33){
//         failedStudent.push(value);
//     }
// })
// console.log(failedStudent)

// let failedStudent = students.filter((student) => student.marks < 33).map(student => student.name);
// console.log(failedStudent)


// let marks = [56, 24, 62, 73, 78]

// let totalMarks = 0;

// marks.forEach((value) => totalMarks += value);
// console.log(totalMarks) // 293


// const totalMarks = marks.reduce((accu, curr) => accu += curr, 0);
// console.log(totalMarks);


const attendence = ["present", "present", "absent", "present", "absent"]

// let obj = {

// };

// attendence.forEach((value) => {
//     // if(obj[value]) {
//     //     obj[value] = obj[value]+1; 
//     // } else {
//     //     obj[value] = 1;
//     // }
//     obj[value] = (obj[value]) ? obj[value]+1 : obj[value] = 1;
//     // console.log(obj[value], value);
//     // console.log(obj[value] + 1);
// })
// // { present: 3, absent: 2 }
// console.log(obj)

// by reduce 
const obj = attendence.reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
})
console.log(obj);
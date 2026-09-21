// let storage = localStorage.setItem("num", 1);

// localStorage.setItem("num1", 1);
// localStorage.setItem("num2", 1);
// localStorage.setItem("num3", 1);

// let result = localStorage.getItem("num");
// console.log(result)

// let result2 = localStorage.key(0);
// console.log(result2)

// let result3 = localStorage.removeItem("num");
// console.log(result3)

// document.querySelector("#btn").addEventListener("click", ()=>{
//     localStorage.clear();
// })

// document.querySelector("#btn1").addEventListener("click", ()=>{
//     sessionStorage.setItem("session", "Item");
// })


// localStorage.setItem("Name", "Nishant");

async function userData(userName = "nishantsaini2331"){
    let response = await fetch(`https://api.github.com/users/${userName}`);
    let data = await response.json();
    return data;
}

userData();

let form =  document.querySelector("#form");
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let val = document.querySelector("#search").value;
    let data = await userData(val);
     document.querySelector("#show-profile").innerHTML =    `
        <img src=${data.avatar_url} width="100px" height="100px" alt="">
        <h2>${data.name}</h2>
        <i>username : ${data.login}</i>
        <p>bio : ${data.bio}</p>
        <p>followers : ${data.followers}</p>
        <p>following :  ${data.following}</p>
        <p>Public repos : ${data.public_repos}</p>
    `  
})

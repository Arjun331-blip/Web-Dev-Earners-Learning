const form = document.querySelector("#form");
const btn = document.querySelector("#btn");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const bio = document.querySelector("#bio");
const wordLimit = document.querySelector("#wordLimit");
const checkbox = document.querySelector("#checkbox");
const country = document.querySelector("#country");
const passwordHint = document.querySelector("#passwordHint");
const errorMessage = document.querySelector(".errorMessage");

function showError(input, errorMessage){
    input.parentElement.querySelector(".errorMessage").textContent = errorMessage;
}

function clearError(input){
    input.parentElement.querySelector(".errorMessage").textContent = "";
}

function validateUserName(userName){
    // console.log(userName.parentElement.querySelector(".errorMessage"))
    if(userName.value.trim().length === 0){
        // errorMessage.textContent = "Please enter your name";
        showError(userName, "Please enter your name");
        errorMessage.style.color = "red";
        return false;
    }
    if(userName.value.trim().length < 3){
        showError(userName, "username must be at least 3 character")
        errorMessage.style.color = "red";
        return false;
    }
    clearError(userName);
    return true;
}
function validateUserPassword(userPassword){
    if(userPassword.value.trim().length === 0){
        showError(userPassword, "password must be at least 8 character")
        errorMessage.style.color = "red";
        return false;
    }
    if(userPassword.value.trim().length <= 8){
        showError(userName, "Please enter your name");
        errorMessage.style.color = "red";
        return false;
    }
    clearError(userPassword);
    return true;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let userName = name.value;
    let emailId = email.value;
    let passwordId = password.value;
    
    // console.log({name , email, password})
    // console.log({name: userName , email: emailId, password: passwordId})
    if(validateUserName(name)){
        console.log("from is valid")
    } else {
        console.log("form is invalid")
    }

    if(validateUserPassword(password)){
        console.log("from is valid")
    } else {
        console.log("form is invalid")
    }
}) 

// name.addEventListener("input", (e) => {
//     console.log("input event" ,name.value);
// })

// name.addEventListener("change", (e) => {
//     console.log("Change event" ,name.value);
// })

let limitCharacter = 150

bio.addEventListener("input", (e) =>{
    let letter = limitCharacter - bio.value.trim().length;
    if(letter > 0){
        wordLimit.textContent = `${letter} letters remaining`;
    } else{
        wordLimit.textContent = `your character limit exceeded`
    }
})

// checkbox.addEventListener("change", (e) => {
//     console.log(checkbox.checked);
// })

// country.addEventListener("input", (e) => {
//     console.log(country.value);
// })  // input and change event both are work in select element

// password.addEventListener("focus", (e) => {
//     passwordHint.classList.add("visible");
//     // console.log("focus");
// })

// password.addEventListener("blur", (e) => {
//     passwordHint.classList.remove("visible");
//     // console.log("blur");
// })
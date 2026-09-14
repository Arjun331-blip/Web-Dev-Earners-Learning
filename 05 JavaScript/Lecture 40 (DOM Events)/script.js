let revealGift = document.querySelector("#revealGift");
let p = document.querySelector("#para");
let click = document.querySelector(".click");

// revealGift.addEventListener("click", function(){
//     console.log("Hello Hello micccccc checkkkkkkkkkk", Math.random())
// })
// revealGift.addEventListener("click", () => console.log("Hello Hello micccccc checkkkkkkkkkk", Math.random())
// )

// function revealGifts(){
//     // console.log("Hello Hello micccccc checkkkkkkkkkk", Math.random())
//     // p.classList.add("reveal");
//     p.classList.toggle("hidden");
// }
// function revealGifts(e){
//     console.log(e)
//     // console.log(typeof e)
//     // console.log(e.type)
//     console.log("target ", e.target)
//     console.log("current target ", e.currentTarget)
// }
// revealGift.addEventListener("click", revealGifts)

// click.addEventListener("click",(e) => {
//     console.log(e);  // event object
//     console.log(e.type);  // click event 
//     console.log(typeof e); // object
//     console.log(e.target);  // tag element ko target karta hai
//     console.log(e.currentTarget);
//     console.log(e.clientX);
//     console.log(e.clientY)
// })

function clickBtn(e){
     console.log(e)
}
// click.addEventListener("click", clickBtn)
// click.removeEventListener("click", clickBtn)
// function counters(n){
//     return n+1;
// }
// let counter = 0;
// if(counters(counter) < 5){
//     click.addEventListener("click", clickBtn)
// } else {
//     click.removeEventListener("click", clickBtn)
// }

let outer = document.querySelector("#outer");
let inner = document.querySelector("#inner");
let innerInside = document.querySelector("#innerInside");

// outer.addEventListener("click", (e) => {
//     console.log("outer button clicked")
// }, {capture: true})

// inner.addEventListener("click", (e) => {
//     console.log("inner button clicked")
// }, {capture: true})

// innerInside.addEventListener("click", (e) => {
//     console.log("innerinside button clicked")
// }, {capture: true})

// outer.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log("outer button clicked")
// })

// inner.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log("inner button clicked")
// })

// innerInside.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log("innerinside button clicked")
// })


// vent delegation in javascript

let products = [
    {
        id: 1,
        name: "Iphone 20",
        price: 12342,
        imgUrl : "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
    {
        id: 2,
        name: "Samsung 15",
        price: 62324,
        imgUrl : "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
    {
        id: 3,
        name: "MI 23",
        price: 35354,
        imgUrl : "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
    {
        id: 4,
        name: "Poco 10",
        price: 43534,
        imgUrl : "https://m.media-amazon.com/images/I/41D9TUZxXwL._SY300_SX300_QL70_FMwebp_.jpg"
    },
    {
        id: 5,
        name: "Lava 12",
        price: 53422,
        imgUrl : "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
]


let productList = document.querySelector("#product-list")

products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("singleProduct");

    card.dataset.productId = product.id;
    const deleteBtn = document.createElement("button");
    const addToCart = document.createElement("button");
    deleteBtn.textContent = "Remove Product";
    addToCart.textContent = "Add to Cart";

    // deleteBtn.addEventListener("click", (e) => {
    //     e.stopPropagation();
    //     card.remove();
    //     console.log("remove card")
    // })
    card.innerHTML = `<div>
       <img src=${product.imgUrl} alt="">
    </div>
    <div class="productDetail">
        <p>${product.name}</p>
        <p>${product.price}</p>
    </div>
    `

    productList.append(card);
    card.append(deleteBtn, addToCart);
})

productList.addEventListener("click", (e) => {
    e.stopPropagation();
    const dltBtn = e.target;
    // console.log(dltBtn.parentElement)
    // console.log(dltBtn.tagName)
    // console.log(dltBtn.textContent)

    // if(e.target.tagName === "BUTTON"){
    //     e.target.parentElement.remove();
    //     console.log("Hello", Math.random())
    // }

    console.log(dltBtn.parentElement.dataset.productId)
    if(e.target.tagName === "BUTTON" && e.target.textContent === "Remove Product"){
        // e.target.parentElement.remove();
        dltBtn.closest(".singleProduct").remove();
    }
    console.log(dltBtn.closest(".singleProduct"));
})
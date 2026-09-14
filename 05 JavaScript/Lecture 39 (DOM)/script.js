// let h1 = document.getElementById("h1");
// let h1 = document.querySelectorAll("h1");
// let h1 = document.querySelector("h1");  // element name
// let h1 = document.querySelector(".h1");  // class name
// let h1 = document.querySelector("#h1");  // id name
// console.log(h1)

// let h1 = document.querySelectorAll("#h1");
// console.log(h1)

let p = document.querySelector("#desc");
// console.log(p)
// p.textContent = "</h1>Hello Dostooooo</h1>";
// p.innerHTML = "</h1>Hello Dostooooo</h1>";
// p.innerText = "</h1>Hello Dostooooo</h1>";

// console.log(p.textContent)
// console.log(p.innerHTML)
// console.log(p.innerText)

// p.setAttribute("style", "background-color: pink; font-size : 50px")

// let btn = document.querySelector("#btn")

// btn.setAttribute("disabled", "false")
// btn.removeAttribute("disabled")
// btn.textContent = "Remove"


let res = p.getAttribute("style")

// console.log(res);


// p.removeAttribute("style")
// console.log(res)


// p.classList.add("random")
// p.classList.remove("random")
// p.classList.toggle("random")


// console.log(p.classList.contains("random"));


// p.style.backgroundColor = "red" // camel case

// p.dataset.helloDostoHii = "hii"

// console.log(p.dataset.helloDostoHii);
// console.log(p.dataset.helloDostoHii);


let div = document.createElement("div")
let div2 = document.createElement("div")


div.textContent = "Hello"
div2.textContent = "Div 2"

let body = document.querySelector("body")

// body.appendChild(div)
// body.appendChild(div2)

// body.append(div , div2)  // insert in last of body
// body.prepend(div , div2)  // insert in start of body

let products = [
    {
        name: "Iphone 20",
        price: 12342,
        imgUrl : "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
    {
        name: "Samsung 15",
        price: 62324,
        imgUrl : "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
    {
        name: "MI 23",
        price: 35354,
        imgUrl : "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
    {
        name: "Poco 10",
        price: 43534,
        imgUrl : "https://m.media-amazon.com/images/I/41D9TUZxXwL._SY300_SX300_QL70_FMwebp_.jpg"
    },
    {
        name: "Lava 12",
        price: 53422,
        imgUrl : "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
]

let productList = document.querySelector("#product-list");
// console.log(productList)

products.forEach( (product)=>{
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.setAttribute("src", `${product.imgUrl}`);
    const p = document.createElement("p");
    const span = document.createElement("span");
    span.textContent = `Name : ${product.name}`;
    const span1 = document.createElement("span");
    span1.textContent = `Price : ${product.price}`;
    p.append(span, span1);
    div.append(img, p);
    productList.append(div);
});

let h2 = document.querySelector("#h23")

// body.removeChild(h2) // you have to perform on parent


// h2.remove() // directly on the element you want to remove

// let clone = productList.cloneNode();
// let clone = productList.cloneNode(true);
// console.log(clone)

// body.prepend(clone)

const items = productList.children
// console.log(items)


// productList.insertBefore(p , items[2]) // for precise positioning

items[2].before(h2)
items[2].after(h2)
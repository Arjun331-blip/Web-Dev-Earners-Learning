// build Zomato Application

let orderDetails = {
    customerName: "Arjun",
    customer_Location: "Aurai",
    restaurent_Location: "Delhi",
    price: 620,
    menu: ["Pizza", "Burger", "Chilly Patato", "Thumps up"],
};

function placeOrder(orderDetails, callback){
    console.log("Your payment is in Progress Rs. ", orderDetails.price);
    setTimeout(function(){
        console.log("your payment have successfully completed Rs.", orderDetails.price);
        orderDetails.paymentStatus = true;
        callback(orderDetails);
    }, 2000);
}

function prepareOrder(orderDetails, callback){
    console.log("Your order has Preparing", ...orderDetails.menu);
    setTimeout(function(){
        console.log("Your order has packed", ...orderDetails.menu);
        orderDetails.orderPacked = true;
        callback();
    }, 2000);
}

function pickUpOrder(orderDetails, callback){
    console.log("Delivery boy let's go to your order from ", orderDetails.restaurent_Location);
    setTimeout(function(){
        console.log("Customer let's go to the pick up order from", orderDetails.customer_Location);
        orderDetails.pickUpId = 123;
        callback();
    }, 2000);
}

function orderDeliver(orderDetails){
    console.log("Your order has delivered");
    setTimeout(() => {
        console.log("your order has successfully delivered and before gets your order");
        orderDetails.delivery = true;
    }, 2000);
}

placeOrder(orderDetails, function(){
    prepareOrder(orderDetails, function(){
        pickUpOrder(orderDetails, function(){
            orderDeliver(orderDetails, function(){
                console.log(orderDetails)
            });
        });
    });
});
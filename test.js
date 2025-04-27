function calculateDiscount(price, discount = 10) {
    let discountAmount = (price * discount) / 100;
    let finalPrice = price - discountAmount;
    console.log(finalPrice);
}
let price = 450;
let discount;
// let price = 450; // Example price
// let discount; // Example discount percentage

if (isNaN(price) || price < 0) {
    console.log("Invalid price. Please enter a positive number.");
}
else if (discount === undefined || discount === 0) {
    calculateDiscount(price)
}
else if (discount == "" || price == "") {
    console.log("Discount and price should be a number.");
}

else {
    calculateDiscount(price, discount);
}


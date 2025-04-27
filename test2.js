function calculateDiscount() {
    let price = prompt("Enter the price:");

    if (isNaN(price) || price < 0) {
        console.log("Invalid price. Please enter a positive number.");
        return;
    }
    let discount = prompt("Enter the discount percentage:");
    if (isNaN(discount) || discount < 0) {
        console.log("Invalid discount. Please enter a positive number.");
        return;
    }
    else if (discount === "" || discount === 0) {
        discount = 10; // Default discount
    }
    else {
        discount = parseFloat(discount);
    }

    let discountAmount = (price * discount) / 100;
    let finalPrice = price - discountAmount;
    console.log("Final price after discount: " + finalPrice);
}
calculateDiscount();
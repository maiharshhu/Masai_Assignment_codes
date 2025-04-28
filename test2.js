// function calculateDiscount() {
//     let price = prompt("Enter the price:");

//     if (isNaN(price) || price < 0) {
//         console.log("Invalid price. Please enter a positive number.");
//         return;
//     }
//     let discount = prompt("Enter the discount percentage:");
//     if (isNaN(discount) || discount < 0) {
//         console.log("Invalid discount. Please enter a positive number.");
//         return;
//     }
//     else if (discount === "" || discount === 0) {
//         discount = 10; // Default discount
//     }
//     else {
//         discount = parseFloat(discount);
//     }

//     let discountAmount = (price * discount) / 100;
//     let finalPrice = price - discountAmount;
//     console.log("Final price after discount: " + finalPrice);
// }
// calculateDiscount();

let a = "L";
let b = "L";

let alen = a.length
let blen = b.length

let aType = a[alen-1]
let bType = b[blen-1]

if(aType !==bType){
    if(aType==="S"){
        console.log("<")
    }
    else if(aType==="M"){
        if(bType==="S"){
            console.log(">")
        }
        else{
            console.log("<")
        }
    }
    else if(aType==="L"){
        console.log(">")
    }
}
else{
    if(aType==="M"){
        console.log("=")
    }
    else if(aType ==="S"){
        if(alen>blen){
            console.log("<")
        }
        else if(alen<blen){
            console.log(">")
        }
        else{
            console.log("=")
        }
    }
    else if(aType ==="L"){
        if(alen>blen){
            console.log(">")
        }
        else if(alen<blen){
            console.log("<")
        }
        else{
            console.log("=")
        }
    }
}
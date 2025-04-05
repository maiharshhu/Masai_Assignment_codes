let Ogprice = prompt("Enter Original Price of product:");
if (Ogprice < 0) {
    console.log("Invalid price, the price must be a non-negative number");
}
else {
    if (Ogprice > 20) {
        let Fprice = Ogprice - (Ogprice * 0.10);
        console.log(`The final Price of the item is ${Fprice}`);
    }
    else {
        console.log('no discount applied');
    }
}

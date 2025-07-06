function createInventoryItem(name,category,price){
    return{
        name:name,
        category:category,
        price:price,
        describeItem:function describeItem(){
            console.log(`Item:${name}, Category:${category}, Price:${price}`)
        }
    }
}

function addItemDiscount(inventoryItem,discountPercent,discountedPrice){
    const discountedPrice = inventoryItem.price - (inventoryItem.price * discountPercent / 100);
    return{
        inventoryItem:inventoryItem,
        discountPercent:discountPercent,
        discountedPrice:discountedPrice,
        applyDiscount:function applyDiscount(){
            console.log(`Discounted Price for ${inventoryItem.name}: ${discountedPrice}`)
        }
    }
}

const item = createInventoryItem("Laptop", "Electronics", 1500);
item.describeItem();
// Output: Item: Laptop, Category: Electronics, Price: 1500

const discountedItem = addItemDiscount(item, 10);
discountedItem.applyDiscount();
// Output: Discounted Price for Laptop: 1350

let Products=
[
  { name: "Laptop", quantity: 10 },
  { name: "Mouse", quantity: 25 },
  { name: "Keyboard", quantity: 15 }
]

let Sales=[
  { name: "Laptop", sold: 5 },
  { name: "Mouse", sold: 25 },
  { name: "Keyboard", sold: 10 }
]


for(let product of Products){
    const sale = Sales.find(s => s.name === product.name);
    if(sale){
        product.quantity = Math.max(0, product.quantity-sale.sold);
    
    if(product.quantity === 0){
        product.status = "Out of Stock";
    }
}
}
console.log(Products);
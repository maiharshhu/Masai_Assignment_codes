let data = [
    { name: "Laptop", price: 1000 }, 
    { name: "Mouse", price: 20 }
]


function processProducts(data){
    let pname = data.map(user=>user.name);
    
    data.forEach(product => {
        if(product.price>50){
            console.log(`${product.name} is above $50`)
        }
        else{
            console.log(`${product.name} is below $50`)
        }
    });

}

processProducts(data)
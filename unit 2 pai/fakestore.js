async function fetchProducts() {
    console.log("...loading");

    try {
        const resp = await fetch("https://fakestoreapi.com/products");
        const data = await resp.json();

        const filterProducts = data.filter(product => product.price > 100);

        if (filterProducts.length === 0) {
            alert("No product matched with range $100");
            return;
        }

        const mappedProducts = filterProducts.map(product => 
            `${product.title} - $${product.price} - ${product.category}`
        );

        const sortedProducts = [...filterProducts].sort((a, b) => b.price - a.price);

        const totalRating = filterProducts.reduce((acc, product) => acc + product.rating.rate, 0);

        const averageRating = (totalRating / filterProducts.length).toFixed(2);

        mappedProducts.forEach(p => console.log(p));

        console.log(`Sorted Products: ${JSON.stringify(sortedProducts, null, 2)}`);
        console.log(`Average Rating of filtered products: ${averageRating}`);

    } catch (error) {
        console.error("Error fetching products:", error);
    }
}


fetchProducts();

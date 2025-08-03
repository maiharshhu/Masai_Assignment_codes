function searchProducts() {
  const category = document.getElementById('category').value;
  const minPrice = document.getElementById('minPrice').value;
  const maxPrice = document.getElementById('maxPrice').value;
  const status = document.getElementById('status');
  const productList = document.getElementById('productList');

  productList.innerHTML="" //to remove already seen products
  status.innerText = 'Loading...'; //Status loading....
   
  let url = 'https://fakestoreapi.com/products';
  
  // If category selected, use category endpoint
      
  if (category) {
    url = `https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`;
    }

  fetch(url)
        .then(res => res.json())
        .then(data => {
          // Filter price range manually
          const filtered = data.filter(product => {
            const price = product.price;
            if (minPrice && price < parseFloat(minPrice)) return false;
            if (maxPrice && price > parseFloat(maxPrice)) return false;
            return true;
          });

          if (filtered.length === 0) {
            status.innerText = 'No products found.';
            return;
          }

          status.innerText = '';

          filtered.forEach(product => {
            const card = document.createElement('div');
            card.className = 'card';

            card.innerHTML = `
              <img src="${product.image}" alt="${product.title}" />
              <h4>${product.title}</h4>
              <p>₹${product.price}</p>
            `;

            productList.appendChild(card);
          });
        })
        .catch(err => {
          status.innerText = 'Something went wrong!';
          console.error(err);
        });
    }


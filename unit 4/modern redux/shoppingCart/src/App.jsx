import React from 'react';
import Product from './components/Product.jsx';
import Cart from './components/Cart.jsx';

const products = [
  { id: 1, name: "Apple", price: 30 },
  { id: 2, name: "Banana", price: 10 },
  { id: 3, name: "Cherry", price: 40 },
];

function App() {
  return (
    <div>
      <h1>Products</h1>
      {products.map(prod => (
        <Product key={prod.id} product={prod} />
      ))}
      <Cart />
    </div>
  );
}

export default App;

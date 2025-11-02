import React from 'react';
import { useSelector } from 'react-redux';

function Cart() {
  const items = useSelector(state => state.cart.items);
  const total = useSelector(state => state.cart.total);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name} - ₹{item.price}</li>
        ))}
      </ul>
      <h3>Total: ₹{total}</h3>
    </div>
  );
}

export default Cart;
